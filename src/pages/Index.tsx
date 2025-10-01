import { useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/common/HeroSection';
import ServiceCard from '@/components/common/ServiceCard';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Heart, Users, TrendingUp, Building, Globe, BookOpen, HandHeart, Calendar, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';
import TestimonialsSection from '@/components/common/TestimonialsSection';
import ContactSection from '@/components/common/ContactSection';
import heroImage from '@/assets/hero-family-arrival.jpg';
const Index = () => {
  const imageScrollRef = useRef<HTMLDivElement>(null);
  const scrollImages = () => {
    if (imageScrollRef.current) {
      const containerWidth = imageScrollRef.current.clientWidth;
      imageScrollRef.current.scrollBy({
        left: containerWidth,
        behavior: 'smooth'
      });
    }
  };
  return <div>
      {/* Hero Section */}
      <HeroSection title="Transformamos procesos de integración en una oportunidad real de superación y crecimiento." subtitle="Ankommen ist mehr als landen – wir begleiten Sie auf dem Weg zu einem neuen Leben." backgroundImage={heroImage} showCta={false} />

      {/* Intro Storytelling */}
      <section className="section-spacing">
        <div className="content-container">
          {/* Überschrift */}
          <div className="animate-fade-in mb-12">
            <h2 className="mb-6">Migration ist eine Reise des Mutes</h2>
          </div>

          {/* Text/Bild */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in">
              <div className="text-muted-foreground leading-relaxed">
                <p>Wir wissen, dass die Ankunft in einem neuen Land weit mehr bedeutet, als nur an einem Flughafen zu landen. Oft heißt es, eine neue Sprache zu lernen, sich neu zu erfinden, sich an unbekannte Gewohnheiten anzupassen – und manchmal auch, die Einsamkeit eines Neuanfangs zu erleben.</p>
                
                <p className="mt-6">Migration heißt, neue Räume der Zugehörigkeit zu schaffen. In diesem Prozess ist ViaNova – als multidisziplinäres und multikulturelles Team – der ideale Partner für Fachkräfte, die fern der Heimat eine neue Zukunft planen, sowie für Familien, die Unterstützung bei der beruflichen, kulturellen und sozialen Eingliederung in ihrer neuen Umgebung suchen.</p>
              </div>
            </div>
            <div className="animate-fade-in lg:animate-delay-200">
              <img src="/lovable-uploads/338d2644-65e5-4e63-9a7d-24f15af02305.png" alt="Rocío Morales speaking at an event" className="aspect-[4/3] w-full object-contain rounded-2xl border-4 border-white shadow-lg" />
            </div>
          </div>

          {/* Bild/Text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in lg:animate-delay-300 order-2 lg:order-1">
              {/* Horizontal Image Scroll Module */}
              <div className="relative">
                <div ref={imageScrollRef} className="flex overflow-x-auto pb-4 scroll-smooth" style={{
                scrollSnapType: 'x mandatory',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}>
                  <div className="flex-none w-full scroll-snap-start">
                    <img src="/lovable-uploads/358c4265-765b-4047-834a-4d07db2e4f6b.png" alt="Diverse community gathering - people from different backgrounds coming together" className="aspect-[4/3] w-full object-cover rounded-lg" />
                  </div>
                  <div className="flex-none w-full scroll-snap-start">
                    <img src="/lovable-uploads/338d2644-65e5-4e63-9a7d-24f15af02305.png" alt="Professional consultation meeting" className="aspect-[4/3] w-full object-cover object-center rounded-lg" />
                  </div>
                  <div className="flex-none w-full scroll-snap-start">
                    <img src="/lovable-uploads/765c1ba6-875b-4c52-8a06-7cbebc4ee731.png" alt="Integration support services" className="aspect-[4/3] w-full object-cover rounded-lg" />
                  </div>
                </div>
                
                {/* Scroll Button */}
                <Button variant="outline" size="sm" onClick={scrollImages} className="absolute top-1/2 right-2 transform -translate-y-1/2 h-10 w-10 p-0 bg-background/80 backdrop-blur-sm" aria-label="Scroll right">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="animate-fade-in lg:animate-delay-400 order-1 lg:order-2">
              <div className="text-muted-foreground leading-relaxed text-center">
                <p>Unsere Mission ist es, diesen transformativen Prozess zu begleiten und aus jeder Herausforderung eine Chance für persönliches und berufliches Wachstum zu machen. Wir sind mehr als Berater – wir sind Ihre Partner auf diesem wichtigen Lebensweg.</p>
                <p className="mt-6">Darüber hinaus beraten wir Unternehmen, die an der Mobilität und Integration von Mitarbeitenden in Deutschland interessiert sind, damit deren Familien eine nahe, empathische Begleitung in ihrer Sprache erhalten und der gesamte Ankunfts- und Anpassungsprozess zu einer positiven Erfahrung wird.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DNA-Sektion: Unsere Basis Integration */}
      <section className="section-spacing bg-muted/30">
        <div className="content-container">
          <div className="animate-fade-in mb-12">
            <h2 className="mb-6">Integration gehört zu unserer DNA</h2>
          </div>

          {/* Text/Bild */}
          <div className="mb-16">
            <div className="animate-fade-in mb-12">
              <div className="text-muted-foreground leading-relaxed max-w-4xl">
                <p>Drei Säulen, die Ihren Erfolg in einem neuen Land sicherstellen. Unsere DNA basiert auf jahrelanger Erfahrung und wissenschaftlich fundierten Ansätzen, die wir in jedem unserer Services anwenden.</p>
                <p className="mt-6">Diese drei Bereiche bilden das Fundament für eine ganzheitliche Integration, die nicht nur praktische Aspekte abdeckt, sondern auch emotionale und kulturelle Dimensionen berücksichtigt.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              <div className="animate-fade-in lg:animate-delay-200">
                <ServiceCard icon={<Globe className="h-8 w-8" />} title="Kulturelle Adaptation" description="Wir helfen, sich in neuen kulturellen Umfeldern zurechtzufinden und Brücken zu bauen." image="/lovable-uploads/358c4265-765b-4047-834a-4d07db2e4f6b.png" imageAlt="Diverse community gathering - cultural adaptation" />
              </div>
              <div className="animate-fade-in lg:animate-delay-300">
                <ServiceCard icon={<Heart className="h-8 w-8" />} title="Familiäres Wohlbefinden" description="Begleitung, die emotionale Stabilität und Harmonie in der Familie stärkt." image="/lovable-uploads/73b45be3-d013-4705-b133-486690b9d6d3.png" imageAlt="Family wellbeing and emotional support" />
              </div>
              <div className="animate-fade-in lg:animate-delay-400">
                <ServiceCard icon={<Building className="h-8 w-8" />} title="Relocation" description="Unterstützung für Unternehmen, Fachkräfte und Familien bei allen praktischen Schritten des Ankommens." image="/lovable-uploads/342ead6b-9a03-4e9f-9a4b-24a6fe94b3c9.png" imageAlt="Professional relocation and business support" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warum ViaNova Section */}
      <section className="section-spacing">
        <div className="content-container">
          <div className="animate-fade-in mb-12">
            <h2 className="mb-6">Warum ViaNova?</h2>
          </div>

          {/* Bild/Text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in order-2 lg:order-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ServiceCard icon={<Heart className="h-8 w-8" />} title="Empathie" description="Begleitung durch Menschen, die Migration selbst erfahren haben." image="/lovable-uploads/6e2b2c06-f2d7-4078-831c-00fb637c4989.png" imageAlt="Empathische Beratung durch erfahrene Migration" />
                <ServiceCard icon={<Users className="h-8 w-8" />} title="Begleitung" description="Ihr Weg wird leichter mit uns an Ihrer Seite." image="/lovable-uploads/9f199fbf-fc20-46c7-b9e5-9d2e72f4f9bf.png" imageAlt="Professionelle Begleitung und Unterstützung" />
                <ServiceCard icon={<TrendingUp className="h-8 w-8" />} title="Erfahrung" description="Internationale, interkulturelle Expertise." image="/lovable-uploads/2d01e759-be77-4e28-886b-7c5343b80445.png" imageAlt="Internationale Erfahrung und Expertise" />
                <ServiceCard icon={<HandHeart className="h-8 w-8" />} title="Unterstützung" description="Von Anfang bis Ende – ein Partner, dem Sie vertrauen können." image="/lovable-uploads/e619c295-c26f-47ef-a447-c9ac5df9a198.png" imageAlt="Vertrauensvolle Unterstützung und Partnerschaft" />
              </div>
            </div>
            <div className="animate-fade-in lg:animate-delay-200 order-1 lg:order-2 text-center">
              <div className="text-muted-foreground leading-relaxed text-center">
                <p>Unser Ansatz macht den Unterschied. Wir sind nicht nur Berater, sondern Menschen, die selbst den Weg der Migration gegangen sind und verstehen, welche Herausforderungen damit verbunden sind.</p>
                <p className="mt-6">Durch unsere eigene Erfahrung können wir Ihnen nicht nur theoretisches Wissen vermitteln, sondern praktische, erprobte Lösungen anbieten, die wirklich funktionieren.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Zielgruppen Section */}
      <section className="section-spacing bg-muted/30">
        <div className="content-container">
          <div className="animate-fade-in mb-12">
            <h2 className="mb-6">Wen begleiten wir?</h2>
          </div>

          {/* Text/Bild */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in text-center">
              <div className="text-muted-foreground leading-relaxed">
                <p>Wir begleiten und beraten Migranten, damit deren Familien eine nahe, empathische Begleitung in ihrer Sprache erhalten und der gesamte Ankunfts- und Anpassungsprozess zu einer positiven Erfahrung wird.</p>
              </div>
            </div>
            <div className="animate-fade-in lg:animate-delay-200">
              <div className="space-y-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="unternehmen">
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center gap-3">
                        <Building className="h-6 w-6 text-primary" />
                        <span className="text-lg font-semibold">Unternehmen in Deutschland</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pt-4 pl-9 text-muted-foreground">
                        <p className="leading-relaxed">
                          Professionelle Relocation-Unterstützung für Ihre internationalen Mitarbeitenden und deren Familien. 
                          Wir erleichtern den Übergang und sorgen für eine schnelle, erfolgreiche Integration in den deutschen Arbeitsmarkt.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="expatriates">
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center gap-3">
                        <Globe className="h-6 w-6 text-primary" />
                        <span className="text-lg font-semibold">Expatriate-Familien (international)</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pt-4 pl-9 text-muted-foreground">
                        <p className="leading-relaxed">
                          Umfassende Begleitung für Familien, die für Studium, Arbeit oder Business ins Ausland ziehen. 
                          Von der Vorbereitung bis zur vollständigen Integration in die neue Kultur und Gesellschaft.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="familien">
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center gap-3">
                        <Users className="h-6 w-6 text-primary" />
                        <span className="text-lg font-semibold">Multikulturelle Familien</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pt-4 pl-9 text-muted-foreground">
                        <p className="leading-relaxed">
                          Spezialisierte Unterstützung für bicultural/bilingual Familien. Wir helfen dabei, 
                          die verschiedenen kulturellen Identitäten zu vereinen und eine harmonische Familienkultur zu entwickeln.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="organisationen">
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center gap-3">
                        <BookOpen className="h-6 w-6 text-primary" />
                        <span className="text-lg font-semibold">Organisationen</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pt-4 pl-9 text-muted-foreground">
                        <p className="leading-relaxed">
                          Workshops und Beratung für NGOs, soziale Träger und andere Organisationen, 
                          die mit Migrant*innen arbeiten. Wir stärken Ihre Kompetenzen in der interkulturellen Arbeit.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story-Visual Section */}
      <section className="section-spacing">
        <div className="content-container">
          <div className="animate-fade-in mb-12">
            <h2 className="mb-6">Mehr als ein Ortswechsel</h2>
          </div>

          {/* Bild/Text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in order-2 lg:order-1">
              <img src="/src/assets/relocation-move.jpg" alt="Moving boxes and relocation - representing life transition and new beginnings" className="aspect-[4/3] w-full object-cover rounded-lg" />
            </div>
            <div className="animate-fade-in lg:animate-delay-200 order-1 lg:order-2">
              <div className="text-muted-foreground leading-relaxed">
                <p>Unsere Mission ist es, diesen transformativen Prozess zu begleiten und aus jeder Herausforderung eine Chance für persönliches und berufliches Wachstum zu machen. Wir sind mehr als Berater – wir sind Ihre Partner auf diesem wichtigen Lebensweg.</p>
                <p className="mt-6">Jeder Schritt Ihrer Reise wird von uns professionell und empathisch begleitet, damit Sie nicht nur ankommen, sondern auch wirklich zu Hause sind.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section - Nicht verpassen */}
      <section className="section-spacing bg-gradient-subtle">
        <div className="content-container">
          <div className="animate-fade-in mb-12">
            <h2 className="mb-6">Nicht verpassen</h2>
            <p className="text-muted-foreground max-w-2xl">
              Bleiben Sie informiert mit unseren neuesten Insights zu Integration, interkultureller Zusammenarbeit und persönlicher Entwicklung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post, index) => <Card key={post.id} className="hover-lift group cursor-pointer overflow-hidden">
                <div className="relative overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {post.date} • {post.readingTime}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Button variant="ghost" size="sm" className="p-0 h-auto font-medium group-hover:text-primary" onClick={() => window.location.href = `/blog/${post.slug}`}>
                    Weiterlesen
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </Button>
                </CardContent>
              </Card>)}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/presse-ressourcen">
                <BookOpen className="h-4 w-4 mr-2" />
                Alle Artikel entdecken
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
      
    </div>;
};
export default Index;