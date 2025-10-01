import CLIHero from '@/components/cli/CLIHero';
import CLIServiceCard from '@/components/cli/CLIServiceCard';
import CLICTABand from '@/components/cli/CLICTABand';
import ContactSideBySide from '@/components/common/ContactSideBySide';
import { Users, Presentation, Target, TrendingUp, BookOpen } from 'lucide-react';
import heroImage from '@/assets/hero-cli-servicios.jpg';

const Servicios = () => {
  const serviciosProfesionales = [
    {
      icon: <Users className="h-12 w-12" />,
      title: 'Mentorías para Profesionales',
      description: 'Acompañamiento personalizado para profesionales que buscan acelerar su desarrollo y alcanzar sus objetivos de carrera.',
      benefits: [
        'Desarrollo de habilidades de liderazgo',
        'Planificación estratégica de carrera',
        'Mejora de competencias específicas',
        'Networking y conexiones valiosas',
      ],
      link: '/servicios/mentorias',
    },
    {
      icon: <Presentation className="h-12 w-12" />,
      title: 'Conferencias Interactivas',
      description: 'Sesiones dinámicas y participativas que inspiran cambio y generan compromiso en equipos profesionales.',
      benefits: [
        'Co-creación de soluciones',
        'Participación activa garantizada',
        'Temas personalizados',
        'Formato presencial y virtual',
      ],
      link: '/servicios/conferencias',
    },
    {
      icon: <Target className="h-12 w-12" />,
      title: 'Coaching Personal',
      description: 'Proceso transformador que desbloquea tu potencial y te ayuda a alcanzar tus metas profesionales y personales.',
      benefits: [
        'Sesiones 1:1 personalizadas',
        'Enfoque en resultados medibles',
        'Metodología probada',
        'Acompañamiento continuo',
      ],
      link: '/servicios/coaching',
    },
    {
      icon: <BookOpen className="h-12 w-12" />,
      title: 'Revista CLI Digital',
      description: 'Contenido transformador e inspirador sobre liderazgo, desarrollo profesional y crecimiento empresarial.',
      benefits: [
        'Artículos de expertos',
        'Casos de éxito reales',
        'Herramientas prácticas',
        'Actualización mensual',
      ],
      link: '/revista',
    },
  ];

  const serviciosEmpresas = [
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: 'Consultoría Empresarial',
      description: 'Estrategias integrales de transformación organizacional que impulsan el crecimiento y la competitividad.',
      benefits: [
        'Diagnóstico organizacional completo',
        'Estrategias de cambio cultural',
        'Desarrollo de liderazgo',
        'Implementación y seguimiento',
      ],
      link: '/servicios/consultoria',
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: 'Mentorías Corporativas',
      description: 'Programas de mentoría diseñados para desarrollar el talento interno y fortalecer el liderazgo organizacional.',
      benefits: [
        'Programas grupales estructurados',
        'Desarrollo de equipos de alto rendimiento',
        'Transferencia de conocimiento',
        'Cultura de aprendizaje continuo',
      ],
      link: '/servicios/mentorias',
    },
    {
      icon: <Target className="h-12 w-12" />,
      title: 'Coaching de Equipos',
      description: 'Intervenciones de coaching que transforman la dinámica de equipos y mejoran el rendimiento colectivo.',
      benefits: [
        'Cohesión y colaboración',
        'Resolución de conflictos',
        'Alineación de objetivos',
        'Cultura de feedback',
      ],
      link: '/servicios/coaching',
    },
    {
      icon: <BookOpen className="h-12 w-12" />,
      title: 'Revista CLI Digital',
      description: 'Publicación digital con insights, tendencias y mejores prácticas para la transformación organizacional.',
      benefits: [
        'Investigación y análisis profundos',
        'Tendencias del mercado',
        'Estudios de caso empresariales',
        'Contenido exclusivo',
      ],
      link: '/revista',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <CLIHero
        title="Servicios Integrales de Transformación"
        subtitle="Mentorías, conferencias, coaching y consultoría diseñados para impulsar el crecimiento profesional y empresarial"
        ctaText="Solicitar información"
        ctaLink="/contacto"
        backgroundImage={heroImage}
      />

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="content-container">
          <div className="max-w-3xl">
            <p className="text-xl leading-relaxed text-muted-foreground">
              Ofrecemos un ecosistema completo de servicios para acompañar tu crecimiento, 
              ya seas un profesional en desarrollo o una empresa en transformación. 
              Cada servicio está diseñado para integrarse y potenciar los demás.
            </p>
          </div>
        </div>
      </section>

      {/* Servicios para Profesionales */}
      <section className="py-20 bg-muted/30">
        <div className="content-container">
          <div className="mb-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Para Profesionales
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Servicios diseñados para impulsar tu desarrollo profesional y alcanzar tus metas de carrera
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {serviciosProfesionales.map((servicio, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CLIServiceCard {...servicio} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios para Empresas */}
      <section className="py-20 bg-background">
        <div className="content-container">
          <div className="mb-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Para Empresas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Soluciones integrales para transformar tu organización y desarrollar tu talento humano
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {serviciosEmpresas.map((servicio, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CLIServiceCard {...servicio} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crosslinks Section */}
      <section className="py-16 bg-muted/30">
        <div className="content-container">
          <div className="max-w-3xl">
            <h3 className="text-2xl font-bold mb-4">
              ¿Quieres saber más?
            </h3>
            <p className="text-muted-foreground mb-8">
              Explora nuestro blog para artículos sobre liderazgo, desarrollo profesional y transformación empresarial. 
              O visita nuestra Academia CLI para acceder a masterclasses y guías prácticas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/blog"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-all"
              >
                Visitar Blog
              </a>
              <a
                href="https://academia.clubcli.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-all"
              >
                Explorar Academia
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <CLICTABand 
        title="¿Listo para dar el siguiente paso?"
        description="Explora nuestros servicios y descubre cómo podemos ayudarte"
        ctaText="Solicitar información"
        ctaLink="#contact"
        variant="gradient"
      />
      <ContactSideBySide />
    </div>
  );
};

export default Servicios;
