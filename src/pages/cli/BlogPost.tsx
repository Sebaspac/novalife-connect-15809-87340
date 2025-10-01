import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, User, Tag, ArrowRight, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import ContentBlock from '@/components/blog/ContentBlock';
import { getBlogPostBySlug, getBlogPostsByCategory, getNextPrevPosts } from '@/data/blogPosts';
import { useEffect } from 'react';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  useEffect(() => {
    if (!post) {
      navigate('/blog');
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
    <div className="min-h-screen bg-white dark:bg-background">
      {/* Hero Header */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="content-container max-w-4xl">
          {/* Back Button */}
          <button 
            onClick={() => navigate('/blog')}
            className="mb-8 text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Blog
          </button>

          {/* Category */}
          <div className="mb-6">
            <span className="text-sm font-semibold text-primary uppercase tracking-[0.15em]">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl lg:text-6xl font-semibold mb-6 leading-[1.1] tracking-tight text-foreground">
            {post.title}
          </h1>
          
          {/* Subtitle */}
          {post.subtitle && (
            <p className="text-xl lg:text-2xl text-muted-foreground/90 mb-10 leading-[1.4] font-light max-w-3xl">
              {post.subtitle}
            </p>
          )}

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground/60 font-medium">
            <span>{post.author}</span>
            <span className="text-muted-foreground/30">·</span>
            <span>{post.date}</span>
            <span className="text-muted-foreground/30">·</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      {post.coverImage && (
        <section className="pb-16 lg:pb-20">
          <div className="content-container max-w-5xl">
            <div className="aspect-[16/9] overflow-hidden">
              <img 
                src={post.coverImage} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="pb-20">
        <div className="content-container max-w-6xl">
          <article>
            {post.contentBlocks.map((block, index) => (
              <ContentBlock key={index} block={block} />
            ))}
          </article>
        </div>
      </section>

      {/* Tags */}
      <section className="pb-16 border-t border-border/30">
        <div className="content-container max-w-6xl pt-10">
          <div className="flex flex-wrap items-center gap-2">
            {post.tags.map((tag, index) => (
              <span key={index} className="text-sm text-muted-foreground/70">
                {tag}{index < post.tags.length - 1 ? ',' : ''}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 border-t border-border/30">
        <div className="content-container max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Previous Article */}
            {prev && (
              <Link 
                to={`/blog/${prev.slug}`}
                className="group"
              >
                <div className="text-xs text-muted-foreground/60 mb-3 flex items-center gap-2 uppercase tracking-wider font-semibold">
                  <ArrowLeft className="h-3 w-3" />
                  Vorher
                </div>
                <div className="text-lg lg:text-xl font-semibold group-hover:text-primary transition-colors leading-tight">
                  {prev.title}
                </div>
              </Link>
            )}

            {/* Next Article */}
            {next && (
              <Link 
                to={`/blog/${next.slug}`}
                className="group md:text-right"
              >
                <div className="text-xs text-muted-foreground/60 mb-3 flex items-center justify-start md:justify-end gap-2 uppercase tracking-wider font-semibold">
                  Weiter
                  <ArrowRight className="h-3 w-3" />
                </div>
                <div className="text-lg lg:text-xl font-semibold group-hover:text-primary transition-colors leading-tight">
                  {next.title}
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Similar Articles */}
      {similarPosts.length > 0 && (
        <section className="py-20 bg-muted/20">
          <div className="content-container max-w-6xl">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-14 tracking-tight">Weitere Artikel</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {similarPosts.map((similarPost) => (
                <article key={similarPost.id} className="group">
                  <Link to={`/blog/${similarPost.slug}`} className="block mb-6">
                    <div className="aspect-[16/9] overflow-hidden mb-6">
                      <img 
                        src={similarPost.image} 
                        alt={similarPost.title}
                        className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-1000 ease-out"
                      />
                    </div>
                  </Link>
                  <div className="text-xs font-semibold text-primary uppercase tracking-[0.15em] mb-3">
                    {similarPost.category}
                  </div>
                  <Link to={`/blog/${similarPost.slug}`}>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary/80 transition-colors leading-tight tracking-tight">
                      {similarPost.title}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground/80 leading-relaxed">
                    {similarPost.excerpt}
                  </p>
                </article>
              ))}
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

export default BlogPost;
