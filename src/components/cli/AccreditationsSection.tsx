import { Award } from 'lucide-react';

const AccreditationsSection = () => {
  const certifications = [
    { id: 'thbd', name: 'THBD' },
    { id: 'hbdi', name: 'HBDI' },
    { id: 'hbdt', name: 'HBDT' },
    { id: 'bhdp', name: 'BHDP' },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="content-container">
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Acreditados y avalados por:
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="flex flex-col items-center justify-center p-8 bg-muted/30 rounded-2xl hover:shadow-card transition-all animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative w-32 h-32 mb-4 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-10 group-hover:opacity-20 transition-opacity" />
                <Award className="h-20 w-20 text-primary relative z-10" />
              </div>
              <span className="text-2xl font-bold text-primary tracking-wider">
                {cert.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccreditationsSection;
