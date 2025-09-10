'use client';

import { useState } from "react";
import Link from "next/link";
import { useAboutData } from "@/hooks/useCMSData";

export default function AdminAbout() {
  const { data, saveData, loading } = useAboutData();
  const [editingSection, setEditingSection] = useState<string | null>(null);

  const handleSave = (section: string, updatedData: any) => {
    const newData = { ...data, [section]: updatedData };
    saveData(newData);
    setEditingSection(null);
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
              <h1 className="text-2xl font-bold">Gestion de la page À propos</h1>
              <p className="text-gray-400">Modifiez vos informations personnelles</p>
            </div>
          </div>
          <Link
            href="/about"
            className="px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition-colors"
          >
            Voir le site
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Bio Section */}
          <div className="bg-gray-900/50 rounded-2xl border border-gray-800 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Biographie</h2>
              <button
                onClick={() => setEditingSection('bio')}
                className="px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition-colors"
              >
                Modifier
              </button>
            </div>
            
            {editingSection === 'bio' ? (
              <EditBioForm
                data={data.bio}
                onSave={(updatedData) => handleSave('bio', updatedData)}
                onCancel={() => setEditingSection(null)}
              />
            ) : (
              <div>
                <h3 className="text-lg font-bold mb-4">{data.bio.heading}</h3>
                <div className="space-y-4">
                  {data.bio.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-gray-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Formation Section */}
          <div className="bg-gray-900/50 rounded-2xl border border-gray-800 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Formation & Diplômes</h2>
              <button
                onClick={() => setEditingSection('formation')}
                className="px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition-colors"
              >
                Modifier
              </button>
            </div>
            
            {editingSection === 'formation' ? (
              <EditFormationForm
                data={data.formation}
                onSave={(updatedData) => handleSave('formation', updatedData)}
                onCancel={() => setEditingSection(null)}
              />
            ) : (
              <div className="grid md:grid-cols-3 gap-6">
                {data.formation.map((item, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-xl p-4">
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400 mb-2">{item.institution}</p>
                    <p className="text-sm text-gray-500">{item.year}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Compétences Section */}
          <div className="bg-gray-900/50 rounded-2xl border border-gray-800 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Compétences</h2>
              <button
                onClick={() => setEditingSection('competences')}
                className="px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition-colors"
              >
                Modifier
              </button>
            </div>
            
            {editingSection === 'competences' ? (
              <EditCompetencesForm
                data={data.competences}
                onSave={(updatedData) => handleSave('competences', updatedData)}
                onCancel={() => setEditingSection(null)}
              />
            ) : (
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold mb-4">Techniques</h3>
                  <div className="space-y-4">
                    {data.competences.techniques.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-2">
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full" 
                            style={{width: `${skill.level}%`}}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4">Spécialités</h3>
                  <div className="space-y-3">
                    {data.competences.specialites.map((specialty, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                        <span>{specialty}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Réseaux Section */}
          <div className="bg-gray-900/50 rounded-2xl border border-gray-800 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Réseaux Sociaux</h2>
              <button
                onClick={() => setEditingSection('reseaux')}
                className="px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition-colors"
              >
                Modifier
              </button>
            </div>
            
            {editingSection === 'reseaux' ? (
              <EditReseauxForm
                data={data.reseaux}
                onSave={(updatedData) => handleSave('reseaux', updatedData)}
                onCancel={() => setEditingSection(null)}
              />
            ) : (
              <div className="flex gap-4">
                {data.reseaux.map((reseau, index) => (
                  <a
                    key={index}
                    href={reseau.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border border-white/20 rounded-full text-sm font-medium hover:bg-white/5 transition-all duration-300"
                  >
                    {reseau.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}


function EditBioForm({ data, onSave, onCancel }: {
  data: any;
  onSave: (data: any) => void;
  onCancel: () => void;
}) {
  const [formData, setFormData] = useState(data);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Titre de la biographie</label>
        <input
          type="text"
          value={formData.heading}
          onChange={(e) => setFormData({ ...formData, heading: e.target.value })}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Paragraphes de la biographie</label>
        {formData.paragraphs.map((paragraph: string, index: number) => (
          <textarea
            key={index}
            value={paragraph}
            onChange={(e) => {
              const newParagraphs = [...formData.paragraphs];
              newParagraphs[index] = e.target.value;
              setFormData({ ...formData, paragraphs: newParagraphs });
            }}
            rows={3}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none resize-none mb-2"
          />
        ))}
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

function EditFormationForm({ data, onSave, onCancel }: {
  data: any[];
  onSave: (data: any[]) => void;
  onCancel: () => void;
}) {
  const [formData, setFormData] = useState(data);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const addFormation = () => {
    setFormData([...formData, { title: '', institution: '', year: '' }]);
  };

  const removeFormation = (index: number) => {
    setFormData(formData.filter((_, i) => i !== index));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {formData.map((item, index) => (
        <div key={index} className="grid md:grid-cols-3 gap-4 p-4 bg-gray-800/50 rounded-lg">
          <div>
            <label className="block text-sm font-medium mb-2">Titre</label>
            <input
              type="text"
              value={item.title}
              onChange={(e) => {
                const newData = [...formData];
                newData[index].title = e.target.value;
                setFormData(newData);
              }}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Institution</label>
            <input
              type="text"
              value={item.institution}
              onChange={(e) => {
                const newData = [...formData];
                newData[index].institution = e.target.value;
                setFormData(newData);
              }}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none"
            />
          </div>
          <div className="flex gap-2">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2">Année</label>
              <input
                type="text"
                value={item.year}
                onChange={(e) => {
                  const newData = [...formData];
                  newData[index].year = e.target.value;
                  setFormData(newData);
                }}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none"
              />
            </div>
            <button
              type="button"
              onClick={() => removeFormation(index)}
              className="px-3 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors mt-6"
            >
              ×
            </button>
          </div>
        </div>
      ))}
      
      <button
        type="button"
        onClick={addFormation}
        className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
      >
        + Ajouter une formation
      </button>
      
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

function EditCompetencesForm({ data, onSave, onCancel }: {
  data: any;
  onSave: (data: any) => void;
  onCancel: () => void;
}) {
  const [formData, setFormData] = useState(data);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-lg font-bold mb-4">Compétences techniques</h3>
        {formData.techniques.map((skill: any, index: number) => (
          <div key={index} className="grid md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              value={skill.name}
              onChange={(e) => {
                const newData = { ...formData };
                newData.techniques[index].name = e.target.value;
                setFormData(newData);
              }}
              className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none"
            />
            <div className="flex gap-2">
              <input
                type="number"
                min="0"
                max="100"
                value={skill.level}
                onChange={(e) => {
                  const newData = { ...formData };
                  newData.techniques[index].level = parseInt(e.target.value);
                  setFormData(newData);
                }}
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none"
              />
              <span className="px-3 py-2 bg-gray-700 rounded-lg">%</span>
            </div>
          </div>
        ))}
      </div>
      
      <div>
        <h3 className="text-lg font-bold mb-4">Spécialités</h3>
        {formData.specialites.map((specialty: string, index: number) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={specialty}
              onChange={(e) => {
                const newData = { ...formData };
                newData.specialites[index] = e.target.value;
                setFormData(newData);
              }}
              className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => {
                const newData = { ...formData };
                newData.specialites.splice(index, 1);
                setFormData(newData);
              }}
              className="px-3 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
            >
              ×
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => {
            const newData = { ...formData };
            newData.specialites.push('');
            setFormData(newData);
          }}
          className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
        >
          + Ajouter une spécialité
        </button>
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

function EditReseauxForm({ data, onSave, onCancel }: {
  data: any[];
  onSave: (data: any[]) => void;
  onCancel: () => void;
}) {
  const [formData, setFormData] = useState(data);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {formData.map((reseau, index) => (
        <div key={index} className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Nom du réseau</label>
            <input
              type="text"
              value={reseau.name}
              onChange={(e) => {
                const newData = [...formData];
                newData[index].name = e.target.value;
                setFormData(newData);
              }}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">URL</label>
            <input
              type="url"
              value={reseau.url}
              onChange={(e) => {
                const newData = [...formData];
                newData[index].url = e.target.value;
                setFormData(newData);
              }}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none"
            />
          </div>
        </div>
      ))}
      
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
