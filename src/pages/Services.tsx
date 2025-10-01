import HeroSection from '@/components/common/HeroSection';
import ServiceCard from '@/components/common/ServiceCard';
import ContactSection from '@/components/common/ContactSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MapPin, Users, Heart, Globe, ArrowRight, Clock, Languages, Video } from 'lucide-react';
import heroImage from '@/assets/hero-services.jpg';
import testimonialImage from '@/assets/testimonial-customer.jpg';
import faqImage from '@/assets/faq-consultation.jpg';
import familyArrivalImage from '@/assets/services-family-arrival.jpg';
import familyTherapyImage from '@/assets/services-family-therapy.jpg';
import familyWorkshopImage from '@/assets/services-family-workshop.jpg';
import interculturalWorkshopImage from '@/assets/services-intercultural-workshop.jpg';
const Services = () => {
  const services = [{
    icon: <MapPin className="h-12 w-12" />,
    title: "Relocation-Support für Unternehmen, Expats & Familien",
    description: "Begleitung von Fachkräften und Familien beim Ankommen in Hamburg: Coaching in Integration, Anpassung und interkultureller Orientierung.",
    features: [],
    targetGroup: "",
    ctaText: "Mehr erfahren"
  }, {
    icon: <Users className="h-12 w-12" />,
    title: "Coaching & Systemische Familientherapie",
    description: "Durch Diagnose und begleitende Sitzungen unterstützt Rocío Familien dabei, Harmonie und Stabilität während der Anpassung an eine neue Kultur zu entwickeln.",
    features: [],
    targetGroup: "",
    ctaText: "Mehr erfahren"
  }, {
    icon: <Heart className="h-12 w-12" />,
    title: "Programm Eudaimonía für Familienwohlbefinden",
    description: "Workshops und Ressourcen zur Stärkung von Familien im Ausland: Bindungen vertiefen, Migrationserfahrungen integrieren und ein gesundes Zuhause gestalten.",
    features: [],
    targetGroup: "",
    ctaText: "Zum Programm"
  }, {
    icon: <Globe className="h-12 w-12" />,
    title: "Workshop Interkulturalität",
    description: "Training für Personen & Teams, um interkulturelle Kompetenz, Kommunikation und Zusammenarbeit in internationalen Kontexten zu stärken.",
    features: [],
    targetGroup: "",
    ctaText: "Zum Workshop"
  }, {
    icon: <Languages className="h-12 w-12" />,
    title: "Workshop Migration & Anpassung",
    description: "Praxisorientierte Begleitung für Migrant:innen zur Integration, Resilienz und kulturellen Anpassung im neuen Land.",
    features: [],
    targetGroup: "",
    ctaText: "Zum Workshop"
  }];
  const faqItems = [{
    question: "Wie läuft ein typisches Coaching ab?",
    answer: "Unser Coaching beginnt mit einem kostenlosen Erstgespräch zur Bedarfsanalyse. Anschließend entwickeln wir einen individuellen Plan mit konkreten Meilensteinen. Die Begleitung erfolgt je nach Bedarf vor Ort, online oder hybrid über mehrere Wochen bis Monate."
  }, {
    question: "Wie lange dauert der Integrationsprozess?",
    answer: "Die Dauer variiert je nach individueller Situation und Zielen. Grundlegende Orientierung: 2-4 Wochen. Vollständige Integration: 3-12 Monate. Wir passen die Begleitung an Ihr Tempo an."
  }, {
    question: "In welchen Sprachen bieten Sie Beratung an?",
    answer: "Wir beraten in Deutsch, Spanisch und Englisch. Bei Bedarf vermitteln wir auch Beratung in anderen Sprachen durch unser Partnernetzwerk."
  }, {
    question: "Bieten Sie auch Online-Beratung an?",
    answer: "Ja, wir bieten flexible Beratungsformen: Vor-Ort-Termine in Hamburg, Online-Sessions via Video-Call und Hybrid-Modelle je nach Ihren Bedürfnissen und Präferenzen."
  }];
  return <div>
      {/* Hero Section */}
      <HeroSection title="Professionelle Dienstleistungen für Ihren Erfolg" subtitle="Wir begleiten den Wandel – strukturiert, menschlich, wirksam. Entdecken Sie unsere maßgeschneiderten Services für Integration und Wachstum." ctaText="Erstgespräch reservieren" ctaLink="/kontakt-shop" backgroundImage={heroImage} />

      {/* Benefits Section */}
      <section className="section-spacing bg-gradient-subtle">
        <div className="content-container">
          <div className="animate-fade-in mb-16 text-center">
            <h2 className="mb-6">Persönliche Erfahrung trifft professionelle Expertise</h2>
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Benefit 1 */}
            <div className="animate-fade-in text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Persönliche Erfahrung</h3>
              <p className="text-sm text-muted-foreground">
                ViaNova kennt Migration und Integration aus eigener Erfahrung und versteht die emotionalen Herausforderungen.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="animate-fade-in animate-delay-100 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Empathische Begleitung</h3>
              <p className="text-sm text-muted-foreground">
                Jedes Coaching ist geprägt von Empathie und tiefem Verständnis für Ihre einzigartige Situation.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="animate-fade-in animate-delay-200 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Familiäre Harmonie</h3>
              <p className="text-sm text-muted-foreground">
                Spezialisiert darauf, familiäre Harmonie in neuen Kulturen zu fördern und zu stärken.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="animate-fade-in animate-delay-300 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Kontinuierliche Begleitung</h3>
              <p className="text-sm text-muted-foreground">
                Durchgehende Unterstützung während des gesamten Integrationsprozesses - Sie sind nie allein.
              </p>
            </div>
          </div>

          {/* Testimonial/Quote */}
          <div className="bg-background rounded-lg p-8 shadow-sm border-l-4 border-primary animate-fade-in">
            <blockquote className="text-lg font-medium text-foreground mb-4">
              "Meine eigene Migrationserfahrung ermöglicht es mir, nicht nur professionell, sondern auch 
              mit dem Herzen zu begleiten. Ich verstehe die Ängste, die Hoffnungen und die kleinen Siege 
              auf diesem Weg."
            </blockquote>
            <cite className="text-sm text-muted-foreground font-medium">
              — Rocío Morales-Broy, Gründerin und Familientherapeutin
            </cite>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-spacing bg-gradient-subtle">
        <div className="content-container">
          <div className="animate-fade-in mb-16">
            <h2 className="mb-6">Unsere Dienstleistungen</h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              Professionelle Begleitung durch alle Phasen Ihrer Reise – von der ersten Orientierung bis zur vollständigen Integration.
            </p>
          </div>

          {/* 1. Coaching */}
          <div className="mb-20">
            <div className="animate-fade-in mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-primary-foreground">1</span>
                </div>
                <h3 className="text-2xl font-bold">Coaching</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* 1.1 Relocation Support */}
              <Card className="hover-lift h-full bg-background shadow-sm rounded-2xl border-0">
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Image */}
                  <div className="w-full h-48 mb-6 rounded-xl overflow-hidden">
                    <img 
                      src={familyArrivalImage} 
                      alt="Familie bei der Ankunft" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    {/* Title */}
                    <h4 className="text-lg font-semibold mb-3 text-foreground">
                      1.1. Relocation-Support für Unternehmen, Expats & Familien
                    </h4>
                    
                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3 flex-1">
                      Coaching in Integration und Interkulturalität für versetzte Fachkräfte und ihre Familien.
                    </p>
                    
                    {/* Location/Details */}
                    <p className="text-xs text-muted-foreground/80 mb-4">
                      Hamburg, Deutschland
                    </p>
                    
                    {/* Button */}
                    <Button variant="outline" className="w-full mt-auto" asChild>
                      <a href="/kontakt-shop">Mehr erfahren</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* 1.2 Familientherapie */}
              <Card className="hover-lift h-full bg-background shadow-sm rounded-2xl border-0">
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Image */}
                  <div className="w-full h-48 mb-6 rounded-xl overflow-hidden">
                    <img 
                      src={familyTherapyImage} 
                      alt="Familie in Therapiesitzung" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    {/* Title */}
                    <h4 className="text-lg font-semibold mb-3 text-foreground">
                      1.2. Coaching & Systemische Familientherapie
                    </h4>
                    
                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3 flex-1">
                      Begleitung von Familien durch Diagnose und Sitzungen, um Beziehungen zu harmonisieren und die Anpassung an eine neue Kultur zu erleichtern.
                    </p>
                    
                    {/* Location/Details */}
                    <p className="text-xs text-muted-foreground/80 mb-4">
                      Systemische Therapie
                    </p>
                    
                    {/* Button */}
                    <Button variant="outline" className="w-full mt-auto" asChild>
                      <a href="/kontakt-shop">Mehr erfahren</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* 2. Formationen / Trainings */}
          <div>
            <div className="animate-fade-in mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-primary-foreground">2</span>
                </div>
                <h3 className="text-2xl font-bold">Formationen / Trainings</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* 2.1 Programm Eudaimonía */}
              <Card className="hover-lift h-full bg-background shadow-sm rounded-2xl border-0 lg:col-span-2">
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Image */}
                  <div className="w-full h-48 mb-6 rounded-xl overflow-hidden">
                    <img 
                      src={familyWorkshopImage} 
                      alt="Familie in Workshop-Setting" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    {/* Title */}
                    <h4 className="text-lg font-semibold mb-3 text-foreground">
                      2.1. Programm Eudaimonía für familiäres Wohlbefinden
                    </h4>
                    
                    {/* Main Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Wir begleiten migrierte Familien im Ausland dabei, ihre Bindungen zu stärken, die Migrationserfahrung zu integrieren und ein emotional gesundes Zuhause zu entwickeln – durch erlebnisorientierte Workshops, emotionale Ressourcen und Beziehungspraktiken auf Basis des systemischen Ansatzes und emotionaler Bewusstheit.
                    </p>

                    {/* Developer Info */}
                    <div className="bg-gradient-subtle p-4 rounded-lg border-l-4 border-primary mb-4">
                      <p className="text-xs text-muted-foreground mb-2">
                        <strong>Entwickelt von Rocío Morales-Broy</strong>, systemische Familientherapeutin, Familiencoach und interkulturelle Facilitatorin – basierend auf ihrer persönlichen und beruflichen Erfahrung in Migrations- und Familienprozessen in verschiedenen Ländern.
                      </p>
                      <p className="text-xs text-muted-foreground">
                        <em>Eudaimonía</em> stammt aus dem Altgriechischen und bedeutet „Wohlbefinden mit Sinn". Dieser Ansatz überträgt das Prinzip auf das Familienleben, auch in Zeiten von Wandel und kultureller Neuorientierung.
                      </p>
                    </div>

                    {/* Method Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Die begleitende Methodik umfasst <strong>elf erlebnisorientierte Workshops</strong>, die Reflexion, Verbindung und die gezielte Anwendung emotionaler, familiärer und kultureller Werkzeuge fördern. Sie eignen sich für Einzelsitzungen, Familiensettings oder Gruppentrainings.
                    </p>

                    {/* Target Group */}
                    <div className="mb-4">
                      <h5 className="font-medium mb-2 text-sm">Zielgruppe:</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 text-xs text-muted-foreground">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                          Mütter, Väter und Betreuungspersonen
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                          Therapeut:innen, Coaches und emotionale Begleiter:innen
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                          Community-Facilitator:innen
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                          Pädagog:innen und interdisziplinäre Teams
                        </div>
                      </div>
                    </div>
                    
                    {/* Button */}
                    <Button variant="outline" className="w-full mt-auto" asChild>
                      <a href="/kontakt-shop">Mehr erfahren</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* 2.2 Workshop Interkulturalität */}
              <Card className="hover-lift h-full bg-background shadow-sm rounded-2xl border-0">
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Image */}
                  <div className="w-full h-48 mb-6 rounded-xl overflow-hidden">
                    <img 
                      src={interculturalWorkshopImage} 
                      alt="Interkulturelles Team-Workshop" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    {/* Title */}
                    <h4 className="text-lg font-semibold mb-3 text-foreground">
                      2.2. Workshop Interkulturalität
                    </h4>
                    
                    {/* Goal */}
                    <div className="bg-gradient-subtle p-4 rounded-lg border-l-4 border-primary mb-4">
                      <h5 className="font-medium mb-2 text-xs">Ziel:</h5>
                      <p className="text-xs text-muted-foreground">
                        Stärkung der interkulturellen Kompetenzen von Einzelpersonen und Teams, um Kommunikation, Integration und Zusammenarbeit in diversen Kontexten zu verbessern – für ein respektvolles und wirksames Miteinander in internationalen Umfeldern.
                      </p>
                    </div>

                    {/* Content List */}
                    <div className="mb-4 flex-1">
                      <h5 className="font-medium mb-2 text-sm">Inhalte:</h5>
                      <div className="space-y-1 text-xs text-muted-foreground">
                        <div className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                          Was ist interkulturelle Kompetenz?
                        </div>
                        <div className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                          Kulturelle Kommunikations- und Arbeitsstile
                        </div>
                        <div className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                          Kulturschock und Anpassung
                        </div>
                        <div className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                          Stereotype, Vorurteile und unbewusste Bias
                        </div>
                        <div className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                          Interkulturelles Konfliktmanagement
                        </div>
                        <div className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                          Werkzeuge für kulturelles Verständnis und Integration
                        </div>
                        <div className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                          Sensibilisierungsübungen und Reflexion
                        </div>
                      </div>
                    </div>
                    
                    {/* Button */}
                    <Button variant="outline" className="w-full mt-auto" asChild>
                      <a href="/kontakt-shop">Zum Workshop</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* 2.3 Workshops Migrationsprozess */}
              <Card className="hover-lift h-full bg-background shadow-sm rounded-2xl border-0">
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Image - using placeholder since no specific image assigned */}
                  <div className="w-full h-48 mb-6 rounded-xl overflow-hidden bg-gradient-subtle flex items-center justify-center">
                    <Languages className="h-16 w-16 text-primary/30" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    {/* Title */}
                    <h4 className="text-lg font-semibold mb-3 text-foreground">
                      2.3. Workshops im Migrationsprozess
                    </h4>
                    
                    {/* Goal */}
                    <div className="bg-gradient-subtle p-4 rounded-lg border-l-4 border-primary mb-4">
                      <h5 className="font-medium mb-2 text-xs">Ziel:</h5>
                      <p className="text-xs text-muted-foreground">
                        Menschen in Migrationsprozessen emotionale, praktische und kulturelle Werkzeuge an die Hand geben, um ihre Anpassung, Integration und ihr Wohlbefinden im Aufnahmeland zu erleichtern – mit einem menschlichen und strategischen Ansatz.
                      </p>
                    </div>

                    {/* Content List */}
                    <div className="mb-4 flex-1">
                      <h5 className="font-medium mb-2 text-sm">Inhalte:</h5>
                      <div className="space-y-1 text-xs text-muted-foreground">
                        <div className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                          Phasen des Migrationsprozesses: vor, während, nach der Migration
                        </div>
                        <div className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                          Emotionale und psychologische Herausforderungen der Migration
                        </div>
                        <div className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                          Migrations-Trauer und Neuaufbau des Lebensprojekts
                        </div>
                        <div className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                          Barrieren und Ressourcen im Aufnahmeland
                        </div>
                        <div className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                          Strategien der kulturellen Anpassung
                        </div>
                        <div className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                          Grundrechte und lokale Ressourcen (praktische Infos)
                        </div>
                        <div className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                          Stärkung der Migrationsresilienz
                        </div>
                      </div>
                    </div>
                    
                    {/* Button */}
                    <Button variant="outline" className="w-full mt-auto" asChild>
                      <a href="/kontakt-shop">Mehr erfahren</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


      {/* Testimonial Section */}
      <section className="section-spacing bg-neutral-100">
        <div className="content-container">
          <div className="relative max-w-5xl mx-auto">
            {/* Photo Rectangle */}
            <div className="relative w-full lg:w-3/5 aspect-[4/3] bg-muted rounded-lg shadow-lg overflow-hidden">
              <img src="/lovable-uploads/765c1ba6-875b-4c52-8a06-7cbebc4ee731.png" alt="Zufriedene Kundin bei der Beratung" className="w-full h-full object-cover object-top" />
            </div>
            
            {/* Overlapping Text Rectangle */}
            <div className="relative lg:absolute lg:top-1/2 lg:right-0 lg:-translate-y-1/2 lg:w-3/5 mt-6 lg:mt-0">
              <div className="bg-white rounded-lg shadow-xl p-8 lg:p-12 lg:ml-20">
                <blockquote className="text-xl lg:text-2xl font-serif leading-relaxed text-foreground mb-6">
                  "Ich habe <strong>unterschätzt</strong>, wie schwierig es sein würde, mich an die Arbeit im <em>Homeoffice</em> zu gewöhnen, aber dank der Hilfe von Dr. Schell konnte ich mich wieder <strong>konzentrieren</strong>."
                </blockquote>
                <cite className="text-sm text-muted-foreground font-medium uppercase tracking-wide">
                  — OLIVIA R., KUNDIN VON CLOVE
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Process Section */}
      <section className="section-spacing">
        <div className="content-container">
          <div className="animate-fade-in mb-12">
            <h2 className="mb-6">Begleitung im Migrationsprozess</h2>
          </div>

          {/* Text/Bild */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="text-muted-foreground leading-relaxed">
                <p>
                  Ganzheitliche Unterstützung vor, während und nach der Migration. Unser strukturierter 
                  Ansatz stellt sicher, dass Sie in jeder Phase die richtige Unterstützung erhalten.
                </p>
                <p className="mt-6">
                  Von der ersten Planung bis zur vollständigen Integration – wir begleiten Sie durch 
                  alle wichtigen Etappen Ihrer Reise und sorgen dafür, dass nichts dem Zufall überlassen wird.
                </p>
              </div>
            </div>
            <div className="animate-fade-in lg:animate-delay-200">
              <div className="grid grid-cols-1 gap-6">
                <Card className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                        <span className="text-lg font-bold text-primary">1</span>
                      </div>
                      <h3 className="text-lg font-semibold">Vor der Migration</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Dokumentenvorbereitung, Finanzplanung und kulturelle Vorbereitung
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                        <span className="text-lg font-bold text-primary">2</span>
                      </div>
                      <h3 className="text-lg font-semibold">Während der Migration</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Ankunftsbegleitung, Behördengänge und erste Orientierung
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                        <span className="text-lg font-bold text-primary">3</span>
                      </div>
                      <h3 className="text-lg font-semibold">Nach der Migration</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Soziale Integration, berufliche Entwicklung und Nachbetreuung
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing bg-muted/30">
        <div className="content-container">
          <div className="animate-fade-in mb-12">
            <h2 className="mb-6">Häufig gestellte Fragen</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="animate-fade-in">
              <div className="text-muted-foreground leading-relaxed">
                <p className="mb-6 text-center">Alles was Sie über unsere Services wissen möchten</p>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqItems.map((item, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg px-4">
                      <AccordionTrigger className="text-left hover:no-underline text-sm">
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                            {index === 0 && <Clock className="h-3 w-3 text-primary" />}
                            {index === 1 && <ArrowRight className="h-3 w-3 text-primary" />}
                            {index === 2 && <Languages className="h-3 w-3 text-primary" />}
                            {index === 3 && <Video className="h-3 w-3 text-primary" />}
                          </div>
                          <span className="font-medium">{item.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pt-2 pb-4 ml-9 text-sm">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>)}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

    </div>;
};
export default Services;