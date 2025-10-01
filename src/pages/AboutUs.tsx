import HeroSection from '@/components/common/HeroSection';
import ContactSection from '@/components/common/ContactSection';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, Eye, CheckCircle, Home, Shield, Users, TrendingUp, Heart, Briefcase, Globe, Building } from 'lucide-react';
import heroImage from '@/assets/hero-business-success.jpg';
import coachingImage from '@/assets/coaching-session.jpg';
import realEstateExpert from '@/assets/real-estate-expert.jpg';
const AboutUs = () => {
  const values = ["Interkulturalität", "Integration", "Wohlbefinden", "Kontinuierliche Verbesserung", "Verantwortung", "Engagement", "Serviceorientierung", "Anpassung", "Nachhaltigkeit"];
  const teamMembers = [{
    icon: <Home className="h-8 w-8" />,
    title: "Immobilienberatung",
    description: "Wohnraum & Ankommen organisieren"
  }, {
    icon: <Shield className="h-8 w-8" />,
    title: "Versicherungsberatung",
    description: "Umfassender Schutz in der neuen Heimat"
  }, {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Finanzcoaching",
    description: "Finanzielle Stabilität und Planung"
  }, {
    icon: <Briefcase className="h-8 w-8" />,
    title: "Monica Araque",
    description: "Mentorin für Business & Teamführung (Club CLI)"
  }];
  return <div>
      {/* Hero Section */}
      <HeroSection title="Über ViaNova Consulting" subtitle="Ihre erfahrenen Partner für erfolgreiche Integration und nachhaltiges Wachstum in neuen Kulturen." ctaText="Unsere Services entdecken" ctaLink="/dienstleistungen" backgroundImage="/lovable-uploads/0f16871f-0c46-4774-a59d-7c4ab695701a.png" />

      {/* Intro Section */}
      <section className="section-spacing">
        <div className="content-container">
          <div className="animate-fade-in mb-12">
            <h2 className="mb-6">Willkommen bei ViaNova Consulting</h2>
          </div>

          {/* Text/Bild */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in">
              <div className="text-muted-foreground leading-relaxed">
                <p>
                  ViaNova Consulting ist Ihr vertrauensvoller Partner für erfolgreiche Integration und 
                  interkulturellen Wandel. Wir verstehen, dass ein Neuanfang in einem neuen Land oder 
                  einer neuen Kultur sowohl aufregend als auch herausfordernd sein kann.
                </p>
                <p className="mt-6">
                  Mit unserer einzigartigen Kombination aus persönlicher Erfahrung, professioneller 
                  Expertise und empathischem Verständnis begleiten wir Sie durch jeden Schritt Ihrer 
                  Reise zu einem erfolgreichen und erfüllten Leben in Ihrer neuen Heimat.
                </p>
              </div>
            </div>
            <div className="animate-fade-in lg:animate-delay-200">
              <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden shadow-lg">
                <img src={coachingImage} alt="Professionelle Coaching-Sitzung mit Klienten" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gründerin Section */}
      <section className="section-spacing bg-gradient-subtle">
        <div className="content-container">
          <div className="animate-fade-in mb-12">
            <h2 className="mb-6">Unsere Gründerin</h2>
          </div>

          {/* Bild/Text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in order-2 lg:order-1">
              <Card className="w-full max-w-md mx-auto shadow-card">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden shadow-card">
                    <img src="/lovable-uploads/6e2b2c06-f2d7-4078-831c-00fb637c4989.png" alt="Rocío Morales, Gründerin und CEO von ViaNova Consulting" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Rocío Morales</h4>
                  <p className="text-muted-foreground mb-4">Gründerin & CEO</p>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>30+ Jahre Europa-Erfahrung</p>
                    <p>Master Immobilienmanagement</p>
                    <p>Systemische Familientherapeutin</p>
                    <p>CLI Digital Kolumnistin</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="animate-fade-in lg:animate-delay-200 order-1 lg:order-2">
              <div className="text-muted-foreground leading-relaxed">
                <h3 className="text-xl font-semibold text-primary mb-6 flex items-center">
                  <Heart className="h-6 w-6 mr-3" />
                  Rocío Morales - Gründerin & Geschäftsführerin
                </h3>
                <p>
                  Mit über 30 Jahren Erfahrung in Europa hat Rocío Morales eine einzigartige Reise 
                  durch verschiedene Kulturen und Länder gemacht – von Kolumbien über Belgien und 
                  Spanien bis nach Deutschland. Diese persönliche Migrationserfahrung bildet das 
                  Fundament ihrer empathischen und praxisorientierten Beratung.
                </p>
                <p className="mt-6">
                  Ihr Master in Immobilienmanagement und 18 Jahre Branchenerfahrung verbindet sie 
                  mit spezialisierter Ausbildung in Pädagogik, Familiencoaching, systemischer 
                  Familientherapie und als Interkulturelle Facilitatorin. Als Kolumnistin bei 
                  „CLI Digital" teilt sie regelmäßig ihre Expertise und Einblicke.
                </p>
                <p className="mt-6">
                  Ihre Mission ist es, Menschen dabei zu helfen, sich sicher und stimmig in ihr 
                  neues Umfeld zu integrieren und dabei ihre kulturelle Identität zu bewahren 
                  und zu stärken. Interkulturalität und kontinuierliche Anpassung sind dabei 
                  die Säulen ihrer Arbeitsweise – stets offen, menschlich und vertrauenswürdig.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-spacing">
        <div className="content-container">
          <div className="animate-fade-in mb-12">
            <h2 className="mb-6">Unser Ansatz</h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              Bei ViaNova verstehen wir, dass jeder Migrationsprozess einzigartig ist. Deshalb basiert unser Ansatz auf kontinuierlicher Anpassung und offenem Dialog. Wir hören zu, lernen und entwickeln unsere Methoden stetig weiter. Unsere interkulturelle Expertise ermöglicht es uns, Brücken zwischen verschiedenen Welten zu bauen. Dabei bleiben wir stets menschlich und vertrauenswürdig – Eigenschaften, die in einem so persönlichen Prozess wie der Migration von entscheidender Bedeutung sind.
            </p>
          </div>

          {/* Text/Bild */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="space-y-8">
                <Card className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Target className="h-6 w-6 text-primary mr-3" />
                      <h3 className="text-xl font-bold">Unsere Mission</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Fachkräfte, Expatriates, Familien und Organisationen harmonisch in neue 
                      Kulturen und Umgebungen zu integrieren. Wir schaffen Brücken zwischen 
                      Herkunft und Zukunft und verwandeln Herausforderungen in Chancen für 
                      nachhaltiges Wachstum.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Eye className="h-6 w-6 text-primary mr-3" />
                      <h3 className="text-xl font-bold">Unsere Vision</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Internationale Referenz für Relocation, Integration und Interkulturalität 
                      zu werden. Wir streben danach, eine Welt zu schaffen, in der kulturelle 
                      Vielfalt als Stärke erkannt und jeder Neuanfang als Bereicherung gesehen wird.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="animate-fade-in lg:animate-delay-200">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary mb-6">Unsere Werte</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Die Prinzipien, die unser Handeln leiten und die Grundlage für all unsere Entscheidungen bilden. Diese Werte spiegeln unsere Überzeugung wider, dass erfolgreiche Integration mehr als nur praktische Unterstützung bedeutet.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start p-4 bg-gradient-subtle rounded-lg border-l-4 border-primary">
                    <Globe className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Interkulturalität</h4>
                      <p className="text-sm text-muted-foreground">Vielfalt als Stärke verstehen und kulturelle Brücken bauen</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-gradient-subtle rounded-lg border-l-4 border-primary">
                    <Building className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Integration</h4>
                      <p className="text-sm text-muted-foreground">Ganzheitliche Eingliederung in neue Lebensumgebungen</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-gradient-subtle rounded-lg border-l-4 border-primary">
                    <Heart className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Wohlbefinden</h4>
                      <p className="text-sm text-muted-foreground">Emotionale Stabilität und Lebensqualität fördern</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-gradient-subtle rounded-lg border-l-4 border-primary">
                    <TrendingUp className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Kontinuierliche Verbesserung</h4>
                      <p className="text-sm text-muted-foreground">Stetige Anpassung und Weiterentwicklung unserer Services</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Team & Partner */}
      <section className="section-spacing">
        <div className="content-container">
          <div className="animate-fade-in mb-12 text-center">
            <h2 className="mb-6">Wir stellen vor: Unser Team</h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              Experten aus verschiedenen Bereichen für Ihren ganzheitlichen Erfolg. Unser Netzwerk umfasst spezialisierte Partner, die Sie in allen Aspekten Ihrer Integration unterstützen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="animate-fade-in text-center group">
              <div className="aspect-[3/4] bg-muted rounded-lg mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-300 shadow-card">
                <img src="/lovable-uploads/a6f9e8e3-ab21-491f-803d-1ead0b34cfc2.png" alt="Rocío Morales" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-4">
                <div className="text-center pb-4 border-b border-border/20">
                  <h4 className="font-bold text-xl mb-2 text-foreground">Rocío Morales</h4>
                  <p className="text-base text-primary font-medium">Interkulturelle Mentorin & Coach</p>
                </div>
                
                <div className="text-left bg-gradient-subtle p-4 rounded-lg">
                  <h5 className="font-bold text-base text-primary mb-3 flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Spezialisierung
                  </h5>
                  <div className="space-y-3 text-sm text-foreground leading-relaxed">
                    <div className="flex items-start">
                      <span className="text-primary mr-2 font-medium">•</span>
                      <span>Relocation & Integration in Hamburg und Deutschland</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2 font-medium">•</span>
                      <span>Systemisches Familiencoaching und interkulturelle Begleitung</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2 font-medium">•</span>
                      <span>Workshops & Trainings zu Migration, Interkulturalität und Resilienz</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in lg:animate-delay-100 text-center group">
              <div className="aspect-[3/4] bg-muted rounded-lg mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-300 shadow-card">
                <img src={realEstateExpert} alt="Immobilienexperte" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-3 md:space-y-3.5 lg:space-y-4">
                <div className="text-center pb-3 md:pb-3.5 lg:pb-4 border-b border-border/20">
                  <h4 className="font-bold text-xl mb-2 text-foreground">Immobilienexperte</h4>
                  <p className="text-base text-primary font-medium">Wohnraum & Ankommen in Deutschland</p>
                </div>
                
                <div className="text-left bg-gradient-subtle p-4 rounded-lg">
                  <h5 className="font-bold text-base text-primary mb-2 md:mb-2.5 lg:mb-3 flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Spezialisierung
                  </h5>
                  <div className="space-y-2 md:space-y-2.5 text-sm text-foreground leading-relaxed">
                    <div className="flex items-start">
                      <span className="text-primary mr-2 font-medium">•</span>
                      <span>Wohnungssuche und Mietvertragsberatung</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2 font-medium">•</span>
                      <span>Immobilienkauf und Investitionsberatung</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2 font-medium">•</span>
                      <span>Begleitung bei Besichtigungen und Verhandlungen</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in lg:animate-delay-200 text-center group">
              <div className="aspect-[3/4] bg-muted rounded-lg mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-300 shadow-card">
                <img src="/lovable-uploads/222c04c2-309f-4942-a164-c408a4e2568f.png" alt="Monica Araque" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-3 md:space-y-3.5 lg:space-y-4">
                <div className="text-center pb-3 md:pb-3.5 lg:pb-4 border-b border-border/20">
                  <h4 className="font-bold text-xl mb-2 text-foreground">Monica Araque</h4>
                  <p className="text-base text-primary font-medium">Business-Entwicklung & Teamführung</p>
                </div>
                
                <div className="text-left bg-gradient-subtle p-4 rounded-lg">
                  <h5 className="font-bold text-base text-primary mb-2 md:mb-2.5 lg:mb-3 flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Spezialisierung
                  </h5>
                  <div className="space-y-2 md:space-y-2.5 text-sm text-foreground leading-relaxed">
                    <div className="flex items-start">
                      <span className="text-primary mr-2 font-medium">•</span>
                      <span>Berufliche Neuausrichtung hin zur Unternehmensgründung</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2 font-medium">•</span>
                      <span>Struktur, Organisation und Transformation von Unternehmen</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2 font-medium">•</span>
                      <span>Effektives Leadership für Unternehmen und Teams</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in lg:animate-delay-300 text-center group">
              <div className="aspect-[3/4] bg-muted rounded-lg mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-300 shadow-card">
                <img src="/lovable-uploads/32c457ae-47b1-40f6-bcfc-835c8f918fac.png" alt="Finanzcoach" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-3 md:space-y-3.5 lg:space-y-4">
                <div className="text-center pb-3 md:pb-3.5 lg:pb-4 border-b border-border/20">
                  <h4 className="font-bold text-xl mb-2 text-foreground">Finanzcoach</h4>
                  <p className="text-base text-primary font-medium">Finanzielle Stabilität & Planung</p>
                </div>
                
                <div className="text-left bg-gradient-subtle p-4 rounded-lg">
                  <h5 className="font-bold text-base text-primary mb-2 md:mb-2.5 lg:mb-3 flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Spezialisierung
                  </h5>
                  <div className="space-y-2 md:space-y-2.5 text-sm text-foreground leading-relaxed">
                    <div className="flex items-start">
                      <span className="text-primary mr-2 font-medium">•</span>
                      <span>Finanzplanung und Budgetmanagement</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2 font-medium">•</span>
                      <span>Bankgeschäfte und Versicherungsberatung</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2 font-medium">•</span>
                      <span>Investitionsstrategien und Altersvorsorge</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in lg:animate-delay-400 text-center group">
              <div className="aspect-[3/4] bg-muted rounded-lg mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-300 shadow-card">
                <img src="/lovable-uploads/73b45be3-d013-4705-b133-486690b9d6d3.png" alt="Julia Schmidt" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-3 md:space-y-3.5 lg:space-y-4">
                <div className="text-center pb-3 md:pb-3.5 lg:pb-4 border-b border-border/20">
                  <h4 className="font-bold text-xl mb-2 text-foreground">Julia Schmidt</h4>
                  <p className="text-base text-primary font-medium">Sprachexpertin & Kulturcoach</p>
                </div>
                
                <div className="text-left bg-gradient-subtle p-4 rounded-lg">
                  <h5 className="font-bold text-base text-primary mb-2 md:mb-2.5 lg:mb-3 flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Spezialisierung
                  </h5>
                  <div className="space-y-2 md:space-y-2.5 text-sm text-foreground leading-relaxed">
                    <div className="flex items-start">
                      <span className="text-primary mr-2 font-medium">•</span>
                      <span>Deutschkurse für alle Niveaustufen</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2 font-medium">•</span>
                      <span>Kulturelle Anpassung und Verhaltenscoaching</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-primary mr-2 font-medium">•</span>
                      <span>Kommunikationstraining für den Beruf</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

    </div>;
};
export default AboutUs;