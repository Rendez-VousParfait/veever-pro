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
  const [activeFaqTab, setActiveFaqTab] = useState('services');
  const [isBuilderOpen, setIsBuilderOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [builderStep, setBuilderStep] = useState(1);

  // Effet de scroll pour détecter le défilement
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
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
      {/* Header normal */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
      } bg-[#FAF0ED]/95 backdrop-blur-sm border-b border-[#F74AA1]/20`}>
        <div className="container-veever">
          <div className="flex items-center justify-between h-16 md:h-20 px-4 md:px-6">
            {/* Logo - Tout à gauche */}
            <div className="flex items-center">
              <Image
                src="/images/logo/logo-veever-pro.png"
                alt="Veever Pro"
                width={3840}
                height={1280}
                className="h-20 md:h-64 w-auto"
                priority
              />
            </div>

            {/* Navigation Desktop + CTA - Tout à droite */}
            <div className="flex items-center space-x-2 md:space-x-8">
              {/* Navigation Desktop */}
              <nav className="hidden lg:flex items-center space-x-8">
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
                className="lg:hidden p-2 text-[#333333] hover:text-[#1a1a1a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F74AA1] focus:ring-offset-2 focus:ring-offset-[#FAF0ED] rounded"
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
              <div className="flex items-center space-x-2 md:space-x-4">
              <button 
                onClick={() => setIsCalendlyOpen(true)}
                  className="hidden sm:block px-3 md:px-6 py-1 md:py-2 text-xs md:text-sm text-[#333333] hover:text-[#F74AA1] transition-colors font-medium border border-[#F74AA1]/30 rounded-full hover:border-[#F74AA1] hover:bg-[#F74AA1]/5"
              >
                  <span className="hidden md:inline">Planifier un RDV</span>
                  <span className="md:hidden">RDV</span>
              </button>
              <button 
                  className="px-3 md:px-6 py-1 md:py-2 bg-gradient-to-r from-[#F74AA1] to-[#F59E3F] text-white rounded-full text-xs md:text-sm font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                onClick={() => setIsBuilderOpen(true)}
              >
                  <span className="hidden md:inline">Demander un devis</span>
                  <span className="md:hidden">Devis</span>
              </button>
              </div>
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

      {/* Bulle flottante avec raccourcis au scroll */}
      <div className={`fixed top-2 md:top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="bg-white/95 backdrop-blur-xl rounded-full px-3 md:px-6 py-2 md:py-3 shadow-2xl border border-gray-200/30 max-w-[95vw] overflow-hidden">
          <nav className="flex items-center space-x-0.5 md:space-x-1">
            <Link 
              href="#occasions" 
              className="text-xs md:text-sm px-2 md:px-3 py-1 text-gray-700 hover:text-[#F74AA1] hover:bg-[#F74AA1]/10 rounded-full transition-all duration-300 font-medium"
            >
              <span className="hidden sm:inline">Occasions</span>
              <span className="sm:hidden">Occ.</span>
            </Link>
            <Link 
              href="#formats" 
              className="text-xs md:text-sm px-2 md:px-3 py-1 text-gray-700 hover:text-[#F74AA1] hover:bg-[#F74AA1]/10 rounded-full transition-all duration-300 font-medium"
            >
              <span className="hidden sm:inline">Formats</span>
              <span className="sm:hidden">Form.</span>
            </Link>
            <Link 
              href="#pourquoi" 
              className="text-xs md:text-sm px-2 md:px-3 py-1 text-gray-700 hover:text-[#F74AA1] hover:bg-[#F74AA1]/10 rounded-full transition-all duration-300 font-medium"
            >
              <span className="hidden sm:inline">Pourquoi nous</span>
              <span className="sm:hidden">Pourq.</span>
            </Link>
            <Link 
              href="#benefices" 
              className="text-xs md:text-sm px-2 md:px-3 py-1 text-gray-700 hover:text-[#F74AA1] hover:bg-[#F74AA1]/10 rounded-full transition-all duration-300 font-medium"
            >
              <span className="hidden sm:inline">Bénéfices</span>
              <span className="sm:hidden">Bénéf.</span>
            </Link>
            <Link 
              href="#faq" 
              className="text-xs md:text-sm px-2 md:px-3 py-1 text-gray-700 hover:text-[#F74AA1] hover:bg-[#F74AA1]/10 rounded-full transition-all duration-300 font-medium"
            >
              FAQ
            </Link>
            <div className="w-px h-4 md:h-6 bg-gray-300 mx-1 md:mx-2"></div>
            <button 
              onClick={() => setIsCalendlyOpen(true)}
              className="text-xs px-2 md:px-3 py-1 text-gray-700 hover:text-[#F74AA1] hover:bg-[#F74AA1]/10 rounded-full transition-all duration-300 font-medium"
            >
              <span className="hidden sm:inline">Appel</span>
              <span className="sm:hidden">RDV</span>
            </button>
            <button 
              onClick={() => setIsBuilderOpen(true)}
              className="px-3 md:px-4 py-1 bg-gradient-to-r from-[#F74AA1] to-[#F59E3F] text-white rounded-full text-xs md:text-sm font-semibold hover:shadow-lg transition-all duration-300"
            >
              Devis
            </button>
          </nav>
        </div>
      </div>

      {/* Hero Section Scrolly-Brand */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-24">
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
                    description: "Offrez aux nouveaux collaborateurs un moment fort dès leur arrivée. Une expérience partagée qui favorise leur intégration, crée un premier souvenir positif et renforce leur sentiment d'appartenance.",
                    benefits: ["Immersion culturelle", "Création de liens", "Réduction du turnover"],
                    gradient: "from-blue-500 to-blue-600",
                    icon: "👥"
                  },
                  {
                    title: "Célébrations",
                    subtitle: "Fêter les succès",
                    description: "Organisez des festivités mémorables pour marquer les succès de votre entreprise et renforcer la motivation de vos équipes avec des moments de reconnaissance authentiques.",
                    benefits: ["Motivation renforcée", "Fierté collective", "Rétention des talents"],
                    gradient: "from-purple-500 to-pink-500",
                    icon: "🎉"
                  },
                  {
                    title: "Cohésion",
                    subtitle: "Esprit d'équipe",
                    description: "Créez des occasions authentiques de se retrouver en dehors du cadre professionnel. Des expériences pensées pour développer la complicité, l'écoute et l'efficacité collective.",
                    benefits: ["Communication améliorée", "Confiance mutuelle", "Performance collective"],
                    gradient: "from-orange-500 to-red-500",
                    icon: "🤝"
                  },
                  {
                    title: "Bien-être",
                    subtitle: "Équilibre professionnel",
                    description: "Proposez des événements qui améliorent concrètement la qualité de vie au travail : bien-être, équilibre, sens. En mettant en avant des partenaires locaux engagés, vous incarnez vos valeurs RSE auprès de vos collaborateurs.",
                    benefits: ["Stress réduit", "Bien-être au travail", "Productivité optimisée"],
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
                          Créez l'expérience parfaite pour votre équipe
                        </span>
                      </h3>
                      <p className="text-2xl text-[#666666] font-light max-w-4xl mx-auto leading-relaxed mb-8">
                        Composez votre journée idéale en combinant différents temps forts.
                        <br />
                        Chaque module est conçu pour répondre à vos objectifs de cohésion, de bien-être ou de valorisation de vos collaborateurs.
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
                        </div>

                        {/* Composants modulaires */}
                         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                           {/* Petit-déjeuner d'équipe */}
                          <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#F74AA1]/20">
                            <div className="text-center">
                              <div className="w-12 h-12 bg-gradient-to-r from-[#F74AA1] to-[#FB793F] rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-white text-lg">☕</span>
                              </div>
                               <h5 className="font-bold text-[#1a1a1a] mb-2">Petit-déjeuner d'équipe</h5>
                               <p className="text-sm text-[#666666]">Démarrez la journée par un moment fédérateur qui casse les silos et favorise des échanges naturels entre collaborateurs.</p>
                            </div>
                          </div>

                           {/* Activité collaborative */}
                          <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#FB793F]/20">
                            <div className="text-center">
                              <div className="w-12 h-12 bg-gradient-to-r from-[#FB793F] to-[#F59E3F] rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                 <span className="text-white text-lg">🤝</span>
                              </div>
                               <h5 className="font-bold text-[#1a1a1a] mb-2">Activité collaborative</h5>
                               <p className="text-sm text-[#666666]">Stimulez l'entraide, la créativité et la confiance grâce à des défis collectifs adaptés à votre culture d'entreprise.</p>
                            </div>
                          </div>

                           {/* Déjeuner convivial */}
                          <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#F59E3F]/20">
                            <div className="text-center">
                              <div className="w-12 h-12 bg-gradient-to-r from-[#F59E3F] to-[#F74AA1] rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-white text-lg">🍽️</span>
                              </div>
                               <h5 className="font-bold text-[#1a1a1a] mb-2">Déjeuner convivial</h5>
                               <p className="text-sm text-[#666666]">Un repas partagé dans un cadre local authentique : l'occasion de renforcer les liens de manière informelle et inclusive.</p>
                            </div>
                          </div>

                           {/* Découverte culturelle */}
                          <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#F74AA1]/20">
                            <div className="text-center">
                              <div className="w-12 h-12 bg-gradient-to-r from-[#F74AA1] to-[#FB793F] rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                 <span className="text-white text-lg">🏛️</span>
                              </div>
                               <h5 className="font-bold text-[#1a1a1a] mb-2">Découverte culturelle</h5>
                               <p className="text-sm text-[#666666]">Valorisez votre ancrage territorial en faisant découvrir le patrimoine bordelais à travers des expériences uniques (visite, dégustation, rencontre avec des artisans).</p>
                             </div>
                           </div>

                           {/* Atelier bien-être */}
                           <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#FB793F]/20">
                             <div className="text-center">
                               <div className="w-12 h-12 bg-gradient-to-r from-[#FB793F] to-[#F59E3F] rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                 <span className="text-white text-lg">🧘</span>
                               </div>
                               <h5 className="font-bold text-[#1a1a1a] mb-2">Atelier bien-être</h5>
                               <p className="text-sm text-[#666666]">Offrez une pause ressourçante (yoga, méditation, massage) qui agit directement sur la qualité de vie au travail et la motivation des équipes.</p>
                             </div>
                           </div>

                           {/* Afterwork festif */}
                           <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#F59E3F]/20">
                             <div className="text-center">
                               <div className="w-12 h-12 bg-gradient-to-r from-[#F59E3F] to-[#F74AA1] rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                 <span className="text-white text-lg">🎉</span>
                               </div>
                               <h5 className="font-bold text-[#1a1a1a] mb-2">Afterwork festif</h5>
                               <p className="text-sm text-[#666666]">Clôturez la journée dans une ambiance décontractée qui renforce le sentiment d'appartenance et laisse un souvenir positif partagé.</p>
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
                                <span className="text-sm font-semibold text-[#F59E3F]">Entreprise 50 personnes</span>
                              </div>
                              <h5 className="font-bold text-[#1a1a1a] mb-2">Journée cohésion d'équipe</h5>
                            </div>
                            <div className="space-y-2 mb-4">
                              <div className="flex items-center gap-2 text-sm text-[#666666]">
                                <div className="w-2 h-2 bg-[#F74AA1] rounded-full"></div>
                                <span>Team building matinal + déjeuner</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-[#666666]">
                                <div className="w-2 h-2 bg-[#FB793F] rounded-full"></div>
                                <span>Découverte patrimoine bordelais</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-[#666666]">
                                <div className="w-2 h-2 bg-[#F59E3F] rounded-full"></div>
                                <span>Afterwork convivial</span>
                              </div>
                            </div>
                            <div className="text-xs text-[#666666] italic">
                              "Esprit d'équipe renforcé, communication améliorée"
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
                            ✓ Conseil personnalisé ✓ Proposition sur-mesure ✓ Gestion complète
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
                                <h4 className="text-2xl font-bold text-[#1a1a1a]">Analyse de vos enjeux</h4>
                              </div>
                              <p className="text-[#666666] text-lg leading-relaxed mb-4">
                                Chaque événement commence par une phase d'écoute active. Nous explorons vos besoins RH et vos ambitions managériales afin de transformer un simple moment en levier stratégique de cohésion et de marque employeur.
                              </p>
                              <div className="grid grid-cols-1 gap-3">
                                <div className="flex items-center gap-2 text-sm text-[#666666]">
                                  <div className="w-2 h-2 bg-[#F74AA1] rounded-full"></div>
                                  <span>Identification claire de vos objectifs : cohésion, intégration, QVCT, RSE, célébration</span>
                  </div>
                                <div className="flex items-center gap-2 text-sm text-[#666666]">
                                  <div className="w-2 h-2 bg-[#F74AA1] rounded-full"></div>
                                  <span>Ateliers d'échanges pour comprendre la réalité de vos équipes et leur culture</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-[#666666]">
                                  <div className="w-2 h-2 bg-[#F74AA1] rounded-full"></div>
                                  <span>Détection des leviers d'engagement les plus pertinents à activer</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-[#666666]">
                                  <div className="w-2 h-2 bg-[#F74AA1] rounded-full"></div>
                                  <span>Recommandation du format d'événement le plus aligné à vos priorités</span>
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
                              </div>
                              <p className="text-[#666666] text-lg leading-relaxed mb-4">
                                Nous construisons un parcours unique, conçu avec vous, et ancré dans l'authenticité du territoire. L'expérience est pensée pour incarner vos valeurs et générer un impact durable.
                              </p>
                              <div className="grid grid-cols-1 gap-3">
                                <div className="flex items-center gap-2 text-sm text-[#666666]">
                                  <div className="w-2 h-2 bg-[#F74AA1] rounded-full"></div>
                                  <span>Sélection des modules adaptés pour répondre à vos objectifs RH</span>
                  </div>
                                <div className="flex items-center gap-2 text-sm text-[#666666]">
                                  <div className="w-2 h-2 bg-[#F74AA1] rounded-full"></div>
                                  <span>Partenaires locaux choisis selon une charte qualité et un alignement de valeurs</span>
                </div>
                                <div className="flex items-center gap-2 text-sm text-[#666666]">
                                  <div className="w-2 h-2 bg-[#F74AA1] rounded-full"></div>
                                  <span>Assemblage d'un déroulé cohérent et engageant, pensé comme une histoire à vivre</span>
              </div>
                                <div className="flex items-center gap-2 text-sm text-[#666666]">
                                  <div className="w-2 h-2 bg-[#F74AA1] rounded-full"></div>
                                  <span>Validation du programme en co-création avec vos équipes pour garantir l'adhésion</span>
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
                                <h4 className="text-2xl font-bold text-[#1a1a1a]">Organisation clé en main</h4>
                </div>
                              <p className="text-[#666666] text-lg leading-relaxed mb-4">
                                Nous orchestrons chaque détail avec rigueur, pour que votre rôle se limite à profiter de l'expérience aux côtés de vos collaborateurs.
                              </p>
                              <div className="grid grid-cols-1 gap-3">
                                <div className="flex items-center gap-2 text-sm text-[#666666]">
                                  <div className="w-2 h-2 bg-[#F74AA1] rounded-full"></div>
                                  <span>Gestion intégrale de la logistique et des prestataires</span>
                  </div>
                                <div className="flex items-center gap-2 text-sm text-[#666666]">
                                  <div className="w-2 h-2 bg-[#F74AA1] rounded-full"></div>
                                  <span>Un interlocuteur unique pour simplifier vos échanges et gagner du temps</span>
                </div>
                                <div className="flex items-center gap-2 text-sm text-[#666666]">
                                  <div className="w-2 h-2 bg-[#F74AA1] rounded-full"></div>
                                  <span>Transmission d'un déroulé clair et structuré pour rassurer vos équipes</span>
              </div>
                                <div className="flex items-center gap-2 text-sm text-[#666666]">
                                  <div className="w-2 h-2 bg-[#F74AA1] rounded-full"></div>
                                  <span>Garantie d'une expérience fluide, mémorable et alignée avec vos objectifs RH</span>
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

       {/* Section Avantages Convertisseurs - Version Spectaculaire */}
       <section id="pourquoi" className="py-24 bg-gradient-to-br from-[#F74AA1]/5 via-white to-[#F59E3F]/5 relative overflow-hidden">
         {/* Éléments décoratifs dynamiques */}
         <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-[#F74AA1]/10 to-transparent rounded-full -translate-x-48 -translate-y-48 animate-pulse"></div>
         <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-l from-[#F59E3F]/10 to-transparent rounded-full translate-x-40 translate-y-40 animate-pulse delay-1000"></div>
         
         <div className="container-veever relative z-10">
           {/* Titre impactant */}
           <div className="text-center mb-16">
             <h2 className="text-6xl font-bold mb-6 leading-tight">
              Pourquoi <span className="bg-gradient-to-r from-[#F74AA1] to-[#F59E3F] bg-clip-text text-transparent">Veever Pro</span> transforme votre marque employeur ?
            </h2>
             <p className="text-2xl text-[#666666] max-w-4xl mx-auto leading-relaxed font-light">
               Nous transformons vos événements internes en leviers stratégiques de cohésion, d'engagement et de fidélisation.
               <br />
               Chaque expérience est conçue pour renforcer la fierté d'appartenance et incarner vos valeurs d'entreprise.
            </p>
          </div>

           {/* Encarts principaux */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
             {/* Encart 1 - Impact RH */}
             <div className="group relative bg-white rounded-3xl p-8 shadow-2xl border border-[#F74AA1]/20 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-[#F74AA1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               <div className="relative z-10">
                 <div className="flex items-center gap-6 mb-6">
                   <div className="w-24 h-24 bg-gradient-to-r from-[#F74AA1] to-[#FB793F] rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                     <Target className="w-12 h-12 text-white" />
                </div>
                <div>
                     <h3 className="text-3xl font-bold text-[#1a1a1a] mb-2">Un impact RH précieux</h3>
                     <p className="text-[#F74AA1] font-semibold text-lg">pour vos équipes</p>
                    </div>
                    </div>
                 <p className="text-[#666666] text-xl leading-relaxed">
                   Nos événements ne sont pas de simples moments conviviaux : ils répondent à vos enjeux RH. Intégration réussie, cohésion renforcée, meilleure rétention des talents – chaque instant vécu contribue à la performance collective.
                 </p>
              </div>
            </div>

             {/* Encart 2 - Ancrage territorial */}
             <div className="group relative bg-white rounded-3xl p-8 shadow-2xl border border-[#F59E3F]/20 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-[#F59E3F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               <div className="relative z-10">
                 <div className="flex items-center gap-6 mb-6">
                   <div className="w-24 h-24 bg-gradient-to-r from-[#FB793F] to-[#F59E3F] rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                     <MapPin className="w-12 h-12 text-white" />
                </div>
                <div>
                     <h3 className="text-3xl font-bold text-[#1a1a1a] mb-2">Un ancrage territorial</h3>
                     <p className="text-[#F59E3F] font-semibold text-lg">et culturel unique</p>
                    </div>
                    </div>
                 <p className="text-[#666666] text-xl leading-relaxed">
                   Nous valorisons le tissu local en travaillant avec des partenaires bordelais sélectionnés pour leur fiabilité et leur authenticité. Vos collaborateurs vivent une expérience enracinée dans le territoire, qui fait rayonner vos engagements RSE.
                 </p>
              </div>
            </div>
          </div>

           {/* Cartes différenciatrices */}
           <div className="grid md:grid-cols-3 gap-8 mb-16">
             {[
               {
                 title: "Simplicité opérationnelle",
                 description: "Un interlocuteur unique, une organisation fluide : vous gagnez du temps, vos équipes gagnent en engagement.",
                 icon: Settings,
                color: "from-[#F74AA1] to-[#FB793F]"
              },
              {
                 title: "Expériences mémorables",
                 description: "Des formats exclusifs et authentiques qui marquent durablement vos collaborateurs.",
                 icon: Heart,
                color: "from-[#FB793F] to-[#F59E3F]"
              },
              {
                 title: "Alignement sur vos valeurs",
                 description: "Des modules pensés pour refléter votre culture et renforcer la marque employeur.",
                icon: Target,
                 color: "from-[#F59E3F] to-[#F74AA1]"
              }
            ].map((item, index) => (
               <div key={index} className="group bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-[#F74AA1]/30 relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 <div className="relative z-10 text-center">
                   <div className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                     <item.icon className="w-10 h-10 text-white" />
                  </div>
                   <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">{item.title}</h3>
                   <p className="text-[#666666] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
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

      {/* Section FAQ Organisée */}
      <section id="faq" className="py-24 bg-gradient-to-br from-white/5 to-[#FAF0ED]/30">
        <div className="container-veever">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-[#1a1a1a]">
              Questions <span className="bg-gradient-to-r from-[#F74AA1] to-[#F59E3F] bg-clip-text text-transparent">fréquentes</span>
            </h2>
            <p className="text-xl text-[#666666] max-w-3xl mx-auto">
              Tout ce que vous devez savoir sur nos événements d'entreprise à Bordeaux
            </p>
          </div>

          {/* Navigation par thématiques */}
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {[
                { id: 'services', label: '🎯 Nos Services', icon: '🎯' },
                { id: 'logistique', label: '📍 Logistique', icon: '📍' },
                { id: 'organisation', label: '⏰ Organisation', icon: '⏰' },
                { id: 'personnalisation', label: '🎨 Personnalisation', icon: '🎨' },
                { id: 'tarifs', label: '💰 Tarifs', icon: '💰' },
                { id: 'accessibilite', label: '♿ Accessibilité', icon: '♿' },
                { id: 'securite', label: '🔒 Sécurité', icon: '🔒' },
                { id: 'options', label: '🎁 Options', icon: '🎁' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFaqTab(tab.id)}
                  className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                    activeFaqTab === tab.id
                      ? 'bg-gradient-to-r from-[#F74AA1] to-[#F59E3F] text-white shadow-lg'
                      : 'bg-white text-[#666666] hover:bg-[#F74AA1]/10 hover:text-[#F74AA1] border border-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Contenu FAQ par thématique */}
            <div className="space-y-6">
              {/* Services & Approche */}
              {activeFaqTab === 'services' && (
                <div className="space-y-6">
                  {[
                    {
                      question: "Quels types d'événements organisez-vous à Bordeaux ?",
                      answer: "Onboarding, célébrations/anniversaires, cohésion & team building, bien-être/QVCT, afterworks, parcours culturels, journées thématiques (Noël, rentrée, kick-off), et programmes récurrents."
                    },
                    {
                      question: "C'est quoi votre approche modulaire concrètement ?",
                      answer: "On assemble des \"briques\" (petit-déjeuner, activité collaborative, déjeuner, découverte culturelle, atelier bien-être, afterwork) pour construire votre journée idéale, alignée à vos objectifs RH."
                    },
                    {
                      question: "Que comprend votre accompagnement ?",
                      answer: "Cadrage des objectifs, conception sur-mesure, sélection et coordination des partenaires, logistique complète jour J, interlocuteur unique et rétro-planning clair."
                    },
                    {
                      question: "Qu'est-ce qui n'est pas inclus par défaut ?",
                      answer: "Transport dédié, captation photo/vidéo, matériel technique spécifique, privatisations totales haut de gamme. Disponibles en option."
                    }
                  ].map((faq, index) => (
                    <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                      <details className="group">
                        <summary className="flex items-center justify-between cursor-pointer">
                          <h3 className="text-xl font-bold text-[#1a1a1a] pr-4">{faq.question}</h3>
                          <ChevronRight className="w-6 h-6 text-[#F74AA1] group-open:rotate-90 transition-transform flex-shrink-0" />
                        </summary>
                        <div className="mt-6 pt-6 border-t border-gray-100">
                          <p className="text-[#666666] leading-relaxed text-lg">{faq.answer}</p>
                        </div>
                      </details>
                    </div>
                  ))}
                </div>
              )}

              {/* Logistique */}
              {activeFaqTab === 'logistique' && (
                <div className="space-y-6">
                  {[
                    {
                      question: "Dans quelles zones intervenez-vous ?",
                      answer: "Bordeaux et sa métropole en priorité. Bassin d'Arcachon et Gironde élargie sur demande."
                    },
                    {
                      question: "Pour combien de participants ?",
                      answer: "Idéal pour 5 à 30 personnes. Au-delà, on adapte (privatisations, multi-groupes, rotations) sur devis."
                    },
                    {
                      question: "Pouvez-vous intervenir dans nos locaux ?",
                      answer: "Oui, si l'activité s'y prête (atelier, bien-être, petit-déjeuner, afterwork). Sinon, nous proposons une alternative proche."
                    },
                    {
                      question: "Et si la météo se dégrade ?",
                      answer: "Plan B prévu à la conception (lieu couvert, variante d'activité) et bascule rapide si nécessaire."
              }
            ].map((faq, index) => (
                    <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer">
                          <h3 className="text-xl font-bold text-[#1a1a1a] pr-4">{faq.question}</h3>
                          <ChevronRight className="w-6 h-6 text-[#F74AA1] group-open:rotate-90 transition-transform flex-shrink-0" />
                  </summary>
                        <div className="mt-6 pt-6 border-t border-gray-100">
                          <p className="text-[#666666] leading-relaxed text-lg">{faq.answer}</p>
                </div>
                </details>
                </div>
            ))}
                </div>
              )}

              {/* Organisation */}
              {activeFaqTab === 'organisation' && (
                <div className="space-y-6">
                  {[
                    {
                      question: "Quels délais d'organisation prévoir ?",
                      answer: "Idéalement 2 à 4 semaines. Dernière minute possible selon disponibilités partenaires."
                    },
                    {
                      question: "Qui sera mon interlocuteur ?",
                      answer: "Un chef de projet dédié du cadrage au jour J (et au debrief), avec un point de contact unique."
                    },
                    {
                      question: "Faites-vous des programmes annuels ?",
                      answer: "Oui : 4 temps forts RH/an avec chef de projet dédié, calendrier, et suivi d'impact (parfait pour ancrer des rituels)."
                    },
                    {
                      question: "Comment mesurez-vous l'impact RH ?",
                      answer: "Mini-questionnaire post-événement, debrief à chaud, synthèse d'insights (cohésion, appartenance, bien-être perçu) et pistes d'amélioration pour les prochains temps forts."
                    }
                  ].map((faq, index) => (
                    <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                      <details className="group">
                        <summary className="flex items-center justify-between cursor-pointer">
                          <h3 className="text-xl font-bold text-[#1a1a1a] pr-4">{faq.question}</h3>
                          <ChevronRight className="w-6 h-6 text-[#F74AA1] group-open:rotate-90 transition-transform flex-shrink-0" />
                        </summary>
                        <div className="mt-6 pt-6 border-t border-gray-100">
                          <p className="text-[#666666] leading-relaxed text-lg">{faq.answer}</p>
                        </div>
                      </details>
                    </div>
                  ))}
                </div>
              )}

              {/* Personnalisation */}
              {activeFaqTab === 'personnalisation' && (
                <div className="space-y-6">
                  {[
                    {
                      question: "Peut-on personnaliser selon nos valeurs et contraintes ?",
                      answer: "Oui : thématiques, tempo de la journée, attentions personnalisées, contraintes alimentaires, accessibilité, budget encadré. Nos prestataires restent en back-office (marque blanche possible)."
                    },
                    {
                      question: "Proposez-vous des événements en marque blanche ?",
                      answer: "Oui. Nous pouvons ne pas afficher nos partenaires et intégrer votre identité (supports, éléments de décor, wording)."
                    },
                    {
                      question: "Comment sélectionnez-vous vos partenaires ?",
                      answer: "Charte qualité : fiabilité, hospitalité, sécurité, capacité d'accueil, alignement de valeurs (local, authentique, responsable). Suivi continu des retours clients."
                    }
                  ].map((faq, index) => (
                    <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                      <details className="group">
                        <summary className="flex items-center justify-between cursor-pointer">
                          <h3 className="text-xl font-bold text-[#1a1a1a] pr-4">{faq.question}</h3>
                          <ChevronRight className="w-6 h-6 text-[#F74AA1] group-open:rotate-90 transition-transform flex-shrink-0" />
                        </summary>
                        <div className="mt-6 pt-6 border-t border-gray-100">
                          <p className="text-[#666666] leading-relaxed text-lg">{faq.answer}</p>
                        </div>
                      </details>
                    </div>
                  ))}
                </div>
              )}

              {/* Tarifs */}
              {activeFaqTab === 'tarifs' && (
                <div className="space-y-6">
                  {[
                    {
                      question: "Quels sont vos tarifs ?",
                      answer: "Selon modules, saisonnalité, taille du groupe et niveau de personnalisation. De l'essentiel au premium, toujours avec budget sécurisé et devis transparent."
                    },
                    {
                      question: "Quelles sont vos conditions d'annulation / report ?",
                      answer: "Précisées au devis selon les partenaires. Nous privilégions le report plutôt que l'annulation et cherchons des solutions équitables."
                    },
                    {
                      question: "Quels sont les moyens de paiement et modalités de facturation ?",
                      answer: "Devis et bon pour accord, acompte à la validation, solde avant l'événement. Paiement par virement/CB, facturation détaillée (TVA). Veever immatriculée RCS Bordeaux 944 947 795."
                    }
                  ].map((faq, index) => (
                    <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                      <details className="group">
                        <summary className="flex items-center justify-between cursor-pointer">
                          <h3 className="text-xl font-bold text-[#1a1a1a] pr-4">{faq.question}</h3>
                          <ChevronRight className="w-6 h-6 text-[#F74AA1] group-open:rotate-90 transition-transform flex-shrink-0" />
                        </summary>
                        <div className="mt-6 pt-6 border-t border-gray-100">
                          <p className="text-[#666666] leading-relaxed text-lg">{faq.answer}</p>
                        </div>
                      </details>
                    </div>
                  ))}
                </div>
              )}

              {/* Accessibilité */}
              {activeFaqTab === 'accessibilite' && (
                <div className="space-y-6">
                  {[
                    {
                      question: "Accessibilité & régimes alimentaires ?",
                      answer: "Options sans allergènes, végétarien/vegan, halal sur demande. Parcours accessibles selon les lieux (information fournie à la validation)."
                    },
                    {
                      question: "Quelles langues sont possibles ?",
                      answer: "Français et anglais (autres langues sur demande avec guide/animateur dédié)."
                    },
                    {
                      question: "Proposez-vous des événements sans alcool ?",
                      answer: "Bien sûr. Cartes softs locales, mocktails, dégustations non alcoolisées, accords mets & thés, etc."
                    }
                  ].map((faq, index) => (
                    <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                      <details className="group">
                        <summary className="flex items-center justify-between cursor-pointer">
                          <h3 className="text-xl font-bold text-[#1a1a1a] pr-4">{faq.question}</h3>
                          <ChevronRight className="w-6 h-6 text-[#F74AA1] group-open:rotate-90 transition-transform flex-shrink-0" />
                        </summary>
                        <div className="mt-6 pt-6 border-t border-gray-100">
                          <p className="text-[#666666] leading-relaxed text-lg">{faq.answer}</p>
                        </div>
                      </details>
                    </div>
                  ))}
                </div>
              )}

              {/* Sécurité */}
              {activeFaqTab === 'securite' && (
                <div className="space-y-6">
                  {[
                    {
                      question: "Sécurité & assurances ?",
                      answer: "Veever SAS et ses partenaires sont couverts par leur RC Pro. Protocoles sécurité adaptés aux activités (brief, encadrement)."
                    },
                    {
                      question: "Protection des données & confidentialité ?",
                      answer: "Données limitées au strict nécessaire (organisation, sécurité). Aucune communication publique sans votre accord."
                    }
                  ].map((faq, index) => (
                    <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                      <details className="group">
                        <summary className="flex items-center justify-between cursor-pointer">
                          <h3 className="text-xl font-bold text-[#1a1a1a] pr-4">{faq.question}</h3>
                          <ChevronRight className="w-6 h-6 text-[#F74AA1] group-open:rotate-90 transition-transform flex-shrink-0" />
                        </summary>
                        <div className="mt-6 pt-6 border-t border-gray-100">
                          <p className="text-[#666666] leading-relaxed text-lg">{faq.answer}</p>
                        </div>
                      </details>
                    </div>
                  ))}
                </div>
              )}

              {/* Options */}
              {activeFaqTab === 'options' && (
                <div className="space-y-6">
                  {[
                    {
                      question: "Offrez-vous des options photo/vidéo ou goodies ?",
                      answer: "En option : photographe/vidéaste, mini-montage souvenir, goodies responsables co-brandés."
                    }
                  ].map((faq, index) => (
                    <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                      <details className="group">
                        <summary className="flex items-center justify-between cursor-pointer">
                          <h3 className="text-xl font-bold text-[#1a1a1a] pr-4">{faq.question}</h3>
                          <ChevronRight className="w-6 h-6 text-[#F74AA1] group-open:rotate-90 transition-transform flex-shrink-0" />
                        </summary>
                        <div className="mt-6 pt-6 border-t border-gray-100">
                          <p className="text-[#666666] leading-relaxed text-lg">{faq.answer}</p>
                        </div>
                      </details>
                    </div>
                  ))}
                </div>
              )}
            </div>
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
                            Réponse personnalisée sous 24h • Proposition sur-mesure • Coordination unique • Gestion complète
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

        {/* Footer moderne et optimisé */}
        <footer className="bg-gradient-to-br from-[#FAF0ED] via-white to-[#F5E6E0] text-[#1a1a1a] relative overflow-hidden">
          {/* Pattern décoratif */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-[#F74AA1]/20 via-transparent to-[#F59E3F]/20"></div>
                    </div>

          <div className="container-veever relative z-10">
            {/* Section principale */}
            <div className="py-0">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                
                {/* Brand & Description - 5 colonnes */}
                <div className="lg:col-span-5">
                  <div className="mb-0">
                    {/* Logo */}
                    <div className="mb-0" style={{marginBottom: '-50px', marginTop: '-100px'}}>
                      <Image
                        src="/images/logo/logo-veever-pro.png"
                        alt="Veever Pro"
                        width={7200}
                        height={2400}
                        className="h-96 w-auto"
                      />
                    </div>
                    
                    <p className="text-lg text-[#333333] leading-relaxed max-w-md mb-0" style={{marginTop: '-30px', marginBottom: '30px'}}>
                      Transformez vos événements RH en leviers stratégiques de cohésion et d'engagement à Bordeaux.
                    </p>
                    
                    {/* CTA principal */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-0" style={{marginTop: '-10px', marginBottom: '-30px'}}>
                      <button 
                        onClick={() => setIsCalendlyOpen(true)}
                        className="px-6 py-3 bg-[#1a1a1a] text-white rounded-xl font-semibold hover:bg-[#333333] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Planifier un appel
                      </button>
                      <button 
                        onClick={() => setIsBuilderOpen(true)}
                        className="px-6 py-3 bg-gradient-to-r from-[#F74AA1] to-[#F59E3F] text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                      >
                        Demander un devis
                      </button>
              </div>
            </div>
          </div>

                {/* Navigation rapide - 3 colonnes */}
                <div className="lg:col-span-3" style={{marginTop: '30px'}}>
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-6">Navigation</h3>
                  <nav className="space-y-4">
                    <Link href="#occasions" className="block text-[#333333] hover:text-[#1a1a1a] transition-colors py-2 hover:translate-x-2 transform duration-300">
                      Nos occasions RH
                    </Link>
                    <Link href="#formats" className="block text-[#333333] hover:text-[#1a1a1a] transition-colors py-2 hover:translate-x-2 transform duration-300">
                      Formats d'événements
                    </Link>
                    <Link href="#pourquoi" className="block text-[#333333] hover:text-[#1a1a1a] transition-colors py-2 hover:translate-x-2 transform duration-300">
                      Pourquoi Veever Pro
                    </Link>
                    <Link href="#benefices" className="block text-[#333333] hover:text-[#1a1a1a] transition-colors py-2 hover:translate-x-2 transform duration-300">
                      Bénéfices RH
                    </Link>
                    <Link href="#faq" className="block text-[#333333] hover:text-[#1a1a1a] transition-colors py-2 hover:translate-x-2 transform duration-300">
                      Questions fréquentes
                    </Link>
                  </nav>
              </div>


                {/* Contact & Localisation - 2 colonnes */}
                <div className="lg:col-span-2" style={{marginTop: '30px'}}>
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-6">Contact</h3>
                  <div className="space-y-6">
                    {/* Email */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#F74AA1] to-[#F59E3F] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-white" />
            </div>
            <div>
                        <p className="text-[#1a1a1a] font-medium">contact@veeverpro.com</p>
                        <p className="text-[#666666] text-sm">Réponse sous 24h</p>
              </div>
            </div>

                    {/* Téléphone */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#F74AA1] to-[#F59E3F] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-white" />
                </div>
            <div>
                        <p className="text-[#1a1a1a] font-medium">+33 5 56 12 34 56</p>
                        <p className="text-[#666666] text-sm">Lun-Ven 9h-18h</p>
              </div>
            </div>

                    {/* Localisation */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#F74AA1] to-[#F59E3F] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
            </div>
            <div>
                        <p className="text-[#1a1a1a] font-medium">Bordeaux, France</p>
                        <p className="text-[#666666] text-sm">Métropole de Bordeaux</p>
                  </div>
            </div>
          </div>
            </div>
            </div>
          </div>

            {/* Barre de séparation */}
            <div className="border-t border-[#F74AA1]/20" style={{marginTop: '100px'}}></div>

            {/* Bottom bar */}
            <div className="py-6" style={{marginTop: '0px'}}>
              <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                {/* Copyright */}
                <div className="text-[#666666] text-sm">
                &copy; 2024 VEEVER PRO. Tous droits réservés.
              </div>
                
                {/* Liens légaux */}
                <div className="flex items-center gap-8 text-sm">
                  <Link href="#mentions-legales" className="text-[#666666] hover:text-[#1a1a1a] transition-colors">
                    Mentions légales
                </Link>
                  <Link href="#confidentialite" className="text-[#666666] hover:text-[#1a1a1a] transition-colors">
                    Confidentialité
                </Link>
                  <Link href="#cgv" className="text-[#666666] hover:text-[#1a1a1a] transition-colors">
                    CGV
                </Link>
              </div>
                
                {/* Réseaux sociaux */}
                <div className="flex items-center gap-6">
                  <a 
                    href="https://linkedin.com/company/veever-pro" 
                    className="w-10 h-10 bg-gray-200 hover:bg-[#F74AA1] rounded-xl flex items-center justify-center transition-all duration-300 group"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5 text-[#666666] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://instagram.com/veever.pro" 
                    className="w-10 h-10 bg-gray-200 hover:bg-[#F74AA1] rounded-xl flex items-center justify-center transition-all duration-300 group"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5 text-[#666666] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.405c-.49 0-.875-.385-.875-.875s.385-.875.875-.875.875.385.875.875-.385.875-.875.875zm-3.323 9.405c-2.026 0-3.323-1.297-3.323-3.323s1.297-3.323 3.323-3.323 3.323 1.297 3.323 3.323-1.297 3.323-3.323 3.323z"/>
                    </svg>
                  </a>
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