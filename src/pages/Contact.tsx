import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '@/components/common/ContactForm';
import heroFamily from '@/assets/hero-family.jpg';

const Contact = () => {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${heroFamily})`
          }}
        />
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 items-start max-w-6xl mx-auto">
            <div className="lg:col-span-2 space-y-10">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight">
                  Sie haben ein persönliches Anliegen?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                  Kontaktieren Sie uns direkt hier
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-5 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div className="flex-shrink-0 w-14 h-14 bg-accent/30 rounded-full flex items-center justify-center shadow-sm">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-foreground">E-Mail</h3>
                    <p className="text-base text-muted-foreground font-medium">info@vianova.de</p>
                    <p className="text-sm text-muted-foreground/80">Antwort innerhalb von 24 Stunden</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-5 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div className="flex-shrink-0 w-14 h-14 bg-accent/30 rounded-full flex items-center justify-center shadow-sm">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-foreground">Telefon</h3>
                    <p className="text-base text-muted-foreground font-medium">+49 7441 95038-0</p>
                    <p className="text-sm text-muted-foreground/80">Mo-Fr 9:00-18:00 Uhr</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-5 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div className="flex-shrink-0 w-14 h-14 bg-accent/30 rounded-full flex items-center justify-center shadow-sm">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-foreground">Adresse</h3>
                    <p className="text-base text-muted-foreground font-medium leading-relaxed">
                      Hindenburgstraße 2<br />
                      72250 Freudenstadt
                    </p>
                    <p className="text-sm text-muted-foreground/80">Termine nach Vereinbarung</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;