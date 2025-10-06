'use client';

import { useState, useEffect } from 'react';
import { initializeAllCMSData, checkCMSStatus } from '@/lib/cms/initialize-cms';

export default function CMSInitializer() {
  const [status, setStatus] = useState<string>('Vérification...');
  const [isInitializing, setIsInitializing] = useState(false);
  const [cmsStatus, setCmsStatus] = useState<any>(null);

  const initializeData = async () => {
    setIsInitializing(true);
    setStatus('Initialisation en cours...');

    const result = await initializeAllCMSData();
    
    if (result.success) {
      setStatus('✅ CMS initialisé avec succès !');
      await checkStatus();
    } else {
      setStatus(`❌ Erreur: ${result.error}`);
    }
    
    setIsInitializing(false);
  };

  const checkStatus = async () => {
    const status = await checkCMSStatus();
    setCmsStatus(status);
    
    if (status) {
      const total = status.total;
      const expected = 12; // 4 sections + 3 projets + 1 about + 3 services + 1 contact
      
      if (total === expected) {
        setStatus('✅ Toutes les données sont initialisées');
      } else {
        setStatus(`⚠️ ${total}/${expected} éléments initialisés`);
      }
    }
  };

  useEffect(() => {
    checkStatus();
  }, []);

  // Ne pas afficher si tout est initialisé
  if (cmsStatus && cmsStatus.total === 12) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold">CMS Firebase</h3>
        <button
          onClick={initializeData}
          disabled={isInitializing}
          className="px-3 py-1 bg-white text-blue-600 rounded text-sm hover:bg-gray-100 disabled:opacity-50"
        >
          {isInitializing ? 'Init...' : 'Initialiser'}
        </button>
      </div>
      
      <p className="text-sm opacity-90">{status}</p>
      
      {cmsStatus && (
        <div className="mt-2 text-xs opacity-75">
          <div>Sections: {cmsStatus.homepageSections}/4</div>
          <div>Projets: {cmsStatus.projects}/3</div>
          <div>Services: {cmsStatus.services}/3</div>
          <div>About: {cmsStatus.about ? '✅' : '❌'}</div>
          <div>Contact: {cmsStatus.contact ? '✅' : '❌'}</div>
        </div>
      )}
    </div>
  );
}
