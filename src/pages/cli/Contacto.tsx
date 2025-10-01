import CLIHero from '@/components/cli/CLIHero';
import ContactForm from '@/components/common/ContactForm';

const Contacto = () => {
  return (
    <div>
      <CLIHero 
        title="Contacto" 
        subtitle="Estamos aquí para ti. Respondemos en 24h" 
        showCta={false} 
        backgroundImage="/lovable-uploads/services-family-arrival.jpg"
      />
      <section className="py-20 bg-background">
        <div className="content-container max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Contacto;
