'use client';

import Link from "next/link";
import Image from "next/image";
import { useHomepageData, useProjectsData } from "@/hooks/useCMSData";

export default function Home() {
  const { data: sections, loading: sectionsLoading } = useHomepageData();
  const { data: projects, loading: projectsLoading } = useProjectsData();

  if (sectionsLoading || projectsLoading) {
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
        <Link href="/services" className="text-sm font-medium hover:opacity-80 transition-opacity">
          Services
        </Link>
        <Link href="/contact" className="text-sm font-medium hover:opacity-80 transition-opacity">
          Contact
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="text-center px-6 mb-20">
        <h1 className="text-huge font-special text-white mb-12 leading-none tracking-tight">
          SOUND DESIGNER<br />
          & AUDIO ENGINEER
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Créateur d'expériences sonores immersives et d'identités sonores uniques. 
          De la publicité à l'animation, je donne vie à vos projets avec le pouvoir du son.
        </p>
      </section>

      {/* Sections Landing Page */}
      <section className="px-6 pb-20 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-32">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image - Alternance gauche/droite */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <Link href={section.href} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                    
                    {/* Hover overlay with arrow */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 border-2 border-white/60 rounded-full flex items-center justify-center group-hover:border-white group-hover:scale-110 transition-all duration-300">
                        <Image
                          src="https://ext.same-assets.com/2883226675/229669324.svg"
                          alt="Arrow"
                          width={20}
                          height={20}
                          className="opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="mb-6">
                  <div className="text-sm font-medium text-cyan-400 tracking-wider mb-4">
                    {section.stats}
                  </div>
                </div>

                <h2 className="text-4xl font-bold text-white mb-4">
                  {section.title}
                </h2>
                <h3 className="text-xl text-gray-300 mb-6">
                  {section.subtitle}
                </h3>
                
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  {section.description}
                </p>

                <Link
                  href={section.href}
                  className="inline-flex items-center px-8 py-4 border border-white/20 rounded-full text-sm font-medium hover:bg-white/5 transition-all duration-300 group"
                >
                  Découvrir cette section
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

      {/* Featured Projects Section */}
      <section className="px-6 pb-20 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Projets récents</h2>
            <p className="text-xl text-gray-300">Quelques-uns de mes derniers travaux</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className="text-xs font-medium text-white/60 mb-1 tracking-wider">
                    {project.title}
                  </div>
                  <div className="text-lg font-bold text-white mb-1 leading-tight">
                    {project.subtitle}
                  </div>
                  <div className="text-xs text-white/80">
                    {project.year}
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 flex items-center justify-center">
                  <div className="w-12 h-12 border border-white/40 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[8px] border-l-white border-y-[6px] border-y-transparent ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link
              href="/projects"
              className="inline-flex items-center px-8 py-4 border border-white/20 rounded-full text-sm font-medium hover:bg-white/5 transition-all duration-300 group"
            >
              Voir tous les projets
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
      </section>
    </div>
  );
}