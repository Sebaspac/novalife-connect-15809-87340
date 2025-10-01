import CLIHero from '@/components/cli/CLIHero';
import CLICTABand from '@/components/cli/CLICTABand';
import ContactSideBySide from '@/components/common/ContactSideBySide';

const Consultoria = () => {
  return (
    <div>
      <CLIHero
        title="Consultoría que Impacta"
        subtitle="Identificamos oportunidades de mejora y apoyamos la creación de estrategias"
        ctaText="Solicitar consultoría"
        ctaLink="/contacto"
        backgroundImage="/lovable-uploads/relocation-move.jpg"
      />
      <CLICTABand 
        title="Impulsa tu negocio al siguiente nivel"
        description="Agenda una consulta inicial gratuita con nuestros expertos"
        ctaText="Hablar con un consultor"
        ctaLink="#contact"
        variant="gradient"
      />
      <ContactSideBySide />
    </div>
  );
};

export default Consultoria;
