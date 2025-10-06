'use client';

import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { useContactData } from "@/hooks/useFirebaseCMS";

const faqs = [
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
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Ici vous pourriez ajouter la logique d'envoi du formulaire
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
        <Link href="/contact" className="text-sm font-medium hover:opacity-80 transition-opacity text-cyan-400">
          Contact
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="text-center px-6 mb-20">
        <h1 className="text-huge font-special text-white mb-12 leading-none tracking-tight">
          Des évènements sur-mesure qui valorisent votre marque employeur à Bordeaux
        </h1>
      </section>

      {/* Contact Info */}
      <section className="px-6 mb-20 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Informations de contact</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Email</h3>
                    <p className="text-gray-300">contact@valentinlevraud.com</p>
                    <p className="text-sm text-gray-500">Réponse sous 24h</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📱</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Téléphone</h3>
                    <p className="text-gray-300">+33 6 XX XX XX XX</p>
                    <p className="text-sm text-gray-500">Lun-Ven, 9h-18h</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Localisation</h3>
                    <p className="text-gray-300">Paris, France</p>
                    <p className="text-sm text-gray-500">Travail à distance disponible</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Formulaire de contact</h2>
              
              {isSubmitted ? (
                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-400/30 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✓</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message envoyé !</h3>
                  <p className="text-gray-300 mb-4">
                    Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 border border-white/20 rounded-full text-sm font-medium hover:bg-white/5 transition-all duration-300"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nom complet *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Entreprise</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Type de projet *</label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors"
                      >
                        <option value="">Sélectionnez...</option>
                        <option value="whole-package">Whole Package</option>
                        <option value="audio-reworking">Audio Reworking</option>
                        <option value="sound-design">Sound Design</option>
                        <option value="other">Autre</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Budget estimé</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors"
                      >
                        <option value="">Sélectionnez...</option>
                        <option value="500-1000">500€ - 1000€</option>
                        <option value="1000-3000">1000€ - 3000€</option>
                        <option value="3000-5000">3000€ - 5000€</option>
                        <option value="5000+">5000€+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Délai souhaité</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors"
                      >
                        <option value="">Sélectionnez...</option>
                        <option value="urgent">Urgent (1-2 semaines)</option>
                        <option value="normal">Normal (3-4 semaines)</option>
                        <option value="flexible">Flexible (1-2 mois)</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Description du projet *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                      placeholder="Décrivez votre projet, vos objectifs et vos attentes..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Envoyer le message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 mb-20 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Questions fréquentes</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 mb-20 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à créer quelque chose d'extraordinaire ?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Discutons de votre projet et créons ensemble une identité sonore qui vous ressemble
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="mailto:contact@valentinlevraud.com?subject=%5BSITE%5D%20Prise%20de%20contact"
              className="inline-flex items-center px-8 py-3 border border-white/20 rounded-full text-sm font-medium hover:bg-white/5 transition-all duration-300 group"
            >
              Envoyer un email
              <Image
                src="https://ext.same-assets.com/2883226675/229669324.svg"
                alt="Arrow"
                width={12}
                height={12}
                className="ml-2 opacity-60 group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full text-sm font-medium hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
            >
              Voir mes services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
