'use client';

import { useState } from "react";
import Link from "next/link";

const contactData = {
  title: "CONTACTEZ-MOI & DÉMARRONS",
  info: {
    email: "contact@valentinlevraud.com",
    phone: "+33 6 XX XX XX XX",
    location: "Paris, France",
    responseTime: "Réponse sous 24h",
    availability: "Lun-Ven, 9h-18h",
    remoteWork: "Travail à distance disponible"
  },
  faqs: [
    {
      question: "Quels sont vos délais de livraison ?",
      answer: "Les délais varient selon la complexité du projet. Pour un jingle simple : 1-2 semaines. Pour une identité sonore complète : 3-4 semaines. Je m'engage toujours à respecter les échéances convenues."
    },
    {
      question: "Travaillez-vous à distance ?",
      answer: "Oui, je travaille principalement à distance et peux collaborer avec des clients du monde entier. Les réunions se font par visioconférence et les fichiers sont partagés via des plateformes sécurisées."
    },
    {
      question: "Quels formats de fichiers livrez-vous ?",
      answer: "Je livre dans tous les formats standards : WAV (24-bit/48kHz), MP3 (320kbps), AIFF, et formats spécifiques selon vos besoins (AAC, OGG, etc.)."
    },
    {
      question: "Proposez-vous des révisions ?",
      answer: "Oui, chaque projet inclut 2 révisions gratuites. Au-delà, des frais supplémentaires peuvent s'appliquer selon la complexité des modifications demandées."
    }
  ],
  formFields: {
    name: { label: "Nom complet", required: true, type: "text" },
    email: { label: "Email", required: true, type: "email" },
    company: { label: "Entreprise", required: false, type: "text" },
    projectType: { 
      label: "Type de projet", 
      required: true, 
      type: "select",
      options: [
        { value: "", label: "Sélectionnez..." },
        { value: "whole-package", label: "Whole Package" },
        { value: "audio-reworking", label: "Audio Reworking" },
        { value: "sound-design", label: "Sound Design" },
        { value: "other", label: "Autre" }
      ]
    },
    budget: { 
      label: "Budget estimé", 
      required: false, 
      type: "select",
      options: [
        { value: "", label: "Sélectionnez..." },
        { value: "500-1000", label: "500€ - 1000€" },
        { value: "1000-3000", label: "1000€ - 3000€" },
        { value: "3000-5000", label: "3000€ - 5000€" },
        { value: "5000+", label: "5000€+" }
      ]
    },
    timeline: { 
      label: "Délai souhaité", 
      required: false, 
      type: "select",
      options: [
        { value: "", label: "Sélectionnez..." },
        { value: "urgent", label: "Urgent (1-2 semaines)" },
        { value: "normal", label: "Normal (3-4 semaines)" },
        { value: "flexible", label: "Flexible (1-2 mois)" }
      ]
    },
    message: { label: "Description du projet", required: true, type: "textarea" }
  }
};

