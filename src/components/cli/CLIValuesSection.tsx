import { Link2, TrendingUp, Users2 } from 'lucide-react';

const CLIValuesSection = () => {
  const values = [
    {
      letter: 'C',
      title: 'Conexión',
      description: 'Establecemos productos y servicios para activar la conciencia de cambio, fortalecer la inteligencia intrapersonal y motivar al crecimiento.',
      icon: <Link2 className="h-12 w-12" />,
    },
    {
      letter: 'L',
      title: 'Liderazgo',
      description: 'Servimos para crecer cada día con nuestros profesionales y empresas, más autorrealizados, más humanos y enfocados en su vida y proyectos.',
      icon: <TrendingUp className="h-12 w-12" />,
    },
    {
      letter: 'I',
      title: 'Integración',
      description: 'Tomamos acción para generar y afianzar las buenas relaciones, la cooperación sostenible, respetuosa y empática.',
      icon: <Users2 className="h-12 w-12" />,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="content-container">
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestros Valores CLI
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tres pilares que guían nuestra forma de trabajar y transformar organizaciones
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div
              key={value.letter}
              className="relative group animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="h-full p-8 rounded-2xl border border-border/50 bg-card hover:shadow-card transition-all duration-300 hover:scale-105">
                {/* Large Letter Background */}
                <div className="absolute top-4 right-4 text-8xl font-bold text-primary/5 select-none">
                  {value.letter}
                </div>

                {/* Icon */}
                <div className="relative mb-6 text-primary group-hover:text-secondary transition-colors duration-300 group-hover:scale-110 transform">
                  {value.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CLIValuesSection;
