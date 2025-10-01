import HeroSection from '@/components/common/HeroSection';
import ContactSection from '@/components/common/ContactSection';
import ContactForm from '@/components/common/ContactForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Mail, Phone, MapPin, Clock, CheckCircle, Star, ShoppingCart, BookOpen, ExternalLink } from 'lucide-react';
import heroImage from '@/assets/hero-contact.jpg';
import { events } from '@/data/events';
import EventCard from '@/components/common/EventCard';
import { Link } from 'react-router-dom';

const ContactShop = () => {
  const contactMethods = [{
    icon: <Mail className="h-6 w-6" />,
    title: "E-Mail",
    value: "info@vianova-consulting.de",
    description: "Antwort innerhalb von 24 Stunden"
  }, {
    icon: <Phone className="h-6 w-6" />,
    title: "Telefon",
    value: "+49 (0) 40 123 456 789",
    description: "Mo-Fr 9:00-18:00 Uhr"
  }, {
    icon: <MapPin className="h-6 w-6" />,
    title: "Adresse",
    value: "Beispielstraße 123, 20095 Hamburg",
    description: "Termine nach Vereinbarung"
  }];

  const appointmentOptions = [{
    title: "Kostenloses Erstgespräch",
    duration: "30 Minuten",
    price: "Kostenlos",
    description: "Lernen Sie uns kennen und besprechen Sie Ihre Situation",
    features: ["Bedarfsanalyse", "Unverbindliche Beratung", "Maßgeschneiderter Lösungsvorschlag", "Online oder vor Ort"],
    popular: true
  }, {
    title: "Intensivberatung",
    duration: "90 Minuten",
    price: "€150",
    description: "Tiefgehende Analyse und konkrete Handlungsempfehlungen",
    features: ["Detaillierte Situationsanalyse", "Individueller Aktionsplan", "Ressourcen und Checklisten", "Follow-up nach 2 Wochen"]
  }, {
    title: "Paket-Beratung",
    duration: "3 x 60 Minuten",
    price: "€399",
    description: "Begleitung über mehrere Wochen für nachhaltige Ergebnisse",
    features: ["3 Beratungstermine", "Zwischen-Check-ins", "Umfangreiche Materialien", "E-Mail-Support"]
  }];

  const shopItems = [{
    title: "Buch: La otra orilla del río Eger",
    author: "Rocío Morales-Broy",
    price: "€24,99",
    description: "Eine bewegende Geschichte über Migration, Identität und die Suche nach einem neuen Zuhause. Basierend auf persönlichen Erfahrungen und mit wertvollen Einsichten für alle, die vor einem Neuanfang stehen.",
    features: ["320 Seiten", "Deutsch & Spanisch", "Hardcover", "Mit Diskussionsleitfaden"],
    badge: "Bestseller",
    image: "/lovable-uploads/8a1c3fad-c01b-4443-8c2a-c4fbafc7d8fa.png"
  }, {
    title: "Integration Workbook",
    author: "ViaNova Consulting",
    price: "€19,99",
    description: "Praktisches Arbeitsbuch mit Checklisten, Übungen und Reflexionsfragen für Ihre erfolgreiche Integration.",
    features: ["150 Seiten", "Praxisübungen", "Downloadbare Ressourcen", "Schritt-für-Schritt Anleitungen"]
  }, {
    title: "Online-Kurs: Kulturelle Anpassung",
    author: "ViaNova Academy",
    price: "€99,99",
    description: "Umfassender Online-Kurs für besseres Verständnis deutscher Kultur und erfolgreiche Integration.",
    features: ["8 Module", "Video-Lektionen", "Interaktive Übungen", "Zertifikat"],
    badge: "Neu"
  }, {
    title: "Migrations-Ratgeber",
    author: "ViaNova Consulting",
    price: "€16,99",
    description: "Praktischer Leitfaden für alle Phasen der Migration - von der Vorbereitung bis zur erfolgreichen Integration.",
    features: ["200 Seiten", "Checklisten", "Erfahrungsberichte", "Rechtliche Hinweise"]
  }, {
    title: "Sprachkurs Deutsch A1-B2",
    author: "ViaNova Academy",
    price: "€149,99",
    description: "Kompletter Online-Sprachkurs für Deutsch als Fremdsprache mit interaktiven Übungen und persönlichem Coaching.",
    features: ["12 Module", "Audio-Material", "Grammatik-Training", "Zertifikat"],
    badge: "Empfohlen"
  }, {
    title: "Kulturkompass Deutschland",
    author: "Dr. Maria Schmidt",
    price: "€22,99",
    description: "Verstehen Sie deutsche Kultur, Werte und Gepflogenheiten für eine erfolgreiche Integration im beruflichen und privaten Umfeld.",
    features: ["280 Seiten", "Praxisbeispiele", "Kulturelle Do's & Don'ts", "Arbeitsblätter"]
  }];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection 
        title="Shop" 
        subtitle="Nehmen Sie Kontakt auf für Ihr kostenloses Erstgespräch oder entdecken Sie unsere Ressourcen und Bücher." 
        backgroundImage={heroImage}
        showCta={false}
      />

      {/* Appointment Booking */}
      <section id="appointment" className="section-spacing bg-gradient-subtle">
        <div className="content-container">
          <div className="animate-fade-in mb-12">
            <h2 className="mb-6">Termin anfragen</h2>
          </div>

          {/* Text/Bild */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="text-muted-foreground leading-relaxed">
                <p>
                  Wählen Sie das für Sie passende Beratungsformat. Alle Termine können sowohl 
                  online als auch vor Ort in Hamburg stattfinden.
                </p>
                <p className="mt-6">
                  Unser kostenloses Erstgespräch ist der perfekte Einstieg, um sich kennenzulernen 
                  und Ihre individuellen Bedürfnisse zu besprechen.
                </p>
              </div>
            </div>
            <div className="animate-fade-in lg:animate-delay-200">
              <div className="grid grid-cols-1 gap-4">
                {appointmentOptions.map((option, index) => (
                  <Card key={index} className={`hover-lift ${option.popular ? 'ring-2 ring-primary' : ''}`}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          {option.popular && (
                            <Badge className="mb-2" variant="default">
                              <Star className="h-3 w-3 mr-1" />
                              Beliebt
                            </Badge>
                          )}
                          <h3 className="font-semibold">{option.title}</h3>
                          <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                            <Clock className="h-3 w-3" />
                            <span>{option.duration}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{option.price}</div>
                          <Button size="sm" variant={option.popular ? "default" : "outline"}>
                            <Calendar className="h-3 w-3 mr-1" />
                            Buchen
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section className="section-spacing">
        <div className="content-container">
          <div className="animate-fade-in section-title-spacing">
            <h2 className="mb-6">Shop</h2>
          </div>

          {/* Einleitungstext */}
          <div className="mb-12">
            <div className="animate-fade-in">
              <div className="text-muted-foreground leading-relaxed max-w-4xl">
                <p>
                  Bücher, Kurse und Ressourcen für Ihre erfolgreiche Integration. Unsere 
                  Publikationen basieren auf jahrelanger Erfahrung und bieten praktische 
                  Hilfestellungen für verschiedene Aspekte der Migration.
                </p>
                <p className="mt-6">
                  Von persönlichen Geschichten bis hin zu praktischen Arbeitsbüchern – 
                  finden Sie die Ressourcen, die Sie auf Ihrem Weg unterstützen.
                </p>
              </div>
            </div>
          </div>

          {/* Produktgrid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shopItems.slice(0, 6).map((item, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mb-1">von {item.author}</p>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xl font-bold text-primary">{item.price}</span>
                        {item.badge && (
                          <Badge variant="secondary" className="text-xs">
                            {item.badge}
                          </Badge>
                        )}
                      </div>
                    </div>
                    {item.image ? (
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="h-20 w-16 object-cover rounded-lg shadow-md ml-4 flex-shrink-0"
                      />
                    ) : (
                      <BookOpen className="h-8 w-8 text-primary ml-4 flex-shrink-0" />
                    )}
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  {item.features && (
                    <div className="mb-4">
                      <div className="grid grid-cols-2 gap-1 text-xs text-muted-foreground">
                        {item.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <CheckCircle className="h-3 w-3 text-primary mr-1 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  <Button className="w-full" asChild>
                    <a href={index === 0 ? "https://www.amazon.de/otra-orilla-del-río-Eger/dp/8412898540?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A3JWKAKR8XB7XF&language=de_DE" : `mailto:info@vianova-consulting.de?subject=Interesse an: ${item.title}`} target="_blank" rel="noopener noreferrer">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Bestellen
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="section-spacing">
        <div className="content-container">
          <div className="animate-fade-in section-title-spacing">
            <h2 className="mb-6">Events</h2>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {events.slice(0, 3).map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          {/* View All Events Button */}
          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/events">
                <Calendar className="h-4 w-4 mr-2" />
                Alle Events ansehen
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default ContactShop;