export default function AdminContact() {
  const [data, setData] = useState(contactData);
  const [editingSection, setEditingSection] = useState<string | null>(null);

  const handleSave = (section: string, updatedData: any) => {
    setData(prev => ({
      ...prev,
      [section]: updatedData
    }));
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
              <h1 className="text-2xl font-bold">Gestion de la page Contact</h1>
              <p className="text-gray-400">Modifiez les informations de contact</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition-colors"
          >
            Voir le site
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Contact Info Section */}
          <div className="bg-gray-900/50 rounded-2xl border border-gray-800 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Informations de contact</h2>
              <button
                onClick={() => setEditingSection('info')}
                className="px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition-colors"
              >
                Modifier
              </button>
            </div>
            
            {editingSection === 'info' ? (
              <EditContactInfoForm
                data={data.info}
                onSave={(updatedData) => handleSave('info', updatedData)}
                onCancel={() => setEditingSection(null)}
              />
            ) : (
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Email</h3>
                    <p className="text-gray-300">{data.info.email}</p>
                    <p className="text-sm text-gray-500">{data.info.responseTime}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📱</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Téléphone</h3>
                    <p className="text-gray-300">{data.info.phone}</p>
                    <p className="text-sm text-gray-500">{data.info.availability}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Localisation</h3>
                    <p className="text-gray-300">{data.info.location}</p>
                    <p className="text-sm text-gray-500">{data.info.remoteWork}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* FAQ Section */}
          <div className="bg-gray-900/50 rounded-2xl border border-gray-800 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Questions fréquentes</h2>
              <button
                onClick={() => setEditingSection('faqs')}
                className="px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition-colors"
              >
                Modifier
              </button>
            </div>
            
            {editingSection === 'faqs' ? (
              <EditFAQForm
                data={data.faqs}
                onSave={(updatedData) => handleSave('faqs', updatedData)}
                onCancel={() => setEditingSection(null)}
              />
            ) : (
              <div className="space-y-4">
                {data.faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-xl p-4">
                    <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Form Fields Section */}
          <div className="bg-gray-900/50 rounded-2xl border border-gray-800 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Champs du formulaire</h2>
              <button
                onClick={() => setEditingSection('formFields')}
                className="px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition-colors"
              >
                Modifier
              </button>
            </div>
            
            {editingSection === 'formFields' ? (
              <EditFormFieldsForm
                data={data.formFields}
                onSave={(updatedData) => handleSave('formFields', updatedData)}
                onCancel={() => setEditingSection(null)}
              />
            ) : (
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(data.formFields).map(([key, field]) => (
                  <div key={key} className="bg-gray-800/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold">{field.label}</h3>
                      <div className="flex gap-2">
                        <span className={`px-2 py-1 rounded text-xs ${
                          field.required ? 'bg-red-600' : 'bg-gray-600'
                        }`}>
                          {field.required ? 'Requis' : 'Optionnel'}
                        </span>
                        <span className="px-2 py-1 bg-cyan-600 rounded text-xs">
                          {field.type}
                        </span>
                      </div>
                    </div>
                    {field.options && (
                      <div className="text-sm text-gray-400">
                        {field.options.length} options disponibles
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

function EditContactInfoForm({ data, onSave, onCancel }: {
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
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Téléphone</label>
          <input
            type="text"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none"
            required
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Localisation</label>
        <input
          type="text"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none"
          required
        />
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Temps de réponse</label>
          <input
            type="text"
            value={formData.responseTime}
            onChange={(e) => setFormData({ ...formData, responseTime: e.target.value })}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Disponibilité</label>
          <input
            type="text"
            value={formData.availability}
            onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Note sur le travail à distance</label>
        <input
          type="text"
          value={formData.remoteWork}
          onChange={(e) => setFormData({ ...formData, remoteWork: e.target.value })}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none"
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

function EditFAQForm({ data, onSave, onCancel }: {
  data: any[];
  onSave: (data: any[]) => void;
  onCancel: () => void;
}) {
  const [formData, setFormData] = useState(data);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const addFAQ = () => {
    setFormData([...formData, { question: '', answer: '' }]);
  };

  const removeFAQ = (index: number) => {
    setFormData(formData.filter((_, i) => i !== index));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {formData.map((faq, index) => (
        <div key={index} className="bg-gray-800/50 rounded-lg p-4">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-bold">FAQ #{index + 1}</h3>
            <button
              type="button"
              onClick={() => removeFAQ(index)}
              className="px-3 py-1 bg-red-600 rounded text-xs hover:bg-red-700 transition-colors"
            >
              Supprimer
            </button>
          </div>
          
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium mb-2">Question</label>
              <input
                type="text"
                value={faq.question}
                onChange={(e) => {
                  const newData = [...formData];
                  newData[index].question = e.target.value;
                  setFormData(newData);
                }}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Réponse</label>
              <textarea
                value={faq.answer}
                onChange={(e) => {
                  const newData = [...formData];
                  newData[index].answer = e.target.value;
                  setFormData(newData);
                }}
                rows={3}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none resize-none"
                required
              />
            </div>
          </div>
        </div>
      ))}
      
      <button
        type="button"
        onClick={addFAQ}
        className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
      >
        + Ajouter une FAQ
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

function EditFormFieldsForm({ data, onSave, onCancel }: {
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
      {Object.entries(formData).map(([key, field]: [string, any]) => (
        <div key={key} className="bg-gray-800/50 rounded-lg p-4">
          <h3 className="font-bold mb-4">{field.label}</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Label</label>
              <input
                type="text"
                value={field.label}
                onChange={(e) => {
                  const newData = { ...formData };
                  newData[key].label = e.target.value;
                  setFormData(newData);
                }}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Type</label>
              <select
                value={field.type}
                onChange={(e) => {
                  const newData = { ...formData };
                  newData[key].type = e.target.value;
                  setFormData(newData);
                }}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none"
              >
                <option value="text">Texte</option>
                <option value="email">Email</option>
                <option value="textarea">Zone de texte</option>
                <option value="select">Sélection</option>
              </select>
            </div>
          </div>
          
          <div className="mt-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={field.required}
                onChange={(e) => {
                  const newData = { ...formData };
                  newData[key].required = e.target.checked;
                  setFormData(newData);
                }}
                className="rounded"
              />
              <span className="text-sm">Champ requis</span>
            </label>
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
