import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage: string;
  children?: ReactNode;
  showCta?: boolean;
}
const HeroSection = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage,
  children,
  showCta = true
}: HeroSectionProps) => {
  return <section className="relative w-full aspect-video flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${backgroundImage})`
    }} />
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 content-container text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="hero-title mb-6">
            {title}
          </h1>
          
          
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            {showCta && ctaText && ctaLink && (
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-hero transition-all duration-300 hover:scale-105 rounded-lg px-8 py-3" asChild>
                <a href={ctaLink}>
                  {ctaText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            )}
            {children}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => {
          const nextSection = document.querySelector('section:nth-of-type(2)');
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce hover:text-white/80 transition-colors cursor-pointer"
        aria-label="Zum nächsten Abschnitt scrollen"
      >
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </button>
    </section>;
};
export default HeroSection;