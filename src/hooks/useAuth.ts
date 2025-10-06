'use client';

// useAuth désactivé - Firebase désactivé
export function useAuth() {
  return {
    user: null,
    loading: false,
    signIn: async () => ({ success: false, error: 'Firebase désactivé' }),
    signUp: async () => ({ success: false, error: 'Firebase désactivé' }),
    logout: async () => ({ success: false, error: 'Firebase désactivé' })
  };
}
