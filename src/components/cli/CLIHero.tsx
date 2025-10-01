import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface CLIHeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
  children?: ReactNode;
  showCta?: boolean;
}

const CLIHero = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage,
  children,
  showCta = true,
}: CLIHeroProps) => {
  return (
    <section className="relative w-full aspect-video flex items-end overflow-hidden">
      {/* Background Image or Video - Full Display */}
      {backgroundImage ? (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-hero" />
      )}

      {/* Subtle gradient overlay at bottom only */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Content - Positioned at Bottom */}
      <div className="relative z-10 content-container w-full pb-16 pt-32">
        <div className="max-w-4xl">
          {/* Title */}
          <h1 className="text-4xl lg:text-6xl font-semibold mb-6 text-white tracking-tight animate-fade-in">
            {title}
          </h1>
          
          {/* Subtitle */}
          {subtitle && (
            <p className="text-lg lg:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              {subtitle}
            </p>
          )}

          {/* CTAs */}
          {showCta && (
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              {ctaText && ctaLink && (
                <Button 
                  size="lg" 
                  variant="default"
                  className="min-w-[200px]"
                  asChild
                >
                  <a href={ctaLink}>
                    {ctaText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
              {secondaryCtaText && secondaryCtaLink && (
                <Button 
                  size="lg" 
                  variant="outline"
                  className="min-w-[200px] bg-white/10 backdrop-blur-sm border-white/40 text-white hover:bg-white/20"
                  asChild
                >
                  <a href={secondaryCtaLink}>
                    {secondaryCtaText}
                  </a>
                </Button>
              )}
              {children}
            </div>
          )}
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce hover:text-white transition-colors cursor-pointer z-20"
        aria-label="Zum nächsten Abschnitt scrollen"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default CLIHero;
