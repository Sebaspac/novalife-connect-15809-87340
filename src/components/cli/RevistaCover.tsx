import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface RevistaCoverProps {
  coverImage: string;
  title: string;
  date: string;
  downloadLink?: string;
  featured?: boolean;
}

const RevistaCover = ({ coverImage, title, date, downloadLink, featured = false }: RevistaCoverProps) => {
  return (
    <div className={`group ${featured ? 'max-w-md' : ''}`}>
      <div className="relative overflow-hidden rounded-lg shadow-lg hover-lift">
        <img 
          src={coverImage} 
          alt={`Revista CLI ${date}`}
          className="w-full h-auto"
        />
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{date}</p>
        {downloadLink && (
          <Button variant="outline" asChild>
            <a href={downloadLink} target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" />
              Accede a la revista
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};

export default RevistaCover;
