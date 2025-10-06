'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';

export default function HeaderAuth() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  
  const { user, signIn, signUp, logout } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const result = isLogin 
        ? await signIn(email, password)
        : await signUp(email, password);

      if (result.success) {
        setMessage(isLogin ? 'Connexion réussie !' : 'Compte créé avec succès !');
        setEmail('');
        setPassword('');
        setShowAuthModal(false);
      } else {
        setMessage(`Erreur: ${result.error}`);
      }
    } catch (error) {
      setMessage('Une erreur inattendue s\'est produite');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    const result = await logout();
    if (result.success) {
      setMessage('Déconnexion réussie');
    } else {
      setMessage(`Erreur: ${result.error}`);
    }
    setLoading(false);
  };

  if (user) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-300">
          Connecté: <span className="text-cyan-400">{user.email}</span>
        </span>
        <button
          onClick={handleLogout}
          disabled={loading}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 text-sm"
        >
          {loading ? 'Déconnexion...' : 'Se déconnecter'}
        </button>
      </div>
    );
  }

  return (
    <>
      <button
        onClick={() => setShowAuthModal(true)}
        className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors text-sm"
      >
        Connexion
      </button>

      {/* Modal d'authentification */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6">
          <div className="bg-gray-900 rounded-2xl max-w-md w-full p-6">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-bold text-white">Authentification</h2>
              <button
                onClick={() => setShowAuthModal(false)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="mb-6">
              <div className="flex bg-gray-800 rounded-lg p-1">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-2 px-4 rounded-md transition-colors ${
                    isLogin 
                      ? 'bg-cyan-600 text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Connexion
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-2 px-4 rounded-md transition-colors ${
                    !isLogin 
                      ? 'bg-cyan-600 text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Inscription
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-gray-800 text-white"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2 text-gray-300">
                  Mot de passe
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-gray-800 text-white"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 disabled:opacity-50"
              >
                {loading ? 'Traitement...' : (isLogin ? 'Se connecter' : 'Créer un compte')}
              </button>
            </form>

            {message && (
              <div className={`mt-4 p-3 rounded-lg ${
                message.includes('Erreur') 
                  ? 'bg-red-100 text-red-800'
                  : 'bg-green-100 text-green-800'
              }`}>
                <p className="text-sm">{message}</p>
              </div>
            )}

            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-xs text-blue-800">
                <strong>Note :</strong> Créez un compte pour tester les fonctionnalités d'authentification Firebase.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
