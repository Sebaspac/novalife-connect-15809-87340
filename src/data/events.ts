import eventImage1 from '@/assets/blog-morning-routine.jpg';
import eventImage2 from '@/assets/blog-mental-health.jpg';
import eventImage3 from '@/assets/blog-anxiety-help.jpg';

export interface EventContentBlock {
  type: 'text' | 'image' | 'text-image' | 'image-text' | 'image-image';
  content?: string;
  image1?: string;
  image2?: string;
  alt1?: string;
  alt2?: string;
}

export interface Event {
  id: number;
  title: string;
  subtitle?: string;
  date: string;
  eventDate: string;
  eventTime: string;
  location: string;
  slug: string;
  image: string;
  excerpt: string;
  category: string;
  organizer: string;
  duration: string;
  price: number;
  maxParticipants: number;
  currentParticipants: number;
  tags: string[];
  seoTitle?: string;
  seoDescription?: string;
  ogImage?: string;
  coverImage?: string;
  contentBlocks: EventContentBlock[];
}

export const events: Event[] = [
  {
    id: 1,
    title: "Workshop: Erfolgreich Ankommen in Hamburg",
    subtitle: "Praktische Tipps und Strategien für Ihre Integration in der Hansestadt",
    date: "15.02.25",
    eventDate: "2025-03-15",
    eventTime: "10:00 - 16:00",
    location: "ViaNova Consulting, Hamburg",
    slug: "workshop-ankommen-hamburg",
    image: eventImage1,
    excerpt: "Ein ganztägiger Workshop mit praktischen Übungen und wertvollen Kontakten für Ihren erfolgreichen Start in Hamburg.",
    category: "Workshop",
    organizer: "ViaNova Consulting",
    duration: "6 Stunden",
    price: 149,
    maxParticipants: 20,
    currentParticipants: 12,
    tags: ["Hamburg", "Integration", "Workshop", "Networking"],
    seoTitle: "Workshop Ankommen Hamburg - Praktische Integration Tipps",
    seoDescription: "Lernen Sie in unserem intensiven Workshop alle wichtigen Schritte für eine erfolgreiche Integration in Hamburg kennen.",
    coverImage: eventImage1,
    contentBlocks: [
      {
        type: 'text-image',
        content: 'Hamburg empfängt jährlich tausende neue Einwohner aus aller Welt. In diesem intensiven Workshop lernen Sie alle wichtigen Schritte für eine erfolgreiche Integration kennen - von Behördengängen bis zum Aufbau sozialer Kontakte.',
        image1: eventImage1,
        alt1: 'Workshop-Teilnehmer bei Diskussion über Integration'
      },
      {
        type: 'text',
        content: 'Sie erhalten praktische Checklisten, lernen andere Neuankömmlinge kennen und erfahren aus erster Hand, welche Hürden Sie erwarten und wie Sie diese meistern können. Unsere erfahrenen Coaches teilen wertvolle Insider-Tipps, die Ihnen Zeit und Nerven sparen.'
      },
      {
        type: 'image-text',
        image1: eventImage1,
        alt1: 'Hamburg Stadtansicht mit Speicherstadt',
        content: 'Der Workshop umfasst: Behördengänge und Anmeldungen, Wohnungssuche in Hamburg, Gesundheitssystem und Versicherungen, Bildungsmöglichkeiten für Kinder, Kulturelle Besonderheiten der Hansestadt, Networking und Community-Building.'
      }
    ]
  },
  {
    id: 2,
    title: "Webinar: Interkulturelle Führung im digitalen Zeitalter",
    subtitle: "Moderne Leadership-Strategien für diverse Teams",
    date: "20.02.25",
    eventDate: "2025-03-20",
    eventTime: "18:00 - 20:00",
    location: "Online (Zoom)",
    slug: "webinar-interkulturelle-fuehrung",
    image: eventImage2,
    excerpt: "Online-Seminar für Führungskräfte über erfolgreiche Leitung multikultureller Teams in der digitalen Arbeitswelt.",
    category: "Webinar",
    organizer: "ViaNova Business Academy",
    duration: "2 Stunden",
    price: 79,
    maxParticipants: 50,
    currentParticipants: 28,
    tags: ["Führung", "Digital", "Interkulturalität", "Management"],
    seoTitle: "Interkulturelle Führung Webinar - Online Leadership Training",
    seoDescription: "Erlernen Sie moderne Führungsstrategien für diverse Teams im digitalen Arbeitsumfeld. Praxisnahe Tipps von Experten.",
    coverImage: eventImage2,
    contentBlocks: [
      {
        type: 'image-text',
        image1: eventImage2,
        alt1: 'Diverse Teammitglieder in Video-Konferenz',
        content: 'Die digitale Transformation hat die Art, wie wir führen, grundlegend verändert. Besonders in multikulturellen Teams entstehen neue Herausforderungen und Chancen, die eine bewusste Herangehensweise erfordern.'
      },
      {
        type: 'text',
        content: 'In diesem interaktiven Webinar lernen Sie, wie Sie kulturelle Unterschiede als Stärke nutzen, effektive Kommunikation in virtuellen Teams fördern und Vertrauen auch auf Distanz aufbauen können.'
      },
      {
        type: 'text-image',
        content: 'Themen des Webinars: Kulturelle Intelligenz in digitalen Teams, Virtuelle Führung und Motivation, Konfliktlösung im Online-Kontext, Best Practices für Remote Leadership, Aufbau einer inklusiven Teamkultur.',
        image1: eventImage2,
        alt1: 'Online-Team-Meeting mit internationalen Teilnehmern'
      }
    ]
  },
  {
    id: 3,
    title: "Familien-Event: Eudaimonía in der Praxis",
    subtitle: "Philosophie des guten Lebens für moderne Familien",
    date: "25.02.25",
    eventDate: "2025-03-25",
    eventTime: "14:00 - 18:00",
    location: "Familienbildungsstätte Hamburg",
    slug: "familien-event-eudaimonia",
    image: eventImage3,
    excerpt: "Interaktiver Familientag zur Entdeckung gemeinsamer Werte und zur Stärkung des Familienglücks nach antikem Vorbild.",
    category: "Familien-Event",
    organizer: "ViaNova Family",
    duration: "4 Stunden",
    price: 89,
    maxParticipants: 15,
    currentParticipants: 8,
    tags: ["Familie", "Philosophie", "Eudaimonía", "Werte"],
    seoTitle: "Familien-Event Eudaimonía - Philosophie des guten Lebens",
    seoDescription: "Entdecken Sie mit Ihrer Familie das antike Konzept der Eudaimonía und stärken Sie Ihr gemeinsames Glück und Wohlbefinden.",
    coverImage: eventImage3,
    contentBlocks: [
      {
        type: 'text',
        content: 'Eudaimonía - das antike griechische Konzept des guten Lebens - bietet Familien heute einen wertvollen Kompass für gemeinsames Wachstum und nachhaltiges Glück. In diesem besonderen Event entdecken Sie praktische Wege, philosophische Weisheit in Ihren Familienalltag zu integrieren.'
      },
      {
        type: 'image-text',
        image1: eventImage3,
        alt1: 'Familie bei gemeinsamer Reflexion und Aktivität',
        content: 'Durch interaktive Übungen, Diskussionen und spielerische Elemente lernen Familien, ihre individuellen Stärken zu erkennen und sie zum Wohl der Gemeinschaft einzusetzen. Kinder und Erwachsene erfahren gleichermaßen, wie Tugenden wie Mut, Gerechtigkeit und Weisheit gelebt werden können.'
      },
      {
        type: 'text-image',
        content: 'Der Event umfasst: Einführung in die Philosophie der Eudaimonía, Gemeinsame Werte-Findung als Familie, Praktische Übungen für den Alltag, Reflexion und Austausch mit anderen Familien, Entwicklung eines Familien-Glücks-Plans.',
        image1: eventImage3,
        alt1: 'Familien bei philosophischen Diskussionen'
      }
    ]
  }
];

export const getEventBySlug = (slug: string): Event | undefined => {
  return events.find(event => event.slug === slug);
};

export const getEventsByCategory = (category: string, excludeId?: number): Event[] => {
  return events.filter(event => event.category === category && event.id !== excludeId).slice(0, 3);
};

export const getNextPrevEvents = (currentId: number): { next?: Event; prev?: Event } => {
  const currentIndex = events.findIndex(event => event.id === currentId);
  return {
    prev: currentIndex > 0 ? events[currentIndex - 1] : undefined,
    next: currentIndex < events.length - 1 ? events[currentIndex + 1] : undefined
  };
};