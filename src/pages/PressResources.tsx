import HeroSection from '@/components/common/HeroSection';
import ContactSection from '@/components/common/ContactSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileDown, Play, BookOpen, Calendar, ExternalLink, Newspaper, Headphones, Video } from 'lucide-react';
import heroImage from '@/assets/hero-resources.jpg';
import LinkedInPosts from '@/components/common/LinkedInPosts';
import { blogPosts } from '@/data/blogPosts';
const PressResources = () => {
  const downloads = [{
    title: "Whitepaper: Interkulturelle Integration",
    description: "Umfassender Leitfaden für erfolgreiche Integration in neue Kulturen",
    type: "PDF",
    size: "2.5 MB",
    icon: <FileDown className="h-6 w-6" />
  }, {
    title: "Leitfaden Migration nach Deutschland",
    description: "Praktische Schritte und Checklisten für Ihren Umzug",
    type: "PDF",
    size: "1.8 MB",
    icon: <FileDown className="h-6 w-6" />
  }, {
    title: "Eudaimonía-Programm Übersicht",
    description: "Detaillierte Informationen über unser Familien-Wohlbefindens-Programm",
    type: "PDF",
    size: "1.2 MB",
    icon: <FileDown className="h-6 w-6" />
  }, {
    title: "Presskit ViaNova Consulting",
    description: "Logos, Bilder und Unternehmensinformationen für Medienvertreter",
    type: "ZIP",
    size: "5.4 MB",
    icon: <FileDown className="h-6 w-6" />
  }];
  const podcastInterviews = [{
    title: "Integration Podcast",
    episode: "Folge 42: Erfolgreiche Familie-Integration",
    description: "Rocío Morales im Gespräch über die besonderen Herausforderungen von Familien",
    duration: "32 min",
    type: "audio",
    icon: <Headphones className="h-6 w-6" />
  }, {
    title: "Business Talk Hamburg",
    episode: "Interkulturelles Business-Coaching",
    description: "Wie Unternehmen von professioneller Relocation-Beratung profitieren",
    duration: "18 min",
    type: "video",
    icon: <Video className="h-6 w-6" />
  }, {
    title: "CLI Digital Interview",
    episode: "Migration als Chance",
    description: "Exklusives Interview über neue Perspektiven auf Migrationsprozesse",
    duration: "25 min",
    type: "audio",
    icon: <Headphones className="h-6 w-6" />
  }];
  const articles = [{
    title: "Erfolgreiche Integration: Mehr als nur Ankommen",
    publication: "CLI Digital",
    date: "Oktober 2024",
    description: "Ein Artikel über die emotionalen und praktischen Aspekte der Integration",
    category: "Integration",
    link: "#"
  }, {
    title: "Familiencoaching in der Migration",
    publication: "CLI Digital",
    date: "Februar 2025",
    description: "Wie systemische Familientherapie Migrantenfamilien dabei hilft, zusammenzuwachsen",
    category: "Familie",
    link: "#"
  }, {
    title: "Interkulturalität als Wettbewerbsvorteil",
    publication: "CLI Digital",
    date: "Juni 2025",
    description: "Warum diverse Teams erfolgreicher sind und wie Unternehmen davon profitieren",
    category: "Business",
    link: "#"
  }, {
    title: "Hamburg als Tor zur Welt: Integration neu gedacht",
    publication: "Hamburg Business Journal",
    date: "August 2024",
    description: "Wie Hamburg internationale Fachkräfte anzieht und erfolgreich integriert",
    category: "Relocation",
    link: "#"
  }];
  return <div>
      {/* Hero Section */}
      <HeroSection title="Presse & Ressourcen" subtitle="Expertenwissen, Medieninhalte und wertvolle Ressourcen für erfolgreiche Integration und interkulturelles Verständnis." ctaText="Alle Downloads ansehen" ctaLink="#downloads" backgroundImage={heroImage} />

      {/* Blog Section */}
      <section className="section-spacing bg-gradient-subtle">
        <div className="content-container">
          <div className="animate-fade-in mb-12">
            <h2 className="mb-6">Blog</h2>
            <p className="text-muted-foreground max-w-2xl">
              Expertentipps, persönliche Einblicke und praktische Ratschläge für eine erfolgreiche Integration und interkulturelles Verständnis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post, index) => <Card key={post.id} className="hover-lift group cursor-pointer overflow-hidden">
                <div className="relative overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {post.date} • {post.readingTime}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Button variant="ghost" size="sm" className="p-0 h-auto font-medium" onClick={() => window.location.href = `/blog/${post.slug}`}>
                    Weiterlesen
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </Button>
                </CardContent>
              </Card>)}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              <BookOpen className="h-4 w-4 mr-2" />
              Alle Artikel ansehen
            </Button>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section id="downloads" className="section-spacing">
        <div className="content-container">
          <div className="animate-fade-in mb-12">
            <h2 className="mb-6">Downloads</h2>
          </div>

          {/* Text/Bild */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="animate-fade-in">
              <div className="text-muted-foreground leading-relaxed">
                <p>
                  Kostenlose Ressourcen und Leitfäden für Ihre erfolgreiche Integration. 
                  Unsere Experten haben umfassende Materialien entwickelt, die Ihnen 
                  praktische Hilfestellungen bieten.
                </p>
                <p className="mt-6">
                  Von Whitepapers bis hin zu Pressematerialien – laden Sie die Ressourcen 
                  herunter, die Sie für Ihren Weg benötigen.
                </p>
              </div>
            </div>
            <div className="animate-fade-in lg:animate-delay-200">
              <div className="grid grid-cols-1 gap-4">
                {downloads.slice(0, 3).map((download, index) => <Card key={index} className="hover-lift group cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                          {download.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold group-hover:text-primary transition-colors">
                            {download.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {download.description}
                          </p>
                        </div>
                        <div className="text-right">
                          <Badge variant="secondary" className="mb-1">{download.type}</Badge>
                          <p className="text-xs text-muted-foreground">{download.size}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Podcast & Interviews */}
      <section className="section-spacing bg-gradient-subtle">
        <div className="content-container">
          <div className="animate-fade-in mb-12">
            <h2 className="mb-6">Podcast & Interviews</h2>
          </div>

          {/* Bild/Text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="animate-fade-in order-2 lg:order-1">
              <div className="grid grid-cols-1 gap-4">
                {podcastInterviews.map((interview, index) => <Card key={index} className="hover-lift group cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                            {interview.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">{interview.title}</h3>
                          <p className="text-sm font-medium text-primary">{interview.episode}</p>
                          <div className="flex items-center justify-between mt-2">
                            <Badge variant="outline" className="text-xs">{interview.duration}</Badge>
                            <Button variant="ghost" size="sm">
                              <Play className="h-3 w-3 mr-1" />
                              Anhören
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>)}
              </div>
            </div>
            <div className="animate-fade-in lg:animate-delay-200 order-1 lg:order-2">
              <div className="text-muted-foreground leading-relaxed">
                <p>
                  Hören und sehen Sie Rocío Morales in verschiedenen Medienformaten. 
                  Unsere Gründerin teilt regelmäßig ihre Expertise in Podcasts und 
                  Interviews zu den Themen Migration und Integration.
                </p>
                <p className="mt-6">
                  Von persönlichen Geschichten bis hin zu professionellen Einblicken – 
                  entdecken Sie verschiedene Perspektiven auf das Thema erfolgreiche Integration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles & Blog */}
      <section className="section-spacing">
        <div className="content-container">
          <div className="animate-fade-in mb-12">
            <h2 className="mb-6">Artikel & Publikationen</h2>
          </div>

          {/* Text/Bild */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="animate-fade-in">
              <div className="text-muted-foreground leading-relaxed">
                <p>
                  Fachbeiträge und Expertenmeinungen zu Integration und Interkulturalität. 
                  Rocío Morales schreibt regelmäßig für renommierte Publikationen und 
                  teilt ihre Erfahrungen aus der Praxis.
                </p>
                <p className="mt-6">
                  Lesen Sie ihre neuesten Artikel und Kolumnen, die wichtige Aspekte 
                  der Migration beleuchten und praktische Tipps bieten.
                </p>
              </div>
            </div>
            <div className="animate-fade-in lg:animate-delay-200">
              <div className="grid grid-cols-1 gap-4">
                {articles.slice(0, 3).map((article, index) => <Card key={index} className="hover-lift group cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{article.category}</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          {article.date}
                        </div>
                      </div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors mb-2">
                        {article.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Newspaper className="h-3 w-3 mr-1" />
                          {article.publication}
                        </div>
                        <Button variant="ghost" size="sm">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Lesen
                        </Button>
                      </div>
                    </CardContent>
                  </Card>)}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* LinkedIn Posts Section */}
      <LinkedInPosts use_cms={false} />

      {/* Contact Section */}
      <ContactSection />

    </div>;
};
export default PressResources;