import { firebaseCMS } from './firebase-cms';
import { 
  DEFAULT_HOMEPAGE_SECTIONS, 
  DEFAULT_PROJECTS, 
  DEFAULT_ABOUT_DATA, 
  DEFAULT_SERVICES, 
  DEFAULT_CONTACT_DATA 
} from '@/hooks/useFirebaseCMS';

export async function initializeAllCMSData() {
  console.log('🚀 Initialisation complète du CMS Firebase...');
  
  try {
    // 1. Initialiser les sections de la page d'accueil
    console.log('📄 Initialisation des sections homepage...');
    const homepageSections = await firebaseCMS.getHomepageSections();
    if (homepageSections.length === 0) {
      for (const section of DEFAULT_HOMEPAGE_SECTIONS) {
        await firebaseCMS.saveHomepageSection(section);
        console.log(`✅ Section "${section.title}" initialisée`);
      }
    } else {
      console.log(`✅ ${homepageSections.length} sections homepage déjà présentes`);
    }

    // 2. Initialiser les projets
    console.log('🎵 Initialisation des projets...');
    const projects = await firebaseCMS.getProjects();
    if (projects.length === 0) {
      for (const project of DEFAULT_PROJECTS) {
        await firebaseCMS.saveProject(project);
        console.log(`✅ Projet "${project.title}" initialisé`);
      }
    } else {
      console.log(`✅ ${projects.length} projets déjà présents`);
    }

    // 3. Initialiser les données à propos
    console.log('👨‍🎨 Initialisation des données about...');
    const aboutData = await firebaseCMS.getAboutData();
    if (!aboutData) {
      await firebaseCMS.saveAboutData(DEFAULT_ABOUT_DATA);
      console.log('✅ Données about initialisées');
    } else {
      console.log('✅ Données about déjà présentes');
    }

    // 4. Initialiser les services
    console.log('⚙️ Initialisation des services...');
    const services = await firebaseCMS.getServices();
    if (services.length === 0) {
      for (const service of DEFAULT_SERVICES) {
        await firebaseCMS.saveService(service);
        console.log(`✅ Service "${service.title}" initialisé`);
      }
    } else {
      console.log(`✅ ${services.length} services déjà présents`);
    }

    // 5. Initialiser les données de contact
    console.log('📧 Initialisation des données contact...');
    const contactData = await firebaseCMS.getContactData();
    if (!contactData) {
      await firebaseCMS.saveContactData(DEFAULT_CONTACT_DATA);
      console.log('✅ Données contact initialisées');
    } else {
      console.log('✅ Données contact déjà présentes');
    }

    console.log('🎉 Initialisation complète du CMS Firebase terminée !');
    return { success: true, message: 'CMS initialisé avec succès' };

  } catch (error) {
    console.error('❌ Erreur lors de l\'initialisation:', error);
    return { success: false, error: error.message };
  }
}

// Fonction pour vérifier le statut de toutes les collections
export async function checkCMSStatus() {
  try {
    const homepageSections = await firebaseCMS.getHomepageSections();
    const projects = await firebaseCMS.getProjects();
    const aboutData = await firebaseCMS.getAboutData();
    const services = await firebaseCMS.getServices();
    const contactData = await firebaseCMS.getContactData();

    return {
      homepageSections: homepageSections.length,
      projects: projects.length,
      about: !!aboutData,
      services: services.length,
      contact: !!contactData,
      total: homepageSections.length + projects.length + (aboutData ? 1 : 0) + services.length + (contactData ? 1 : 0)
    };
  } catch (error) {
    console.error('Erreur lors de la vérification:', error);
    return null;
  }
}
