import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
const contactSchema = z.object({
  firstName: z.string().trim().min(1, 'Por favor ingresa tu nombre').max(100),
  lastName: z.string().trim().min(1, 'Por favor ingresa tu apellido').max(100),
  company: z.string().trim().max(100).optional(),
  email: z.string().trim().email('Por favor ingresa un email válido').max(255),
  message: z.string().trim().min(1, 'Por favor ingresa tu mensaje').max(1000),
  consent: z.boolean().refine(val => val === true, {
    message: 'Debes aceptar la protección de datos'
  })
});
type ContactFormData = z.infer<typeof contactSchema>;
const ContactSideBySide = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    message: '',
    consent: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    try {
      const validatedData = contactSchema.parse(formData);
      setIsSubmitting(true);

      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: 'Mensaje enviado',
        description: 'Te contactaremos pronto. Gracias por tu interés.'
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        message: '',
        consent: false
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section id="contact-form" className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* Left Side - Image */}
        <div className="relative h-[400px] lg:h-auto">
          <img src="/lovable-uploads/monica-araque-contact.png" alt="Mónica Araque - Fundadora de Club CLI" className="absolute inset-0 w-full h-full object-cover object-center" />
          {/* Optional overlay with contact person info */}
          <div className="absolute bottom-8 left-8 text-white">
            <h3 className="text-2xl font-semibold mb-2 text-slate-50">Mónica Araque</h3>
            <p className="text-sm opacity-90 text-slate-50">Fundadora de Club CLI</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-foreground text-background p-10 lg:p-16 flex items-center">
          <div className="w-full max-w-xl">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-10 text-slate-50">
              Schreib uns!
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-normal mb-2 uppercase tracking-wide">
                    Nombre*
                  </label>
                  <Input type="text" placeholder="Bitte Vornamen eintragen" value={formData.firstName} onChange={e => setFormData({
                  ...formData,
                  firstName: e.target.value
                })} className="bg-transparent border-0 border-b border-background/30 rounded-none px-0 focus-visible:ring-0 focus-visible:border-background text-background placeholder:text-background/50" />
                  {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <label className="block text-sm font-normal mb-2 uppercase tracking-wide">
                    Apellido*
                  </label>
                  <Input type="text" placeholder="Bitte Nachname eintragen" value={formData.lastName} onChange={e => setFormData({
                  ...formData,
                  lastName: e.target.value
                })} className="bg-transparent border-0 border-b border-background/30 rounded-none px-0 focus-visible:ring-0 focus-visible:border-background text-background placeholder:text-background/50" />
                  {errors.lastName && <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>}
                </div>
              </div>

              {/* Company and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-normal mb-2 uppercase tracking-wide">
                    Empresa
                  </label>
                  <Input type="text" placeholder="Bitte Unternehmen eintragen" value={formData.company} onChange={e => setFormData({
                  ...formData,
                  company: e.target.value
                })} className="bg-transparent border-0 border-b border-background/30 rounded-none px-0 focus-visible:ring-0 focus-visible:border-background text-background placeholder:text-background/50" />
                </div>
                <div>
                  <label className="block text-sm font-normal mb-2 uppercase tracking-wide">
                    E-Mail*
                  </label>
                  <Input type="email" placeholder="Bitte E-Mail-Adresse eintragen" value={formData.email} onChange={e => setFormData({
                  ...formData,
                  email: e.target.value
                })} className="bg-transparent border-0 border-b border-background/30 rounded-none px-0 focus-visible:ring-0 focus-visible:border-background text-background placeholder:text-background/50" />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-normal mb-2 uppercase tracking-wide">
                  Tu Mensaje*
                </label>
                <Textarea placeholder="Ihre Nachricht an uns" value={formData.message} onChange={e => setFormData({
                ...formData,
                message: e.target.value
              })} rows={6} className="bg-transparent border border-background/30 rounded-lg px-4 py-3 focus-visible:ring-0 focus-visible:border-background text-background placeholder:text-background/50 resize-none" />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
              </div>

              {/* Consent */}
              <div className="flex items-start space-x-3">
                <Checkbox checked={formData.consent} onCheckedChange={checked => setFormData({
                ...formData,
                consent: checked as boolean
              })} className="mt-1 border-background/50 data-[state=checked]:bg-background data-[state=checked]:text-foreground" />
                <label className="text-sm leading-relaxed">
                  Einwilligung in die{' '}
                  <a href="/proteccion-datos" className="underline hover:no-underline">
                    Datenschutzerklärung
                  </a>
                </label>
              </div>
              {errors.consent && <p className="text-red-400 text-sm">{errors.consent}</p>}

              {/* Submit Button */}
              <div className="pt-4">
                <Button type="submit" disabled={isSubmitting} className="bg-background text-foreground hover:bg-background/90 px-12 py-6 text-base rounded-full">
                  {isSubmitting ? 'Enviando...' : 'Senden'}
                </Button>
              </div>

              {/* Legal Text */}
              <p className="text-xs text-background/60 leading-relaxed">
                This site is protected by reCAPTCHA and the Google{' '}
                <a href="#" className="underline">
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href="#" className="underline">
                  Terms of Service
                </a>{' '}
                apply
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSideBySide;