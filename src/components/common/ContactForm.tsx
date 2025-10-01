import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Card } from '@/components/ui/card';
import { Send, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ContactFormProps {
  noCard?: boolean;
}

const ContactForm = ({ noCard = false }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    privacy: false
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacy) {
      toast({
        title: "Datenschutz erforderlich",
        description: "Bitte stimmen Sie der Datenschutzerklärung zu.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Nachricht gesendet",
      description: "Vielen Dank für Ihre Nachricht. Wir melden uns zeitnah bei Ihnen.",
    });
    
    setFormData({
      fullName: '',
      company: '',
      email: '',
      phone: '',
      message: '',
      privacy: false
    });
    
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const formContent = (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white uppercase tracking-wide">
              Nombre*
            </label>
            <Input
              type="text"
              name="fullName"
              placeholder="Bitte Vornamen eintragen"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="h-12 bg-neutral-900/50 border-neutral-800 text-white placeholder:text-neutral-500"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-white uppercase tracking-wide">
              Apellido*
            </label>
            <Input
              type="text"
              name="company"
              placeholder="Bitte Nachname eintragen"
              value={formData.company}
              onChange={handleChange}
              required
              className="h-12 bg-neutral-900/50 border-neutral-800 text-white placeholder:text-neutral-500"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white uppercase tracking-wide">
              Empresa
            </label>
            <Input
              type="text"
              name="phone"
              placeholder="Bitte Unternehmen eintragen"
              value={formData.phone}
              onChange={handleChange}
              className="h-12 bg-neutral-900/50 border-neutral-800 text-white placeholder:text-neutral-500"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-white uppercase tracking-wide">
              E-Mail*
            </label>
            <Input
              type="email"
              name="email"
              placeholder="Bitte E-Mail-Adresse eintragen"
              value={formData.email}
              onChange={handleChange}
              required
              className="h-12 bg-neutral-900/50 border-neutral-800 text-white placeholder:text-neutral-500"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-white uppercase tracking-wide">
            Tu Mensaje*
          </label>
          <Textarea
            name="message"
            placeholder="Ihre Nachricht an uns"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="resize-none bg-neutral-900/50 border-neutral-800 text-white placeholder:text-neutral-500"
          />
        </div>
        
        <div className="flex items-start space-x-3">
          <Checkbox
            id="privacy"
            checked={formData.privacy}
            onCheckedChange={(checked) => 
              setFormData(prev => ({ ...prev, privacy: checked as boolean }))
            }
            className="mt-1 border-neutral-700 data-[state=checked]:bg-white data-[state=checked]:text-black"
          />
          <label htmlFor="privacy" className="text-sm text-neutral-400 leading-relaxed">
            Einwilligung in die{' '}
            <a href="/proteccion-datos" className="text-white hover:underline font-medium">
              Datenschutzerklärung
            </a>
          </label>
        </div>
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full h-12 text-base font-semibold bg-white text-black hover:bg-neutral-200"
          size="lg"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Wird gesendet...
            </>
          ) : (
            <>
              Senden
            </>
          )}
        </Button>

        <p className="text-xs text-neutral-500 text-center">
          This site is protected by reCAPTCHA and the Google{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:underline text-neutral-400">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="hover:underline text-neutral-400">
            Terms of Service
          </a>{' '}
          apply.
        </p>
      </form>
    </>
  );

  return noCard ? (
    <div className="space-y-6">
      {formContent}
    </div>
  ) : (
    <Card className="p-8 bg-background border border-border/50 shadow-lg">
      {formContent}
    </Card>
  );
};

export default ContactForm;