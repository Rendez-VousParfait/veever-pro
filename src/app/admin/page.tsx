'use client';

import Link from "next/link";
import { useState } from "react";

const adminSections = [
  {
    id: "homepage",
    title: "Page d'accueil",
    description: "Gérer les sections principales et le contenu de la page d'accueil",
    href: "/admin/homepage",
    icon: "🏠",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "projects",
    title: "Projets",
    description: "Gérer la galerie de projets et les réalisations",
    href: "/admin/projects",
    icon: "🎵",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "about",
    title: "À propos",
    description: "Modifier les informations personnelles et le parcours",
    href: "/admin/about",
    icon: "👨‍🎨",
    color: "from-green-500 to-teal-500"
  },
  {
    id: "services",
    title: "Services",
    description: "Gérer les services proposés et les tarifs",
    href: "/admin/services",
    icon: "⚙️",
    color: "from-orange-500 to-red-500"
  },
  {
    id: "contact",
    title: "Contact",
    description: "Modifier les informations de contact et le formulaire",
    href: "/admin/contact",
    icon: "📧",
    color: "from-indigo-500 to-purple-500"
  }
];

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Mot de passe incorrect");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#050507] text-white flex items-center justify-center">
        <div className="max-w-md w-full mx-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Administration</h1>
            <p className="text-gray-400">Accès au système de gestion de contenu</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Mot de passe administrateur
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors"
                placeholder="Entrez le mot de passe"
                required
              />
            </div>
            
            {error && (
              <div className="text-red-400 text-sm">{error}</div>
            )}
            
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
            >
              Se connecter
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050507] text-white">
      {/* Header */}
      <header className="border-b border-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Administration</h1>
            <p className="text-gray-400">Gestion du contenu du site</p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="px-4 py-2 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Voir le site
            </Link>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
            >
              Déconnexion
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Tableau de bord</h2>
            <p className="text-gray-400">
              Gérez le contenu de votre site web depuis cette interface d'administration.
            </p>
          </div>

          {/* Admin Sections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adminSections.map((section) => (
              <Link
                key={section.id}
                href={section.href}
                className="group relative overflow-hidden rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-xl flex items-center justify-center text-2xl`}>
                      {section.icon}
                    </div>
                    <h3 className="text-xl font-bold">{section.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {section.description}
                  </p>
                  
                  <div className="flex items-center text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors">
                    Gérer
                    <svg
                      className="ml-2 w-4 h-4 opacity-60 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <div className="text-2xl font-bold text-cyan-400 mb-2">4</div>
              <div className="text-gray-300">Sections principales</div>
            </div>
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <div className="text-2xl font-bold text-green-400 mb-2">9+</div>
              <div className="text-gray-300">Projets réalisés</div>
            </div>
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <div className="text-2xl font-bold text-purple-400 mb-2">3</div>
              <div className="text-gray-300">Services proposés</div>
            </div>
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <div className="text-2xl font-bold text-orange-400 mb-2">24h</div>
              <div className="text-gray-300">Temps de réponse</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
