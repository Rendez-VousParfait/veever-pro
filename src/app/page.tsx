'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Users, 
  Star, 
  MapPin, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  Calendar,
  Trophy,
  Target,
  Clock,
  Euro,
  Quote,
  Heart,
  Sparkles,
  Building2,
  UserPlus,
  PartyPopper,
  Users2,
  Leaf,
  Settings,
  ChevronRight,
  X
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('onboarding');
  const [isBuilderOpen, setIsBuilderOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [builderStep, setBuilderStep] = useState(1);
  const [builderData, setBuilderData] = useState({
    occasion: '',
    teamSize: '',
    budget: 50,
    timeframe: '',
    objectives: [],
    cuisine: '',
    contact: { name: '', email: '', company: '', phone: '', message: '' }
  });

  // Scroll reveal effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach((element) => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF0ED] text-[#1a1a1a]">
      {/* Header Sticky Minimal */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF0ED]/95 backdrop-blur-sm border-b border-[#F74AA1]/20 transition-all duration-300">
        <div className="container-veever">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold text-[#1a1a1a]">
                VEEVER<span className="veever-gradient-text">PRO</span>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#occasions" className="text-[#333333] hover:text-[#1a1a1a] transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-[#F74AA1] focus:ring-offset-2 focus:ring-offset-[#FAF0ED] rounded">
                Occasions
              </Link>
              <Link href="#formats" className="text-[#333333] hover:text-[#1a1a1a] transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-[#F74AA1] focus:ring-offset-2 focus:ring-offset-[#FAF0ED] rounded">
                Formats
              </Link>
              <Link href="#pourquoi" className="text-[#333333] hover:text-[#1a1a1a] transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-[#F74AA1] focus:ring-offset-2 focus:ring-offset-[#FAF0ED] rounded">
                Pourquoi nous
              </Link>
              <Link href="#benefices" className="text-[#333333] hover:text-[#1a1a1a] transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-[#F74AA1] focus:ring-offset-2 focus:ring-offset-[#FAF0ED] rounded">
                Bénéfices
              </Link>
              <Link href="#faq" className="text-[#333333] hover:text-[#1a1a1a] transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-[#F74AA1] focus:ring-offset-2 focus:ring-offset-[#FAF0ED] rounded">
                FAQ
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-[#333333] hover:text-[#1a1a1a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F74AA1] focus:ring-offset-2 focus:ring-offset-[#FAF0ED] rounded"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Ouvrir le menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsCalendlyOpen(true)}
                className="btn-ghost text-sm px-4 py-2"
              >
                Planifier un appel découverte
              </button>
              <button 
                className="btn-primary magnetic-cta"
                onClick={() => setIsBuilderOpen(true)}
              >
              Demander un devis
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#FAF0ED]/95 backdrop-blur-sm border-b border-[#F74AA1]/20">
            <nav className="container-veever py-4 space-y-4">
              <Link 
                href="#occasions" 
                className="block text-[#333333] hover:text-[#1a1a1a] transition-colors font-medium py-2 focus:outline-none focus:ring-2 focus:ring-[#F74AA1] focus:ring-offset-2 focus:ring-offset-[#FAF0ED] rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Occasions
              </Link>
              <Link 
                href="#formats" 
                className="block text-[#333333] hover:text-[#1a1a1a] transition-colors font-medium py-2 focus:outline-none focus:ring-2 focus:ring-[#F74AA1] focus:ring-offset-2 focus:ring-offset-[#FAF0ED] rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Formats
              </Link>
              <Link 
                href="#pourquoi" 
                className="block text-[#333333] hover:text-[#1a1a1a] transition-colors font-medium py-2 focus:outline-none focus:ring-2 focus:ring-[#F74AA1] focus:ring-offset-2 focus:ring-offset-[#FAF0ED] rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Pourquoi nous
              </Link>
              <Link 
                href="#benefices" 
                className="block text-[#333333] hover:text-[#1a1a1a] transition-colors font-medium py-2 focus:outline-none focus:ring-2 focus:ring-[#F74AA1] focus:ring-offset-2 focus:ring-offset-[#FAF0ED] rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Bénéfices
              </Link>
              <Link 
                href="#faq" 
                className="block text-[#333333] hover:text-[#1a1a1a] transition-colors font-medium py-2 focus:outline-none focus:ring-2 focus:ring-[#F74AA1] focus:ring-offset-2 focus:ring-offset-[#FAF0ED] rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <button 
                onClick={() => {
                  setIsCalendlyOpen(true);
                  setIsMenuOpen(false);
                }}
                className="block text-[#333333] hover:text-[#1a1a1a] transition-colors font-medium py-2 focus:outline-none focus:ring-2 focus:ring-[#F74AA1] focus:ring-offset-2 focus:ring-offset-[#FAF0ED] rounded w-full text-left"
              >
                Planifier un appel découverte
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section Scrolly-Brand */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Fond WebGL Bordeaux stylisé */}
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-gradient-to-br from-[#F74AA1]/20 via-[#FB793F]/20 to-[#F59E3F]/20">
            {/* Carte Bordeaux stylisée en filaires lumineux */}
            <svg className="w-full h-full" viewBox="0 0 800 600" fill="none">
              <defs>
                <linearGradient id="bordeauxGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F74AA1" />
                  <stop offset="50%" stopColor="#FB793F" />
                  <stop offset="100%" stopColor="#F59E3F" />
                </linearGradient>
              </defs>
              {/* Contours de Bordeaux simplifiés */}
              <path
                d="M200 300 Q250 250 300 280 Q350 300 400 320 Q450 340 500 350 Q550 360 600 370 L650 380 Q700 390 750 400"
                stroke="url(#bordeauxGradient)"
                strokeWidth="2"
                fill="none"
                opacity="0.6"
              />
              {/* Points d'intérêt */}
              <circle cx="300" cy="280" r="4" fill="#F74AA1" opacity="0.8" />
              <circle cx="500" cy="350" r="4" fill="#FB793F" opacity="0.8" />
              <circle cx="650" cy="380" r="4" fill="#F59E3F" opacity="0.8" />
              {/* Flux animé */}
              <circle cx="200" cy="300" r="3" fill="#F74AA1" opacity="0.9">
                <animateMotion dur="8s" repeatCount="indefinite">
                  <path d="M200 300 Q250 250 300 280 Q350 300 400 320 Q450 340 500 350 Q550 360 600 370 L650 380 Q700 390 750 400" />
                </animateMotion>
              </circle>
            </svg>
          </div>
        </div>

        <div className="container-veever relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Contenu centré */}
            <div className="reveal">
              <h1 className="text-h1 mb-6 text-balance">
                Des évènements sur-mesure qui{' '}
                <span className="veever-gradient-text">valorisent</span> votre{' '}
                <span className="veever-gradient-text">marque</span>{' '}
                <span className="veever-gradient-text">employeur</span> à{' '}
                <span className="veever-gradient-text">Bordeaux</span>
              </h1>
                <p className="text-body text-[#333333] mb-8 max-w-2xl mx-auto">
                  Team building, QVCT, RSE, onboarding, célébrations… 
                  Veever PRO vous accompagne dans l'élaboration de vos évènements d'entreprises engageants et authentiques, autour d'acteurs locaux, qui renforcent votre culture d'entreprise.
                </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="btn-primary magnetic-cta"
                  onClick={() => setIsBuilderOpen(true)}
                >
                  Demander un devis gratuit
                </button>
                <button 
                  className="btn-ghost"
                  onClick={() => document.getElementById('occasions')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explorer les occasions RH
                </button>
              </div>
            </div>
                    </div>
                    </div>
      </section>

      {/* Section Occasions RH */}
      <section id="occasions" className="pt-4 pb-12">
        <div className="container-veever">
          <div className="max-w-7xl mx-auto">
            {/* Moments clés où Veever fait la différence - Design révolutionnaire */}
            <div className="relative">
              {/* Hero Section */}
          <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-[#F74AA1]/10 px-6 py-3 rounded-full mb-4 border border-[#F74AA1]/20">
                  <div className="w-2 h-2 bg-[#F74AA1] rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold text-[#F74AA1] tracking-wider uppercase">Événements sur-mesure</span>
                </div>
                
                <h2 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                  <span className="bg-gradient-to-r from-[#F74AA1] via-[#FB793F] to-[#F59E3F] bg-clip-text text-transparent">
                    Les moments clés
                  </span>
                  <br />
                  <span className="text-[#1a1a1a]">où Veever fait la différence</span>
              </h2>
                
                <p className="text-2xl text-[#666666] font-light max-w-4xl mx-auto leading-relaxed mb-8">
                  Quatre occasions stratégiques où nos événements transforment durablement votre culture d'entreprise
            </p>
          </div>

              {/* 4 Moments clés - Design premium */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                {[
                  {
                    title: "Onboarding",
                    subtitle: "Intégration réussie",
                    description: "Facilitez l'intégration de vos nouveaux talents grâce à des événements personnalisés qui favorisent une immersion rapide et efficace dans votre culture d'entreprise.",
                    benefits: ["Immersion culturelle", "Création de liens", "Réduction du turnover"],
                    gradient: "from-blue-500 to-blue-600",
                    icon: "👥"
                  },
                  {
                    title: "Célébrations",
                    subtitle: "Reconnaissance authentique",
                    description: "Organisez des festivités mémorables pour marquer les succès de votre entreprise et renforcer la motivation de vos équipes avec des moments de reconnaissance authentiques.",
                    benefits: ["Motivation renforcée", "Fierté collective", "Rétention des talents"],
                    gradient: "from-purple-500 to-pink-500",
                    icon: "🎉"
                  },
                  {
                    title: "Cohésion",
                    subtitle: "Esprit d'équipe",
                    description: "Renforcez l'esprit d'équipe avec des activités collaboratives conçues pour améliorer la communication, la confiance et la collaboration entre vos collaborateurs.",
                    benefits: ["Communication améliorée", "Confiance mutuelle", "Performance collective"],
                    gradient: "from-orange-500 to-red-500",
                    icon: "🤝"
                  },
                  {
                    title: "Bien-être",
                    subtitle: "Équilibre professionnel",
                    description: "Promouvez le bien-être de vos employés en proposant des initiatives axées sur la santé physique et mentale, créant un environnement de travail épanouissant.",
                    benefits: ["Stress réduit", "Équilibre vie pro/perso", "Productivité optimisée"],
                    gradient: "from-green-500 to-teal-500",
                    icon: "🌱"
                  }
                ].map((moment, index) => (
                  <div key={index} className="group relative">
                    <div className="relative h-full bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#F74AA1]/20 overflow-hidden">
                      {/* Élément décoratif */}
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${moment.gradient} opacity-5 rounded-full -translate-y-16 translate-x-16 group-hover:opacity-10 transition-opacity duration-500`}></div>
                      
                      {/* Header avec icône */}
                      <div className="relative z-10 mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${moment.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <span className="text-3xl">{moment.icon}</span>
              </div>
                        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">{moment.title}</h3>
                        <p className="text-[#F74AA1] font-semibold text-sm uppercase tracking-wider">{moment.subtitle}</p>
            </div>
                      
                      {/* Description */}
                      <div className="relative z-10 mb-6">
                        <p className="text-[#666666] leading-relaxed text-sm">{moment.description}</p>
              </div>

                      {/* Bénéfices */}
                      <div className="relative z-10">
                        <div className="space-y-2">
                          {moment.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-center gap-2">
                              <div className={`w-2 h-2 bg-gradient-to-r ${moment.gradient} rounded-full`}></div>
                              <span className="text-sm text-[#666666] font-medium">{benefit}</span>
            </div>
                          ))}
              </div>
            </div>

                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#F74AA1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
          </div>
        </div>
                ))}
              </div>

              {/* Notre méthode + CTA intégré */}
              <div className="bg-gradient-to-br from-[#F74AA1]/5 via-[#FB793F]/5 to-[#F59E3F]/5 rounded-3xl p-16 border border-[#F74AA1]/10 relative overflow-hidden">
                {/* Éléments décoratifs */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#F74AA1]/10 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#F59E3F]/10 to-transparent rounded-full translate-y-24 -translate-x-24"></div>
                
                  <div className="max-w-7xl mx-auto relative z-10">
                    {/* Titre principal - Hors container */}
                    <div className="text-center mb-16">
                      <h3 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                        <span className="bg-gradient-to-r from-[#F74AA1] via-[#FB793F] to-[#F59E3F] bg-clip-text text-transparent">
                          Créez l'expérience parfaite
                        </span>
                        <br />
                        <span className="text-[#1a1a1a]">pour votre équipe</span>
                      </h3>
                      <p className="text-2xl text-[#666666] font-light max-w-4xl mx-auto leading-relaxed mb-8">
                        Pas de formule toute faite. Nous concevons chaque événement autour de vos besoins spécifiques, 
                        votre culture d'entreprise et vos objectifs RH.
                      </p>
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F74AA1]/10 to-[#F59E3F]/10 px-6 py-3 rounded-full border border-[#F74AA1]/20">
                        <div className="w-2 h-2 bg-[#F74AA1] rounded-full animate-pulse"></div>
                        <span className="text-sm font-bold text-[#F74AA1] tracking-wider uppercase">100% Sur-mesure</span>
                      </div>
                    </div>

                    {/* Contenu sur-mesure - Configurateur d'expérience */}
                    <div className="max-w-6xl mx-auto mb-16">

                      {/* Approche modulaire - Composants d'expérience */}
                      <div className="bg-gradient-to-br from-white/80 to-[#FAF0ED]/50 rounded-3xl p-8 border border-[#F74AA1]/10 mb-12">
                        <div className="text-center mb-8">
                          <h4 className="text-2xl font-bold text-[#1a1a1a] mb-3">
                            Notre approche <span className="text-[#F74AA1]">modulaire</span>
                          </h4>
                          <p className="text-[#666666] text-lg max-w-3xl mx-auto">
                            Nous assemblons les éléments parfaits selon votre contexte : taille d'équipe, budget, 
                            objectifs RH et contraintes logistiques
                          </p>
                        </div>

                        {/* Composants modulaires */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                          {/* Accueil */}
                          <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#F74AA1]/20">
                            <div className="text-center">
                              <div className="w-12 h-12 bg-gradient-to-r from-[#F74AA1] to-[#FB793F] rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-white text-lg">☕</span>
                              </div>
                              <h5 className="font-bold text-[#1a1a1a] mb-2">Accueil</h5>
                              <p className="text-sm text-[#666666] mb-3">Petit-déj, café d'accueil</p>
                              <div className="text-xs text-[#F74AA1] font-semibold">Optionnel</div>
                            </div>
                          </div>

                          {/* Activité matinale */}
                          <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#FB793F]/20">
                            <div className="text-center">
                              <div className="w-12 h-12 bg-gradient-to-r from-[#FB793F] to-[#F59E3F] rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-white text-lg">🌅</span>
                              </div>
                              <h5 className="font-bold text-[#1a1a1a] mb-2">Activité matinale</h5>
                              <p className="text-sm text-[#666666] mb-3">Team building, découverte</p>
                              <div className="text-xs text-[#FB793F] font-semibold">Recommandé</div>
                            </div>
                          </div>

                          {/* Repas */}
                          <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#F59E3F]/20">
                            <div className="text-center">
                              <div className="w-12 h-12 bg-gradient-to-r from-[#F59E3F] to-[#F74AA1] rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-white text-lg">🍽️</span>
                              </div>
                              <h5 className="font-bold text-[#1a1a1a] mb-2">Repas</h5>
                              <p className="text-sm text-[#666666] mb-3">Restaurant local, gastronomie</p>
                              <div className="text-xs text-[#F59E3F] font-semibold">Essentiel</div>
                            </div>
                          </div>

                          {/* Activité après-midi */}
                          <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#F74AA1]/20">
                            <div className="text-center">
                              <div className="w-12 h-12 bg-gradient-to-r from-[#F74AA1] to-[#FB793F] rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-white text-lg">🎯</span>
                              </div>
                              <h5 className="font-bold text-[#1a1a1a] mb-2">Activité après-midi</h5>
                              <p className="text-sm text-[#666666] mb-3">Cohésion, créativité</p>
                              <div className="text-xs text-[#F74AA1] font-semibold">Optionnel</div>
                            </div>
                          </div>
                        </div>

                        {/* Message clé */}
                        <div className="text-center">
                          <p className="text-[#666666] text-lg italic max-w-3xl mx-auto">
                            "Nous sélectionnons et assemblons ces composants selon vos besoins spécifiques. 
                            <span className="text-[#F74AA1] font-semibold">Votre événement, votre façon.</span>"
                          </p>
                        </div>
                      </div>

                      {/* Exemples d'assemblages réussis */}
                      <div className="mb-12">
                        <div className="text-center mb-8">
                          <h4 className="text-2xl font-bold text-[#1a1a1a] mb-3">
                            Quelques <span className="text-[#F74AA1]">assemblages réussis</span>
                          </h4>
                          <p className="text-[#666666] text-lg">
                            Exemples concrets d'événements créés sur-mesure pour nos clients
                          </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                          {/* Exemple 1 */}
                          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="mb-4">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-3 h-3 bg-[#F74AA1] rounded-full"></div>
                                <span className="text-sm font-semibold text-[#F74AA1]">Startup 12 personnes</span>
                              </div>
                              <h5 className="font-bold text-[#1a1a1a] mb-2">Onboarding accéléré</h5>
                            </div>
                            <div className="space-y-2 mb-4">
                              <div className="flex items-center gap-2 text-sm text-[#666666]">
                                <div className="w-2 h-2 bg-[#FB793F] rounded-full"></div>
                                <span>Activité matinale : Escape game</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-[#666666]">
                                <div className="w-2 h-2 bg-[#F59E3F] rounded-full"></div>
                                <span>Repas : Brasserie locale</span>
                              </div>
                            </div>
                            <div className="text-xs text-[#666666] italic">
                              "Intégration réussie en 4h, équipe soudée dès le premier jour"
                            </div>
                          </div>

                          {/* Exemple 2 */}
                          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="mb-4">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-3 h-3 bg-[#FB793F] rounded-full"></div>
                                <span className="text-sm font-semibold text-[#FB793F]">PME 25 personnes</span>
                              </div>
                              <h5 className="font-bold text-[#1a1a1a] mb-2">Célébration d'équipe</h5>
                            </div>
                            <div className="space-y-2 mb-4">
                              <div className="flex items-center gap-2 text-sm text-[#666666]">
                                <div className="w-2 h-2 bg-[#F74AA1] rounded-full"></div>
                                <span>Accueil : Petit-déj gourmand</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-[#666666]">
                                <div className="w-2 h-2 bg-[#FB793F] rounded-full"></div>
                                <span>Activité : Atelier créatif</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-[#666666]">
                                <div className="w-2 h-2 bg-[#F59E3F] rounded-full"></div>
                                <span>Repas : Restaurant gastronomique</span>
                              </div>
                            </div>
                            <div className="text-xs text-[#666666] italic">
                              "Moment de reconnaissance mémorable, motivation renforcée"
                            </div>
                          </div>

                          {/* Exemple 3 */}
                          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div className="mb-4">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-3 h-3 bg-[#F59E3F] rounded-full"></div>
                                <span className="text-sm font-semibold text-[#F59E3F]">Grande entreprise</span>
                              </div>
                              <h5 className="font-bold text-[#1a1a1a] mb-2">Programme annuel</h5>
                            </div>
                            <div className="space-y-2 mb-4">
                              <div className="flex items-center gap-2 text-sm text-[#666666]">
                                <div className="w-2 h-2 bg-[#F74AA1] rounded-full"></div>
                                <span>4 événements par an</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-[#666666]">
                                <div className="w-2 h-2 bg-[#FB793F] rounded-full"></div>
                                <span>Mix d'activités variées</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-[#666666]">
                                <div className="w-2 h-2 bg-[#F59E3F] rounded-full"></div>
                                <span>Suivi d'impact personnalisé</span>
                              </div>
                            </div>
                            <div className="text-xs text-[#666666] italic">
                              "Cohésion durable, marque employeur renforcée"
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* CTA principal - Configurateur */}
                      <div className="text-center">
                        <div className="bg-gradient-to-r from-[#F74AA1]/5 to-[#F59E3F]/5 rounded-2xl p-8 border border-[#F74AA1]/20 max-w-4xl mx-auto">
                          <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-[#F74AA1] to-[#F59E3F] rounded-full flex items-center justify-center">
                              <Settings className="w-4 h-4 text-white" />
                            </div>
                            <h4 className="text-2xl font-bold text-[#1a1a1a]">Prêt à créer votre événement sur-mesure ?</h4>
                          </div>
                          <p className="text-[#666666] text-lg leading-relaxed max-w-3xl mx-auto mb-6">
                            Partagez-nous vos besoins, vos contraintes et vos objectifs. 
                            Nous concevrons l'expérience parfaite pour votre équipe.
                          </p>
                          <button 
                            onClick={() => setIsBuilderOpen(true)}
                            className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#F74AA1] to-[#F59E3F] text-white rounded-2xl py-4 px-8 font-bold text-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 shadow-lg"
                          >
                            <span>Créer mon événement sur-mesure</span>
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                          <div className="mt-4 text-center text-sm text-[#666666] font-semibold">
                            ✓ Conseil personnalisé ✓ Proposition sur-mesure ✓ Zéro stress pour vous
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Méthodologie - 3 étapes améliorée - Centrée */}
                    <div className="max-w-4xl mx-auto space-y-8">
                      <div className="text-center mb-12">
                        <h3 className="text-4xl font-bold text-[#1a1a1a] mb-4">
                          Notre méthode en <span className="bg-gradient-to-r from-[#F74AA1] to-[#F59E3F] bg-clip-text text-transparent">3 étapes</span>
                        </h3>
                        <p className="text-xl text-[#666666] font-light max-w-2xl mx-auto">
                          Un processus éprouvé pour créer des événements qui transforment vraiment votre culture d'entreprise
              </p>
            </div>

                      <div className="space-y-6">
                        {/* Étape 1 - Améliorée */}
                        <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#F74AA1]/20">
                          <div className="flex items-start gap-6">
                            <div className="relative flex-shrink-0">
                              <div className="w-20 h-20 bg-gradient-to-r from-[#F74AA1] to-[#F59E3F] rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                                <span className="text-white font-bold text-2xl">1</span>
                  </div>
                              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                </div>
              </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-3">
                                <h4 className="text-2xl font-bold text-[#1a1a1a]">Analyse stratégique</h4>
                                <span className="px-3 py-1 bg-[#F74AA1]/10 text-[#F74AA1] text-sm font-semibold rounded-full">7 jours</span>
                              </div>
                              <p className="text-[#666666] text-lg leading-relaxed mb-4">
                                Nous prenons le temps de vous écouter lors d'un ou plusieurs appels pour comprendre vos besoins, vos objectifs et votre vision de l'événement. Une relation humaine de proximité avant tout.
                              </p>
                              <div className="grid grid-cols-2 gap-3">
                                <div className="flex items-center gap-2 text-sm text-[#666666]">
                                  <div className="w-2 h-2 bg-[#F74AA1] rounded-full"></div>
                                  <span>Appel de découverte</span>
                  </div>
                                <div className="flex items-center gap-2 text-sm text-[#666666]">
                                  <div className="w-2 h-2 bg-[#F74AA1] rounded-full"></div>
                                  <span>Écoute de vos besoins</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-[#666666]">
                                  <div className="w-2 h-2 bg-[#F74AA1] rounded-full"></div>
                                  <span>Compréhension des objectifs</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-[#666666]">
                                  <div className="w-2 h-2 bg-[#F74AA1] rounded-full"></div>
                                  <span>Relation de confiance</span>
                                </div>
                              </div>
                            </div>
                </div>
              </div>

                        {/* Étape 2 - Améliorée */}
                        <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#F74AA1]/20">
                          <div className="flex items-start gap-6">
                            <div className="relative flex-shrink-0">
                              <div className="w-20 h-20 bg-gradient-to-r from-[#F74AA1] to-[#F59E3F] rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                                <span className="text-white font-bold text-2xl">2</span>
                              </div>
                              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-3">
                                <h4 className="text-2xl font-bold text-[#1a1a1a]">Conception sur-mesure</h4>
                                <span className="px-3 py-1 bg-[#F74AA1]/10 text-[#F74AA1] text-sm font-semibold rounded-full">5 jours</span>
                              </div>
                              <p className="text-[#666666] text-lg leading-relaxed mb-4">
                                Nous concevons un programme unique en sélectionnant les meilleurs partenaires locaux et en créant une expérience parfaitement adaptée à vos besoins.
                              </p>
                              <div className="grid grid-cols-2 gap-3">
                                <div className="flex items-center gap-2 text-sm text-[#666666]">
                                  <div className="w-2 h-2 bg-[#F74AA1] rounded-full"></div>
                                  <span>Sélection partenaires</span>
                  </div>
                                <div className="flex items-center gap-2 text-sm text-[#666666]">
                                  <div className="w-2 h-2 bg-[#F74AA1] rounded-full"></div>
                                  <span>Programme détaillé</span>
                </div>
                                <div className="flex items-center gap-2 text-sm text-[#666666]">
                                  <div className="w-2 h-2 bg-[#F74AA1] rounded-full"></div>
                                  <span>Validation équipe</span>
              </div>
                                <div className="flex items-center gap-2 text-sm text-[#666666]">
                                  <div className="w-2 h-2 bg-[#F74AA1] rounded-full"></div>
                                  <span>Devis personnalisé</span>
                                </div>
                              </div>
                            </div>
                          </div>
              </div>

                        {/* Étape 3 - Améliorée */}
                        <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#F74AA1]/20">
                          <div className="flex items-start gap-6">
                            <div className="relative flex-shrink-0">
                              <div className="w-20 h-20 bg-gradient-to-r from-[#F74AA1] to-[#F59E3F] rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                                <span className="text-white font-bold text-2xl">3</span>
                  </div>
                              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                </div>
                  </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-3">
                                <h4 className="text-2xl font-bold text-[#1a1a1a]">Exécution & suivi</h4>
                                <span className="px-3 py-1 bg-[#F74AA1]/10 text-[#F74AA1] text-sm font-semibold rounded-full">Jour J</span>
                </div>
                              <p className="text-[#666666] text-lg leading-relaxed mb-4">
                                Nous coordonnons tout le jour J et assurons un suivi post-événement pour mesurer l'impact et optimiser les prochaines expériences.
                              </p>
                              <div className="grid grid-cols-2 gap-3">
                                <div className="flex items-center gap-2 text-sm text-[#666666]">
                                  <div className="w-2 h-2 bg-[#F74AA1] rounded-full"></div>
                                  <span>Coordination complète</span>
                  </div>
                                <div className="flex items-center gap-2 text-sm text-[#666666]">
                                  <div className="w-2 h-2 bg-[#F74AA1] rounded-full"></div>
                                  <span>Animation événement</span>
                </div>
                                <div className="flex items-center gap-2 text-sm text-[#666666]">
                                  <div className="w-2 h-2 bg-[#F74AA1] rounded-full"></div>
                                  <span>Feedback équipe</span>
              </div>
                                <div className="flex items-center gap-2 text-sm text-[#666666]">
                                  <div className="w-2 h-2 bg-[#F74AA1] rounded-full"></div>
                                  <span>Rapport d'impact</span>
            </div>
          </div>
        </div>
          </div>
                        </div>
                      </div>
          </div>

                    {/* Blocs alignés verticalement en dessous */}
                    <div className="mt-16 space-y-8">
                      {/* Carousel Partenaires */}
                      <div className="bg-gradient-to-r from-[#F74AA1]/5 to-[#F59E3F]/5 rounded-3xl p-8 shadow-xl border border-[#F74AA1]/20 relative overflow-hidden">
                        <div className="text-center mb-12">
                          <h5 className="text-4xl font-bold mb-3">
                            <span className="bg-gradient-to-r from-[#F74AA1] to-[#F59E3F] bg-clip-text text-transparent">
                              Réseau local
                            </span>
                          </h5>
                          <p className="text-[#666666] text-lg font-medium">de partenaires authentiques</p>
                        </div>
                        
                        {/* Carousel défilant */}
                        <div className="relative overflow-hidden">
                          <div className="flex animate-scroll space-x-20 items-center">
                            {/* Première série de logos */}
                            <div className="flex space-x-20 items-center flex-shrink-0">
                              <img 
                                src="/images/logo_partenaires/logo_atelierdesfaures.png" 
                                alt="Atelier des Faures" 
                                className="h-24 w-auto object-contain opacity-100 hover:scale-110 transition-all duration-300"
                              />
                              <img 
                                src="/images/logo_partenaires/logo_couleurtibet.PNG" 
                                alt="Couleur Tibet" 
                                className="h-24 w-auto object-contain opacity-100 hover:scale-110 transition-all duration-300"
                              />
                              <img 
                                src="/images/logo_partenaires/logo_disleur.PNG" 
                                alt="Disleur" 
                                className="h-24 w-auto object-contain opacity-100 hover:scale-110 transition-all duration-300"
                              />
                              <img 
                                src="/images/logo_partenaires/logo_lesnegociants.jpg" 
                                alt="Les Négociants" 
                                className="h-24 w-auto object-contain opacity-100 hover:scale-110 transition-all duration-300"
                              />
                              <img 
                                src="/images/logo_partenaires/logo_museeduvin.jpg" 
                                alt="Musée du Vin" 
                                className="h-24 w-auto object-contain opacity-100 hover:scale-110 transition-all duration-300"
                              />
                            </div>
                            
                            {/* Deuxième série de logos (pour l'effet de continuité) */}
                            <div className="flex space-x-20 items-center flex-shrink-0">
                              <img 
                                src="/images/logo_partenaires/logo_neya.jpg" 
                                alt="Neya" 
                                className="h-24 w-auto object-contain opacity-100 hover:scale-110 transition-all duration-300"
                              />
                              <img 
                                src="/images/logo_partenaires/logo_petitplaisirs.PNG" 
                                alt="Petits Plaisirs" 
                                className="h-24 w-auto object-contain opacity-100 hover:scale-110 transition-all duration-300"
                              />
                              <img 
                                src="/images/logo_partenaires/logo_sacrebleu!.jpg" 
                                alt="Sacré Bleu!" 
                                className="h-24 w-auto object-contain opacity-100 hover:scale-110 transition-all duration-300"
                              />
                              <img 
                                src="/images/logo_partenaires/logo_shabada.jpg" 
                                alt="Shabada" 
                                className="h-24 w-auto object-contain opacity-100 hover:scale-110 transition-all duration-300"
                              />
                              <img 
                                src="/images/logo_partenaires/logo-departetdautres.jpg" 
                                alt="Départ et d'Autres" 
                                className="h-24 w-auto object-contain opacity-100 hover:scale-110 transition-all duration-300"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* CTA Principal */}
                      <div className="bg-gradient-to-r from-[#F74AA1] to-[#F59E3F] rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl border-2 border-white/20 transform hover:scale-[1.01] transition-all duration-500">
                        
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 animate-pulse"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12 animate-pulse"></div>
                        <div className="relative z-10 text-center">
                          {/* Offre mise en valeur */}
                          <div className="inline-block bg-white/15 backdrop-blur-sm rounded-2xl px-6 py-3 mb-6 border border-white/20">
                            <div className="flex items-center gap-3">
                              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                              <span className="text-white font-bold text-lg">Appel découverte Offert</span>
                            </div>
                          </div>
                          
                          <h5 className="text-3xl font-bold mb-4 leading-tight">
                            Boostez votre <span className="text-white/95">marque employeur</span> avec des événements <span className="text-white/95">mémorables</span>
                          </h5>
                          <p className="text-white/95 mb-6 text-lg leading-relaxed max-w-3xl mx-auto font-medium">
                            Transformez vos équipes en ambassadeurs de votre entreprise grâce à des expériences uniques qui renforcent l'engagement et la fidélité
                          </p>
                        
                        <button 
                          onClick={() => window.location.href = '/creer-mon-projet'}
                          className="group inline-flex items-center gap-3 bg-white text-[#F74AA1] rounded-2xl py-4 px-8 font-bold text-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 shadow-lg border-2 border-white/20 hover:border-white/40"
                        >
                          <span>Faire ma demande d'événement</span>
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                        
                        <div className="mt-6 text-center text-sm text-white/95 font-semibold">
                          ✓ Conseil personnalisé ✓ Solutions sur-mesure ✓ Impact mesurable
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Avantages Convertisseurs */}
      <section id="pourquoi" className="py-24 bg-gradient-to-b from-white to-[#FAF0ED]">
        <div className="container-veever">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Pourquoi <span className="bg-gradient-to-r from-[#F74AA1] to-[#F59E3F] bg-clip-text text-transparent">Veever Pro</span> transforme votre marque employeur ?
            </h2>
            <p className="text-xl text-[#666666] max-w-4xl mx-auto leading-relaxed">
              Des événements d'entreprise qui génèrent un <strong>ROI mesurable</strong> sur l'engagement, la fidélisation et l'attractivité de vos talents
            </p>
          </div>

          {/* Avantages principaux avec impact visuel */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Gain de temps */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#F74AA1]/10 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-r from-[#F74AA1] to-[#FB793F] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Gain de temps précieux pour vos RH</h3>
                  <p className="text-[#666666] mb-6 text-lg leading-relaxed">
                    Fini la coordination multi-prestataires ! Un seul interlocuteur, une seule facture, un planning géré pour vous.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#F74AA1] rounded-full"></div>
                      <span className="text-[#333333] font-medium">Coordination unique</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#F74AA1] rounded-full"></div>
                      <span className="text-[#333333] font-medium">Facturation simplifiée</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#F74AA1] rounded-full"></div>
                      <span className="text-[#333333] font-medium">Suivi personnalisé</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact mesurable */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#F59E3F]/10 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-r from-[#FB793F] to-[#F59E3F] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Impact mesurable sur votre marque employeur</h3>
                  <p className="text-[#666666] mb-6 text-lg leading-relaxed">
                    Des résultats concrets sur la cohésion d'équipe, l'attractivité employeur et la fidélisation des talents.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#F59E3F] rounded-full"></div>
                      <span className="text-[#333333] font-medium">Cohésion renforcée</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#F59E3F] rounded-full"></div>
                      <span className="text-[#333333] font-medium">Attractivité améliorée</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#F59E3F] rounded-full"></div>
                      <span className="text-[#333333] font-medium">Fidélisation des talents</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Différenciateurs clés */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Authentique & Local",
                description: "Vos équipes (re)découvrent leur territoire avec des partenaires locaux authentiques",
                icon: MapPin,
                color: "from-[#F74AA1] to-[#FB793F]"
              },
              {
                title: "Clé en Main",
                description: "Un seul interlocuteur, un seul paiement, zéro stress pour vous",
                icon: Settings,
                color: "from-[#FB793F] to-[#F59E3F]"
              },
              {
                title: "Mémorable",
                description: "Un récit unique, des attentions personnalisées, des souvenirs durables",
                icon: Heart,
                color: "from-[#F59E3F] to-[#F74AA1]"
              },
              {
                title: "Orienté RH",
                description: "Cohésion, QVT, attractivité, fidélisation : des objectifs RH concrets",
                icon: Target,
                color: "from-[#F74AA1] to-[#F59E3F]"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl mx-auto mb-4 flex items-center justify-center`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1a1a1a] mb-3">{item.title}</h3>
                  <p className="text-[#666666] text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA de conversion */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-[#F74AA1]/5 to-[#F59E3F]/5 rounded-3xl p-8 border border-[#F74AA1]/20 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Prêt à transformer vos événements RH ?</h3>
              <p className="text-[#666666] mb-6 text-lg">
                Découvrez comment nos événements sur-mesure peuvent renforcer votre marque employeur
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="bg-gradient-to-r from-[#F74AA1] to-[#F59E3F] text-white rounded-2xl py-4 px-8 font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  onClick={() => window.location.href = '/creer-mon-projet'}
                >
                  Découvrir nos formats
                </button>
                <button 
                  className="border-2 border-[#F74AA1] text-[#F74AA1] rounded-2xl py-4 px-8 font-bold text-lg hover:bg-[#F74AA1] hover:text-white transition-all duration-300"
                  onClick={() => setIsCalendlyOpen(true)}
                >
                  Voir nos occasions RH
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Central */}
      <section className="py-24">
        <div className="container-veever">
          <div className="text-center">
            <h2 className="text-h2 mb-6">
              Ne laissez plus vos événements s'évaporer.{' '}
              <span className="veever-gradient-text">Transformez-les en culture vécue.</span>
            </h2>
            <p className="text-body text-[#333333] mb-8 max-w-3xl mx-auto">
              Demandez un devis gratuit et découvrez comment Veever peut transformer vos moments collectifs en leviers de marque employeur.
            </p>
            <button 
              className="btn-primary magnetic-cta text-xl px-12 py-6"
              onClick={() => setIsBuilderOpen(true)}
            >
              Demander un devis gratuit
            </button>
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section id="faq" className="py-24 bg-white/5">
        <div className="container-veever">
          <div className="text-center mb-16">
            <h2 className="text-h2 mb-6">Questions fréquentes</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
            {[
              {
                question: "Quels événements d'entreprise proposez-vous à Bordeaux ?",
                answer: "Onboarding, célébrations/anniversaires, cohésion/team building et bien-être/QVT, en formats demi-journée, journée ou programme annuel."
              },
              {
                question: "En quoi vos événements renforcent-ils la marque employeur ?",
                answer: "Nous concevons des expériences ancrées localement, scénarisées et mémorables, avec un avant/pendant/après (livret, souvenirs, feedback) qui nourrit la cohésion et l'attractivité."
              },
              {
                question: "Peut-on personnaliser selon nos valeurs et nos contraintes ?",
                answer: "Oui. Nous adaptons le rythme, les thématiques et les attentions, sans afficher publiquement nos prestataires."
              },
              {
                question: "Est-ce adapté aux petites entreprises ?",
                answer: "Oui. Nos formats Essentiel et Immersion sont pensés pour les PME/startups, avec une logistique simple et un budget maîtrisé."
              },
              {
                question: "Proposez-vous un accompagnement récurrent ?",
                answer: "Notre format Premium planifie 4 moments RH clés par an, avec suivi d'impact et chef de projet dédié."
              }
            ].map((faq, index) => (
              <div key={index} className="card-premium">
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer">
                    <h3 className="text-h3">{faq.question}</h3>
                    <ChevronRight className="w-6 h-6 text-[#333333] group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-body text-[#333333]">{faq.answer}</p>
                </div>
                </details>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Builder Drawer */}
      {isBuilderOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          <div className="absolute right-0 top-0 h-full w-full max-w-2xl bg-[#FAF0ED] border-l border-[#F74AA1]/20">
            <div className="p-6 h-full flex flex-col overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-h2 text-[#1a1a1a]">Créer mon programme sur-mesure</h2>
                <button 
                  onClick={() => setIsBuilderOpen(false)}
                  className="p-2 hover:bg-[#F74AA1]/10 rounded-lg transition-colors text-[#333333]"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-caption text-[#333333]">Étape {builderStep} sur 2</span>
                  <span className="text-caption text-[#333333]">{Math.round((builderStep / 2) * 100)}%</span>
                </div>
                <div className="w-full bg-[#F74AA1]/20 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-[#F74AA1] to-[#F59E3F] h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(builderStep / 2) * 100}%` }}
                  />
                </div>
          </div>

              {/* Steps Content */}
              <div className="flex-1 overflow-y-auto overflow-x-hidden">
                {builderStep === 1 && (
                  <div>
                    <h3 className="text-h3 mb-6 text-[#1a1a1a]">Créons votre événement sur-mesure</h3>
                    <p className="text-body text-[#666666] mb-8">Quelques questions pour comprendre vos besoins et vous proposer la solution parfaite</p>
                    
                    <div className="space-y-6">
                      {/* Occasion */}
                      <div>
                        <label className="block text-lg font-semibold text-[#1a1a1a] mb-3">Quelle est l'occasion ?</label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                            { id: 'onboarding', label: 'Onboarding', icon: '👋', desc: 'Premier jour' },
                            { id: 'celebrations', label: 'Célébrations', icon: '🎉', desc: 'Jalons importants' },
                            { id: 'cohesion', label: 'Cohésion', icon: '🤝', desc: 'Team building' },
                            { id: 'wellbeing', label: 'Bien-être', icon: '🌱', desc: 'QVCT' }
                      ].map((occasion) => (
                        <button
                          key={occasion.id}
                              onClick={() => setBuilderData({...builderData, occasion: occasion.id})}
                              className={`p-4 rounded-xl border-2 transition-all duration-300 text-center ${
                                builderData.occasion === occasion.id
                                  ? 'border-[#F74AA1] bg-[#F74AA1]/10 shadow-lg'
                                  : 'border-[#F74AA1]/20 bg-white/50 hover:border-[#F74AA1]/40'
                              }`}
                            >
                              <div className="text-2xl mb-2">{occasion.icon}</div>
                              <div className="font-semibold text-[#1a1a1a]">{occasion.label}</div>
                              <div className="text-sm text-[#666666]">{occasion.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                      {/* Taille équipe */}
                  <div>
                        <label className="block text-lg font-semibold text-[#1a1a1a] mb-3">Taille de votre équipe</label>
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            { id: '5-15', label: '5-15', icon: '👥' },
                            { id: '16-30', label: '16-30', icon: '🏢' },
                            { id: '30+', label: '30+', icon: '🏭' }
                      ].map((size) => (
                        <button
                          key={size.id}
                          onClick={() => setBuilderData({...builderData, teamSize: size.id})}
                              className={`p-4 rounded-xl border-2 transition-all duration-300 text-center ${
                            builderData.teamSize === size.id
                                  ? 'border-[#F74AA1] bg-[#F74AA1]/10 shadow-lg'
                                  : 'border-[#F74AA1]/20 bg-white/50 hover:border-[#F74AA1]/40'
                          }`}
                        >
                              <div className="text-2xl mb-2">{size.icon}</div>
                              <div className="font-semibold text-[#1a1a1a]">{size.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                      {/* Budget */}
                  <div>
                        <label className="block text-lg font-semibold text-[#1a1a1a] mb-3">Budget indicatif par personne</label>
                        <div className="bg-white/50 rounded-xl p-4 border border-[#F74AA1]/20">
                          <div className="text-center mb-4">
                            <div className="text-3xl font-bold text-[#F74AA1]">{builderData.budget}€</div>
                            <div className="text-sm text-[#666666]">par personne</div>
                        </div>
                        <input 
                          type="range" 
                          min="30" 
                          max="200" 
                          value={builderData.budget}
                          onChange={(e) => setBuilderData({...builderData, budget: parseInt(e.target.value)})}
                            className="w-full h-2 bg-[#F74AA1]/20 rounded-full appearance-none cursor-pointer"
                          />
                          <div className="flex justify-between text-xs text-[#666666] mt-2">
                            <span>30€</span>
                            <span>200€</span>
                        </div>
                      </div>
                      </div>

                      {/* Objectifs RH */}
                      <div>
                        <label className="block text-lg font-semibold text-[#1a1a1a] mb-3">Quels sont vos objectifs RH ?</label>
                        <div className="grid grid-cols-2 gap-3">
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
                                const current = builderData.objectives || [];
                                const updated = current.includes(objective.id) 
                                  ? current.filter(id => id !== objective.id)
                                  : [...current, objective.id];
                                setBuilderData({...builderData, objectives: updated});
                              }}
                              className={`p-3 rounded-xl border-2 transition-all duration-300 text-center ${
                                (builderData.objectives || []).includes(objective.id)
                                  ? 'border-[#F74AA1] bg-[#F74AA1]/10 shadow-lg'
                                  : 'border-[#F74AA1]/20 bg-white/50 hover:border-[#F74AA1]/40'
                              }`}
                            >
                              <div className="text-xl mb-1">{objective.icon}</div>
                              <div className="font-semibold text-[#1a1a1a] text-sm">{objective.label}</div>
                              <div className="text-xs text-[#666666]">{objective.desc}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                      {/* Type de cuisine */}
                      <div>
                        <label className="block text-lg font-semibold text-[#1a1a1a] mb-3">Quel type de cuisine préférez-vous ?</label>
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            { id: 'francaise', label: 'Française traditionnelle', icon: '🇫🇷', desc: 'Gastronomie locale' },
                            { id: 'internationale', label: 'Internationale', icon: '🌍', desc: 'Diversité culinaire' },
                            { id: 'bio', label: 'Bio & healthy', icon: '🥗', desc: 'Cuisine saine' },
                            { id: 'fusion', label: 'Fusion créative', icon: '🍽️', desc: 'Innovation culinaire' }
                          ].map((cuisine) => (
                            <button
                              key={cuisine.id}
                              onClick={() => setBuilderData({...builderData, cuisine: cuisine.id})}
                              className={`p-3 rounded-xl border-2 transition-all duration-300 text-center ${
                                builderData.cuisine === cuisine.id
                                  ? 'border-[#F74AA1] bg-[#F74AA1]/10 shadow-lg'
                                  : 'border-[#F74AA1]/20 bg-white/50 hover:border-[#F74AA1]/40'
                              }`}
                            >
                              <div className="text-xl mb-1">{cuisine.icon}</div>
                              <div className="font-semibold text-[#1a1a1a] text-sm">{cuisine.label}</div>
                              <div className="text-xs text-[#666666]">{cuisine.desc}</div>
                            </button>
                          ))}
                  </div>
                      </div>

                      {/* Timing */}
                  <div>
                        <label className="block text-lg font-semibold text-[#1a1a1a] mb-3">Quand souhaitez-vous organiser ?</label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                            { id: 'urgent', label: 'Ce mois-ci', icon: '⚡', desc: 'Urgent' },
                            { id: 'planifie', label: 'Dans 2-3 mois', icon: '📅', desc: 'Planifié' },
                            { id: 'long-terme', label: 'Dans 6 mois', icon: '🗓️', desc: 'Long terme' },
                            { id: 'annuel', label: 'Programme annuel', icon: '🔄', desc: 'Récurrent' }
                      ].map((timeframe) => (
                        <button
                          key={timeframe.id}
                          onClick={() => setBuilderData({...builderData, timeframe: timeframe.id})}
                              className={`p-3 rounded-xl border-2 transition-all duration-300 text-center ${
                            builderData.timeframe === timeframe.id
                                  ? 'border-[#F74AA1] bg-[#F74AA1]/10 shadow-lg'
                                  : 'border-[#F74AA1]/20 bg-white/50 hover:border-[#F74AA1]/40'
                              }`}
                            >
                              <div className="text-xl mb-1">{timeframe.icon}</div>
                              <div className="font-semibold text-[#1a1a1a] text-sm">{timeframe.label}</div>
                              <div className="text-xs text-[#666666]">{timeframe.desc}</div>
                        </button>
                      ))}
                        </div>
                      </div>
                </div>
            </div>
                )}

                {builderStep === 2 && (
                  <div>
                    <h3 className="text-h3 mb-6 text-[#1a1a1a]">Finalisons votre demande</h3>
                    <p className="text-body text-[#666666] mb-8">Vos coordonnées pour recevoir votre proposition personnalisée</p>
                    
                    {/* Récapitulatif rapide */}
                    <div className="bg-gradient-to-r from-[#F74AA1]/5 to-[#F59E3F]/5 rounded-xl p-4 border border-[#F74AA1]/20 mb-6">
                      <p className="text-sm font-semibold text-[#F74AA1] mb-2">📋 Votre demande :</p>
                      <div className="text-sm text-[#333333] space-y-1">
                        <p>• <strong>Occasion :</strong> {
                          builderData.occasion === 'onboarding' ? 'Onboarding' :
                          builderData.occasion === 'celebrations' ? 'Célébrations' :
                          builderData.occasion === 'cohesion' ? 'Cohésion' :
                          builderData.occasion === 'wellbeing' ? 'Bien-être' : 'Non sélectionné'
                        }</p>
                        <p>• <strong>Équipe :</strong> {
                          builderData.teamSize === '5-15' ? '5-15 personnes' :
                          builderData.teamSize === '16-30' ? '16-30 personnes' :
                          builderData.teamSize === '30+' ? '30+ personnes' : 'Non sélectionné'
                        }</p>
                        <p>• <strong>Budget :</strong> {builderData.budget}€ par personne</p>
                        <p>• <strong>Objectifs RH :</strong> {
                          builderData.objectives && builderData.objectives.length > 0 
                            ? builderData.objectives.map(obj => {
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
                        <p>• <strong>Cuisine :</strong> {
                          builderData.cuisine === 'francaise' ? 'Française traditionnelle' :
                          builderData.cuisine === 'internationale' ? 'Internationale' :
                          builderData.cuisine === 'bio' ? 'Bio & healthy' :
                          builderData.cuisine === 'fusion' ? 'Fusion créative' : 'Non spécifiée'
                        }</p>
                        <p>• <strong>Timing :</strong> {
                          builderData.timeframe === 'urgent' ? 'Ce mois-ci' :
                          builderData.timeframe === 'planifie' ? 'Dans 2-3 mois' :
                          builderData.timeframe === 'long-terme' ? 'Dans 6 mois' :
                          builderData.timeframe === 'annuel' ? 'Programme annuel' : 'Non sélectionné'
                        }</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-body mb-2 text-[#1a1a1a] font-semibold">Nom complet *</label>
                    <input 
                      type="text" 
                          value={builderData.contact.name}
                          onChange={(e) => setBuilderData({
                            ...builderData, 
                            contact: {...builderData.contact, name: e.target.value}
                          })}
                          className="w-full px-4 py-3 bg-white/80 border border-[#F74AA1]/30 rounded-xl text-[#1a1a1a] placeholder-[#666666] focus:border-[#F74AA1] focus:outline-none"
                      placeholder="Votre nom"
                          required
                    />
                  </div>
                  <div>
                        <label className="block text-body mb-2 text-[#1a1a1a] font-semibold">Email professionnel *</label>
                    <input 
                      type="email" 
                          value={builderData.contact.email}
                          onChange={(e) => setBuilderData({
                            ...builderData, 
                            contact: {...builderData.contact, email: e.target.value}
                          })}
                          className="w-full px-4 py-3 bg-white/80 border border-[#F74AA1]/30 rounded-xl text-[#1a1a1a] placeholder-[#666666] focus:border-[#F74AA1] focus:outline-none"
                          placeholder="votre@entreprise.com"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-body mb-2 text-[#1a1a1a] font-semibold">Entreprise *</label>
                        <input 
                          type="text" 
                          value={builderData.contact.company}
                          onChange={(e) => setBuilderData({
                            ...builderData, 
                            contact: {...builderData.contact, company: e.target.value}
                          })}
                          className="w-full px-4 py-3 bg-white/80 border border-[#F74AA1]/30 rounded-xl text-[#1a1a1a] placeholder-[#666666] focus:border-[#F74AA1] focus:outline-none"
                          placeholder="Nom de votre entreprise"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-body mb-2 text-[#1a1a1a] font-semibold">Téléphone</label>
                        <input 
                          type="tel" 
                          value={builderData.contact.phone}
                          onChange={(e) => setBuilderData({
                            ...builderData, 
                            contact: {...builderData.contact, phone: e.target.value}
                          })}
                          className="w-full px-4 py-3 bg-white/80 border border-[#F74AA1]/30 rounded-xl text-[#1a1a1a] placeholder-[#666666] focus:border-[#F74AA1] focus:outline-none"
                          placeholder="06 12 34 56 78"
                    />
                  </div>
                  <div>
                        <label className="block text-body mb-2 text-[#1a1a1a] font-semibold">Message (optionnel)</label>
                    <textarea 
                          value={builderData.contact.message}
                          onChange={(e) => setBuilderData({
                            ...builderData, 
                            contact: {...builderData.contact, message: e.target.value}
                          })}
                          rows={3}
                          className="w-full px-4 py-3 bg-white/80 border border-[#F74AA1]/30 rounded-xl text-[#1a1a1a] placeholder-[#666666] focus:border-[#F74AA1] focus:outline-none"
                          placeholder="Décrivez vos besoins spécifiques ou contraintes particulières..."
                    />
                      </div>
                    </div>

                    {/* Promesse de valeur */}
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200 mt-6">
                      <div className="flex items-start gap-3">
                        <div className="text-2xl">✅</div>
                        <div>
                          <p className="text-sm font-semibold text-green-700 mb-1">Engagement Veever PRO</p>
                          <p className="text-sm text-green-600">
                            Réponse personnalisée sous 24h • Proposition sur-mesure • Coordination unique • Zéro stress pour vous
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}


              </div>

              {/* Navigation */}
              <div className="flex justify-between mt-6 pt-6 border-t border-[#F74AA1]/20">
                {builderStep > 1 ? (
                  <button 
                    onClick={() => setBuilderStep(builderStep - 1)}
                    className="btn-ghost"
                  >
                    Précédent
                  </button>
                ) : (
                  <div />
                )}
                
                {builderStep < 2 ? (
                  <button 
                    onClick={() => setBuilderStep(builderStep + 1)}
                    className="btn-primary"
                  >
                    Suivant
                  </button>
                ) : (
                  <button 
                    onClick={() => {
                      // Envoyer la demande
                      console.log('Programme créé:', builderData);
                      setIsBuilderOpen(false);
                      setBuilderStep(1);
                    }}
                    className="btn-primary"
                  >
                    Créer mon programme
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Section Problème → Transformation */}
      <section className="py-24 bg-[#FAF0ED]">
        <div className="container-veever">
          <div className="max-w-4xl mx-auto">
            {/* Titre section */}
            <div className="text-center mb-16">
              <h2 className="text-h2 mb-8 text-[#1a1a1a]">
                Transformez vos événements internes en leviers de culture, d'engagement et de fidélisation.
              </h2>
              
              {/* Citation mise en avant */}
              <div className="bg-gradient-to-r from-[#F74AA1]/10 to-[#F59E3F]/10 rounded-2xl p-8 border border-[#F74AA1]/20 max-w-4xl mx-auto mb-8">
                <p className="text-xl font-semibold text-[#1a1a1a] italic leading-relaxed">
                  À la croisée de l'événementiel et des enjeux humains, Veever PRO accompagne les entreprises dans la création de journées de cohésion sur-mesure, conçues pour renforcer les liens, faire vivre les valeurs et créer un sentiment d'appartenance durable.
                </p>
                    </div>
                    </div>

            {/* 3 bénéfices clés */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Bénéfice #1 */}
              <div className="card-premium text-center flex flex-col justify-center min-h-[280px]">
                <div className="w-12 h-12 bg-gradient-to-r from-[#F74AA1] to-[#FB793F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-[#F74AA1]" />
                    </div>
                  </div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-3 leading-tight">
                  Renforcer les liens au sein des équipes
                </h3>
                <p className="text-sm text-[#333333] leading-relaxed">
                  Des expériences conçues pour créer de vrais moments de connexion et de cohésion authentique.
                  <span className="block mt-2 font-medium text-[#F74AA1]">Cohésion d'équipe durable et engagement renforcé.</span>
                </p>
                </div>

              {/* Bénéfice #2 */}
              <div className="card-premium text-center flex flex-col justify-center min-h-[280px]">
                <div className="w-12 h-12 bg-gradient-to-r from-[#FB793F] to-[#F59E3F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <Building2 className="w-4 h-4 text-[#FB793F]" />
              </div>
            </div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-3 leading-tight">
                  Faire vivre les valeurs dans le réel
                </h3>
                <p className="text-sm text-[#333333] leading-relaxed">
                  Vos valeurs d'entreprise s'incarnent concrètement dans des expériences partagées et mémorables.
                  <span className="block mt-2 font-medium text-[#FB793F]">Culture d'entreprise vécue au quotidien.</span>
            </p>
          </div>

              {/* Bénéfice #3 */}
              <div className="card-premium text-center flex flex-col justify-center min-h-[280px]">
                <div className="w-12 h-12 bg-gradient-to-r from-[#F59E3F] to-[#F74AA1] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 text-[#F59E3F]" />
              </div>
            </div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-3 leading-tight">
                  Créer un sentiment d'appartenance durable
                </h3>
                <p className="text-sm text-[#333333] leading-relaxed">
                  Chaque moment partagé devient un levier d'attractivité et de fidélisation de vos talents.
                  <span className="block mt-2 font-medium text-[#F59E3F]">Marque employeur vivante et attractive.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#F5E6E0] to-[#FAF0ED] py-16 border-t border-[#F74AA1]/20">
        <div className="container-veever">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <div className="text-3xl font-bold mb-6 text-[#1a1a1a]">
                VEEVER<span className="veever-gradient-text">PRO</span>
              </div>
              <p className="text-body text-[#333333] mb-6 max-w-md">
                Votre partenaire pour des événements d'entreprise qui renforcent votre marque employeur à Bordeaux.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-[#F74AA1] to-[#F59E3F] rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
            <div>
                  <p className="text-caption text-[#333333]">Basé à Bordeaux</p>
                  <p className="text-caption text-[#333333]">Métropole de Bordeaux</p>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-h3 mb-6 text-[#1a1a1a]">Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#occasions" className="text-[#333333] hover:text-[#1a1a1a] transition-colors flex items-center gap-2">
                    <UserPlus className="w-4 h-4" />
                    Onboarding
                  </Link>
                </li>
                <li>
                  <Link href="#occasions" className="text-[#333333] hover:text-[#1a1a1a] transition-colors flex items-center gap-2">
                    <PartyPopper className="w-4 h-4" />
                    Célébrations
                  </Link>
                </li>
                <li>
                  <Link href="#occasions" className="text-[#333333] hover:text-[#1a1a1a] transition-colors flex items-center gap-2">
                    <Users2 className="w-4 h-4" />
                    Cohésion d'équipe
                  </Link>
                </li>
                <li>
                  <Link href="#occasions" className="text-[#333333] hover:text-[#1a1a1a] transition-colors flex items-center gap-2">
                    <Leaf className="w-4 h-4" />
                    Bien-être & QVT
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-h3 mb-6 text-[#1a1a1a]">Contact</h3>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:contact@veeverpro.com" className="text-[#333333] hover:text-[#1a1a1a] transition-colors flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    contact@veeverpro.com
                  </a>
                </li>
                <li>
                  <a href="tel:+33556123456" className="text-[#333333] hover:text-[#1a1a1a] transition-colors flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    +33 5 56 12 34 56
                  </a>
                </li>
                <li>
                  <div className="text-[#333333] flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Lun-Ven 9h-18h
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Footer */}
          <div className="card-premium gradient-border mb-8">
            <div className="text-center">
              <h3 className="text-h3 mb-4">Prêt à transformer vos événements ?</h3>
              <p className="text-body text-[#333333] mb-6">
                Découvrez comment Veever Pro peut renforcer votre marque employeur
              </p>
              <button 
                className="btn-primary magnetic-cta"
                onClick={() => setIsBuilderOpen(true)}
              >
                Demander un devis gratuit
              </button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#F74AA1]/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-caption text-[#333333]">
                &copy; 2024 VEEVER PRO. Tous droits réservés.
              </div>
              <div className="flex items-center gap-6">
                <Link href="#faq" className="text-caption text-[#333333] hover:text-[#1a1a1a] transition-colors">
                  FAQ
                </Link>
                <Link href="#benefices" className="text-caption text-[#333333] hover:text-[#1a1a1a] transition-colors">
                  Bénéfices
                </Link>
                <Link href="#pourquoi" className="text-caption text-[#333333] hover:text-[#1a1a1a] transition-colors">
                  Pourquoi nous
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Calendly Modal */}
      {isCalendlyOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl overflow-hidden w-full max-w-4xl h-[80vh] shadow-2xl border border-[#F74AA1]/20 relative">
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#F74AA1]/10 via-[#FB793F]/10 to-[#F59E3F]/10 p-[2px]">
              <div className="bg-white rounded-3xl h-full w-full">
                <div className="flex items-center justify-between p-6 border-b border-[#F74AA1]/10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#F74AA1] to-[#F59E3F] rounded-full flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-white" />
                    </div>
                    <h2 className="text-xl font-semibold text-[#1a1a1a]">Planifier un appel découverte</h2>
                  </div>
                  <button 
                    onClick={() => setIsCalendlyOpen(false)}
                    className="p-2 hover:bg-[#F74AA1]/10 rounded-xl transition-colors text-[#666666] hover:text-[#F74AA1]"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="h-[calc(100%-5rem)]">
                  <iframe
                    src="https://calendly.com/veever-info/30min?embed_domain=localhost&embed_type=Inline"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Calendly - Planifier un appel découverte"
                    className="rounded-b-3xl"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}