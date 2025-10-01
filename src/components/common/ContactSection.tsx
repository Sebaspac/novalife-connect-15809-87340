import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const ContactSection = () => {
  return (
    <section className="w-full bg-gradient-subtle">
      <div 
        className="
          overflow-hidden
          min-h-[320px] max-h-[500px]
          h-[35vh] md:h-[40vh] lg:h-[50vh]
          grid grid-cols-1 md:grid-cols-[2fr_1fr]
          bg-gradient-secondary
        "
        style={{ gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)' }}
      >
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center px-6 sm:px-8 md:px-10 lg:px-16 py-8 md:py-6">
            <div className="max-w-[46ch] self-center">
              <h2 
                className="
                  font-bold text-secondary-foreground mb-3 leading-[1.2]
                  text-[clamp(24px,3.5vw,36px)]
                  line-clamp-2
                "
              >
                Bereit für den nächsten Schritt?
              </h2>
              <p 
                className="
                  text-secondary-foreground/85 mb-4 leading-relaxed
                  text-[clamp(14px,1.4vw,16px)]
                  line-clamp-3
                  max-w-[50ch]
                "
              >
                Lassen Sie uns gemeinsam Ihre Reise zu einem neuen Leben gestalten.
              </p>
              <Button 
                asChild
                variant="secondary"
                className="
                  h-10 px-4 py-2 text-sm font-semibold 
                  rounded-lg hover:scale-105 transition-all duration-300 
                  whitespace-nowrap mt-2
                "
              >
                <Link to="/kontakt">
                  Jetzt Kontakt aufnehmen
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative overflow-hidden">
            <img
              src="/lovable-uploads/cce09ad5-28a5-4705-955f-29a0344dd94e.png"
              alt="Professionelle Beratung - Rocío Morales"
              className="
                w-full h-full object-cover 
                object-[70%_30%] md:object-[70%_25%] lg:object-[70%_20%] xl:object-[70%_15%]
                aspect-[16/9] md:aspect-[4/3] lg:aspect-[3/4] xl:aspect-[2/3]
              "
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
    </section>
  );
};

export default ContactSection;