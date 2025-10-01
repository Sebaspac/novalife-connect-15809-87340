import { Users, Briefcase, Globe, Calendar } from 'lucide-react';

const CLIStatsSection = () => {
  const stats = [
    {
      icon: <Users className="h-10 w-10" />,
      value: '+1000',
      label: 'Personas han participado en nuestros acompañamientos',
    },
    {
      icon: <Briefcase className="h-10 w-10" />,
      value: '30',
      label: 'Aliados entre Pymes y empresas respaldan nuestros servicios',
    },
    {
      icon: <Globe className="h-10 w-10" />,
      value: '5',
      label: 'Países, una Red intercultural de especialistas',
    },
    {
      icon: <Calendar className="h-10 w-10" />,
      value: '6',
      label: 'Años de operación',
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="content-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Empoderamos para transformar, inspiramos para crecer
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CLIStatsSection;
