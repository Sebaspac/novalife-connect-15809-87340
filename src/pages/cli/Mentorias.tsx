import CLIHero from '@/components/cli/CLIHero';
import CLICTABand from '@/components/cli/CLICTABand';
import ContactSideBySide from '@/components/common/ContactSideBySide';
import { Card, CardContent } from '@/components/ui/card';
import { User, Users, Building2, Target, TrendingUp, Award, CheckCircle2 } from 'lucide-react';

const Mentorias = () => {
  const formatos = [
    {
      icon: <User className="h-10 w-10" />,
      title: 'Mentoría 1:1',
      description: 'Acompañamiento personalizado para profesionales que buscan desarrollo acelerado y resultados específicos.',
      features: ['Sesiones individuales', 'Plan personalizado', 'Feedback directo', 'Seguimiento continuo'],
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: 'Mentoría Grupal',
      description: 'Programas para pequeños grupos que buscan desarrollar habilidades específicas en un entorno colaborativo.',
      features: ['Grupos de 4-8 personas', 'Aprendizaje colaborativo', 'Networking valioso', 'Costo optimizado'],
    },
    {
      icon: <Building2 className="h-10 w-10" />,
      title: 'Mentoría In-Company',
      description: 'Programas diseñados para empresas que desean desarrollar su talento interno de forma estructurada.',
      features: ['Programas a medida', 'Desarrollo de liderazgo', 'Cultura de mentoría', 'ROI medible'],
    },
  ];

  const beneficios = [
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Claridad en objetivos',
      description: 'Define y alcanza tus metas profesionales con un plan estructurado',
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Aceleración de carrera',
      description: 'Aprende de la experiencia directa y evita errores comunes',
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Desarrollo de competencias',
      description: 'Fortalece habilidades específicas críticas para tu éxito',
    },
    {
      icon: <CheckCircle2 className="h-6 w-6" />,
      title: 'Responsabilidad y compromiso',
      description: 'Mantén el foco y la disciplina con acompañamiento constante',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <CLIHero
        title="Mentorías que Guían y Movilizan"
        subtitle="Facilitamos y fortalecemos el desarrollo de habilidades profesionales con acompañamiento experto y personalizado"
        ctaText="Solicitar mentoría"
        ctaLink="/contacto"
        backgroundImage="/lovable-uploads/coaching-session.jpg"
      />

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="content-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              ¿Qué es la Mentoría CLI?
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              La mentoría es un proceso de acompañamiento donde profesionales experimentados comparten 
              su conocimiento, experiencia y perspectiva para acelerar el desarrollo de otros.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              En CLI, diseñamos programas de mentoría para <span className="text-primary font-semibold">líderes</span>, 
              <span className="text-primary font-semibold"> equipos</span> y 
              <span className="text-primary font-semibold"> PYMEs</span> que buscan crecimiento sostenible.
            </p>
          </div>
        </div>
      </section>

      {/* Formatos */}
      <section className="py-20 bg-muted/30">
        <div className="content-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Formatos de Mentoría
            </h2>
            <p className="text-lg text-muted-foreground">
              Elige el formato que mejor se adapte a tus necesidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {formatos.map((formato, index) => (
              <Card
                key={index}
                className="hover-lift animate-fade-in border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="text-primary mb-6">
                    {formato.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{formato.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {formato.description}
                  </p>
                  <ul className="space-y-2">
                    {formato.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-background">
        <div className="content-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Beneficios Clave
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {beneficios.map((beneficio, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 rounded-xl border border-border/50 bg-card hover:shadow-card transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 text-primary">
                  {beneficio.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{beneficio.title}</h3>
                  <p className="text-muted-foreground">{beneficio.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Caso de Éxito */}
      <section className="py-16 bg-muted/30">
        <div className="content-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Caso de Éxito</h3>
              <p className="text-muted-foreground">Transformación real con mentoría CLI</p>
            </div>
            
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Reto</h4>
                    <p className="text-muted-foreground">
                      Profesional mid-level buscando transición a rol de liderazgo sin claridad sobre 
                      las competencias necesarias ni estrategia de desarrollo.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Enfoque</h4>
                    <p className="text-muted-foreground">
                      Programa de mentoría 1:1 de 6 meses enfocado en desarrollo de habilidades de liderazgo, 
                      comunicación estratégica y visibilidad profesional.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Resultado</h4>
                    <p className="text-muted-foreground">
                      Promoción a posición de liderazgo en 8 meses, aumento del 35% en compensación, 
                      y desarrollo de un estilo de liderazgo auténtico y efectivo.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CLICTABand
        title="¿Listo para acelerar tu desarrollo?"
        description="Solicita una sesión de descubrimiento gratuita y conoce cómo la mentoría puede transformar tu carrera"
        ctaText="Solicitar mentoría"
        ctaLink="/contacto"
        variant="gradient"
      />

      {/* Contact Form */}
      <CLICTABand 
        title="Encuentra tu mentor ideal"
        description="Programa una sesión de mentoría personalizada"
        ctaText="Comenzar mentoría"
        ctaLink="#contact"
        variant="gradient"
      />
      <ContactSideBySide />
    </div>
  );
};

export default Mentorias;
