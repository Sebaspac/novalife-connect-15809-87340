import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { usePasswordProtection } from '@/contexts/PasswordProtectionContext';

export const PasswordOverlay: React.FC = () => {
  const [password, setPassword] = useState('');
  const { validatePassword, error, isLoading } = usePasswordProtection();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim()) {
      await validatePassword(password.trim());
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="w-full max-w-md p-8 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold text-foreground">Zugang gesperrt</h1>
          <p className="text-muted-foreground">Bitte geben Sie das Passwort ein, um fortzufahren.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Passwort eingeben"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              className="text-center"
              autoFocus
            />
            {error && (
              <p className="text-sm text-destructive text-center">{error}</p>
            )}
          </div>
          
          <Button 
            type="submit" 
            className="w-full" 
            disabled={isLoading || !password.trim()}
          >
            {isLoading ? 'Überprüfe...' : 'Entsperren'}
          </Button>
        </form>
      </div>
    </div>
  );
};