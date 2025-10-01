import CLIHero from '@/components/cli/CLIHero';
import CLICTABand from '@/components/cli/CLICTABand';
import ContactSideBySide from '@/components/common/ContactSideBySide';
import { Card, CardContent } from '@/components/ui/card';
import { Presentation, Users2, Lightbulb, MessageSquare, Heart, TrendingUp, Zap, Target } from 'lucide-react';

const Conferencias = () => {
  const tematicas = [
    { icon: <TrendingUp className="h-5 w-5" />, text: 'Liderazgo humano y transformador' },
    { icon: <Zap className="h-5 w-5" />, text: 'Cultura de cambio e innovación' },
    { icon: <Heart className="h-5 w-5" />, text: 'Bienestar integral y salud organizacional' },
    { icon: <Target className="h-5 w-5" />, text: 'Gestión del cambio y adaptación' },
    { icon: <MessageSquare className="h-5 w-5" />, text: 'Comunicación efectiva en equipos' },
    { icon: <Lightbulb className="h-5 w-5" />, text: 'Creatividad y pensamiento innovador' },
  ];

  const caracteristicas = [
    {
      icon: <Presentation className="h-10 w-10" />,
      title: 'Formato Interactivo',
      description: 'No somos conferencias tradicionales. Creamos experiencias donde los participantes son co-creadores del contenido.',
    },
    {
      icon: <Users2 className="h-10 w-10" />,
      title: 'Participación Activa',
      description: 'Dinámicas, ejercicios prácticos y sesiones de trabajo que garantizan el engagement del grupo.',
    },
    {
      icon: <Lightbulb className="h-10 w-10" />,
      title: 'Soluciones Colaborativas',
      description: 'Facilitamos espacios donde emergen soluciones reales a desafíos específicos de tu organización.',
    },
    {
      icon: <MessageSquare className="h-10 w-10" />,
      title: 'Conversaciones Profundas',
      description: 'Promovemos diálogos significativos que generan conciencia y compromiso con el cambio.',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <CLIHero
        title="Conferencias que Inspiran"
        subtitle="Espacios interactivos para promover la conciencia de cambio, el compromiso y la búsqueda de soluciones colaborativas"
        ctaText="Solicitar conferencia"
        ctaLink="/contacto"
        backgroundImage="/lovable-uploads/services-intercultural-workshop.jpg"
      />

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="content-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Conferencias Transformadoras
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Nuestras conferencias van más allá de la transmisión de conocimiento. 
              Creamos <span className="text-primary font-semibold">experiencias interactivas</span> donde 
              la participación activa y la co-creación son protagonistas.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Diseñamos cada sesión para generar <span className="text-primary font-semibold">conciencia de cambio</span>, 
              fortalecer el <span className="text-primary font-semibold">compromiso</span> y 
              facilitar la búsqueda de <span className="text-primary font-semibold">soluciones colaborativas</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="py-20 bg-muted/30">
        <div className="content-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestro Formato
            </h2>
            <p className="text-lg text-muted-foreground">
              Lo que hace únicas nuestras conferencias
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caracteristicas.map((caracteristica, index) => (
              <Card
                key={index}
                className="hover-lift animate-fade-in border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="text-primary mb-6 group-hover:text-secondary transition-colors">
                    {caracteristica.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{caracteristica.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {caracteristica.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Temáticas */}
      <section className="py-20 bg-background">
        <div className="content-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Temáticas Principales
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Abordamos temas clave para el desarrollo organizacional y el liderazgo transformador
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tematicas.map((tema, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-6 rounded-xl border border-border/50 bg-card hover:shadow-card hover:border-primary/30 transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 text-primary">
                  {tema.icon}
                </div>
                <span className="text-sm font-medium">{tema.text}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              ¿Tienes otra temática en mente? Diseñamos conferencias personalizadas para tus necesidades específicas.
            </p>
          </div>
        </div>
      </section>

      {/* Formatos de Entrega */}
      <section className="py-16 bg-muted/30">
        <div className="content-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">Formatos Disponibles</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center border-border/50">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">60-90 min</div>
                  <h4 className="font-semibold mb-2">Keynote</h4>
                  <p className="text-sm text-muted-foreground">
                    Conferencia inspiracional con participación activa
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-border/50">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">2-4 hrs</div>
                  <h4 className="font-semibold mb-2">Workshop</h4>
                  <p className="text-sm text-muted-foreground">
                    Taller profundo con ejercicios y soluciones prácticas
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-border/50">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">1-2 días</div>
                  <h4 className="font-semibold mb-2">Intensivo</h4>
                  <p className="text-sm text-muted-foreground">
                    Programa completo de transformación grupal
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA con formulario corto */}
      <section className="py-20 bg-background">
        <div className="content-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Solicita una Conferencia
            </h2>
            <p className="text-muted-foreground mb-8">
              Completa este breve formulario y nos pondremos en contacto contigo en 24 horas
            </p>
            
            <Card>
              <CardContent className="p-8">
                <form className="space-y-4">
                  <div className="text-left">
                    <label className="block text-sm font-medium mb-2">Tema de interés</label>
                    <input
                      type="text"
                      placeholder="¿Qué tema te gustaría explorar?"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                    <div>
                      <label className="block text-sm font-medium mb-2">Tamaño del grupo</label>
                      <input
                        type="text"
                        placeholder="ej: 20-30 personas"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Fecha tentativa</label>
                      <input
                        type="text"
                        placeholder="ej: Marzo 2025"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
                  >
                    Enviar solicitud
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CLICTABand
        title="¿Prefieres hablar directamente?"
        ctaText="Agendar llamada"
        ctaLink="/contacto"
        variant="gradient"
      />

      {/* Contact Form */}
      <CLICTABand 
        title="¿Necesitas un speaker para tu evento?"
        description="Contacta con nosotros para llevar nuestras conferencias a tu organización"
        ctaText="Solicitar información"
        ctaLink="#contact"
        variant="gradient"
      />
      <ContactSideBySide />
    </div>
  );
};

export default Conferencias;
