'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, AlertCircle } from 'lucide-react';

interface ContactFormProps {
  onSubmit?: (data: FormData) => void;
  className?: string;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  employees: string;
  occasion: string;
  message?: string;
}

export function ContactForm({ onSubmit, className = "" }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    employees: '',
    occasion: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'L\'email n\'est pas valide';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Le nom de l\'entreprise est requis';
    }

    if (!formData.employees.trim()) {
      newErrors.employees = 'Le nombre d\'employés est requis';
    }

    if (!formData.occasion.trim()) {
      newErrors.occasion = 'L\'occasion RH est requise';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simuler l'envoi du formulaire
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (onSubmit) {
        onSubmit(formData);
      }
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-lg p-6 text-center ${className}`}>
        <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-green-800 mb-2">
          Demande envoyée avec succès !
        </h3>
        <p className="text-green-700">
          Nous vous contacterons dans les plus brefs délais pour discuter de votre projet.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div>
        <input
          type="text"
          placeholder="Nom *"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 ${
            errors.name ? 'border-red-500' : 'border-gray-700'
          }`}
        />
        {errors.name && (
          <div className="flex items-center mt-1 text-red-400 text-sm">
            <AlertCircle className="h-4 w-4 mr-1" />
            {errors.name}
          </div>
        )}
      </div>

      <div>
        <input
          type="email"
          placeholder="Email *"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 ${
            errors.email ? 'border-red-500' : 'border-gray-700'
          }`}
        />
        {errors.email && (
          <div className="flex items-center mt-1 text-red-400 text-sm">
            <AlertCircle className="h-4 w-4 mr-1" />
            {errors.email}
          </div>
        )}
      </div>

      <div>
        <input
          type="text"
          placeholder="Entreprise *"
          value={formData.company}
          onChange={(e) => handleChange('company', e.target.value)}
          className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 ${
            errors.company ? 'border-red-500' : 'border-gray-700'
          }`}
        />
        {errors.company && (
          <div className="flex items-center mt-1 text-red-400 text-sm">
            <AlertCircle className="h-4 w-4 mr-1" />
            {errors.company}
          </div>
        )}
      </div>

      <div>
        <input
          type="text"
          placeholder="Effectif *"
          value={formData.employees}
          onChange={(e) => handleChange('employees', e.target.value)}
          className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 ${
            errors.employees ? 'border-red-500' : 'border-gray-700'
          }`}
        />
        {errors.employees && (
          <div className="flex items-center mt-1 text-red-400 text-sm">
            <AlertCircle className="h-4 w-4 mr-1" />
            {errors.employees}
          </div>
        )}
      </div>

      <div>
        <select
          value={formData.occasion}
          onChange={(e) => handleChange('occasion', e.target.value)}
          className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white focus:outline-none focus:border-blue-500 ${
            errors.occasion ? 'border-red-500' : 'border-gray-700'
          }`}
        >
          <option value="">Occasion RH *</option>
          <option value="onboarding">Onboarding</option>
          <option value="celebration">Célébration</option>
          <option value="cohesion">Cohésion</option>
          <option value="qvt">Bien-être & QVT</option>
        </select>
        {errors.occasion && (
          <div className="flex items-center mt-1 text-red-400 text-sm">
            <AlertCircle className="h-4 w-4 mr-1" />
            {errors.occasion}
          </div>
        )}
      </div>

      <div>
        <textarea
          placeholder="Message (optionnel)"
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          rows={3}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium disabled:opacity-50"
      >
        {isSubmitting ? 'Envoi en cours...' : 'Demander un devis'}
      </Button>
    </form>
  );
}
