import { Globe, MapPin, Award, Sparkles } from 'lucide-react';
const RepresentationsSection = () => {
  return <section className="py-20 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="content-container">
        {/* Minimal Header */}
        <div className="mb-16 space-y-3 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-4">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Representaciones Oficiales</span>
          </div>
          
          <p className="text-muted-foreground max-w-2xl">
            Liderando organizaciones internacionales en Alemania
          </p>
        </div>

        {/* National Representation */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-12 animate-fade-in">
            <div className="p-2 rounded-xl bg-primary/5">
              <Globe className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-foreground">
              Representación y Dirección Nacional Alemania
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Global Coaching Federation */}
            <div className="group relative bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/20 hover:shadow-elegant transition-all duration-500 animate-fade-in backdrop-blur-sm">
              <div className="relative h-32 flex items-center justify-center mb-6 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 group-hover:from-primary/10 group-hover:to-primary/20 transition-all duration-500">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-500">GCF</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                    Global Coaching<br />Federation
                  </div>
                </div>
              </div>
              <p className="text-sm text-center text-foreground/70 leading-relaxed group-hover:text-foreground transition-colors">
                Representación oficial de la federación global de coaching
              </p>
              
              {/* Subtle Bottom Accent */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-3/4 transition-all duration-500" />
            </div>

            {/* IDC */}
            <div className="group relative bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/20 hover:shadow-elegant transition-all duration-500 animate-fade-in backdrop-blur-sm" style={{
            animationDelay: '0.1s'
          }}>
              <div className="relative h-32 flex items-center justify-center mb-6 rounded-xl bg-gradient-to-br from-secondary/5 to-secondary/10 group-hover:from-secondary/10 group-hover:to-secondary/20 transition-all duration-500">
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2 group-hover:scale-110 transition-transform duration-500">IDC</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                    International Development<br />Community
                  </div>
                </div>
              </div>
              <p className="text-sm text-center text-foreground/70 leading-relaxed group-hover:text-foreground transition-colors">
                Comunidad internacional de desarrollo personal y empresarial
              </p>
              
              {/* Subtle Bottom Accent */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent group-hover:w-3/4 transition-all duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default RepresentationsSection;