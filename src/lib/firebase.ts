// Firebase désactivé - Configuration temporaire
// Pour réactiver Firebase, décommentez les imports et la configuration ci-dessous

// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
// import { getStorage } from 'firebase/storage';
// import { getAnalytics } from 'firebase/analytics';

// Configuration Firebase désactivée
const firebaseConfig = {
  apiKey: "disabled",
  authDomain: "disabled",
  projectId: "disabled",
  storageBucket: "disabled",
  messagingSenderId: "disabled",
  appId: "disabled",
  measurementId: "disabled",
};

// Services Firebase désactivés
export const auth = null;
export const db = null;
export const storage = null;
export const analytics = null;
export default null;
