import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features?: string[];
  ctaText?: string;
  ctaLink?: string;
  className?: string;
  image?: string;
  imageAlt?: string;
}
const ServiceCard = ({
  icon,
  title,
  description,
  features,
  ctaText = "Mehr erfahren",
  ctaLink = "#",
  className = "",
  image,
  imageAlt
}: ServiceCardProps) => {
  return <Card className={`hover-lift group transition-all duration-300 ${className}`}>
      <CardContent className="p-6 relative">
        {image && (
          <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full overflow-hidden border-4 border-background shadow-lg">
            <img 
              src={image} 
              alt={imageAlt || title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        {features && <ul className="space-y-2 mb-6">
            {features.map((feature, index) => <li key={index} className="flex items-center text-sm text-foreground">
                <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                {feature}
              </li>)}
          </ul>}
        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300" asChild>
          <a href="/dienstleistungen">{ctaText}</a>
        </Button>
      </CardContent>
    </Card>;
};
export default ServiceCard;