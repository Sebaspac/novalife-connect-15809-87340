import CLIHero from '@/components/cli/CLIHero';
import CLIServiceCard from '@/components/cli/CLIServiceCard';
import CLIStatsSection from '@/components/cli/CLIStatsSection';
import CLIValuesSection from '@/components/cli/CLIValuesSection';
import CLICTABand from '@/components/cli/CLICTABand';
import AccreditationsSection from '@/components/cli/AccreditationsSection';
import QuoteSection from '@/components/cli/QuoteSection';
import ClientsLogosSection from '@/components/cli/ClientsLogosSection';
import RepresentationsSection from '@/components/cli/RepresentationsSection';
import TestimonialsSection from '@/components/common/TestimonialsSection';
import ContactSideBySide from '@/components/common/ContactSideBySide';
import { Users, Presentation, Target, TrendingUp, Lightbulb, Heart, Zap, Star } from 'lucide-react';
import heroImage from '@/assets/hero-cli-inicio.jpg';
const Inicio = () => {
  const services = [{
    icon: <Users className="h-12 w-12" />,
    title: 'Mentorías',
    description: 'Facilitamos y fortalecemos el desarrollo de habilidades profesionales y personales con acompañamiento experto.',
    benefits: ['Desarrollo profesional acelerado', 'Habilidades de liderazgo', 'Claridad en objetivos de carrera'],
    link: '/servicios/mentorias'
  }, {
    icon: <Presentation className="h-12 w-12" />,
    title: 'Conferencias',
    description: 'Espacios interactivos para promover la conciencia de cambio, el compromiso y la búsqueda de soluciones colaborativas.',
    benefits: ['Formatos interactivos y co-creación', 'Participación activa del equipo', 'Transformación de perspectivas'],
    link: '/servicios/conferencias'
  }, {
    icon: <Target className="h-12 w-12" />,
    title: 'Coaching',
    description: 'Despertamos y fortalecemos el potencial del talento humano para catalizador de cambio sostenible.',
    benefits: ['Desbloqueo de potencial', 'Claridad y enfoque', 'Transformación profunda'],
    link: '/servicios/coaching'
  }, {
    icon: <TrendingUp className="h-12 w-12" />,
    title: 'Consultoría',
    description: 'Identificamos oportunidades de mejora y apoyamos la creación de estrategias que impulsen la transformación.',
    benefits: ['Estrategias personalizadas', 'Resultados medibles', 'Acompañamiento integral'],
    link: '/servicios/consultoria'
  }];
  const needs = [{
    icon: <Zap className="h-8 w-8" />,
    title: 'Impulsar el desarrollo profesional',
    description: 'Con estrategias personalizadas y efectivas'
  }, {
    icon: <Star className="h-8 w-8" />,
    title: 'Fomentar un liderazgo transformador',
    description: 'Flexible, empático y efectivo'
  }, {
    icon: <Lightbulb className="h-8 w-8" />,
    title: 'Crear una cultura de crecimiento',
    description: 'Enfocada en comunicación, creatividad y desarrollo continuo'
  }, {
    icon: <Heart className="h-8 w-8" />,
    title: 'Contribuir al bienestar integral',
    description: 'Con estrategias para una vida saludable y equilibrada'
  }];
  return <div>
      {/* Hero Section */}
      <CLIHero title="Coaching, consultoría y capacitación para la transformación y el crecimiento profesional y empresarial" subtitle="Somos el puente entre la transformación del talento humano y el crecimiento empresarial." ctaText="Reserva una sesión" ctaLink="/contacto" secondaryCtaText="Explorar servicios" secondaryCtaLink="/servicios" backgroundImage={heroImage} />

      {/* Intro Section */}
      <section className="py-20 bg-background">
        <div className="content-container">
          <div className="max-w-4xl">
            <p className="text-xl leading-relaxed text-muted-foreground mb-8">
              Imagine un equipo donde cada persona encuentra <span className="text-primary font-semibold">propósito en su trabajo</span>, 
              donde el crecimiento individual impulsa el éxito colectivo y donde los desafíos del cambio se transforman en oportunidades.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              En CLI, creemos que las empresas que prosperan son aquellas que priorizan el desarrollo de su talento humano. 
              Enfocamos nuestra propuesta de servicios en el <span className="text-primary font-semibold">modelo de humanización empresarial</span>, 
              alineando el crecimiento personal y profesional con un propósito mayor.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <CLIStatsSection />

      {/* Needs Section */}
      <section className="py-20 bg-background">
        <div className="content-container">
          <div className="mb-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ayudamos a profesionales, líderes y empresas que necesitan
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {needs.map((need, index) => <div key={index} className="flex items-start space-x-4 p-6 rounded-xl border border-border/50 bg-card hover:shadow-card transition-all animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="flex-shrink-0 text-primary">
                  {need.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{need.title}</h3>
                  <p className="text-muted-foreground">{need.description}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <CLIValuesSection />

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="content-container">
          <div className="mb-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Soluciones integrales para transformar tu organización y desarrollar tu talento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => <div key={index} className="animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CLIServiceCard {...service} />
              </div>)}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <AccreditationsSection />

      {/* Quote Section */}
      <QuoteSection />

      {/* First Step CTA */}
      

      {/* Clients Logos */}
      <ClientsLogosSection />

      {/* Representations */}
      <RepresentationsSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Contact Form */}
      <CLICTABand 
        title="Comienza tu transformación hoy"
        description="Únete a nuestra comunidad de profesionales en crecimiento"
        ctaText="Contactar"
        ctaLink="#contact"
        variant="gradient"
      />
      <ContactSideBySide />
    </div>;
};
export default Inicio;