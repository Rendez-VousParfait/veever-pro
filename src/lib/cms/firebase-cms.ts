import { 
  collection, 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  deleteDoc, 
  getDocs, 
  query, 
  orderBy, 
  onSnapshot,
  serverTimestamp,
  where
} from 'firebase/firestore';
import { db } from '@/lib/firebase';

// Types pour les collections CMS
export interface HomepageSection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  href: string;
  gradient: string;
  stats: string;
  icon: string;
  order?: number;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  description: string;
  category: string;
  image: string;
  longDescription: string;
  youtubeUrl: string;
  featured?: boolean;
  order?: number;
}

export interface AboutData {
  title: string;
  bio: {
    heading: string;
    paragraphs: string[];
  };
  formation: Array<{
    title: string;
    institution: string;
    year: string;
  }>;
  competences: {
    techniques: Array<{
      name: string;
      level: number;
    }>;
    specialites: string[];
  };
  reseaux: Array<{
    name: string;
    url: string;
  }>;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  price: string;
  duration: string;
  youtubeUrl: string;
  order?: number;
}

export interface ContactData {
  title: string;
  info: {
    email: string;
    phone: string;
    location: string;
    responseTime: string;
    availability: string;
    remoteWork: string;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  formFields: any;
}

// Service Firebase CMS
export class FirebaseCMS {
  private static instance: FirebaseCMS;

  private constructor() {}

  public static getInstance(): FirebaseCMS {
    if (!FirebaseCMS.instance) {
      FirebaseCMS.instance = new FirebaseCMS();
    }
    return FirebaseCMS.instance;
  }

  // Méthodes génériques pour les collections
  private async getCollectionData<T>(collectionName: string): Promise<T[]> {
    try {
      const q = query(collection(db, collectionName), orderBy('order', 'asc'));
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as T[];
    } catch (error) {
      console.error(`Erreur lors de la récupération de ${collectionName}:`, error);
      return [];
    }
  }

  private async getDocumentData<T>(collectionName: string, docId: string): Promise<T | null> {
    try {
      const docRef = doc(db, collectionName, docId);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() } as T;
      }
      return null;
    } catch (error) {
      console.error(`Erreur lors de la récupération du document ${docId}:`, error);
      return null;
    }
  }

  private async saveDocumentData<T>(collectionName: string, docId: string, data: Partial<T>): Promise<boolean> {
    try {
      const docRef = doc(db, collectionName, docId);
      await setDoc(docRef, {
        ...data,
        updatedAt: serverTimestamp()
      }, { merge: true });
      return true;
    } catch (error) {
      console.error(`Erreur lors de la sauvegarde du document ${docId}:`, error);
      return false;
    }
  }

  private async deleteDocumentData(collectionName: string, docId: string): Promise<boolean> {
    try {
      const docRef = doc(db, collectionName, docId);
      await deleteDoc(docRef);
      return true;
    } catch (error) {
      console.error(`Erreur lors de la suppression du document ${docId}:`, error);
      return false;
    }
  }

  // Méthodes spécifiques pour chaque collection

  // Homepage Sections
  async getHomepageSections(): Promise<HomepageSection[]> {
    return this.getCollectionData<HomepageSection>('homepage-sections');
  }

  async saveHomepageSection(section: HomepageSection): Promise<boolean> {
    return this.saveDocumentData('homepage-sections', section.id, section);
  }

  async deleteHomepageSection(sectionId: string): Promise<boolean> {
    return this.deleteDocumentData('homepage-sections', sectionId);
  }

  // Projects
  async getProjects(): Promise<Project[]> {
    return this.getCollectionData<Project>('projects');
  }

  async getProject(projectId: string): Promise<Project | null> {
    return this.getDocumentData<Project>('projects', projectId);
  }

  async saveProject(project: Project): Promise<boolean> {
    return this.saveDocumentData('projects', project.id, project);
  }

  async deleteProject(projectId: string): Promise<boolean> {
    return this.deleteDocumentData('projects', projectId);
  }

  // About
  async getAboutData(): Promise<AboutData | null> {
    return this.getDocumentData<AboutData>('about', 'main');
  }

  async saveAboutData(data: AboutData): Promise<boolean> {
    return this.saveDocumentData('about', 'main', data);
  }

  // Services
  async getServices(): Promise<Service[]> {
    return this.getCollectionData<Service>('services');
  }

  async saveService(service: Service): Promise<boolean> {
    return this.saveDocumentData('services', service.id, service);
  }

  async deleteService(serviceId: string): Promise<boolean> {
    return this.deleteDocumentData('services', serviceId);
  }

  // Contact
  async getContactData(): Promise<ContactData | null> {
    return this.getDocumentData<ContactData>('contact', 'main');
  }

  async saveContactData(data: ContactData): Promise<boolean> {
    return this.saveDocumentData('contact', 'main', data);
  }

  // Méthodes pour l'écoute en temps réel
  subscribeToHomepageSections(callback: (sections: HomepageSection[]) => void): () => void {
    const q = query(collection(db, 'homepage-sections'), orderBy('order', 'asc'));
    return onSnapshot(q, (snapshot) => {
      const sections = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as HomepageSection[];
      callback(sections);
    });
  }

  subscribeToProjects(callback: (projects: Project[]) => void): () => void {
    const q = query(collection(db, 'projects'), orderBy('order', 'asc'));
    return onSnapshot(q, (snapshot) => {
      const projects = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Project[];
      callback(projects);
    });
  }

  subscribeToServices(callback: (services: Service[]) => void): () => void {
    const q = query(collection(db, 'services'), orderBy('order', 'asc'));
    return onSnapshot(q, (snapshot) => {
      const services = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Service[];
      callback(services);
    });
  }

  // Méthodes utilitaires
  async initializeDefaultData(): Promise<void> {
    // Cette méthode sera utilisée pour initialiser les données par défaut
    // si les collections sont vides
    console.log('Initialisation des données par défaut...');
  }
}

// Instance singleton
export const firebaseCMS = FirebaseCMS.getInstance();
