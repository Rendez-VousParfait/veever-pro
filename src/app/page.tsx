"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Clock, Calendar, Users, MapPin, CheckCircle, Star, 
  ArrowRight, Play, Shield, Leaf, Heart, Award,
  MessageSquare, DollarSign, Zap, Globe, Target,
  Mail, Phone, ChevronDown
} from "lucide-react";
import GradientTitle from "@/components/ui/gradient-title";
import ModernCard from "@/components/ui/modern-card";
import MagicButton from "@/components/ui/magic-button";

export default function VeeverLanding() {
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    participants: "",
    message: ""
  });

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // GTM tracking ready
    console.log('Form submitted:', formData);
    alert('Merci ! Nous vous recontacterons rapidement.');
  };

  return (
    <div className="min-h-screen text-warm-dark">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 p-6">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <motion.div 
              className="text-2xl font-bold veever-text-gradient"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              Veever
            </motion.div>
            <motion.button
              onClick={scrollToContact}
              className="px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-warm-dark hover:bg-white/30 transition-all duration-300"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              Contact
            </motion.button>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Réinventez vos{" "}
              <span className="veever-text-gradient">team buildings</span>
              <br />à Bordeaux
            </h1>
            <p className="text-xl md:text-2xl text-warm-medium mb-12 max-w-4xl mx-auto leading-relaxed">
              Veever, la solution digitale pour créer des moments de cohésion authentiques, 
              réservables en 3 clics.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <MagicButton onClick={scrollToContact} size="lg" className="veever-gradient text-white px-8 py-4 text-lg">
              Essayer gratuitement
              <ArrowRight className="ml-2 w-5 h-5" />
            </MagicButton>
            <button className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-warm-dark hover:bg-white/30 transition-all duration-300 text-lg">
              <Play className="inline mr-2 w-5 h-5" />
              Voir la démo
            </button>
          </motion.div>

          {/* Bordeaux Silhouette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative mx-auto w-full max-w-4xl h-64 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-warm-medium/20 to-transparent rounded-2xl">
              <div className="flex items-end justify-center h-full space-x-2 p-8">
                {/* Silhouette simplifiée de Bordeaux */}
                <div className="w-8 h-32 bg-warm-medium/40 rounded-t-lg"></div>
                <div className="w-4 h-24 bg-warm-medium/30 rounded-t-lg"></div>
                <div className="w-12 h-40 bg-warm-medium/50 rounded-t-lg"></div>
                <div className="w-6 h-28 bg-warm-medium/35 rounded-t-lg"></div>
                <div className="w-10 h-36 bg-warm-medium/45 rounded-t-lg"></div>
                <div className="w-8 h-30 bg-warm-medium/40 rounded-t-lg"></div>
                <div className="w-14 h-44 bg-warm-medium/55 rounded-t-lg"></div>
                <div className="w-6 h-26 bg-warm-medium/35 rounded-t-lg"></div>
                <div className="w-4 h-20 bg-warm-medium/30 rounded-t-lg"></div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-warm-medium" />
        </motion.div>
      </section>

      {/* Problématiques Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-warm-dark mb-6">
              Les défis de l'organisation actuelle
            </h2>
            <p className="text-xl text-warm-medium max-w-3xl mx-auto">
              Pourquoi les team buildings traditionnels ne répondent plus aux besoins des entreprises modernes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Organisation lourde et chronophage",
                description: "Semaines de recherche, multiples devis, coordination complexe entre prestataires."
              },
              {
                icon: Users,
                title: "Offres standardisées, manque d'authenticité",
                description: "Packages génériques, expériences impersonnelles qui ne créent pas de vraie cohésion."
              },
              {
                icon: DollarSign,
                title: "Budgets élevés, peu de flexibilité",
                description: "Coûts cachés, minimums requis, annulations compliquées et pénalisantes."
              }
            ].map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <ModernCard className="h-full text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <problem.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-warm-dark mb-4">{problem.title}</h3>
                  <p className="text-warm-medium leading-relaxed">{problem.description}</p>
                </ModernCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Veever Section */}
      <section className="py-20 px-6 bg-white/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-warm-dark mb-6">
              Ce que <span className="veever-text-gradient">Veever</span> change pour vous
            </h2>
            <p className="text-xl text-warm-medium max-w-3xl mx-auto">
              Une approche révolutionnaire qui simplifie tout en garantissant l'authenticité
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Plateforme digitale instantanée",
                description: "Réservation d'un pack (restaurant + activité) en 3 clics. Confirmation immédiate, paiement unique.",
                highlight: "3 clics seulement"
              },
              {
                icon: Heart,
                title: "Authenticité & impact local",
                description: "100% prestataires bordelais sélectionnés. Expériences exclusives créées avec nos partenaires locaux.",
                highlight: "100% local"
              },
              {
                icon: Shield,
                title: "Flexibilité & simplicité",
                description: "Petits groupes (4-20 personnes), annulation facile jusqu'à 48h, une seule facturation.",
                highlight: "4-20 personnes"
              }
            ].map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <ModernCard className="h-full text-center border-2 border-transparent hover:border-orange-200 transition-all duration-300">
                  <div className="veever-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
                    {solution.highlight}
                  </div>
                  <h3 className="text-xl font-bold text-warm-dark mb-4">{solution.title}</h3>
                  <p className="text-warm-medium leading-relaxed">{solution.description}</p>
                </ModernCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparatif Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-warm-dark mb-6">
              Veever vs Agences classiques
            </h2>
            <p className="text-xl text-warm-medium max-w-3xl mx-auto">
              Découvrez pourquoi choisir Veever fait toute la différence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ModernCard className="border-2 border-green-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold veever-text-gradient mb-2">Avec Veever</h3>
              </div>
              <div className="space-y-4">
                {[
                  "Réservation digitale en 3 clics",
                  "Formats petits groupes (4-20 pers.)",
                  "RSE à impact réel sur l'économie locale",
                  "Confirmation instantanée",
                  "Annulation flexible (48h)",
                  "Un seul interlocuteur, une facturation"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-warm-dark">{item}</span>
                  </div>
                ))}
              </div>
            </ModernCard>

            <ModernCard className="border-2 border-red-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-warm-dark mb-2">Agences classiques</h3>
              </div>
              <div className="space-y-4">
                {[
                  "Devis manuels, semaines d'attente",
                  "Grands événements uniquement (50+ pers.)",
                  "Greenwashing ponctuel sans impact",
                  "Planification longue et complexe",
                  "Conditions d'annulation strictes",
                  "Multiples prestataires à coordonner"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-5 h-5 border-2 border-red-400 rounded mr-3 flex-shrink-0"></div>
                    <span className="text-warm-medium">{item}</span>
                  </div>
                ))}
              </div>
            </ModernCard>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={scrollToContact}
              className="px-8 py-4 bg-white/30 backdrop-blur-sm border border-white/50 rounded-xl text-warm-dark hover:bg-white/40 transition-all duration-300 text-lg font-medium"
            >
              Choisir la simplicité avec Veever
              <ArrowRight className="inline ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Fonctionnement Section */}
      <section className="py-20 px-6 bg-white/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-warm-dark mb-6">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-warm-medium max-w-3xl mx-auto">
              Un processus en 3 étapes pour organiser votre team building parfait
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Choisissez la date",
                description: "Sélectionnez vos dates préférées directement sur notre plateforme. Disponibilités en temps réel."
              },
              {
                step: "2", 
                title: "Sélectionnez votre pack",
                description: "Découvrez nos itinéraires restaurant + activité créés spécialement pour les petits groupes."
              },
              {
                step: "3",
                title: "Profitez, on s'occupe du reste",
                description: "Confirmation instantanée, coordination automatique. Vous n'avez plus qu'à profiter de l'expérience."
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <ModernCard className="h-full text-center relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="veever-gradient w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {step.step}
                    </div>
                  </div>
                  <div className="pt-8">
                    <h3 className="text-xl font-bold text-warm-dark mb-4">{step.title}</h3>
                    <p className="text-warm-medium leading-relaxed">{step.description}</p>
                  </div>
                </ModernCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-warm-dark mb-6">
              Ils nous font confiance
            </h2>
            <div className="flex justify-center items-center space-x-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold veever-text-gradient">30+</div>
                <div className="text-warm-medium">Prestataires partenaires</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold veever-text-gradient">95%</div>
                <div className="text-warm-medium">Satisfaction client</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ModernCard>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <div className="font-bold text-warm-dark">Marie Dubois</div>
                  <div className="text-warm-medium text-sm">RH Manager, TechCorp</div>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-warm-medium leading-relaxed">
                "Enfin une solution qui nous permet d'organiser des team buildings authentiques 
                sans passer des semaines en coordination. L'équipe a adoré !"
              </p>
            </ModernCard>

            <ModernCard>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <div className="font-bold text-warm-dark">Thomas Martin</div>
                  <div className="text-warm-medium text-sm">CEO, StartupBx</div>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-warm-medium leading-relaxed">
                "La simplicité de Veever nous a séduits. En quelques clics, nous avons organisé 
                un événement mémorable avec des prestataires bordelais exceptionnels."
              </p>
            </ModernCard>
          </div>
        </div>
      </section>

      {/* RSE Section */}
      <section className="py-20 px-6 bg-white/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-warm-dark mb-6">
              RSE & Impact local
            </h2>
            <p className="text-xl text-warm-medium max-w-3xl mx-auto">
              Chaque réservation soutient l'économie bordelaise et les valeurs durables
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "Chaque réservation soutient l'économie bordelaise",
                description: "100% de nos partenaires sont des entreprises locales. Votre team building contribue directement au dynamisme économique de la région."
              },
              {
                icon: Globe,
                title: "Itinéraires éco-responsables",
                description: "Parcours optimisés pour réduire les déplacements, partenaires engagés dans des démarches durables."
              },
              {
                icon: Target,
                title: "Zéro commission abusive",
                description: "Modèle équitable : nous ne prélevons que le strict nécessaire pour faire vivre la plateforme."
              }
            ].map((rse, index) => (
              <motion.div
                key={rse.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <ModernCard className="h-full text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <rse.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-warm-dark mb-4">{rse.title}</h3>
                  <p className="text-warm-medium leading-relaxed">{rse.description}</p>
                </ModernCard>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-6 py-3 bg-white/30 backdrop-blur-sm border border-white/50 rounded-xl text-warm-dark hover:bg-white/40 transition-all duration-300">
              Découvrir notre charte éthique
            </button>
          </div>
        </div>
      </section>

      {/* CTA Final & Contact */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-warm-dark mb-6">
              Organisez votre prochain team building en 3 clics
            </h2>
            <p className="text-xl text-warm-medium mb-12">
              Rejoignez les entreprises qui ont choisi la simplicité et l'authenticité
            </p>
          </div>

          <ModernCard className="p-8">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-warm-dark font-medium mb-2">Entreprise *</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full px-4 py-3 bg-white/50 border border-white/50 rounded-lg text-warm-dark placeholder-warm-light focus:outline-none focus:border-orange-300"
                    placeholder="Nom de votre entreprise"
                  />
                </div>
                <div>
                  <label className="block text-warm-dark font-medium mb-2">Email professionnel *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-white/50 border border-white/50 rounded-lg text-warm-dark placeholder-warm-light focus:outline-none focus:border-orange-300"
                    placeholder="votre.email@entreprise.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-warm-dark font-medium mb-2">Nombre de participants</label>
                <select
                  value={formData.participants}
                  onChange={(e) => setFormData({...formData, participants: e.target.value})}
                  className="w-full px-4 py-3 bg-white/50 border border-white/50 rounded-lg text-warm-dark focus:outline-none focus:border-orange-300"
                >
                  <option value="">Sélectionnez une tranche</option>
                  <option value="4-8">4-8 personnes</option>
                  <option value="9-12">9-12 personnes</option>
                  <option value="13-16">13-16 personnes</option>
                  <option value="17-20">17-20 personnes</option>
                </select>
              </div>

              <div>
                <label className="block text-warm-dark font-medium mb-2">Message (optionnel)</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/50 border border-white/50 rounded-lg text-warm-dark placeholder-warm-light focus:outline-none focus:border-orange-300"
                  placeholder="Décrivez vos besoins, dates souhaitées, préférences..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagicButton type="submit" size="lg" className="veever-gradient text-white px-8 py-4">
                  Essayer gratuitement
                  <Mail className="ml-2 w-5 h-5" />
                </MagicButton>
                <button
                  type="button"
                  className="px-8 py-4 bg-white/30 backdrop-blur-sm border border-white/50 rounded-xl text-warm-dark hover:bg-white/40 transition-all duration-300"
                >
                  Découvrir les itinéraires
                  <ArrowRight className="inline ml-2 w-5 h-5" />
                </button>
              </div>
            </form>
          </ModernCard>

          <div className="text-center mt-12 text-warm-medium">
            <p className="mb-4">Besoin d'échanger directement ?</p>
            <div className="flex justify-center space-x-8">
              <a href="mailto:contact@veever.fr" className="flex items-center hover:text-orange-600 transition-colors">
                <Mail className="w-5 h-5 mr-2" />
                contact@veever.fr
              </a>
              <a href="tel:+33556000000" className="flex items-center hover:text-orange-600 transition-colors">
                <Phone className="w-5 h-5 mr-2" />
                05 56 00 00 00
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-warm-light/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold veever-text-gradient mb-4">Veever</div>
          <p className="text-warm-medium mb-6">
            Team buildings & séminaires authentiques à Bordeaux
          </p>
          <div className="flex justify-center space-x-8 text-sm text-warm-light">
            <button>Mentions légales</button>
            <button>CGV</button>
            <button>Politique de confidentialité</button>
            <button>Charte éthique</button>
          </div>
          <p className="text-xs text-warm-light mt-6">
            © 2024 Veever - Tous droits réservés
          </p>
        </div>
      </footer>
    </div>
  );
}