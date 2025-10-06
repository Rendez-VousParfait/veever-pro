'use client';

import { useState, useEffect } from 'react';
import { firebaseCMS, HomepageSection, Project, AboutData, Service, ContactData } from '@/lib/cms/firebase-cms';

// Hook générique pour les collections Firestore
export function useFirebaseCollection<T>(
  getData: () => Promise<T[]>,
  subscribeData: (callback: (data: T[]) => void) => () => void,
  defaultValue: T[]
) {
  const [data, setData] = useState<T[]>(defaultValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Charger les données initiales
    const loadData = async () => {
      try {
        setLoading(true);
        const result = await getData();
        setData(result.length > 0 ? result : defaultValue);
        setError(null);
      } catch (err) {
        setError('Erreur lors du chargement des données');
        console.error(err);
        setData(defaultValue);
      } finally {
        setLoading(false);
      }
    };

    loadData();

    // S'abonner aux changements en temps réel
    const unsubscribe = subscribeData((newData) => {
      setData(newData.length > 0 ? newData : defaultValue);
      setError(null);
    });

    return () => unsubscribe();
  }, []);

  return { data, loading, error, setData };
}

// Hook générique pour les documents Firestore
export function useFirebaseDocument<T>(
  getData: () => Promise<T | null>,
  defaultValue: T
) {
  const [data, setData] = useState<T>(defaultValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const result = await getData();
        setData(result || defaultValue);
        setError(null);
      } catch (err) {
        setError('Erreur lors du chargement des données');
        console.error(err);
        setData(defaultValue);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { data, loading, error, setData };
}

// Données par défaut (même que dans useCMSData.ts)
export const DEFAULT_HOMEPAGE_SECTIONS: HomepageSection[] = [
  {
    id: "projects",
    title: "Projets",
    subtitle: "Mes réalisations",
    description: "Découvrez mes derniers projets de sound design et d'ingénierie audio. De la publicité à l'animation, en passant par le cinéma et la télévision.",
    image: "/images/sections/projects/93e8cae5-7e8a-4b3f-84cc-40c0f9562286.jpg",
    href: "/projects",
    gradient: "from-cyan-400 to-blue-500",
    stats: "9+ projets",
    icon: "🎵",
    order: 1
  },
  {
    id: "about",
    title: "À propos",
    subtitle: "Mon parcours",
    description: "Plus de 10 ans d'expérience dans la création sonore. Découvrez mon approche artistique et technique pour créer des identités sonores uniques.",
    image: "/images/sections/about/9f9abbc2-f102-42af-8983-f756faec9186.jpg",
    href: "/about",
    gradient: "from-blue-400 to-purple-500",
    stats: "10+ années",
    icon: "👨‍🎨",
    order: 2
  },
  {
    id: "services",
    title: "Services",
    subtitle: "Mes expertises",
    description: "Solutions complètes de production audio : sound design, mixage, mastering et identités sonores. De la conception à la livraison finale.",
    image: "/images/sections/services/3fdee294-16d3-4906-8547-9d1cc64ad39f.jpg",
    href: "/services",
    gradient: "from-purple-400 to-pink-500",
    stats: "3 services",
    icon: "⚙️",
    order: 3
  },
  {
    id: "contact",
    title: "Contact",
    subtitle: "Travaillons ensemble",
    description: "Prêt à donner vie à votre projet ? Discutons de vos besoins et créons ensemble une identité sonore qui vous ressemble.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    href: "/contact",
    gradient: "from-pink-400 to-red-500",
    stats: "24h réponse",
    icon: "📧",
    order: 4
  }
];

export const DEFAULT_PROJECTS: Project[] = [
  {
    id: "1",
    title: "BETCLIC",
    subtitle: "Best of TV Ads",
    year: "2024",
    description: "Music & Sound Design",
    category: "institutional",
    image: "/images/sections/projects/a38ebc51-f8b4-4fa5-9d41-e0ebe5cceede.jpg",
    longDescription: "Création d'une identité sonore moderne et impactante pour les publicités TV de Betclic. Le projet inclut des jingles dynamiques et des transitions sonores qui renforcent la marque.",
    youtubeUrl: "",
    featured: true,
    order: 1
  },
  {
    id: "2",
    title: "OM",
    subtitle: "Odysse Massalia",
    year: "2023",
    description: "Music & Sound Design",
    category: "institutional",
    image: "/images/sections/projects/265a06f2-bf7d-437b-8d11-9a37bc97fa12.jpg",
    longDescription: "Sound design épique pour la campagne de l'Olympique de Marseille. Ambiance sonore qui évoque la passion du football et l'histoire du club.",
    youtubeUrl: "",
    featured: true,
    order: 2
  },
  {
    id: "3",
    title: "FFF",
    subtitle: "Sonic branding",
    year: "2024",
    description: "Music & Sound Design",
    category: "institutional",
    image: "/images/sections/projects/93e8cae5-7e8a-4b3f-84cc-40c0f9562286.jpg",
    longDescription: "Création de l'identité sonore officielle de la Fédération Française de Football. Hymne et signatures sonores utilisés dans tous les événements officiels.",
    youtubeUrl: "",
    featured: true,
    order: 3
  }
];

export const DEFAULT_ABOUT_DATA: AboutData = {
  title: "À PROPOS DE VALENTIN",
  bio: {
    heading: "Sound Designer Passionné",
    paragraphs: [
      "Avec plus de 10 ans d'expérience dans la création sonore, je me spécialise dans la conception d'identités sonores uniques et d'expériences audio immersives.",
      "Mon approche combine créativité artistique et expertise technique pour créer des sons qui racontent des histoires et évoquent des émotions.",
      "De la publicité à l'animation, en passant par le cinéma et la télévision, chaque projet est une opportunité de repousser les limites du possible."
    ]
  },
  formation: [
    {
      title: "Master Sound Design",
      institution: "École Nationale Supérieure des Arts",
      year: "2020 - 2022"
    },
    {
      title: "Licence Audio-Visuel",
      institution: "Université de Paris",
      year: "2017 - 2020"
    },
    {
      title: "Certification Pro Tools",
      institution: "Avid Technology",
      year: "2019"
    }
  ],
  competences: {
    techniques: [
      { name: "Sound Design", level: 95 },
      { name: "Mixage Audio", level: 90 },
      { name: "Mastering", level: 85 }
    ],
    specialites: [
      "Identités sonores",
      "Sound design cinéma",
      "Audio publicitaire",
      "Musique d'ambiance"
    ]
  },
  reseaux: [
    { name: "LinkedIn", url: "https://linkedin.com/in/valentinlevraud" },
    { name: "Behance", url: "https://behance.net/valentinlevraud" }
  ]
};

export const DEFAULT_SERVICES: Service[] = [
  {
    id: "1",
    title: "Whole Package",
    subtitle: "Solution complète de production audio",
    description: "Service complet incluant la conception, la production, le mixage et le mastering de votre projet audio. De l'idée initiale à la livraison finale, je m'occupe de tout le processus créatif et technique.",
    features: [
      "Conception de l'identité sonore",
      "Production audio complète",
      "Mixage professionnel",
      "Mastering final",
      "Livraison multi-formats",
      "Support post-production"
    ],
    price: "Sur devis",
    duration: "2-4 semaines",
    youtubeUrl: "",
    order: 1
  },
  {
    id: "2",
    title: "Audio Reworking",
    subtitle: "Remasterisation et amélioration audio",
    description: "Amélioration et optimisation de vos fichiers audio existants. Remasterisation, nettoyage du bruit, amélioration de la qualité et adaptation aux différents supports de diffusion.",
    features: [
      "Nettoyage du bruit",
      "Amélioration de la qualité",
      "Remasterisation",
      "Optimisation des fréquences",
      "Adaptation multi-supports",
      "Conseils techniques"
    ],
    price: "À partir de 500€",
    duration: "1-2 semaines",
    youtubeUrl: "",
    order: 2
  },
  {
    id: "3",
    title: "Sound Design",
    subtitle: "Création d'identités sonores uniques",
    description: "Création d'identités sonores personnalisées pour votre marque ou projet. Jingles, signatures sonores, ambiances et effets qui définissent votre univers audio unique.",
    features: [
      "Identité sonore personnalisée",
      "Jingles et signatures",
      "Ambiances sonores",
      "Effets audio",
      "Charte sonore",
      "Formation équipe"
    ],
    price: "À partir de 800€",
    duration: "2-3 semaines",
    youtubeUrl: "",
    order: 3
  }
];

export const DEFAULT_CONTACT_DATA: ContactData = {
  title: "CONTACTEZ-MOI & DÉMARRONS",
  info: {
    email: "contact@valentinlevraud.com",
    phone: "+33 6 XX XX XX XX",
    location: "Paris, France",
    responseTime: "Réponse sous 24h",
    availability: "Lun-Ven, 9h-18h",
    remoteWork: "Travail à distance disponible"
  },
  faqs: [
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
  ],
  formFields: {
    name: { label: "Nom complet", required: true, type: "text" },
    email: { label: "Email", required: true, type: "email" },
    company: { label: "Entreprise", required: false, type: "text" },
    projectType: { 
      label: "Type de projet", 
      required: true, 
      type: "select",
      options: [
        { value: "", label: "Sélectionnez..." },
        { value: "whole-package", label: "Whole Package" },
        { value: "audio-reworking", label: "Audio Reworking" },
        { value: "sound-design", label: "Sound Design" },
        { value: "other", label: "Autre" }
      ]
    },
    budget: { 
      label: "Budget estimé", 
      required: false, 
      type: "select",
      options: [
        { value: "", label: "Sélectionnez..." },
        { value: "500-1000", label: "500€ - 1000€" },
        { value: "1000-3000", label: "1000€ - 3000€" },
        { value: "3000-5000", label: "3000€ - 5000€" },
        { value: "5000+", label: "5000€+" }
      ]
    },
    timeline: { 
      label: "Délai souhaité", 
      required: false, 
      type: "select",
      options: [
        { value: "", label: "Sélectionnez..." },
        { value: "urgent", label: "Urgent (1-2 semaines)" },
        { value: "normal", label: "Normal (3-4 semaines)" },
        { value: "flexible", label: "Flexible (1-2 mois)" }
      ]
    },
    message: { label: "Description du projet", required: true, type: "textarea" }
  }
};

// Hooks spécialisés pour chaque collection
export function useHomepageSections() {
  return useFirebaseCollection(
    () => firebaseCMS.getHomepageSections(),
    (callback) => firebaseCMS.subscribeToHomepageSections(callback),
    DEFAULT_HOMEPAGE_SECTIONS
  );
}

export function useProjects() {
  return useFirebaseCollection(
    () => firebaseCMS.getProjects(),
    (callback) => firebaseCMS.subscribeToProjects(callback),
    DEFAULT_PROJECTS
  );
}

export function useAboutData() {
  return useFirebaseDocument(
    () => firebaseCMS.getAboutData(),
    DEFAULT_ABOUT_DATA
  );
}

export function useServices() {
  return useFirebaseCollection(
    () => firebaseCMS.getServices(),
    (callback) => firebaseCMS.subscribeToServices(callback),
    DEFAULT_SERVICES
  );
}

export function useContactData() {
  return useFirebaseDocument(
    () => firebaseCMS.getContactData(),
    DEFAULT_CONTACT_DATA
  );
}
