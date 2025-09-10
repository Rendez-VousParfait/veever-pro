// Service de stockage pour le CMS
export class CMSStorage {
  private static instance: CMSStorage;
  private storageKey = 'veever-cms-data';

  private constructor() {}

  public static getInstance(): CMSStorage {
    if (!CMSStorage.instance) {
      CMSStorage.instance = new CMSStorage();
    }
    return CMSStorage.instance;
  }

  // Sauvegarder les données
  public saveData(key: string, data: any): void {
    try {
      const allData = this.getAllData();
      allData[key] = data;
      localStorage.setItem(this.storageKey, JSON.stringify(allData));
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
    }
  }

  // Récupérer les données
  public getData(key: string, defaultValue: any = null): any {
    try {
      const allData = this.getAllData();
      return allData[key] || defaultValue;
    } catch (error) {
      console.error('Erreur lors de la récupération:', error);
      return defaultValue;
    }
  }

  // Récupérer toutes les données
  public getAllData(): any {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : {};
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
      return {};
    }
  }

  // Supprimer des données
  public removeData(key: string): void {
    try {
      const allData = this.getAllData();
      delete allData[key];
      localStorage.setItem(this.storageKey, JSON.stringify(allData));
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
    }
  }

  // Vider toutes les données
  public clearAllData(): void {
    try {
      localStorage.removeItem(this.storageKey);
    } catch (error) {
      console.error('Erreur lors de la suppression des données:', error);
    }
  }

  // Exporter les données (pour sauvegarde)
  public exportData(): string {
    return JSON.stringify(this.getAllData(), null, 2);
  }

  // Importer les données (pour restauration)
  public importData(jsonData: string): boolean {
    try {
      const data = JSON.parse(jsonData);
      localStorage.setItem(this.storageKey, JSON.stringify(data));
      return true;
    } catch (error) {
      console.error('Erreur lors de l\'importation:', error);
      return false;
    }
  }
}

// Instance singleton
export const cmsStorage = CMSStorage.getInstance();
