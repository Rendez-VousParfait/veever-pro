'use client';

import { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  CheckCircle, 
  UserPlus, 
  PartyPopper, 
  Users2, 
  Leaf,
  ArrowRight,
  Mail,
  Phone,
  Building,
  Calendar,
  Euro,
  Target,
  Utensils
} from "lucide-react";
import Link from "next/link";

export default function CreerMonProjet() {
  const [currentStep, setCurrentStep] = useState(1);
  const [projectData, setProjectData] = useState({
    teamSize: '',
    budget: 1000,
    timeframe: '',
    objectives: [],
    contact: { name: '', email: '', company: '', phone: '', message: '', position: '' }
  });

  const totalSteps = 2;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      // Validation étape 1
      if (currentStep === 1) {
        if (!projectData.teamSize || !projectData.timeframe || !projectData.objectives || projectData.objectives.length === 0) {
          alert('Veuillez remplir tous les champs obligatoires de cette étape.');
          return;
        }
      }
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Validation étape 2 - champs obligatoires
    if (!projectData.contact.name || !projectData.contact.email || !projectData.contact.company || !projectData.contact.position) {
      alert('Veuillez remplir tous les champs obligatoires (marqués avec *).');
      return;
    }
    
    console.log('Projet créé:', projectData);
    // Ici vous pouvez ajouter la logique d'envoi du devis
    alert('Votre demande a été envoyée ! Veever PRO vous contactera sous 24h.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5E6E0] to-[#FAF0ED]">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-[#F74AA1]/20 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <ArrowLeft className="w-5 h-5 text-[#F74AA1]" />
              <span className="text-lg font-semibold text-[#1a1a1a]">Retour à l'accueil</span>
            </Link>
            <div className="text-center">
              <h1 className="text-xl font-bold text-[#1a1a1a]">Créer mon projet</h1>
              <p className="text-sm text-[#666666]">Étape {currentStep} sur {totalSteps}</p>
            </div>
            <div className="w-24"></div> {/* Spacer pour centrer */}
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white/50 backdrop-blur-sm border-b border-[#F74AA1]/20">
        <div className="container mx-auto px-6 py-4">
          <div className="w-full bg-[#F74AA1]/20 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-[#F74AA1] to-[#F59E3F] h-2 rounded-full transition-all duration-500"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Step 1: Project Configuration */}
          {currentStep === 1 && (
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-[#F74AA1]/20">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">Créons votre événement sur-mesure</h2>
                <p className="text-lg text-[#666666]">Quelques questions pour comprendre vos besoins et vous proposer la solution parfaite</p>
              </div>
              
              <div className="space-y-8">
                {/* Taille équipe */}
                <div>
                  <label className="block text-xl font-bold text-[#1a1a1a] mb-4 flex items-center gap-2">
                    <Users2 className="w-6 h-6 text-[#F74AA1]" />
                    Taille de votre équipe <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { id: '5-15', label: '5-15', icon: '👥', desc: 'Petite équipe' },
                      { id: '16-30', label: '16-30', icon: '🏢', desc: 'Équipe moyenne' },
                      { id: '30+', label: '30+', icon: '🏭', desc: 'Grande équipe' }
                    ].map((size) => (
                      <button
                        key={size.id}
                        onClick={() => setProjectData({...projectData, teamSize: size.id})}
                        className={`p-6 rounded-2xl border-2 transition-all duration-300 text-center group ${
                          projectData.teamSize === size.id
                            ? 'border-[#F74AA1] bg-[#F74AA1]/10 shadow-lg scale-105'
                            : 'border-[#F74AA1]/20 bg-white/50 hover:border-[#F74AA1]/40 hover:scale-105'
                        }`}
                      >
                        <div className="text-4xl mb-3">{size.icon}</div>
                        <div className="font-bold text-[#1a1a1a] text-xl">{size.label}</div>
                        <div className="text-sm text-[#666666]">{size.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-xl font-bold text-[#1a1a1a] mb-4 flex items-center gap-2">
                    <Euro className="w-6 h-6 text-[#F74AA1]" />
                    Budget global de l'événement
                  </label>
                  <div className="bg-gradient-to-r from-[#F74AA1]/5 to-[#F59E3F]/5 rounded-2xl p-6 border border-[#F74AA1]/20">
                    <div className="text-center mb-6">
                      <div className="text-5xl font-bold text-[#F74AA1] mb-2">{projectData.budget}€</div>
                      <div className="text-lg text-[#666666]">budget total</div>
                    </div>
                    <input 
                      type="range" 
                      min="500" 
                      max="10000" 
                      step="100"
                      value={projectData.budget}
                      onChange={(e) => setProjectData({...projectData, budget: parseInt(e.target.value)})}
                      className="w-full h-3 bg-[#F74AA1]/20 rounded-full appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-[#666666] mt-4">
                      <span>500€ - Économique</span>
                      <span>10 000€ - Premium</span>
                    </div>
                  </div>
                </div>

                {/* Objectifs RH */}
                <div>
                  <label className="block text-xl font-bold text-[#1a1a1a] mb-4 flex items-center gap-2">
                    <Target className="w-6 h-6 text-[#F74AA1]" />
                    Quels sont les objectifs de l'événement ? <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      { id: 'cohesion', label: 'Renforcer la cohésion', icon: '🤝', desc: 'Créer des liens' },
                      { id: 'integration', label: 'Faciliter l\'intégration', icon: '👥', desc: 'Nouveaux collaborateurs' },
                      { id: 'culture', label: 'Faire vivre la culture', icon: '💎', desc: 'Valeurs d\'entreprise' },
                      { id: 'bien-etre', label: 'Améliorer le bien-être', icon: '🌱', desc: 'QVCT' },
                      { id: 'motivation', label: 'Booster la motivation', icon: '🚀', desc: 'Équipes performantes' },
                      { id: 'communication', label: 'Améliorer la communication', icon: '💬', desc: 'Collaboration' }
                    ].map((objective) => (
                      <button
                        key={objective.id}
                        onClick={() => {
                          const current = projectData.objectives || [];
                          const updated = current.includes(objective.id) 
                            ? current.filter(id => id !== objective.id)
                            : [...current, objective.id];
                          setProjectData({...projectData, objectives: updated});
                        }}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 text-center ${
                          (projectData.objectives || []).includes(objective.id)
                            ? 'border-[#F74AA1] bg-[#F74AA1]/10 shadow-lg scale-105'
                            : 'border-[#F74AA1]/20 bg-white/50 hover:border-[#F74AA1]/40 hover:scale-105'
                        }`}
                      >
                        <div className="text-2xl mb-2">{objective.icon}</div>
                        <div className="font-semibold text-[#1a1a1a] text-sm">{objective.label}</div>
                        <div className="text-xs text-[#666666]">{objective.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Timing */}
                <div>
                  <label className="block text-xl font-bold text-[#1a1a1a] mb-4 flex items-center gap-2">
                    <Calendar className="w-6 h-6 text-[#F74AA1]" />
                    Quand souhaitez-vous organiser ? <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { id: 'urgent', label: 'Ce mois-ci', icon: '⚡', desc: 'Urgent' },
                      { id: 'planifie', label: 'Dans 2-3 mois', icon: '📅', desc: 'Planifié' },
                      { id: 'long-terme', label: 'Dans 6 mois', icon: '🗓️', desc: 'Long terme' },
                      { id: 'annuel', label: 'Programme annuel', icon: '🔄', desc: 'Récurrent' }
                    ].map((timeframe) => (
                      <button
                        key={timeframe.id}
                        onClick={() => setProjectData({...projectData, timeframe: timeframe.id})}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 text-center ${
                          projectData.timeframe === timeframe.id
                            ? 'border-[#F74AA1] bg-[#F74AA1]/10 shadow-lg scale-105'
                            : 'border-[#F74AA1]/20 bg-white/50 hover:border-[#F74AA1]/40 hover:scale-105'
                        }`}
                      >
                        <div className="text-2xl mb-2">{timeframe.icon}</div>
                        <div className="font-semibold text-[#1a1a1a] text-sm">{timeframe.label}</div>
                        <div className="text-xs text-[#666666]">{timeframe.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Contact & Devis */}
          {currentStep === 2 && (
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-[#F74AA1]/20">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">Finalisons votre demande</h2>
                <p className="text-lg text-[#666666]">Vos coordonnées pour recevoir votre proposition personnalisée</p>
              </div>
              
              {/* Récapitulatif du projet */}
              <div className="bg-gradient-to-r from-[#F74AA1]/5 to-[#F59E3F]/5 rounded-2xl p-6 border border-[#F74AA1]/20 mb-8">
                <h3 className="text-xl font-bold text-[#F74AA1] mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6" />
                  Récapitulatif de votre projet
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>Équipe :</strong> {
                      projectData.teamSize === '5-15' ? '5-15 personnes' :
                      projectData.teamSize === '16-30' ? '16-30 personnes' :
                      projectData.teamSize === '30+' ? '30+ personnes' : 'Non sélectionné'
                    }</p>
                    <p><strong>Budget :</strong> {projectData.budget}€ total</p>
                    <p><strong>Timing :</strong> {
                      projectData.timeframe === 'urgent' ? 'Ce mois-ci' :
                      projectData.timeframe === 'planifie' ? 'Dans 2-3 mois' :
                      projectData.timeframe === 'long-terme' ? 'Dans 6 mois' :
                      projectData.timeframe === 'annuel' ? 'Programme annuel' : 'Non sélectionné'
                    }</p>
                  </div>
                  <div>
                    <p><strong>Objectifs de l'événement :</strong> {
                      projectData.objectives && projectData.objectives.length > 0 
                        ? projectData.objectives.map(obj => {
                            const labels = {
                              'cohesion': 'Cohésion',
                              'integration': 'Intégration',
                              'culture': 'Culture',
                              'bien-etre': 'Bien-être',
                              'motivation': 'Motivation',
                              'communication': 'Communication'
                            };
                            return labels[obj] || obj;
                          }).join(', ')
                        : 'Non spécifiés'
                    }</p>
                  </div>
                </div>
              </div>

              {/* Formulaire de contact */}
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lg font-semibold text-[#1a1a1a] mb-2 flex items-center gap-2">
                      <UserPlus className="w-5 h-5 text-[#F74AA1]" />
                      Nom complet *
                    </label>
                    <input 
                      type="text" 
                      value={projectData.contact.name}
                      onChange={(e) => setProjectData({
                        ...projectData, 
                        contact: {...projectData.contact, name: e.target.value}
                      })}
                      className="w-full px-4 py-3 bg-white/80 border border-[#F74AA1]/30 rounded-xl text-[#1a1a1a] placeholder-[#666666] focus:border-[#F74AA1] focus:outline-none focus:ring-2 focus:ring-[#F74AA1]/20"
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-semibold text-[#1a1a1a] mb-2 flex items-center gap-2">
                      <Building className="w-5 h-5 text-[#F74AA1]" />
                      Poste *
                    </label>
                    <input 
                      type="text" 
                      value={projectData.contact.position}
                      onChange={(e) => setProjectData({
                        ...projectData, 
                        contact: {...projectData.contact, position: e.target.value}
                      })}
                      className="w-full px-4 py-3 bg-white/80 border border-[#F74AA1]/30 rounded-xl text-[#1a1a1a] placeholder-[#666666] focus:border-[#F74AA1] focus:outline-none focus:ring-2 focus:ring-[#F74AA1]/20"
                      placeholder="Votre poste"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lg font-semibold text-[#1a1a1a] mb-2 flex items-center gap-2">
                      <Mail className="w-5 h-5 text-[#F74AA1]" />
                      Email professionnel *
                    </label>
                    <input 
                      type="email" 
                      value={projectData.contact.email}
                      onChange={(e) => setProjectData({
                        ...projectData, 
                        contact: {...projectData.contact, email: e.target.value}
                      })}
                      className="w-full px-4 py-3 bg-white/80 border border-[#F74AA1]/30 rounded-xl text-[#1a1a1a] placeholder-[#666666] focus:border-[#F74AA1] focus:outline-none focus:ring-2 focus:ring-[#F74AA1]/20"
                      placeholder="votre@entreprise.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-semibold text-[#1a1a1a] mb-2 flex items-center gap-2">
                      <Phone className="w-5 h-5 text-[#F74AA1]" />
                      Téléphone
                    </label>
                    <input 
                      type="tel" 
                      value={projectData.contact.phone}
                      onChange={(e) => setProjectData({
                        ...projectData, 
                        contact: {...projectData.contact, phone: e.target.value}
                      })}
                      className="w-full px-4 py-3 bg-white/80 border border-[#F74AA1]/30 rounded-xl text-[#1a1a1a] placeholder-[#666666] focus:border-[#F74AA1] focus:outline-none focus:ring-2 focus:ring-[#F74AA1]/20"
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-lg font-semibold text-[#1a1a1a] mb-2 flex items-center gap-2">
                    <Building className="w-5 h-5 text-[#F74AA1]" />
                    Entreprise *
                  </label>
                  <input 
                    type="text" 
                    value={projectData.contact.company}
                    onChange={(e) => setProjectData({
                      ...projectData, 
                      contact: {...projectData.contact, company: e.target.value}
                    })}
                    className="w-full px-4 py-3 bg-white/80 border border-[#F74AA1]/30 rounded-xl text-[#1a1a1a] placeholder-[#666666] focus:border-[#F74AA1] focus:outline-none focus:ring-2 focus:ring-[#F74AA1]/20"
                    placeholder="Nom de votre entreprise"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-[#1a1a1a] mb-2">Message (optionnel)</label>
                  <textarea 
                    value={projectData.contact.message}
                    onChange={(e) => setProjectData({
                      ...projectData, 
                      contact: {...projectData.contact, message: e.target.value}
                    })}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/80 border border-[#F74AA1]/30 rounded-xl text-[#1a1a1a] placeholder-[#666666] focus:border-[#F74AA1] focus:outline-none focus:ring-2 focus:ring-[#F74AA1]/20"
                    placeholder="Décrivez vos besoins spécifiques ou contraintes particulières..."
                  />
                </div>
              </div>

              {/* Promesse de valeur */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200 mt-8">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">✅</div>
                  <div>
                    <h4 className="text-lg font-bold text-green-700 mb-2">Engagement Veever PRO</h4>
                    <p className="text-green-600 mb-3">
                      Réponse personnalisée sous 24h • Proposition sur-mesure • Coordination unique • Zéro stress pour vous
                    </p>
                    <div className="text-sm text-green-600">
                      <p>• Devis détaillé avec planning personnalisé</p>
                      <p>• Sélection de prestataires locaux authentiques</p>
                      <p>• Suivi complet jusqu'à la réalisation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            {currentStep > 1 ? (
              <button 
                onClick={handlePrevious}
                className="flex items-center gap-2 px-6 py-3 bg-white/80 border border-[#F74AA1]/30 rounded-xl text-[#F74AA1] hover:bg-[#F74AA1]/10 transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                Précédent
              </button>
            ) : (
              <div></div>
            )}
            
            {currentStep < totalSteps ? (
              <button 
                onClick={handleNext}
                className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#F74AA1] to-[#F59E3F] text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Suivant
                <ArrowRight className="w-5 h-5" />
              </button>
            ) : (
              <button 
                onClick={handleSubmit}
                className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#F74AA1] to-[#F59E3F] text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Créer mon projet
                <CheckCircle className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
