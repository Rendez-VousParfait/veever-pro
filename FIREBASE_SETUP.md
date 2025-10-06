# Configuration Firebase - Guide étape par étape

## ✅ Configuration terminée !

Votre projet Firebase est maintenant configuré avec succès ! Voici ce qui a été mis en place :

### 🔧 Services configurés :

- **Authentication** : Connexion/déconnexion des utilisateurs
- **Firestore** : Base de données NoSQL en temps réel
- **Storage** : Stockage de fichiers
- **Analytics** : Suivi des utilisateurs

### 📁 Fichiers créés :

- `src/lib/firebase.ts` - Configuration principale Firebase
- `src/hooks/useAuth.ts` - Hook pour l'authentification
- `src/hooks/useFirestore.ts` - Hook pour Firestore
- `src/components/FirebaseTest.tsx` - Composant de test de connexion
- `src/components/AuthForm.tsx` - Formulaire d'authentification
- `src/components/FirestoreExample.tsx` - Exemple d'utilisation Firestore
- `.env.local` - Variables d'environnement (avec vos clés)

### 🚀 Comment tester :

1. **Démarrez votre serveur** : `npm run dev`
2. **Ouvrez** `http://localhost:3000`
3. **Testez les fonctionnalités** :
   - Vérifiez le statut de connexion Firebase
   - Créez un compte utilisateur
   - Ajoutez des messages dans Firestore
   - Vérifiez la synchronisation en temps réel

### 🔐 Configuration Firebase terminée :

Votre projet Firebase "valentin-levraud-1" est configuré avec :
- **API Key** : AIzaSyAORMKAGhJyCbUpTU8niHmm1_NvEV9SgO0
- **Project ID** : valentin-levraud-1
- **Auth Domain** : valentin-levraud-1.firebaseapp.com
- **Storage Bucket** : valentin-levraud-1.firebasestorage.app

### 4. Activer les services Firebase

Dans la console Firebase, activez les services que vous souhaitez utiliser :

#### Authentication
1. Allez dans "Authentication" > "Sign-in method"
2. Activez les méthodes de connexion souhaitées (Email/Password, Google, etc.)

#### Firestore Database
1. Allez dans "Firestore Database"
2. Cliquez sur "Créer une base de données"
3. Choisissez le mode (Test ou Production)
4. Sélectionnez une région

#### Storage
1. Allez dans "Storage"
2. Cliquez sur "Commencer"
3. Acceptez les règles par défaut

### 5. Tester la connexion

1. Démarrez votre serveur de développement : `npm run dev`
2. Ouvrez votre navigateur sur `http://localhost:3000`
3. Vous devriez voir la section "Test de connexion Firebase"
4. Vérifiez que le statut affiche "✅ Connexion Firebase réussie !"

### 6. Utilisation dans votre code

```typescript
// Importer Firebase
import { auth, db, storage } from '@/lib/firebase';

// Exemple d'utilisation de l'authentification
import { signInWithEmailAndPassword } from 'firebase/auth';

// Exemple d'utilisation de Firestore
import { collection, addDoc } from 'firebase/firestore';
```

## 🔧 Services disponibles

- **Authentication** : Gestion des utilisateurs
- **Firestore** : Base de données NoSQL
- **Storage** : Stockage de fichiers
- **Analytics** : Analytics (si activé)

## 📝 Notes importantes

- Les variables d'environnement commencent par `NEXT_PUBLIC_` pour être accessibles côté client
- Le fichier `.env.local` ne doit pas être commité dans Git
- Testez toujours votre configuration avant de déployer

## 🆘 Dépannage

Si vous rencontrez des erreurs :

1. Vérifiez que toutes les variables d'environnement sont correctement définies
2. Assurez-vous que les services Firebase sont activés dans la console
3. Vérifiez les règles de sécurité de Firestore et Storage
4. Consultez la console du navigateur pour les erreurs détaillées
