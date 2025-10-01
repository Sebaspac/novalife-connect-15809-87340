import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Linkedin } from 'lucide-react';

interface LinkedInPost {
  post_url: string;
  post_title: string;
  post_text: string;
  post_image?: string;
  image_alt: string;
  author_name: string;
  author_avatar: string;
  posted_at: string;
  tags?: string[];
}

interface LinkedInPostsProps {
  use_cms?: boolean;
}

const LinkedInPosts: React.FC<LinkedInPostsProps> = ({ use_cms = false }) => {
  const [posts, setPosts] = useState<LinkedInPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Mock data for demonstration
  const mockPosts: LinkedInPost[] = [
    {
      post_url: "https://linkedin.com/post1",
      post_title: "Erfolgreiche Integration beginnt vor dem Umzug",
      post_text: "Unser neues Familien-Coaching Programm 'Eudaimonía' hilft bereits vor der Ankunft in Deutschland. Durch systemische Familientherapie bereiten wir Familien emotional und praktisch auf...",
      post_image: "/src/assets/coaching-session.jpg",
      image_alt: "Familie bei Beratungsgespräch",
      author_name: "ViaNova Consulting",
      author_avatar: "/placeholder.svg",
      posted_at: "2025-08-10T10:00:00Z",
      tags: ["integration", "familie"]
    },
    {
      post_url: "https://linkedin.com/post2",
      post_title: "Hamburg als Tor zur Welt 🌍",
      post_text: "Warum Hamburg der perfekte Ort für internationale Fachkräfte ist: Weltoffene Kultur, starke Wirtschaft und ein Netzwerk, das Integration möglich macht. Unsere Kunden erzählen uns immer wieder...",
      post_image: "/src/assets/hero-business-success.jpg",
      author_name: "ViaNova Consulting",
      author_avatar: "/placeholder.svg",
      posted_at: "2025-08-05T14:30:00Z",
      image_alt: "Hamburg Hafen mit Fachkräften",
      tags: ["hamburg", "fachkräfte"]
    },
    {
      post_url: "https://linkedin.com/post3",
      post_title: "Interkulturelles Business-Coaching zeigt Wirkung",
      post_text: "Unsere Unternehmen berichten von 40% besserer Mitarbeiterintegration nach unserem interkulturellen Coaching. Diversity wird zum Wettbewerbsvorteil, wenn sie professionell begleitet wird.",
      post_image: "/src/assets/hero-services.jpg",
      image_alt: "Diverse Belegschaft im Meeting",
      author_name: "ViaNova Consulting",
      author_avatar: "/placeholder.svg",
      posted_at: "2025-08-01T09:15:00Z",
      tags: ["business", "diversity", "coaching"]
    },
    {
      post_url: "https://linkedin.com/post4",
      post_title: "Von der Ankunft bis zur Heimat",
      post_text: "Migration ist mehr als ein Ortswechsel – es ist eine Lebensveränderung. Unsere ganzheitliche Beratung begleitet Sie von den ersten Schritten bis zum Gefühl von echtem Zuhause in Deutschland.",
      post_image: "/src/assets/hero-family-arrival.jpg",
      image_alt: "Familie vor ihrem neuen Zuhause",
      author_name: "ViaNova Consulting",
      author_avatar: "/placeholder.svg",
      posted_at: "2025-07-29T08:00:00Z",
      tags: ["migration", "beratung", "zuhause"]
    },
    {
      post_url: "https://linkedin.com/post5",
      post_title: "Systemische Familientherapie in der Migration",
      post_text: "Neue Erkenntnisse zeigen: Familien, die systemische Therapie während der Migration nutzen, integrieren sich 60% schneller und nachhaltiger. Unser Eudaimonía-Programm macht den Unterschied.",
      post_image: "/src/assets/hero-family.jpg",
      image_alt: "Therapeutin mit Familie",
      author_name: "ViaNova Consulting",
      author_avatar: "/placeholder.svg",
      posted_at: "2025-07-25T16:45:00Z",
      tags: ["therapie", "eudaimonia", "familie"]
    },
    {
      post_url: "https://linkedin.com/post6", 
      post_title: "Die Zukunft der Relocation Services",
      post_text: "Digitale Tools treffen auf menschliche Beratung: Unser neuer Ansatz kombiniert innovative Technologie mit persönlicher Betreuung für eine noch bessere Migrationserfahrung.",
      post_image: "/src/assets/relocation-move.jpg",
      author_name: "ViaNova Consulting",
      author_avatar: "/placeholder.svg",
      posted_at: "2025-07-20T11:30:00Z",
      image_alt: "Digitale Beratungstools",
      tags: ["relocation", "digital", "innovation"]
    }
  ];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      if (use_cms) {
        // Here would be CMS data fetching
        setPosts([]);
      } else {
        setPosts(mockPosts);
      }
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [use_cms]);

  const truncateText = (text: string, maxLength: number = 140) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...mehr';
  };

  const formatRelativeTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) return 'heute';
    if (diffInDays === 1) return 'vor 1 Tag';
    if (diffInDays < 7) return `vor ${diffInDays} Tagen`;
    if (diffInDays < 30) return `vor ${Math.floor(diffInDays / 7)} Wochen`;
    return `vor ${Math.floor(diffInDays / 30)} Monaten`;
  };

  const PostSkeleton = () => (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <Skeleton className="h-48 w-full" />
        <div className="p-4 space-y-3">
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Skeleton className="h-8 w-8 rounded-full" />
              <div className="space-y-1">
                <Skeleton className="h-3 w-16" />
                <Skeleton className="h-3 w-20" />
              </div>
            </div>
            <Skeleton className="h-8 w-8" />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const PostCard: React.FC<{ post: LinkedInPost }> = ({ post }) => (
    <Card 
      className="overflow-hidden hover-lift group cursor-pointer transition-all duration-300 hover:shadow-card focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
      onClick={() => window.open(post.post_url, '_blank')}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          window.open(post.post_url, '_blank');
        }
      }}
    >
      <CardContent className="p-0">
        {post.post_image ? (
          <div className="relative overflow-hidden aspect-video">
            <img
              src={post.post_image}
              alt={post.image_alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="aspect-video bg-gradient-subtle flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <div className="w-16 h-16 bg-vianova-cool-gray/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <Linkedin className="h-8 w-8 text-vianova-forest-green" />
              </div>
              <p className="text-sm">LinkedIn Post</p>
            </div>
          </div>
        )}
        
        <div className="p-4">
          <h3 className="font-semibold text-left mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {post.post_title}
          </h3>
          
          {post.post_text && (
            <p className="text-sm text-muted-foreground text-left mb-4 line-clamp-3">
              {truncateText(post.post_text, 160)}
            </p>
          )}
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={post.author_avatar} alt={post.author_name} />
                <AvatarFallback className="bg-vianova-warm-beige text-vianova-forest-green text-xs">
                  {post.author_name.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="text-left">
                <p className="text-sm font-medium text-foreground">{post.author_name}</p>
                <p className="text-xs text-muted-foreground">{formatRelativeTime(post.posted_at)}</p>
              </div>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 text-vianova-forest-green hover:bg-vianova-warm-beige focus:bg-vianova-warm-beige"
              onClick={(e) => {
                e.stopPropagation();
                window.open(post.post_url, '_blank');
              }}
              aria-label="Auf LinkedIn ansehen"
            >
              <Linkedin className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="section-spacing">
      <div className="content-container">
        <div className="animate-fade-in mb-12">
          <h2 className="mb-6 text-left">Was gibt's Neues?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            Array.from({ length: 6 }, (_, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <PostSkeleton />
              </div>
            ))
          ) : (
            posts.map((post, index) => (
              <div 
                key={index} 
                className="animate-fade-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <PostCard post={post} />
              </div>
            ))
          )}
        </div>

        {!loading && posts.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <div className="w-24 h-24 bg-vianova-cool-gray/20 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Linkedin className="h-12 w-12 text-vianova-forest-green" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Noch keine Posts verfügbar</h3>
            <p className="text-muted-foreground">
              Die neuesten Updates werden hier erscheinen, sobald sie verfügbar sind.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default LinkedInPosts;