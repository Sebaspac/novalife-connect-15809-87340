import CLIHero from '@/components/cli/CLIHero';
import ContactSideBySide from '@/components/common/ContactSideBySide';
import CLICTABand from '@/components/cli/CLICTABand';

const Academia = () => {
  return <div>
    <CLIHero 
      title="Academia CLI" 
      subtitle="Masterclasses y guías prácticas para tu desarrollo" 
      ctaText="Acceder" 
      ctaLink="/contacto" 
      backgroundImage="/lovable-uploads/real-estate-expert.jpg"
    />
    <CLICTABand 
      title="¿Listo para transformar tu carrera?"
      description="Únete a nuestra academia y accede a contenido exclusivo"
      ctaText="Contactar ahora"
      ctaLink="#contact"
      variant="gradient"
    />
    <ContactSideBySide />
  </div>;
};

export default Academia;
