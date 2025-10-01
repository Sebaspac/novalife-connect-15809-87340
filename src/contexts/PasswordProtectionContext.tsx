import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface PasswordProtectionContextType {
  isAuthenticated: boolean;
  validatePassword: (password: string) => Promise<boolean>;
  error: string | null;
  isLoading: boolean;
}

const PasswordProtectionContext = createContext<PasswordProtectionContextType | undefined>(undefined);

const STORAGE_KEY = 'site-password-authenticated';

export const PasswordProtectionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Check localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const validatePassword = async (password: string): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      const { data, error: functionError } = await supabase.functions.invoke('validate-password', {
        body: { password }
      });

      if (functionError) {
        console.error('Function error:', functionError);
        setError('Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.');
        return false;
      }

      if (data?.isValid) {
        setIsAuthenticated(true);
        localStorage.setItem(STORAGE_KEY, 'true');
        return true;
      } else {
        setError('Falsches Passwort. Bitte erneut versuchen.');
        return false;
      }
    } catch (err) {
      console.error('Validation error:', err);
      setError('Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PasswordProtectionContext.Provider value={{
      isAuthenticated,
      validatePassword,
      error,
      isLoading
    }}>
      {children}
    </PasswordProtectionContext.Provider>
  );
};

export const usePasswordProtection = () => {
  const context = useContext(PasswordProtectionContext);
  if (context === undefined) {
    throw new Error('usePasswordProtection must be used within a PasswordProtectionProvider');
  }
  return context;
};