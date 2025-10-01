import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gradient-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <div className="text-xl font-bold text-secondary-foreground">ViaNova Consulting</div>
              
            </div>
            <p className="text-sm text-secondary-foreground/70">
              Professionelle Begleitung für Relocation, Integration und Interkulturalität.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-secondary-foreground">Navigation</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link to="/" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                Startseite
              </Link>
              <Link to="/ueber-uns" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                Über uns
              </Link>
              <Link to="/dienstleistungen" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                Dienstleistungen
              </Link>
              <Link to="/presse-ressourcen" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                Presse & Ressourcen
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-secondary-foreground">Services</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link to="/dienstleistungen" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                Relocation Coaching
              </Link>
              <Link to="/dienstleistungen" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                Familientherapie
              </Link>
              <Link to="/dienstleistungen" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                Eudaimonía-Programm
              </Link>
              <Link to="/dienstleistungen" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                Interkulturalitäts-Workshops
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-secondary-foreground">Kontakt</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-secondary-foreground/80">info@vianova-consulting.de</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-secondary-foreground/80">+49 (0) 40 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-secondary-foreground/80">Hamburg, Deutschland</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-secondary-foreground/60">
          <div>
            © {new Date().getFullYear()} ViaNova Consulting. Alle Rechte vorbehalten.
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/datenschutz" className="hover:text-secondary-foreground transition-colors">
              Datenschutz
            </Link>
            <Link to="/impressum" className="hover:text-secondary-foreground transition-colors">
              Impressum
            </Link>
            
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;