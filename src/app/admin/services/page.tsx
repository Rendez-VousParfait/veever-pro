'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useServices } from "@/hooks/useFirebaseCMS";
import { firebaseCMS } from "@/lib/cms/firebase-cms";
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

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "Analyse de vos besoins et définition des objectifs du projet"
  },
  {
    step: "02",
    title: "Conception",
    description: "Création des concepts sonores et validation de la direction artistique"
  },
  {
    step: "03",
    title: "Production",
    description: "Réalisation et enregistrement des éléments audio"
  },
  {
    step: "04",
    title: "Livraison",
    description: "Finalisation, mastering et livraison des fichiers finaux"
  }
];

export default function AdminServices() {
  const { data: services, loading: servicesLoading } = useServices();
  const [editingService, setEditingService] = useState<string | null>(null);
  const [editingProcess, setEditingProcess] = useState<number | null>(null);
  const [showAddService, setShowAddService] = useState(false);
  const [process, setProcess] = useState(processSteps);

  const handleSaveService = async (serviceId: string, updatedData: any) => {
    try {
      const service = services.find(s => s.id === serviceId);
      if (service) {
        const updatedService = { ...service, ...updatedData };
        await firebaseCMS.saveService(updatedService);
        setEditingService(null);
      }
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
    }
  };

  const handleAddService = async (newService: any) => {
    try {
      const id = Date.now().toString();
      const service = { ...newService, id, order: services.length + 1 };
      await firebaseCMS.saveService(service);
      setShowAddService(false);
    } catch (error) {
      console.error('Erreur lors de l\'ajout:', error);
    }
  };

  const handleDeleteService = async (serviceId: string) => {
    try {
      await firebaseCMS.deleteService(serviceId);
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
    }
  };

  const handleSaveProcess = (stepIndex: number, updatedData: any) => {
    // Pour l'instant, on garde le processus en local state
    // TODO: Intégrer avec le CMS si nécessaire
    setEditingProcess(null);
  };

  if (servicesLoading) {
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
              <h1 className="text-2xl font-bold">Gestion des services</h1>
              <p className="text-gray-400">Modifiez vos offres et tarifs</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setShowAddService(true)}
              className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
            >
              + Ajouter un service
            </button>
            <Link
              href="/services"
              className="px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition-colors"
            >
              Voir le site
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Services Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Services proposés</h2>
            <div className="space-y-6">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="bg-gray-900/50 rounded-2xl border border-gray-800 overflow-hidden"
                >
                  {/* Video/Image Section */}
                  <div className="relative aspect-[16/9]">
                    {service.youtubeUrl && getYouTubeEmbedUrl(service.youtubeUrl) ? (
                      <YouTubeVideo
                        url={service.youtubeUrl}
                        title={service.title}
                        className="w-full h-full"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <span className="text-2xl">🎵</span>
                          </div>
                          <p className="text-gray-400">Aucune vidéo d'illustration</p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    {editingService === service.id ? (
                      <EditServiceForm
                        service={service}
                        onSave={(updatedData) => handleSaveService(service.id, updatedData)}
                        onCancel={() => setEditingService(null)}
                      />
                    ) : (
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div>
                              <h3 className="text-xl font-bold">{service.title}</h3>
                              <p className="text-cyan-400">{service.subtitle}</p>
                            </div>
                            {service.youtubeUrl && getYouTubeEmbedUrl(service.youtubeUrl) && (
                              <span className="px-2 py-1 bg-red-600 text-xs rounded-full">
                                📹 Vidéo
                              </span>
                            )}
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={() => setEditingService(service.id)}
                              className="px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition-colors"
                            >
                              Modifier
                            </button>
                            <button
                              onClick={() => handleDeleteService(service.id)}
                              className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
                            >
                              Supprimer
                            </button>
                          </div>
                        </div>
                      
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="font-bold mb-2">Fonctionnalités :</h4>
                          <ul className="space-y-1">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="space-y-2">
                            <div>
                              <span className="text-gray-400 text-sm">Prix:</span>
                              <p className="font-bold">{service.price}</p>
                            </div>
                            <div>
                              <span className="text-gray-400 text-sm">Durée:</span>
                              <p className="font-bold">{service.duration}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Processus de travail</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 rounded-xl p-6 border border-gray-800"
                >
                  {editingProcess === index ? (
                    <EditProcessForm
                      step={step}
                      onSave={(updatedData) => handleSaveProcess(index, updatedData)}
                      onCancel={() => setEditingProcess(null)}
                    />
                  ) : (
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-white">{step.step}</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {step.description}
                      </p>
                      <button
                        onClick={() => setEditingProcess(index)}
                        className="px-3 py-1 bg-cyan-600 rounded text-xs hover:bg-cyan-700 transition-colors"
                      >
                        Modifier
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Add Service Modal */}
        {showAddService && (
          <AddServiceForm
            onSave={handleAddService}
            onCancel={() => setShowAddService(false)}
          />
        )}
      </main>
    </div>
  );
}

function EditServiceForm({ service, onSave, onCancel }: {
  service: any;
  onSave: (data: any) => void;
  onCancel: () => void;
}) {
  const [formData, setFormData] = useState(service);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const addFeature = () => {
    setFormData({
      ...formData,
      features: [...formData.features, '']
    });
  };

  const removeFeature = (index: number) => {
    setFormData({
      ...formData,
      features: formData.features.filter((_: any, i: number) => i !== index)
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
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
          <label className="block text-sm font-medium mb-2">Sous-titre</label>
          <input
            type="text"
            value={formData.subtitle}
            onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none"
            required
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          rows={3}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none resize-none"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Fonctionnalités</label>
        {formData.features.map((feature: string, index: number) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={feature}
              onChange={(e) => {
                const newFeatures = [...formData.features];
                newFeatures[index] = e.target.value;
                setFormData({ ...formData, features: newFeatures });
              }}
              className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => removeFeature(index)}
              className="px-3 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
            >
              ×
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addFeature}
          className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
        >
          + Ajouter une fonctionnalité
        </button>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Prix</label>
          <input
            type="text"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Durée</label>
          <input
            type="text"
            value={formData.duration}
            onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none"
            required
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">URL YouTube (optionnel)</label>
        <input
          type="url"
          value={formData.youtubeUrl || ''}
          onChange={(e) => setFormData({ ...formData, youtubeUrl: e.target.value })}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none"
          placeholder="https://www.youtube.com/watch?v=..."
        />
        <p className="text-xs text-gray-400 mt-1">
          Si une URL YouTube est fournie, la vidéo remplacera l'illustration par défaut
        </p>
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

function EditProcessForm({ step, onSave, onCancel }: {
  step: any;
  onSave: (data: any) => void;
  onCancel: () => void;
}) {
  const [formData, setFormData] = useState(step);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Numéro d'étape</label>
          <input
            type="text"
            value={formData.step}
            onChange={(e) => setFormData({ ...formData, step: e.target.value })}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none"
            required
          />
        </div>
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
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          rows={3}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none resize-none"
          required
        />
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

function AddServiceForm({ onSave, onCancel }: {
  onSave: (data: any) => void;
  onCancel: () => void;
}) {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    description: '',
    features: [''],
    price: '',
    duration: '',
    youtubeUrl: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const addFeature = () => {
    setFormData({
      ...formData,
      features: [...formData.features, '']
    });
  };

  const removeFeature = (index: number) => {
    setFormData({
      ...formData,
      features: formData.features.filter((_, i) => i !== index)
    });
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6">
      <div className="bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold">Ajouter un nouveau service</h2>
            <button
              onClick={onCancel}
              className="text-gray-400 hover:text-white text-2xl"
            >
              ×
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
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
                <label className="block text-sm font-medium mb-2">Sous-titre</label>
                <input
                  type="text"
                  value={formData.subtitle}
                  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none resize-none"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Fonctionnalités</label>
              {formData.features.map((feature, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={feature}
                    onChange={(e) => {
                      const newFeatures = [...formData.features];
                      newFeatures[index] = e.target.value;
                      setFormData({ ...formData, features: newFeatures });
                    }}
                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => removeFeature(index)}
                    className="px-3 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    ×
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addFeature}
                className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
              >
                + Ajouter une fonctionnalité
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Prix</label>
                <input
                  type="text"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Durée</label>
                <input
                  type="text"
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none"
                  required
                />
              </div>
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
                Si une URL YouTube est fournie, la vidéo remplacera l'illustration par défaut
              </p>
            </div>
            
            <div className="flex gap-4">
              <button
                type="submit"
                className="px-6 py-3 bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
              >
                Ajouter le service
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
