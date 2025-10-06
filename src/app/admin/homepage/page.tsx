'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useHomepageSections } from "@/hooks/useFirebaseCMS";
import { firebaseCMS } from "@/lib/cms/firebase-cms";

export default function AdminHomepage() {
  const { data: sectionsData, loading } = useHomepageSections();
  const [editingSection, setEditingSection] = useState<string | null>(null);

  const handleSave = async (sectionId: string, updatedData: any) => {
    try {
      const section = sectionsData.find(s => s.id === sectionId);
      if (section) {
        const updatedSection = { ...section, ...updatedData };
        await firebaseCMS.saveHomepageSection(updatedSection);
        setEditingSection(null);
      }
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
    }
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

  const handleCancel = () => {
    setEditingSection(null);
  };

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
              <h1 className="text-2xl font-bold">Gestion de la page d'accueil</h1>
              <p className="text-gray-400">Modifiez les sections principales</p>
            </div>
          </div>
          <Link
            href="/"
            className="px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition-colors"
          >
            Voir le site
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Sections de la page d'accueil</h2>
            <p className="text-gray-400">
              Gérez le contenu de chaque section de votre page d'accueil.
            </p>
          </div>

          {/* Sections List */}
          <div className="space-y-6">
            {sectionsData.map((section, index) => (
              <div
                key={section.id}
                className="bg-gray-900/50 rounded-2xl border border-gray-800 overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Image Preview */}
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="text-sm font-medium text-cyan-400 tracking-wider">
                        {section.stats}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {editingSection === section.id ? (
                      <EditSectionForm
                        section={section}
                        onSave={(updatedData) => handleSave(section.id, updatedData)}
                        onCancel={handleCancel}
                      />
                    ) : (
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl font-bold">{section.title}</h3>
                          <button
                            onClick={() => setEditingSection(section.id)}
                            className="px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition-colors"
                          >
                            Modifier
                          </button>
                        </div>
                        
                        <h4 className="text-lg text-gray-300 mb-2">{section.subtitle}</h4>
                        <p className="text-gray-400 leading-relaxed mb-4">
                          {section.description}
                        </p>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>Gradient: {section.gradient}</span>
                          <span>•</span>
                          <span>Stats: {section.stats}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

function EditSectionForm({ section, onSave, onCancel }: {
  section: any;
  onSave: (data: any) => void;
  onCancel: () => void;
}) {
  const [formData, setFormData] = useState({
    title: section.title,
    subtitle: section.subtitle,
    description: section.description,
    stats: section.stats,
    gradient: section.gradient
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Titre</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Sous-titre</label>
        <input
          type="text"
          value={formData.subtitle}
          onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          rows={3}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none resize-none"
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Statistiques</label>
          <input
            type="text"
            value={formData.stats}
            onChange={(e) => setFormData({ ...formData, stats: e.target.value })}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Gradient</label>
          <select
            value={formData.gradient}
            onChange={(e) => setFormData({ ...formData, gradient: e.target.value })}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none"
          >
            <option value="from-cyan-400 to-blue-500">Cyan → Blue</option>
            <option value="from-blue-400 to-purple-500">Blue → Purple</option>
            <option value="from-purple-400 to-pink-500">Purple → Pink</option>
            <option value="from-pink-400 to-red-500">Pink → Red</option>
            <option value="from-green-400 to-teal-500">Green → Teal</option>
            <option value="from-orange-400 to-red-500">Orange → Red</option>
          </select>
        </div>
      </div>
      
      <div className="flex gap-4">
        <button
          type="submit"
          className="px-6 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
        >
          Sauvegarder
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2 bg-gray-600 rounded-lg hover:bg-gray-700 transition-colors"
        >
          Annuler
        </button>
      </div>
    </form>
  );
}
