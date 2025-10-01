import { Building2, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
const ClientsLogosSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const clientGroups = [[{
    name: 'Fundación Mujer Mariposa',
    icon: '🦋'
  }, {
    name: 'Hummingbird Partners',
    icon: '🐦'
  }, {
    name: 'Entrenamiento para estudiantes',
    icon: '🎓'
  }, {
    name: 'Fundación Fe y Alegría',
    icon: '🌟'
  }, {
    name: 'Programa Migrantes & Carrera',
    icon: '🌍'
  }]];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % clientGroups.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [clientGroups.length]);
  return <section className="py-20 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="content-container">
        {/* Minimal Header */}
        <div className="text-center mb-16 space-y-3 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Confianza y Colaboración</span>
          </div>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Organizaciones que confían en nosotros para su transformación
          </p>
        </div>

        {/* Elegant Grid */}
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {clientGroups[currentSlide].map((client, index) => <div key={index} className="group relative flex flex-col items-center justify-center p-8 bg-card rounded-2xl border border-border/50 hover:border-primary/20 hover:shadow-elegant transition-all duration-500 animate-fade-in backdrop-blur-sm" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                {/* Icon Container */}
                <div className="relative w-16 h-16 flex items-center justify-center text-4xl mb-4 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 group-hover:scale-110 group-hover:from-primary/10 group-hover:to-primary/20 transition-all duration-500">
                  {client.icon}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Text */}
                <p className="text-sm text-center text-foreground/80 font-medium leading-tight group-hover:text-foreground transition-colors">
                  {client.name}
                </p>

                {/* Subtle Bottom Accent */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-3/4 transition-all duration-500" />
              </div>)}
          </div>

          {/* Minimal Dots Navigation */}
          {clientGroups.length > 1 && <div className="flex justify-center gap-2 mt-12">
              {clientGroups.map((_, index) => <button key={index} onClick={() => setCurrentSlide(index)} className={`h-1.5 rounded-full transition-all duration-500 ${currentSlide === index ? 'bg-primary w-8' : 'bg-muted-foreground/20 w-1.5 hover:bg-muted-foreground/40'}`} aria-label={`Ir al grupo ${index + 1}`} />)}
            </div>}
        </div>
      </div>
    </section>;
};
export default ClientsLogosSection;