import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, User, Tag, ArrowRight, ArrowUp, Calendar, MapPin, Users, Euro, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import ContentBlock from '@/components/blog/ContentBlock';
import { getEventBySlug, getEventsByCategory, getNextPrevEvents } from '@/data/events';
import { useEffect } from 'react';

const EventDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const event = slug ? getEventBySlug(slug) : undefined;

  useEffect(() => {
    if (!event) {
      navigate('/kontakt-shop');
    }
  }, [event, navigate]);

  if (!event) {
    return null;
  }

  const similarEvents = getEventsByCategory(event.category, event.id);
  const { prev, next } = getNextPrevEvents(event.id);
  const availableSpots = event.maxParticipants - event.currentParticipants;
  const isAlmostFull = availableSpots <= 3;
  const isFull = availableSpots <= 0;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <section className="py-6 border-b bg-muted/30">
        <div className="content-container">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">
              Startseite
            </Link>
            <span>/</span>
            <Link to="/kontakt-shop" className="hover:text-foreground transition-colors">
              Shop & Events
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium line-clamp-1">{event.title}</span>
          </nav>
        </div>
      </section>

      {/* Back Button */}
      <section className="py-6">
        <div className="content-container">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate('/kontakt-shop')}
            className="mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Zurück zum Shop
          </Button>
        </div>
      </section>

      {/* Header */}
      <section className="section-spacing">
        <div className="content-container">
          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            <div className="mb-6">
              <Badge variant="secondary" className="text-sm">
                {event.category}
              </Badge>
            </div>

            {/* Title & Subtitle */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {event.title}
            </h1>
            
            {event.subtitle && (
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {event.subtitle}
              </p>
            )}

            {/* Event Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">Datum</div>
                  <div className="font-medium">{event.eventDate}</div>
                  <div className="text-sm text-muted-foreground">{event.eventTime}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">Ort</div>
                  <div className="font-medium">{event.location}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">Verfügbarkeit</div>
                  <div className={`font-medium ${isAlmostFull ? 'text-orange-600' : isFull ? 'text-red-600' : 'text-foreground'}`}>
                    {availableSpots > 0 ? `${availableSpots} Plätze frei` : 'Ausgebucht'}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Euro className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">Preis</div>
                  <div className="font-medium text-2xl text-primary">€{event.price}</div>
                </div>
              </div>
            </div>

            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{event.organizer}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{event.duration}</span>
              </div>
              <div>
                <span>Veröffentlicht: {event.date}</span>
              </div>
            </div>

            {/* Cover Image */}
            {event.coverImage && (
              <div className="mb-12">
                <img 
                  src={event.coverImage} 
                  alt={event.title}
                  className="w-full aspect-[16/9] object-cover rounded-lg shadow-lg"
                />
              </div>
            )}

            {/* CTA Section */}
            <div className="bg-gradient-subtle p-6 rounded-lg mb-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Jetzt anmelden!</h3>
                  <p className="text-muted-foreground">
                    {isFull ? 'Dieses Event ist leider ausgebucht.' : isAlmostFull ? 'Nur noch wenige Plätze verfügbar!' : 'Sichern Sie sich Ihren Platz für dieses Event.'}
                  </p>
                </div>
                <Button 
                  size="lg" 
                  disabled={isFull}
                  asChild={!isFull}
                  className="whitespace-nowrap"
                >
                  {isFull ? (
                    'Ausgebucht'
                  ) : (
                    <a href={`mailto:info@vianova-consulting.de?subject=Anmeldung: ${event.title}&body=Hallo,%0A%0Aich möchte mich für das Event "${event.title}" am ${event.eventDate} anmelden.%0A%0AVielen Dank!`}>
                      <Mail className="h-4 w-4 mr-2" />
                      Jetzt anmelden
                    </a>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-spacing">
        <div className="content-container">
          <div className="max-w-4xl mx-auto">
            {event.contentBlocks.map((block, index) => (
              <ContentBlock key={index} block={block} />
            ))}
          </div>
        </div>
      </section>

      {/* Tags */}
      <section className="py-12">
        <div className="content-container">
          <div className="max-w-4xl mx-auto">
            <Separator className="mb-8" />
            <div className="flex flex-wrap items-center gap-2">
              <Tag className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium mr-2">Tags:</span>
              {event.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-muted/20">
        <div className="content-container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Previous Event */}
              {prev && (
                <Card className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <ArrowLeft className="h-4 w-4" />
                      <span>Vorheriges Event</span>
                    </div>
                    <Link 
                      to={`/event/${prev.slug}`}
                      className="text-lg font-semibold hover:text-primary transition-colors line-clamp-2"
                    >
                      {prev.title}
                    </Link>
                  </CardContent>
                </Card>
              )}

              {/* Next Event */}
              {next && (
                <Card className="hover-lift">
                  <CardContent className="p-6 text-right">
                    <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground mb-2">
                      <span>Nächstes Event</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                    <Link 
                      to={`/event/${next.slug}`}
                      className="text-lg font-semibold hover:text-primary transition-colors line-clamp-2"
                    >
                      {next.title}
                    </Link>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Similar Events */}
      {similarEvents.length > 0 && (
        <section className="section-spacing">
          <div className="content-container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">Ähnliche Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {similarEvents.map((similarEvent) => (
                  <Card key={similarEvent.id} className="hover-lift overflow-hidden group">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={similarEvent.image} 
                        alt={similarEvent.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <Badge variant="secondary" className="text-xs w-fit mb-2">
                        {similarEvent.category}
                      </Badge>
                      <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                        {similarEvent.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {similarEvent.excerpt}
                      </p>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                        asChild
                      >
                        <Link to={`/event/${similarEvent.slug}`}>
                          Details ansehen
                          <ArrowRight className="h-3 w-3 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Back to Top */}
      <div className="fixed bottom-8 right-8">
        <Button 
          size="sm" 
          onClick={scrollToTop}
          className="rounded-full shadow-lg"
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default EventDetail;