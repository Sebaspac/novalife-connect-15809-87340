import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };
  const navItems = [{
    href: '/',
    label: 'Startseite'
  }, {
    href: '/ueber-uns',
    label: 'Über uns'
  }, {
    href: '/dienstleistungen',
    label: 'Dienstleistungen'
  }, {
    href: '/presse-ressourcen',
    label: 'Presse & Ressourcen'
  }, {
    href: '/kontakt-shop',
    label: 'Shop'
  }];
  const isActive = (href: string) => {
    if (href === '/' && location.pathname === '/') return true;
    if (href !== '/' && location.pathname.startsWith(href)) return true;
    return false;
  };
  return <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={handleNavClick}>
            
            <div>
              <div className="text-xl font-bold text-foreground">ViaNova</div>
              <div className="text-sm text-muted-foreground">Consulting</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <Link key={item.href} to={item.href} className={`text-sm font-medium transition-colors hover:text-primary ${isActive(item.href) ? 'text-primary border-b-2 border-primary pb-1' : 'text-foreground'}`} onClick={handleNavClick}>
                {item.label}
              </Link>)}
          </nav>

          {/* Language Toggle & CTA Button Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center bg-muted rounded-lg p-1">
              <button className="px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded">
                DE
              </button>
              <button className="px-2 py-1 text-xs font-medium text-muted-foreground hover:text-foreground">
                SP
              </button>
            </div>
            <Button variant="secondary" size="sm" asChild>
              <Link to="/kontakt" onClick={handleNavClick}>Kontakt</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle navigation menu">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="md:hidden border-t py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map(item => <Link key={item.href} to={item.href} className={`text-sm font-medium transition-colors hover:text-primary ${isActive(item.href) ? 'text-primary' : 'text-foreground'}`} onClick={handleNavClick}>
                  {item.label}
                </Link>)}
              <Button variant="default" size="sm" asChild className="w-full">
                <Link to="/kontakt-shop" onClick={handleNavClick}>
                  Termin anfragen
                </Link>
              </Button>
            </div>
          </nav>}
      </div>
    </header>;
};
export default Navigation;