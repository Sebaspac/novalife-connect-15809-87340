import CLIHero from '@/components/cli/CLIHero';
import ContactSideBySide from '@/components/common/ContactSideBySide';
import CLICTABand from '@/components/cli/CLICTABand';
import RevistaCover from '@/components/cli/RevistaCover';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import coverLatest from '@/assets/revista-cover-latest.png';
import coverJun2025 from '@/assets/revista-cover-jun2025.png';
import coverFeb2025 from '@/assets/revista-cover-feb2025.png';
import coverOct2024 from '@/assets/revista-cover-oct2024.png';
import coverJun2024 from '@/assets/revista-cover-jun2024.png';
import coverEne2024 from '@/assets/revista-cover-ene2024.png';
import coverSep2023 from '@/assets/revista-cover-sep2023.png';
import heroImage from '@/assets/hero-resources.jpg';
const editions = [{
  coverImage: coverJun2025,
  title: 'Junio 2025',
  date: 'Junio 2025',
  downloadLink: '#'
}, {
  coverImage: coverFeb2025,
  title: 'Febrero 2025',
  date: 'Febrero 2025',
  downloadLink: '#'
}, {
  coverImage: coverOct2024,
  title: 'Octubre 2024',
  date: 'Octubre 2024',
  downloadLink: '#'
}, {
  coverImage: coverJun2024,
  title: 'Junio 2024',
  date: 'Junio 2024',
  downloadLink: '#'
}, {
  coverImage: coverEne2024,
  title: 'Enero 2024',
  date: 'Enero 2024',
  downloadLink: '#'
}, {
  coverImage: coverSep2023,
  title: 'Septiembre 2023',
  date: 'Septiembre 2023',
  downloadLink: '#'
}];
const Revista = () => {
  return <div>
      <CLIHero 
        title="Revista CLI Digital"
        subtitle="Profesional y de Negocios. Somos un espacio exclusivo para impulsar la conexión internacional y el crecimiento personal, profesional y empresarial."
        showCta={false}
        backgroundImage={heroImage}
      />

      {/* Featured Edition Section */}
      <section className="section-spacing">
        <div className="content-container">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Ediciones CLI Digital</h2>
            <p className="text-xl text-muted-foreground">
              Déjese inspirar por nosotros, unimos raíces, expandimos propósitos.
            </p>
          </div>
          
          {/* Latest Edition */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8">Julio 2025</h3>
            <RevistaCover coverImage={coverLatest} title="Descarga la revista" date="Julio 2025" downloadLink="#" featured />
          </div>
        </div>
      </section>

      {/* Previous Editions Grid */}
      <section className="section-spacing bg-muted/30">
        <div className="content-container">
          <h2 className="text-4xl font-bold mb-12">Ediciones anteriores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {editions.map((edition, index) => <RevistaCover key={index} coverImage={edition.coverImage} title={edition.title} date={edition.date} downloadLink={edition.downloadLink} />)}
          </div>
        </div>
      </section>

      {/* Professional Directory CTA */}
      <section className="section-spacing">
        <div className="content-container max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">Directorio de profesionales</h2>
          <div className="mb-8">
            <p className="text-xl font-medium mb-4">Revista CLI</p>
            <p className="text-lg text-muted-foreground mb-6">
              ¿Quieres descubrir a los profesionales VIP que pueden impulsar tu desarrollo?
            </p>
            <p className="text-muted-foreground">
              Descubra a los profesionales VIP de la Revista CLI, líderes excepcionales en su campo de apoyo al crecimiento personal, profesional y empresarial, seleccionados y destacados tanto por su excelencia personal como profesional y emprendedores con gran experiencia internacional listos para brindarle su apoyo.
            </p>
          </div>
          <Button size="lg" variant="default">
            <Download className="mr-2 h-5 w-5" />
            Descarga el directorio
          </Button>
        </div>
      </section>

      {/* Participation Form Section */}
      

      {/* CTA Band */}
      <CLICTABand title="Suscríbete a nuestra revista" description="Recibe contenido exclusivo en tu correo cada mes" ctaText="Contáctanos" ctaLink="#contact" variant="gradient" />

      {/* Contact Form */}
      <ContactSideBySide />
    </div>;
};
export default Revista;