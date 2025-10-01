import CLIHero from '@/components/cli/CLIHero';
import heroDataProtection from '@/assets/hero-data-protection.jpg';

const ProteccionDatos = () => {
  return (
    <div>
      <CLIHero 
        title="Protección de Datos / Datenschutz" 
        subtitle="Información sobre el tratamiento de datos personales y privacidad" 
        showCta={false} 
        backgroundImage={heroDataProtection}
      />
      <section className="py-20 bg-background">
        <div className="content-container max-w-4xl mx-auto">
          <p className="text-muted-foreground">Contenido de protección de datos...</p>
        </div>
      </section>
    </div>
  );
};

export default ProteccionDatos;
