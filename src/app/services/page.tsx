'use client';

import Link from "next/link";
import Image from "next/image";
import { useServices } from "@/hooks/useFirebaseCMS";
import YouTubeVideo from "@/components/YouTubeVideo";

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

export default function Services() {
  const { data: services, loading } = useServices();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050507] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Chargement des services...</p>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-[#050507] text-white">
      {/* Header */}
      <header className="relative flex items-center justify-between px-6 py-6 lg:px-12">
        <div className="text-sm font-medium">
          Sound Designer
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className="block">
            <div className="text-2xl font-bold tracking-wider">
              <span className="text-white">VALENTIN</span>
              <span className="text-cyan-400">LEVRAUD</span>
            </div>
          </Link>
        </div>

        <div>
          <Link
            href="mailto:contact@valentinlevraud.com?subject=%5BSITE%5D%20Prise%20de%20contact"
            className="text-sm font-medium hover:opacity-80 transition-opacity flex items-center gap-2"
          >
            Get in touch
            <Image
              src="https://ext.same-assets.com/2883226675/229669324.svg"
              alt="Arrow"
              width={12}
              height={12}
              className="opacity-60"
            />
          </Link>
        </div>
      </header>

      {/* Navigation */}
      <nav className="flex justify-center gap-8 mt-8 mb-16">
        <Link href="/about" className="text-sm font-medium hover:opacity-80 transition-opacity">
          About
        </Link>
        <Link href="/projects" className="text-sm font-medium hover:opacity-80 transition-opacity">
          Projects
        </Link>
        <Link href="/services" className="text-sm font-medium hover:opacity-80 transition-opacity text-cyan-400">
          Services
        </Link>
        <Link href="/contact" className="text-sm font-medium hover:opacity-80 transition-opacity">
          Contact
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="text-center px-6 mb-20">
        <h1 className="text-huge font-special text-white mb-12 leading-none tracking-tight">
          MES SERVICES<br />
          & EXPERTISES
        </h1>
      </section>

      {/* Services */}
      <section className="px-6 mb-20 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-32">
          {services.map((service, index) => (
            <div key={service.id} className={`grid lg:grid-cols-2 gap-16 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              {/* Video - Alternance gauche/droite */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl p-1">
                  <div className="w-full h-full bg-gray-800 rounded-2xl overflow-hidden">
                    {service.youtubeUrl ? (
                      <YouTubeVideo
                        url={service.youtubeUrl}
                        title={service.title}
                        className="w-full h-full"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <div className="w-0 h-0 border-l-[16px] border-l-white border-y-[12px] border-y-transparent ml-1" />
                          </div>
                          <p className="text-gray-400">Aucune vidéo d'illustration</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <h3 className="text-xl text-cyan-400 mb-6">{service.subtitle}</h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price & Duration */}
                <div className="flex items-center gap-8 mb-8">
                  <div>
                    <span className="text-gray-400 text-sm">Prix:</span>
                    <p className="text-xl font-bold">{service.price}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Durée:</span>
                    <p className="text-xl font-bold">{service.duration}</p>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-white/20 rounded-full text-sm font-medium hover:bg-white/5 transition-all duration-300 group"
                >
                  Demander un devis
                  <Image
                    src="https://ext.same-assets.com/2883226675/229669324.svg"
                    alt="Arrow"
                    width={12}
                    height={12}
                    className="ml-2 opacity-60 group-hover:translate-x-1 transition-transform duration-300"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Processus de travail */}
      <section className="px-6 mb-20 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Processus de travail</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi me choisir */}
      <section className="px-6 mb-20 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Pourquoi me choisir ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎵</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Expertise technique</h3>
              <p className="text-gray-300 text-sm">
                Plus de 10 ans d'expérience dans l'industrie audio avec les dernières technologies
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Créativité unique</h3>
              <p className="text-gray-300 text-sm">
                Approche artistique personnalisée pour chaque projet et chaque client
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Livraison rapide</h3>
              <p className="text-gray-300 text-sm">
                Respect des délais et communication transparente tout au long du projet
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 mb-20 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à commencer ?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Discutons de votre projet et créons ensemble quelque chose d'extraordinaire
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 border border-white/20 rounded-full text-sm font-medium hover:bg-white/5 transition-all duration-300 group"
          >
            Démarrer un projet
            <Image
              src="https://ext.same-assets.com/2883226675/229669324.svg"
              alt="Arrow"
              width={12}
              height={12}
              className="ml-2 opacity-60 group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}
