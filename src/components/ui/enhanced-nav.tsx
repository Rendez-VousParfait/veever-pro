"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface EnhancedNavProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

export default function EnhancedNav({ darkMode, toggleTheme }: EnhancedNavProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95]);
  const navBlur = useTransform(scrollY, [0, 100], [8, 20]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Active section detection
      const sections = ['about', 'experience', 'projects', 'skills', 'education', 'languages', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'À propos', href: '#about' },
    { name: 'Expérience', href: '#experience' },
    { name: 'Projets', href: '#projects' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Formation', href: '#education' },
    { name: 'Langues & Intérêts', href: '#languages' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header 
        className="fixed top-0 w-full z-50 transition-all duration-300"
        style={{ 
          backgroundColor: `rgba(15, 23, 42, ${navOpacity})`,
          backdropFilter: `blur(${navBlur}px)`,
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo avec effet morphing */}
            <motion.div 
              className="text-2xl font-bold premium-text relative group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Valentin Joanne</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg -z-10"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            
            {/* Navigation desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="relative text-slate-300 hover:text-white font-medium transition-colors duration-200 group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                  
                  {/* Indicateur actif */}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"
                    initial={{ width: 0 }}
                    animate={{ 
                      width: activeSection === item.href.substring(1) ? '100%' : 0 
                    }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Effet de glow au hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-md -z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              ))}
              
              {/* Bouton de thème amélioré */}
              <motion.button
                onClick={toggleTheme}
                className="relative p-3 rounded-xl modern-glass hover:bg-white/10 transition-all duration-200 group"
                whileHover={{ scale: 1.05, rotate: 180 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: darkMode ? 0 : 180 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {darkMode ? (
                    <Sun className="w-5 h-5 text-yellow-400" />
                  ) : (
                    <Moon className="w-5 h-5 text-slate-400" />
                  )}
                </motion.div>
                
                {/* Halo lumineux */}
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/20 to-orange-400/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </nav>

            {/* Menu mobile */}
            <motion.button
              className="md:hidden p-2 rounded-lg modern-glass"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Menu mobile animé */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="px-6 py-4 bg-slate-900/95 backdrop-blur-lg border-t border-white/10">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-3 text-slate-300 hover:text-white transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : -20
                }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.header>

      {/* Indicateur de progression de lecture */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 z-50 origin-left"
        style={{ scaleX: useTransform(scrollY, [0, 2000], [0, 1]) }}
      />
    </>
  );
} 