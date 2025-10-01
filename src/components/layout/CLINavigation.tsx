import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerClose } from '@/components/ui/drawer';
import ContactForm from '@/components/common/ContactForm';
const CLINavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };
  const navItems = [
    { href: '/', label: 'Inicio' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/revista', label: 'Revista CLI' },
    { href: '/blog', label: 'Blog' },
  ];
  const isActive = (href: string) => {
    if (href === '/' && location.pathname === '/') return true;
    if (href !== '/' && location.pathname.startsWith(href)) return true;
    return false;
  };
  return <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80">
      <div className="content-container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group" onClick={handleNavClick}>
            <span className="text-xl font-semibold text-foreground tracking-tight group-hover:opacity-70 transition-opacity">
              Club CLI
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-12">
            <div className="flex items-center space-x-10">
              {navItems.map(item => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-sm font-normal transition-opacity hover:opacity-100 ${
                    isActive(item.href) ? 'text-foreground opacity-100' : 'text-foreground/60 opacity-80'
                  }`}
                  onClick={handleNavClick}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden lg:flex items-center">
            <Button size="sm" onClick={() => setIsDrawerOpen(true)}>
              Reserva una sesión
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle navigation menu">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="lg:hidden border-t border-border/40 py-6 animate-fade-in">
            <div className="flex flex-col space-y-1">
              {navItems.map(item => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block px-4 py-3 text-base font-normal rounded-xl transition-colors ${
                    isActive(item.href) ? 'text-foreground bg-muted' : 'text-foreground/70 hover:bg-muted/50'
                  }`}
                  onClick={handleNavClick}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4">
                <Button 
                  size="default" 
                  className="w-full"
                  onClick={() => {
                    setIsDrawerOpen(true);
                    setIsMenuOpen(false);
                  }}
                >
                  Reserva una sesión
                </Button>
              </div>
            </div>
          </nav>}
      </div>

      {/* Contact Drawer */}
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent className="
          fixed overflow-hidden bg-background
          max-h-[88vh]
          
          /* Mobile: Fullscreen */
          inset-0 rounded-none
          
          /* Tablet: 640px wide, positioned bottom-right */
          md:inset-auto md:right-6 md:bottom-6 md:w-[640px] md:rounded-[20px]
          
          /* Desktop: 720px wide (680-760px range) */
          lg:w-[720px] lg:min-w-[680px] lg:max-w-[760px]
          
          shadow-2xl border border-border/20
        ">
          <div className="absolute top-6 right-6 z-10">
            <DrawerClose asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 bg-white/10 hover:bg-white/20">
                <X className="h-4 w-4 text-white" />
              </Button>
            </DrawerClose>
          </div>
          
          <div className="grid lg:grid-cols-2 h-full max-h-[88vh]">
            {/* Left side - Image */}
            <div className="hidden lg:block relative overflow-hidden bg-neutral-200">
              <img 
                src="/lovable-uploads/monica-araque-contact.png" 
                alt="Mónica Araque - Fundadora de Club CLI"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-semibold mb-1">Mónica Araque</h3>
                <p className="text-sm opacity-90">Fundadora de Club CLI</p>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="flex items-center justify-center bg-[#111] p-8 lg:p-12 overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-transparent">
              <div className="w-full max-w-2xl">
                <ContactForm noCard />
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </header>;
};
export default CLINavigation;