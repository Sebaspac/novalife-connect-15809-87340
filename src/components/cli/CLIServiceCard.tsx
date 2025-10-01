import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface CLIServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  benefits?: string[];
  link: string;
  linkText?: string;
  className?: string;
}

const CLIServiceCard = ({
  icon,
  title,
  description,
  benefits,
  link,
  linkText = 'Más información',
  className = '',
}: CLIServiceCardProps) => {
  return (
    <Link to={link} className="block group">
      <Card className={`h-full border-border/40 bg-card hover:shadow-lift hover:border-foreground/20 transition-all duration-300 ${className}`}>
        <CardContent className="p-10 h-full flex flex-col">
          {/* Icon - Minimal & Clean */}
          <div className="mb-8 text-foreground opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
            {icon}
          </div>
          
          {/* Title */}
          <h3 className="text-2xl font-semibold mb-4 text-foreground tracking-tight">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-muted-foreground mb-8 leading-relaxed text-[1.0625rem]">
            {description}
          </p>
          
          {/* Benefits - Minimal List */}
          {benefits && benefits.length > 0 && (
            <ul className="space-y-3 mb-8 flex-grow">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start text-[0.9375rem] text-foreground/80">
                  <span className="text-secondary mr-3 flex-shrink-0">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          )}
          
          {/* Link - Apple Style */}
          <div className="flex items-center text-secondary text-sm font-medium mt-auto group-hover:gap-2 transition-all">
            <span>{linkText}</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CLIServiceCard;
