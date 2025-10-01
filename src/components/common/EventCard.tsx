import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, ArrowRight, Clock, Euro } from 'lucide-react';
import { Event } from '@/data/events';

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  const availableSpots = event.maxParticipants - event.currentParticipants;
  const isAlmostFull = availableSpots <= 3;
  const isFull = availableSpots <= 0;

  return (
    <Card className="hover-lift overflow-hidden group h-full flex flex-col">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="text-xs">
            {event.category}
          </Badge>
          <div className="flex items-center gap-1 text-primary font-bold">
            <Euro className="h-3 w-3" />
            <span className="text-sm">{event.price}</span>
          </div>
        </div>
        
        <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
          {event.title}
        </CardTitle>
        
        {event.subtitle && (
          <p className="text-sm text-muted-foreground line-clamp-2">
            {event.subtitle}
          </p>
        )}
      </CardHeader>
      
      <CardContent className="pt-0 flex-1 flex flex-col">
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
          {event.excerpt}
        </p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="h-3 w-3 flex-shrink-0" />
            <span>{event.eventDate} • {event.eventTime}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3 flex-shrink-0" />
            <span className="line-clamp-1">{event.location}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="h-3 w-3 flex-shrink-0" />
            <span>{event.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <Users className="h-3 w-3 flex-shrink-0" />
            <span className={`${isAlmostFull ? 'text-orange-600' : isFull ? 'text-red-600' : 'text-muted-foreground'}`}>
              {availableSpots > 0 ? `${availableSpots} Plätze frei` : 'Ausgebucht'}
            </span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
            asChild
          >
            <Link to={`/event/${event.slug}`}>
              Details
              <ArrowRight className="h-3 w-3 ml-2" />
            </Link>
          </Button>
          <Button 
            size="sm" 
            className="flex-1"
            disabled={isFull}
            asChild={!isFull}
          >
            {isFull ? (
              'Ausgebucht'
            ) : (
              <a href={`mailto:info@vianova-consulting.de?subject=Anmeldung: ${event.title}&body=Hallo,%0A%0Aich möchte mich für das Event "${event.title}" am ${event.eventDate} anmelden.%0A%0AVielen Dank!`}>
                Anmelden
              </a>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCard;