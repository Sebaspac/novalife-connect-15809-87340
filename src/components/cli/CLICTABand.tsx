import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
interface CLICTABandProps {
  title: string;
  description?: string;
  ctaText: string;
  ctaLink: string;
  variant?: 'default' | 'gradient' | 'minimal';
}
const CLICTABand = ({
  title,
  description,
  ctaText,
  ctaLink,
  variant = 'default'
}: CLICTABandProps) => {
  const variants = {
    default: 'bg-muted',
    gradient: 'bg-gradient-hero',
    minimal: 'bg-background border-y border-border/40'
  };
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (ctaLink === '#contact' || ctaLink.includes('#contact')) {
      e.preventDefault();
      const contactSection = document.getElementById('contact-form');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };
  
  return (
    <section className={`${variants[variant]} py-16`}>
      <div className="content-container">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            {description && (
              <p className="text-lg text-muted-foreground">{description}</p>
            )}
          </div>
          <Button size="lg" asChild>
            <a href={ctaLink} onClick={handleClick}>
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default CLICTABand;