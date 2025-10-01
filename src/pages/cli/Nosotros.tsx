import CLIHero from '@/components/cli/CLIHero';
import ContactSideBySide from '@/components/common/ContactSideBySide';
import CLICTABand from '@/components/cli/CLICTABand';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, MapPin, Mail } from 'lucide-react';

// Team member images
import teamMonica from '@/assets/team-monica.jpg';
import teamFrancisco from '@/assets/team-francisco.jpg';
import teamCarmen from '@/assets/team-carmen.jpg';
import teamSarah from '@/assets/team-sarah.jpg';
import teamClaudia from '@/assets/team-claudia.jpg';
import teamNuria from '@/assets/team-nuria.jpg';
import teamCarolina from '@/assets/team-carolina.jpg';
import teamMember8 from '@/assets/team-member8.jpg';

const Nosotros = () => {
  const timeline = [
    {
      year: '2018',
      content: 'Nace la idea de crear un espacio digital que conecte profesionales hispanohablantes en Alemania y el mundo, enfocado en desarrollo personal y profesional.',
    },
    {
      year: '2019',
      content: 'Club CLI inicia oficialmente como una comunidad digital, compartiendo contenido sobre liderazgo, crecimiento personal y temas relevantes para profesionales en el extranjero.',
    },
    {
      year: '2020',
      content: 'Para sorpresa nuestra, la pandemia nos desafió a continuar apostándole a lo digital y nuestros temas generaban gran interés, mostrándonos que nuestra propuesta era viable.',
    },
    {
      year: '2022',
      content: 'Consolidamos nuestra presencia digital y ampliamos nuestro alcance con la Revista CLI Digital, ofreciendo contenido especializado para profesionales y emprendedores.',
    },
    {
      year: '2023',
      content: 'Lanzamos Academia CLI y expandimos nuestra oferta de servicios profesionales de mentoría, coaching y consultoría, conectando con clientes en Europa y Latinoamérica.',
    },
    {
      year: 'A hoy',
      content: 'Somos un referente en transformación profesional y empresarial para la comunidad hispanohablante, con un equipo internacional de expertos y una red creciente de clientes satisfechos.',
    },
  ];

  const team = [
    {
      name: 'Mónica Araque',
      role: 'Fundadora/Directora Club CLI',
      image: teamMonica,
      credentials: [
        'Mentora Coach en liderazgo personal y profesional',
        'Consultora en estructura y liderazgo de negocios y equipos',
        'Contadora/Esp. en economía/Auditora certificada/Coach profesional',
        'Mentora Acreditada EMCC Global',
      ],
      quote: 'Crecer para ayudar a crecer a otros',
      description: 'Acompaño a ejecutivos, equipos y emprendedores a generar transformaciones conscientes, a través del fortalecimiento de su capacidad de liderazgo y en el desarrollo de estrategias efectivas que impulsan el crecimiento. Les ayudo a transformar sus ideas, necesidades, objetivos y visión en resultados concretos y a identificar oportunidades y soluciones que generen un impacto positivo en sí mismos, en sus proyectos, empresa y entorno.',
      location: 'Múnich, Alemania',
    },
    {
      name: 'Francisco Javier Royett V',
      role: 'Psicólogo, MG. en proyectos de desarrollo social',
      image: teamFrancisco,
      credentials: ['Consultor empresarial internacional'],
      description: 'Mi capacidad de flexibilidad para adaptarme a diferentes estilos de aprendizaje me lleva a tomar una actitud empática y comprensiva hacia los participantes que apoyo, ante sus perspectivas y emociones.',
      location: 'Bogotá, Colombia',
    },
    {
      name: 'Carmen Díaz',
      role: 'Consultora internacional senior',
      image: teamCarmen,
      credentials: [
        'Consultora en finanzas, estrategia de nuevos negocios y mercados',
        'Coach financiera internacional',
      ],
      description: 'Empresaria, pionera en innovación y tecnología, creativa y experta en multiculturalidad de empresas y personas. Fundadora y pionera en España de varias empresas del sector de la salud y crecimiento personal.',
      location: 'Múnich, Alemania',
    },
    {
      name: 'Sarah Nathalie Felicianni',
      role: 'Asesora en imagen y protocolo',
      image: teamSarah,
      credentials: ['Asesora en imagen y protocolo personal y corporativo'],
      description: 'Con un enfoque centrado en la adaptabilidad cada proyecto es una oportunidad para desafiar los límites y crear algo único. Mi objetivo es impulsar la productividad y el alto rendimiento de los recursos en cada paso del nuevo proyecto que se me presente.',
      location: 'Hamburgo, Alemania',
    },
    {
      name: 'Claudia di Silvo',
      role: 'Mentora de ventas',
      image: teamClaudia,
      credentials: ['Mentora de ventas, cierre de ventas y negociación efectiva'],
      description: 'Mi misión es ayudar a comprender la psicología del proceso de ventas, negociación efectiva y mensajes que vendan solos para ayudar a los equipos y empresas a sentirse realizados y en control de su propio éxito al vender.',
      location: 'Pescara, Italia',
    },
    {
      name: 'Nuria Baulies',
      role: 'Facilitadora sistémica',
      image: teamNuria,
      credentials: ['Facilitadora sistémica, coach y formadora'],
      description: 'Como facilitadora sistémica, coach y formadora acompaño a personas, equipos y organizaciones en procesos de transformación consciente. Facilito la evolución y la toma de conciencia del potencial personal y profesional generando nuevas experiencias de transformación y de aprendizaje.',
      location: 'España',
    },
    {
      name: 'Carolina Roldán',
      role: 'Médico Epidemióloga',
      image: teamCarolina,
      credentials: ['Médico Epidemióloga'],
      description: 'Apoyo a grupos de profesionales, equipos y empresas en la toma de conciencia para elevar su calidad de vida y bienestar desde la reducción del estrés y su impacto en la salud y resultados profesionales.',
      location: 'Medellín, Colombia',
    },
    {
      name: 'David Martínez',
      role: 'Consultor en transformación digital',
      image: teamMember8,
      credentials: ['Consultor en transformación digital', 'Especialista en innovación empresarial'],
      description: 'Acompaño a empresas y equipos en procesos de transformación digital, implementando estrategias innovadoras que optimizan procesos y generan valor sostenible en el tiempo.',
      location: 'Madrid, España',
    },
  ];

  return (
    <div>
      <CLIHero 
        title="Sobre Nosotros" 
        subtitle="Somos catalizadores de cambio" 
        backgroundImage="/lovable-uploads/testimonial-customer.jpg"
        showCta={false}
      />

      {/* Mission Statement */}
      <section className="py-20 bg-background">
        <div className="content-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-6">
              Nuestra historia: un sueño que se convirtió en propósito
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Desde 2018, hemos estado construyendo puentes entre profesionales y empresas,
              facilitando transformaciones que generan impacto real.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Accordion */}
      <section className="py-20 bg-gradient-to-br from-[#f1f5f9] to-[#e2e8f0]">
        <div className="content-container">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible defaultValue="2019" className="space-y-4">
              {timeline.map((item) => (
                <AccordionItem
                  key={item.year}
                  value={item.year}
                  className="bg-white border-2 border-[#1e3a8a]/20 rounded-2xl px-8 shadow-lg hover:shadow-2xl hover:border-[#1e3a8a]/40 transition-all"
                >
                  <AccordionTrigger className="text-xl font-bold text-[#1e293b] hover:text-[#1e3a8a] py-6">
                    En {item.year}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#475569] leading-relaxed pb-6 text-base font-medium">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Purpose & Vision */}
      <section className="py-20 bg-background">
        <div className="content-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-border/40 hover:shadow-lift transition-all">
              <CardContent className="p-10">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-secondary/10 p-3 rounded-2xl">
                    <Target className="h-8 w-8 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Nuestro Propósito</h3>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Impulsar el crecimiento y la transformación integral de profesionales y empresas
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/40 hover:shadow-lift transition-all">
              <CardContent className="p-10">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-secondary/10 p-3 rounded-2xl">
                    <Eye className="h-8 w-8 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Nuestra Visión</h3>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ser un medio formativo digital líder desde Europa que reúne las visiones de profesionales y emprendedores dispuestos a generar transformaciones de impacto.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section - Modern Clean Style with Staggered Layout */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="content-container">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 text-[#1a1a1a]">
              Meet the Team
            </h2>
            <p className="text-xl text-[#666] max-w-2xl mx-auto">
              Un equipo internacional de expertos comprometidos con tu crecimiento
            </p>
          </div>

          {/* Staggered Grid - centered with max-width */}
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 justify-items-center">
              {team.map((member, index) => (
                <div
                  key={index}
                  className={`group relative bg-white/50 backdrop-blur-sm rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-3 w-full max-w-[320px] h-[520px] ${
                    // Staggered pattern: 1st and 3rd lower, 2nd and 4th at top
                    index % 2 === 0 ? 'lg:mt-16' : 'lg:mt-0'
                  }`}
                >
                {/* Photo Container - Full height with real team photo and darker blue background */}
                <div className="relative h-full bg-gradient-to-br from-[#1e40af] via-[#1e3a8a] to-[#1e293b] flex items-end justify-center pb-20 overflow-hidden">
                  {/* Team member photo with better visibility */}
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover object-top opacity-80"
                  />
                  
                  {/* Gradient overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1e293b]/90"></div>
                  
                  {/* Floating Badges - positioned absolutely at bottom with better contrast - hidden on hover */}
                  <div className="absolute bottom-6 left-6 right-6 space-y-2 z-20 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    {/* Name Badge */}
                    <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-[#1e3a8a] text-white text-base font-bold shadow-2xl hover:bg-[#2563eb] transition-colors" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                      {member.name}
                    </div>
                    
                    {/* Role Badge */}
                    <div className="block">
                      <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-white text-[#1e293b] text-sm font-semibold shadow-xl hover:shadow-2xl hover:bg-neutral-50 transition-all">
                        {member.role.length > 40 ? member.role.substring(0, 40) + '...' : member.role}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Info Overlay with very dark blue background and light text - scrollable */}
                <div className="absolute inset-0 bg-[#0f172a]/98 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                      <p className="text-base text-[#60a5fa] font-bold">{member.role}</p>
                    </div>
                    
                    {member.credentials.length > 0 && (
                      <div className="space-y-1.5">
                        {member.credentials.map((cred, idx) => (
                          <p key={idx} className="text-sm text-white/95 leading-relaxed font-medium">• {cred}</p>
                        ))}
                      </div>
                    )}
                    
                    {member.quote && (
                      <div className="bg-white/10 p-4 rounded-xl border-l-4 border-[#60a5fa]">
                        <p className="text-sm text-white italic font-medium">"{member.quote}"</p>
                      </div>
                    )}
                    
                    <p className="text-sm text-white/90 leading-relaxed font-normal">
                      {member.description}
                    </p>
                    
                    <div className="flex items-center text-sm text-white/75 pt-2 border-t border-white/20 font-medium">
                      <MapPin className="h-4 w-4 mr-1.5" />
                      {member.location}
                    </div>
                  </div>
                </div>
                </div>
              ))}
            </div>
          </div>

          {/* Note for adding real photos */}
          <div className="mt-16 text-center">
            <p className="text-sm text-[#999] italic">
              💡 Tipp: Ersetzen Sie die Platzhalter durch freigestellte Team-Fotos (transparente PNG-Dateien)
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <CLICTABand 
        title="¿Quieres ser parte del equipo?"
        description="Conecta con nosotros y descubre oportunidades de colaboración"
        ctaText="Contáctanos"
        ctaLink="#contact"
        variant="gradient"
      />
      <ContactSideBySide />
    </div>
  );
};

export default Nosotros;
