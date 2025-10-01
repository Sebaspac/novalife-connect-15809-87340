import blogImage1 from '@/assets/blog-morning-routine.jpg';
import blogImage2 from '@/assets/blog-mental-health.jpg';
import blogImage3 from '@/assets/blog-anxiety-help.jpg';
import blogImage4 from '@/assets/blog-meditation-guide.jpg';

export interface ContentBlock {
  type: 'text' | 'image' | 'text-image' | 'image-text' | 'image-image';
  content?: string;
  image1?: string;
  image2?: string;
  alt1?: string;
  alt2?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  subtitle?: string;
  date: string;
  slug: string;
  image: string;
  excerpt: string;
  category: string;
  author: string;
  readingTime: string;
  tags: string[];
  seoTitle?: string;
  seoDescription?: string;
  ogImage?: string;
  coverImage?: string;
  contentBlocks: ContentBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Die perfekte Morgenroutine für bessere Laune",
    subtitle: "Kleine Gewohnheiten mit großer Wirkung für Ihren Alltag",
    date: "06.08.20",
    slug: "perfekte-morgenroutine-bessere-laune",
    image: blogImage1,
    excerpt: "Entdecken Sie, wie eine strukturierte Morgenroutine Ihr Wohlbefinden steigern kann.",
    category: "Lifestyle",
    author: "Rocío Morales-Broy",
    readingTime: "5 Min.",
    tags: ["Morgenroutine", "Wohlbefinden", "Gesundheit", "Lifestyle"],
    seoTitle: "Die perfekte Morgenroutine für bessere Laune - ViaNova Consulting",
    seoDescription: "Entdecken Sie bewährte Strategien für eine Morgenroutine, die Ihr Wohlbefinden steigert und Ihnen einen positiven Start in den Tag ermöglicht.",
    coverImage: blogImage1,
    contentBlocks: [
      {
        type: 'text-image',
        content: 'Eine gute Morgenroutine ist der Grundstein für einen erfolgreichen Tag. Sie gibt uns Struktur, Ruhe und die Möglichkeit, bewusst in den Tag zu starten, anstatt von den Ereignissen überrollt zu werden. Besonders für Menschen in neuen Umgebungen kann eine feste Routine Sicherheit und Orientierung bieten.',
        image1: blogImage1,
        alt1: 'Friedliche Morgenroutine in modernem Zuhause'
      },
      {
        type: 'text',
        content: 'Der Schlüssel liegt darin, Ihre Morgenroutine an Ihre persönlichen Bedürfnisse anzupassen. Was für andere funktioniert, muss nicht zwingend für Sie richtig sein. Experimentieren Sie mit verschiedenen Elementen und finden Sie heraus, was Ihnen Energie gibt und Sie positiv stimmt.'
      },
      {
        type: 'image-text',
        image1: blogImage1,
        alt1: 'Person beim morgendlichen Ritual',
        content: 'Beginnen Sie klein: Schon 10-15 Minuten können einen großen Unterschied machen. Wichtig ist die Regelmäßigkeit, nicht die Perfektion. Eine einfache Routine aus Trinken eines Glases Wasser, kurzer Meditation oder Dankbarkeitsübung kann bereits transformierend wirken.'
      }
    ]
  },
  {
    id: 2,
    title: "Ein Tag nur für die Psyche: So gelingt das Abschalten",
    subtitle: "Mentale Gesundheit in den Fokus rücken",
    date: "05.08.20",
    slug: "tag-fuer-die-psyche-abschalten",
    image: blogImage2,
    excerpt: "Praktische Tipps für mentale Gesundheit und bewusste Entspannung.",
    category: "Mental Health",
    author: "Rocío Morales-Broy",
    readingTime: "7 Min.",
    tags: ["Mentale Gesundheit", "Entspannung", "Selbstfürsorge", "Achtsamkeit"],
    seoTitle: "Mental Health Day: Richtig abschalten und entspannen - ViaNova",
    seoDescription: "Lernen Sie, wie Sie einen effektiven Mental Health Day gestalten und dabei richtig abschalten können. Praktische Tipps für mehr Wohlbefinden.",
    coverImage: blogImage2,
    contentBlocks: [
      {
        type: 'image-text',
        image1: blogImage2,
        alt1: 'Entspannte Person am Strand bei Sonnenuntergang',
        content: 'In unserer schnelllebigen Welt vergessen wir oft, dass unsere Psyche genauso Pflege und Aufmerksamkeit benötigt wie unser Körper. Ein bewusster Tag für die mentale Gesundheit kann Wunder wirken und uns helfen, wieder in Balance zu kommen.'
      },
      {
        type: 'text',
        content: 'Das Wichtigste ist, diesen Tag wirklich als Auszeit zu betrachten. Schalten Sie das Handy aus, vermeiden Sie stressige Gespräche und konzentrieren Sie sich ganz auf das, was Ihnen gut tut. Jeder Mensch hat andere Bedürfnisse – für manche ist es Natur, für andere Musik oder kreative Tätigkeiten.'
      },
      {
        type: 'text-image',
        content: 'Planen Sie konkrete Aktivitäten, die Ihnen Freude bereiten: ein entspannendes Bad, ein gutes Buch, Zeit in der Natur oder ein kreativer Workshop. Wichtig ist, dass Sie diese Zeit ohne Schuldgefühle genießen können.',
        image1: blogImage2,
        alt1: 'Selbstfürsorge und Entspannung'
      }
    ]
  },
  {
    id: 3,
    title: "Übungen zum Überwinden von Angstgefühlen",
    subtitle: "Bewährte Strategien für mehr innere Ruhe",
    date: "03.08.20",
    slug: "uebungen-angstgefuehle-ueberwinden",
    image: blogImage3,
    excerpt: "Bewährte Strategien und Techniken für den Umgang mit Ängsten.",
    category: "Coaching",
    author: "Rocío Morales-Broy",
    readingTime: "8 Min.",
    tags: ["Angst", "Coaching", "Bewältigung", "Techniken"],
    seoTitle: "Angst überwinden: Praktische Übungen und Strategien - ViaNova",
    seoDescription: "Entdecken Sie bewährte Übungen und Techniken zur Überwindung von Angstgefühlen. Professionelle Hilfe für mehr innere Ruhe und Selbstvertrauen.",
    coverImage: blogImage3,
    contentBlocks: [
      {
        type: 'text',
        content: 'Angst ist ein natürliches Gefühl, das uns vor Gefahren schützen soll. Wenn sie jedoch übermäßig wird oder uns im Alltag einschränkt, ist es wichtig, Strategien zu entwickeln, um mit ihr umzugehen. Die gute Nachricht: Angst ist überwindbar.'
      },
      {
        type: 'image-text',
        image1: blogImage3,
        alt1: 'Person bei Atemübungen zur Angstbewältigung',
        content: 'Eine der effektivsten Sofort-Strategien ist die 4-7-8 Atemtechnik: 4 Sekunden einatmen, 7 Sekunden anhalten, 8 Sekunden ausatmen. Diese Übung aktiviert das parasympathische Nervensystem und kann akute Angstzustände mildern.'
      },
      {
        type: 'text-image',
        content: 'Progressive Muskelentspannung ist eine weitere bewährte Methode. Spannen Sie nacheinander verschiedene Muskelgruppen für 5 Sekunden an und lassen Sie dann bewusst los. Beginnen Sie mit den Füßen und arbeiten Sie sich nach oben vor.',
        image1: blogImage3,
        alt1: 'Entspannungsübungen gegen Angst'
      },
      {
        type: 'text',
        content: 'Wichtig ist auch die kognitive Arbeit: Hinterfragen Sie Ihre Gedanken. Sind die befürchteten Szenarien realistisch? Was würden Sie einem Freund in derselben Situation raten? Oft hilft es, die Perspektive zu wechseln und rationaler zu betrachten.'
      }
    ]
  },
  {
    id: 4,
    title: "Meditationsanleitung für Einsteiger",
    subtitle: "Der sanfte Weg zu mehr Achtsamkeit und innerer Ruhe",
    date: "04.08.20",
    slug: "meditation-anleitung-einsteiger",
    image: blogImage4,
    excerpt: "Eine einfache Anleitung für den Einstieg in die Meditation.",
    category: "Mindfulness",
    author: "Rocío Morales-Broy",
    readingTime: "6 Min.",
    tags: ["Meditation", "Achtsamkeit", "Anfänger", "Spiritualität"],
    seoTitle: "Meditation für Anfänger: Einfache Anleitung zum Einstieg - ViaNova",
    seoDescription: "Lernen Sie die Grundlagen der Meditation kennen. Eine praxisnahe Anleitung für Einsteiger mit einfachen Übungen für den Alltag.",
    coverImage: blogImage4,
    contentBlocks: [
      {
        type: 'image',
        image1: blogImage4,
        alt1: 'Serene Meereslandschaft für Meditation'
      },
      {
        type: 'text',
        content: 'Meditation ist keine esoterische Praxis, sondern eine wissenschaftlich belegte Methode zur Stressreduktion und Verbesserung der Lebensqualität. Sie hilft dabei, den Geist zu beruhigen und mehr Klarheit zu gewinnen.'
      },
      {
        type: 'text-image',
        content: 'Für den Einstieg genügen bereits 5-10 Minuten täglich. Suchen Sie sich einen ruhigen Ort, setzen Sie sich bequem hin und schließen Sie die Augen. Konzentrieren Sie sich auf Ihren Atem, ohne ihn zu verändern – beobachten Sie einfach, wie er kommt und geht.',
        image1: blogImage4,
        alt1: 'Friedlicher Meditationsplatz'
      },
      {
        type: 'text',
        content: 'Es ist völlig normal, dass Gedanken auftauchen. Bewerten Sie sie nicht, sondern kehren Sie sanft zu Ihrem Atem zurück. Mit der Zeit wird es leichter, und Sie werden die positiven Effekte auf Ihr Wohlbefinden spüren.'
      }
    ]
  },
  {
    id: 5,
    title: "Ankommen in Hamburg: 7 Schritte zur schnellen Integration",
    subtitle: "Praktischer Leitfaden für einen erfolgreichen Start in der Hansestadt",
    date: "15.01.25",
    slug: "ankommen-hamburg-integration-schritte",
    image: blogImage1,
    excerpt: "Ein strukturierter Plan für Ihren erfolgreichen Start in Hamburg - von Behördengängen bis zur sozialen Integration.",
    category: "Integration",
    author: "Rocío Morales-Broy",
    readingTime: "12 Min.",
    tags: ["Hamburg", "Integration", "Ankommen", "Behörden", "Soziales"],
    seoTitle: "Hamburg Integration: 7 praktische Schritte für Newcomer - ViaNova",
    seoDescription: "Entdecken Sie bewährte Strategien für eine schnelle und erfolgreiche Integration in Hamburg. Praktische Tipps von Experten für Newcomer.",
    coverImage: blogImage1,
    contentBlocks: [
      {
        type: 'text-image',
        content: 'Hamburg empfängt jährlich tausende neue Einwohner aus aller Welt. Die Hansestadt bietet hervorragende Möglichkeiten für beruflichen und persönlichen Erfolg, doch der erste Schritt kann überwältigend sein. Mit der richtigen Herangehensweise wird Ihr Ankommen jedoch zu einem positiven Erlebnis.',
        image1: blogImage1,
        alt1: 'Hamburg Panorama mit Speicherstadt und Elbphilharmonie'
      },
      {
        type: 'image-text',
        image1: blogImage2,
        alt1: 'Hamburger Behördengebäude und Anmeldeformulare',
        content: 'Schritt 1: Die Anmeldung bei der Meldebehörde ist Ihr erster offizieller Akt in Hamburg. Bereiten Sie alle erforderlichen Dokumente vor: Personalausweis, Mietvertrag oder Wohnungsgeberbestätigung, und bei EU-Bürgern den Nachweis einer Krankenversicherung. Die Online-Terminbuchung spart Ihnen wertvolle Zeit.'
      },
      {
        type: 'text',
        content: 'Schritt 2: Eröffnen Sie schnellstmöglich ein deutsches Bankkonto. Ohne dieses ist vieles in Deutschland kompliziert - von der Wohnungsmiete bis zum Mobilfunkvertrag. Die meisten Banken bieten spezielle Pakete für Newcomer an. Informieren Sie sich über Kontoführungsgebühren und Services.'
      }
    ]
  },
  {
    id: 6,
    title: "Interkulturelle Führung: Was Teams wirklich brauchen",
    subtitle: "Erfolgreiche Teamführung in multikulturellen Arbeitsumgebungen",
    date: "22.01.25",
    slug: "interkulturelle-fuehrung-teams",
    image: blogImage3,
    excerpt: "Wie Sie diverse Teams erfolgreich führen und das volle Potenzial kultureller Vielfalt am Arbeitsplatz ausschöpfen.",
    category: "Business",
    author: "Rocío Morales-Broy",
    readingTime: "10 Min.",
    tags: ["Führung", "Diversity", "Teammanagement", "Interkulturalität", "Business"],
    seoTitle: "Interkulturelle Führung: Teams erfolgreich managen - ViaNova",
    seoDescription: "Entdecken Sie bewährte Strategien für interkulturelle Führung. Wie Sie diverse Teams motivieren und zum Erfolg führen.",
    coverImage: blogImage3,
    contentBlocks: [
      {
        type: 'image-image',
        image1: blogImage3,
        alt1: 'Multikulturelles Team bei Brainstorming-Session',
        image2: blogImage4,
        alt2: 'Internationale Geschäftspartner bei Verhandlung'
      },
      {
        type: 'text-image',
        content: 'Kulturelle Vielfalt in Teams ist kein Zufall, sondern ein strategischer Vorteil. Studien zeigen, dass diverse Teams um 35% bessere Ergebnisse erzielen. Als Führungskraft müssen Sie jedoch verstehen, wie unterschiedliche kulturelle Hintergründe die Arbeitsweise, Kommunikation und Motivation Ihrer Teammitglieder beeinflussen.',
        image1: blogImage3,
        alt1: 'Diverse Teammitglieder in Diskussion'
      }
    ]
  },
  {
    id: 7,
    title: "Familien im Wandel: Eudaimonía in der Praxis",
    subtitle: "Wie das antike Konzept des guten Lebens moderne Familien stärkt",
    date: "28.01.25",
    slug: "familien-wandel-eudaimonia-praxis",
    image: blogImage4,
    excerpt: "Das philosophische Konzept der Eudaimonía angewendet auf moderne Familienherausforderungen - ein Weg zu nachhaltigem Familienglück.",
    category: "Familie",
    author: "Rocío Morales-Broy",
    readingTime: "15 Min.",
    tags: ["Eudaimonía", "Familie", "Philosophie", "Wohlbefinden", "Familiencoaching"],
    seoTitle: "Eudaimonía für Familien: Das gute Leben in der Praxis - ViaNova",
    seoDescription: "Entdecken Sie, wie das antike Konzept der Eudaimonía modernen Familien helfen kann, nachhaltiges Wohlbefinden zu entwickeln.",
    coverImage: blogImage4,
    contentBlocks: [
      {
        type: 'image',
        image1: blogImage4,
        alt1: 'Glückliche Familie in harmonischer Umgebung'
      },
      {
        type: 'text',
        content: 'Eudaimonía, oft als "Glückseligkeit" übersetzt, ist weit mehr als momentanes Vergnügen. Aristoteles beschrieb es als das höchste Gut - ein Leben, das durch Tugend, Sinnhaftigkeit und die Entwicklung des eigenen Potenzials geprägt ist. Für Familien bedeutet dies, gemeinsam zu wachsen und Werte zu leben, die über den Alltag hinausreichen.'
      },
      {
        type: 'image-text',
        image1: blogImage2,
        alt1: 'Familie bei gemeinsamer Reflexion und Diskussion',
        content: 'Unser Eudaimonía-Familienprogramm basiert auf der Erkenntnis, dass echtes Familienglück durch bewusste Gestaltung entsteht. Es geht nicht darum, Konflikte zu vermeiden, sondern sie als Wachstumschancen zu verstehen. Familien lernen, ihre individuellen Stärken zu erkennen und sie zum Wohl der Gemeinschaft einzusetzen.'
      }
    ]
  }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getBlogPostsByCategory = (category: string, excludeId?: number): BlogPost[] => {
  return blogPosts.filter(post => post.category === category && post.id !== excludeId).slice(0, 3);
};

export const getNextPrevPosts = (currentId: number): { next?: BlogPost; prev?: BlogPost } => {
  const currentIndex = blogPosts.findIndex(post => post.id === currentId);
  return {
    prev: currentIndex > 0 ? blogPosts[currentIndex - 1] : undefined,
    next: currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : undefined
  };
};