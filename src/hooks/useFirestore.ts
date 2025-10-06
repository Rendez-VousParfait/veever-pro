'use client';

import { useState, useEffect } from 'react';
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDocs, 
  onSnapshot,
  query,
  orderBy,
  limit 
} from 'firebase/firestore';
import { db } from '@/lib/firebase';

export function useFirestore(collectionName: string) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Écouter les changements en temps réel
  useEffect(() => {
    const q = query(collection(db, collectionName), orderBy('createdAt', 'desc'));
    
    const unsubscribe = onSnapshot(q, 
      (snapshot) => {
        const items = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setData(items);
        setLoading(false);
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [collectionName]);

  const addDocument = async (document: any) => {
    try {
      const docRef = await addDoc(collection(db, collectionName), {
        ...document,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      return { success: true, id: docRef.id };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  };

  const updateDocument = async (id: string, updates: any) => {
    try {
      await updateDoc(doc(db, collectionName, id), {
        ...updates,
        updatedAt: new Date()
      });
      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  };

  const deleteDocument = async (id: string) => {
    try {
      await deleteDoc(doc(db, collectionName, id));
      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  };

  return {
    data,
    loading,
    error,
    addDocument,
    updateDocument,
    deleteDocument
  };
}
