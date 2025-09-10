'use client';

import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { useProjectsData } from "@/hooks/useCMSData";
import YouTubeVideo from "@/components/YouTubeVideo";

const categories = [
  { id: 'all', name: 'Tous les projets', color: 'from-cyan-400 to-blue-500' },
  { id: 'institutional', name: 'Institutionnel', color: 'from-blue-400 to-purple-500' },
  { id: 'shortfilm', name: 'Court-métrage', color: 'from-purple-400 to-pink-500' },
  { id: 'tvshow', name: 'Émission TV', color: 'from-pink-400 to-red-500' },
  { id: 'animation', name: 'Animation', color: 'from-red-400 to-orange-500' }
];

export default function Projects() {
  const { data: projects, loading } = useProjectsData();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050507] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Chargement des projets...</p>
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
        <Link href="/projects" className="text-sm font-medium hover:opacity-80 transition-opacity text-cyan-400">
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
      <section className="text-center px-6 mb-16">
        <h1 className="text-huge font-special text-white mb-12 leading-none tracking-tight">
          MES PROJETS<br />
          & RÉALISATIONS
        </h1>
      </section>

      {/* Category Filter */}
      <section className="px-6 mb-12 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r ' + category.color + ' text-white'
                    : 'border border-white/20 text-white/70 hover:bg-white/5'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 pb-20 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {project.youtubeUrl ? (
                <YouTubeVideo
                  url={project.youtubeUrl}
                  title={project.title}
                  className="w-full h-full"
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </>
              )}

              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="text-xs font-medium text-white/60 mb-1 tracking-wider">
                  {project.title}
                </div>
                <div className="text-lg font-bold text-white mb-1 leading-tight">
                  {project.subtitle}
                </div>
                <div className="text-xs text-white/80">
                  {project.year} • {project.description}
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
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6">
          <div className="bg-gray-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-white/60 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Video */}
                <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                  {selectedProject.youtubeUrl ? (
                    <YouTubeVideo
                      url={selectedProject.youtubeUrl}
                      title={selectedProject.title}
                      className="w-full h-full"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1" />
                        </div>
                        <p className="text-gray-400">Aucune vidéo disponible</p>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Description */}
                <div>
                  <h3 className="text-xl font-bold mb-4">{selectedProject.subtitle}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {selectedProject.longDescription}
                  </p>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Année:</span>
                      <span>{selectedProject.year}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Catégorie:</span>
                      <span className="capitalize">{selectedProject.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Type:</span>
                      <span>{selectedProject.description}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
