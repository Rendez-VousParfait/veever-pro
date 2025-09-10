'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useProjectsData } from "@/hooks/useCMSData";
import YouTubeVideo from "@/components/YouTubeVideo";

// Fonction utilitaire pour extraire l'ID YouTube d'une URL
function getYouTubeId(url: string): string | null {
  if (!url) return null;
  
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  
  return (match && match[2].length === 11) ? match[2] : null;
}

// Fonction pour générer l'URL d'embed YouTube
function getYouTubeEmbedUrl(url: string): string | null {
  const videoId = getYouTubeId(url);
  return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
}

const categories = [
  { id: 'all', name: 'Tous les projets' },
  { id: 'institutional', name: 'Institutionnel' },
  { id: 'shortfilm', name: 'Court-métrage' },
  { id: 'tvshow', name: 'Émission TV' },
  { id: 'animation', name: 'Animation' }
];

export default function AdminProjects() {
  const { data: projectsData, saveData, loading } = useProjectsData();
  const [editingProject, setEditingProject] = useState<number | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  const handleSave = (projectId: number, updatedData: any) => {
    const updatedProjects = projectsData.map(project => 
      project.id === projectId ? { ...project, ...updatedData } : project
    );
    saveData(updatedProjects);
    setEditingProject(null);
  };

  const handleAdd = (newProject: any) => {
    const id = Math.max(...projectsData.map(p => p.id)) + 1;
    const updatedProjects = [...projectsData, { ...newProject, id }];
    saveData(updatedProjects);
    setShowAddForm(false);
  };

  const handleDelete = (projectId: number) => {
    const updatedProjects = projectsData.filter(project => project.id !== projectId);
    saveData(updatedProjects);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050507] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050507] text-white">
      {/* Header */}
      <header className="border-b border-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/admin"
              className="px-4 py-2 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors"
            >
              ← Retour
            </Link>
            <div>
              <h1 className="text-2xl font-bold">Gestion des projets</h1>
              <p className="text-gray-400">Gérez votre portfolio de réalisations</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setShowAddForm(true)}
              className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
            >
              + Ajouter un projet
            </button>
            <Link
              href="/projects"
              className="px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition-colors"
            >
              Voir le site
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Filtrer par catégorie</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-cyan-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-900/50 rounded-2xl border border-gray-800 overflow-hidden"
              >
                <div className="relative aspect-[4/3]">
                  {project.youtubeUrl ? (
                    <YouTubeVideo
                      url={project.youtubeUrl}
                      title={project.title}
                      className="w-full h-full"
                    />
                  ) : (
                    <>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="text-xs font-medium text-white/60 mb-1">
                          {project.title}
                        </div>
                        <div className="text-lg font-bold text-white mb-1">
                          {project.subtitle}
                        </div>
                        <div className="text-xs text-white/80">
                          {project.year} • {project.description}
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <div className="p-4">
                  {editingProject === project.id ? (
                    <EditProjectForm
                      project={project}
                      onSave={(updatedData) => handleSave(project.id, updatedData)}
                      onCancel={() => setEditingProject(null)}
                    />
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-400 capitalize">
                            {project.category}
                          </span>
                          {project.youtubeUrl && getYouTubeEmbedUrl(project.youtubeUrl) && (
                            <span className="px-2 py-1 bg-red-600 text-xs rounded-full">
                              📹 Vidéo
                            </span>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => setEditingProject(project.id)}
                            className="px-3 py-1 bg-cyan-600 rounded text-xs hover:bg-cyan-700 transition-colors"
                          >
                            Modifier
                          </button>
                          <button
                            onClick={() => handleDelete(project.id)}
                            className="px-3 py-1 bg-red-600 rounded text-xs hover:bg-red-700 transition-colors"
                          >
                            Supprimer
                          </button>
                        </div>
                      </div>
                      <p className="text-sm text-gray-300 line-clamp-3">
                        {project.longDescription}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Add Project Modal */}
          {showAddForm && (
            <AddProjectForm
              onSave={handleAdd}
              onCancel={() => setShowAddForm(false)}
            />
          )}
        </div>
      </main>
    </div>
  );
}

function EditProjectForm({ project, onSave, onCancel }: {
  project: any;
  onSave: (data: any) => void;
  onCancel: () => void;
}) {
  const [formData, setFormData] = useState({
    title: project.title,
    subtitle: project.subtitle,
    year: project.year,
    description: project.description,
    category: project.category,
    longDescription: project.longDescription,
    youtubeUrl: project.youtubeUrl || ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid grid-cols-2 gap-2">
        <input
          type="text"
          placeholder="Titre"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="px-3 py-2 bg-gray-800 border border-gray-700 rounded text-sm focus:border-cyan-400 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Année"
          value={formData.year}
          onChange={(e) => setFormData({ ...formData, year: e.target.value })}
          className="px-3 py-2 bg-gray-800 border border-gray-700 rounded text-sm focus:border-cyan-400 focus:outline-none"
        />
      </div>
      
      <input
        type="text"
        placeholder="Sous-titre"
        value={formData.subtitle}
        onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-sm focus:border-cyan-400 focus:outline-none"
      />
      
      <div className="grid grid-cols-2 gap-2">
        <input
          type="text"
          placeholder="Description courte"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="px-3 py-2 bg-gray-800 border border-gray-700 rounded text-sm focus:border-cyan-400 focus:outline-none"
        />
        <select
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          className="px-3 py-2 bg-gray-800 border border-gray-700 rounded text-sm focus:border-cyan-400 focus:outline-none"
        >
          <option value="institutional">Institutionnel</option>
          <option value="shortfilm">Court-métrage</option>
          <option value="tvshow">Émission TV</option>
          <option value="animation">Animation</option>
        </select>
      </div>
      
      <textarea
        placeholder="Description longue"
        value={formData.longDescription}
        onChange={(e) => setFormData({ ...formData, longDescription: e.target.value })}
        rows={2}
        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-sm focus:border-cyan-400 focus:outline-none resize-none"
      />
      
      <input
        type="url"
        placeholder="URL YouTube (optionnel)"
        value={formData.youtubeUrl}
        onChange={(e) => setFormData({ ...formData, youtubeUrl: e.target.value })}
        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-sm focus:border-cyan-400 focus:outline-none"
      />
      
      <div className="flex gap-2">
        <button
          type="submit"
          className="px-3 py-1 bg-green-600 rounded text-xs hover:bg-green-700 transition-colors"
        >
          Sauvegarder
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-3 py-1 bg-gray-600 rounded text-xs hover:bg-gray-700 transition-colors"
        >
          Annuler
        </button>
      </div>
    </form>
  );
}

function AddProjectForm({ onSave, onCancel }: {
  onSave: (data: any) => void;
  onCancel: () => void;
}) {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    year: '2024',
    description: '',
    category: 'institutional',
    longDescription: '',
    image: '/images/sections/projects/default.jpg',
    youtubeUrl: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6">
      <div className="bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold">Ajouter un nouveau projet</h2>
            <button
              onClick={onCancel}
              className="text-gray-400 hover:text-white text-2xl"
            >
              ×
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Titre</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Année</label>
                <input
                  type="text"
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Sous-titre</label>
              <input
                type="text"
                value={formData.subtitle}
                onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none"
                required
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Description courte</label>
                <input
                  type="text"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Catégorie</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none"
                >
                  <option value="institutional">Institutionnel</option>
                  <option value="shortfilm">Court-métrage</option>
                  <option value="tvshow">Émission TV</option>
                  <option value="animation">Animation</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Description longue</label>
              <textarea
                value={formData.longDescription}
                onChange={(e) => setFormData({ ...formData, longDescription: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none resize-none"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">URL de l'image</label>
              <input
                type="text"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none"
                placeholder="/images/sections/projects/nom-image.jpg"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">URL YouTube (optionnel)</label>
              <input
                type="url"
                value={formData.youtubeUrl}
                onChange={(e) => setFormData({ ...formData, youtubeUrl: e.target.value })}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none"
                placeholder="https://www.youtube.com/watch?v=..."
              />
              <p className="text-xs text-gray-400 mt-1">
                Si une URL YouTube est fournie, la vidéo remplacera l'image dans l'affichage
              </p>
            </div>
            
            <div className="flex gap-4">
              <button
                type="submit"
                className="px-6 py-3 bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
              >
                Ajouter le projet
              </button>
              <button
                type="button"
                onClick={onCancel}
                className="px-6 py-3 bg-gray-600 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
