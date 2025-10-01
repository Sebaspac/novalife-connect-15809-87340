import CLIHero from '@/components/cli/CLIHero';
import CLICTABand from '@/components/cli/CLICTABand';
import ContactSideBySide from '@/components/common/ContactSideBySide';

const Coaching = () => {
  return (
    <div>
      <CLIHero
        title="Coaching que Transforma"
        subtitle="Despertamos y fortalecemos el potencial del talento humano"
        ctaText="Reserva una sesión de descubrimiento"
        ctaLink="/contacto"
        backgroundImage="/lovable-uploads/services-family-workshop.jpg"
      />
      <CLICTABand 
        title="Comienza tu proceso de coaching"
        description="Da el primer paso hacia tu transformación profesional"
        ctaText="Agendar sesión"
        ctaLink="#contact"
        variant="gradient"
      />
      <ContactSideBySide />
    </div>
  );
};

export default Coaching;
