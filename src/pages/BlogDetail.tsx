import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, User, Tag, ArrowRight, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import ContentBlock from '@/components/blog/ContentBlock';
import { getBlogPostBySlug, getBlogPostsByCategory, getNextPrevPosts } from '@/data/blogPosts';
import { useEffect } from 'react';

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  useEffect(() => {
    if (!post) {
      navigate('/presse-ressourcen');
    }
  }, [post, navigate]);

  if (!post) {
    return null;
  }

  const similarPosts = getBlogPostsByCategory(post.category, post.id);
  const { prev, next } = getNextPrevPosts(post.id);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <section className="py-6 border-b bg-muted/30">
        <div className="content-container">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">
              Startseite
            </Link>
            <span>/</span>
            <Link to="/presse-ressourcen" className="hover:text-foreground transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium line-clamp-1">{post.title}</span>
          </nav>
        </div>
      </section>

      {/* Back Button */}
      <section className="py-6">
        <div className="content-container">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate('/presse-ressourcen')}
            className="mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Zurück zum Blog
          </Button>
        </div>
      </section>

      {/* Header */}
      <section className="section-spacing">
        <div className="content-container">
          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            <div className="mb-6">
              <Badge variant="secondary" className="text-sm">
                {post.category}
              </Badge>
            </div>

            {/* Title & Subtitle */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>
            
            {post.subtitle && (
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {post.subtitle}
              </p>
            )}

            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime} Lesezeit</span>
              </div>
              <div>
                <span>{post.date}</span>
              </div>
            </div>

            {/* Cover Image */}
            {post.coverImage && (
              <div className="mb-12">
                <img 
                  src={post.coverImage} 
                  alt={post.title}
                  className="w-full aspect-[16/9] object-cover rounded-lg shadow-lg"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-spacing">
        <div className="content-container">
          <div className="max-w-4xl mx-auto">
            {post.contentBlocks.map((block, index) => (
              <ContentBlock key={index} block={block} />
            ))}
          </div>
        </div>
      </section>

      {/* Tags */}
      <section className="py-12">
        <div className="content-container">
          <div className="max-w-4xl mx-auto">
            <Separator className="mb-8" />
            <div className="flex flex-wrap items-center gap-2">
              <Tag className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium mr-2">Tags:</span>
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-muted/20">
        <div className="content-container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Previous Article */}
              {prev && (
                <Card className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <ArrowLeft className="h-4 w-4" />
                      <span>Vorheriger Artikel</span>
                    </div>
                    <Link 
                      to={`/blog/${prev.slug}`}
                      className="text-lg font-semibold hover:text-primary transition-colors line-clamp-2"
                    >
                      {prev.title}
                    </Link>
                  </CardContent>
                </Card>
              )}

              {/* Next Article */}
              {next && (
                <Card className="hover-lift">
                  <CardContent className="p-6 text-right">
                    <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground mb-2">
                      <span>Nächster Artikel</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                    <Link 
                      to={`/blog/${next.slug}`}
                      className="text-lg font-semibold hover:text-primary transition-colors line-clamp-2"
                    >
                      {next.title}
                    </Link>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Similar Articles */}
      {similarPosts.length > 0 && (
        <section className="section-spacing">
          <div className="content-container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">Ähnliche Artikel</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {similarPosts.map((similarPost) => (
                  <Card key={similarPost.id} className="hover-lift overflow-hidden group">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={similarPost.image} 
                        alt={similarPost.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <Badge variant="secondary" className="text-xs w-fit mb-2">
                        {similarPost.category}
                      </Badge>
                      <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                        {similarPost.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {similarPost.excerpt}
                      </p>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                        asChild
                      >
                        <Link to={`/blog/${similarPost.slug}`}>
                          Weiterlesen
                          <ArrowRight className="h-3 w-3 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Back to Top */}
      <div className="fixed bottom-8 right-8">
        <Button 
          size="sm" 
          onClick={scrollToTop}
          className="rounded-full shadow-lg"
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default BlogDetail;