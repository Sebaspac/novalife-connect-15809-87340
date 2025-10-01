export interface Testimonial {
  id: string;
  photo: string;
  quote_short: string;
  quote_full: string;
  name: string;
  role: string;
  company: string;
  tag?: string;
  date?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    photo: "/lovable-uploads/5d24e5ab-8977-48f2-98c8-1de791018150.png",
    quote_short: "He tenido la fortuna de trabajar en equipo con Rocío como Columnista permanente...",
    quote_full: "He tenido la fortuna de trabajar en equipo con Rocío como Columnista permanente en la Revista CLI Digital y como mentora en interculturalidad para profesionales y empresas en el CLUB CLI, mostrando gran compromiso, responsabilidad y vocación de servicio para con su empresa y sus clientes.\n\nRecomiendo sin dudar a Rocío y estaré siempre abierta a apoyarle y compartir trayectorias.",
    name: "Monica Araque",
    role: "Coach y mentora en desarrollo y liderazgo de negocios y equipos",
    company: "Fundadora y directora CLUB CLI • Múnich, Alemania",
    tag: "Collaboration"
  },
  {
    id: "2", 
    photo: "/lovable-uploads/6e2b2c06-f2d7-4078-831c-00fb637c4989.png",
    quote_short: "Testimonial #2 - Die kulturelle Integration wurde zu einer bereichernden Reise...",
    quote_full: "Testimonial #2 - Als wir nach Deutschland zogen, waren wir überwältigt von den bürokratischen und kulturellen Herausforderungen. ViaNova hat uns nicht nur bei den praktischen Schritten geholfen, sondern auch dabei, eine echte Verbindung aufzubauen.",
    name: "Testimonial #2",
    role: "Marketing Director", 
    company: "Tech Solutions International",
    tag: "Relocation"
  },
  {
    id: "3",
    photo: "/lovable-uploads/8a1c3fad-c01b-4443-8c2a-c4fbafc7d8fa.png",
    quote_short: "Testimonial #3 - Die Betreuung unserer internationalen Mitarbeiter war außergewöhnlich...",
    quote_full: "Testimonial #3 - Wir schätzen die empathische und professionelle Art, wie ViaNova unsere internationalen Fachkräfte und deren Familien begleitet. Die kulturelle Sensibilität und die praktischen Lösungen haben dazu beigetragen.",
    name: "Testimonial #3",
    role: "HR Director",
    company: "Innovation Hub Berlin", 
    tag: "Corporate"
  },
  {
    id: "4",
    photo: "/lovable-uploads/765c1ba6-875b-4c52-8a06-7cbebc4ee731.png",
    quote_short: "Testimonial #4 - Ein professioneller Partner für alle Herausforderungen...",
    quote_full: "Testimonial #4 - Die Expertise von ViaNova hat uns geholfen, komplexe interkulturelle Situationen zu meistern. Ihr Ansatz ist sowohl praktisch als auch empathisch, was für unsere internationale Expansion entscheidend war.",
    name: "Testimonial #4",
    role: "Operations Manager",
    company: "Global Ventures Ltd",
    tag: "Business"
  },
  {
    id: "5",
    photo: "/lovable-uploads/6e2b2c06-f2d7-4078-831c-00fb637c4989.png", 
    quote_short: "Testimonial #5 - Unsere Familie fand schnell Anschluss in der neuen Heimat...",
    quote_full: "Testimonial #5 - Der Umzug nach Deutschland war für unsere Familie eine große Veränderung. ViaNova hat uns dabei geholfen, nicht nur praktische Hürden zu überwinden, sondern auch emotional anzukommen.",
    name: "Testimonial #5",
    role: "Software Engineer",
    company: "TechStart Berlin",
    tag: "Family"
  },
  {
    id: "6",
    photo: "/lovable-uploads/8a1c3fad-c01b-4443-8c2a-c4fbafc7d8fa.png",
    quote_short: "Testimonial #6 - Die interkulturelle Beratung öffnete neue Perspektiven...", 
    quote_full: "Testimonial #6 - ViaNova hat uns dabei unterstützt, kulturelle Brücken zu bauen und ein harmonisches Arbeitsumfeld für unser multikulturelles Team zu schaffen. Die Resultate sprechen für sich.",
    name: "Testimonial #6",
    role: "Cultural Director",
    company: "International Arts Foundation",
    tag: "Culture"
  },
  {
    id: "7",
    photo: "/lovable-uploads/765c1ba6-875b-4c52-8a06-7cbebc4ee731.png",
    quote_short: "Testimonial #7 - Ein unverzichtbarer Partner für unsere Expansion...",
    quote_full: "Testimonial #7 - Bei der Erschließung neuer Märkte in Deutschland war ViaNova unser strategischer Partner. Ihre lokalen Kenntnisse und interkulturellen Kompetenzen waren entscheidend für unseren Erfolg.",
    name: "Testimonial #7", 
    role: "Business Development",
    company: "European Expansion Co",
    tag: "Strategy"
  },
  {
    id: "8",
    photo: "/lovable-uploads/6e2b2c06-f2d7-4078-831c-00fb637c4989.png",
    quote_short: "Testimonial #8 - Die Unterstützung war vom ersten Tag an spürbar...",
    quote_full: "Testimonial #8 - Von der ersten Beratung bis zur vollständigen Integration hat ViaNova uns begleitet. Ihr ganzheitlicher Ansatz und die persönliche Betreuung haben den Unterschied gemacht.",
    name: "Testimonial #8",
    role: "Project Manager", 
    company: "Innovation Labs Munich",
    tag: "Support"
  },
  {
    id: "9", 
    photo: "/lovable-uploads/8a1c3fad-c01b-4443-8c2a-c4fbafc7d8fa.png",
    quote_short: "Testimonial #9 - Eine Bereicherung für unser internationales Team...",
    quote_full: "Testimonial #9 - Die Workshops und Beratungen von ViaNova haben unser Verständnis für interkulturelle Zusammenarbeit vertieft. Unser Team arbeitet jetzt effektiver und harmonischer zusammen.",
    name: "Testimonial #9",
    role: "Team Lead",
    company: "Cross-Cultural Solutions",
    tag: "Training"
  },
  {
    id: "10",
    photo: "/lovable-uploads/765c1ba6-875b-4c52-8a06-7cbebc4ee731.png",
    quote_short: "Testimonial #10 - Der Weg zu einer erfolgreichen Integration...",
    quote_full: "Testimonial #10 - ViaNova hat uns gezeigt, dass Integration mehr ist als nur Anpassung. Sie haben uns geholfen, unsere kulturelle Identität zu bewahren und gleichzeitig in der neuen Umgebung zu gedeihen.",
    name: "Testimonial #10",
    role: "Research Director",
    company: "Academic Bridge Institute", 
    tag: "Education"
  }
];