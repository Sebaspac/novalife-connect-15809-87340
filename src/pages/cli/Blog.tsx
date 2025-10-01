import { useState } from 'react';
import CLIHero from '@/components/cli/CLIHero';
import ContactSideBySide from '@/components/common/ContactSideBySide';
import CLICTABand from '@/components/cli/CLICTABand';
import BlogCard from '@/components/blog/BlogCard';
import { blogPosts } from '@/data/blogPosts';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';

const Blog = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedPosts = showAll ? blogPosts : blogPosts.slice(0, 6);

  return (
    <div>
      <CLIHero 
        title="Blog" 
        subtitle="Expertentipps, persönliche Einblicke und praktische Ratschläge für eine erfolgreiche Integration und interkulturelles Verständnis." 
        showCta={false} 
        backgroundImage="/lovable-uploads/faq-consultation.jpg"
      />

      {/* Blog Grid Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="content-container max-w-7xl">
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {displayedPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* View All Button */}
          {!showAll && blogPosts.length > 6 && (
            <div className="flex justify-center mt-20">
              <Button
                size="lg"
                onClick={() => setShowAll(true)}
                className="rounded-full px-8 py-6 text-base font-medium"
                variant="outline"
              >
                <BookOpen className="w-5 h-5" />
                Alle Artikel ansehen
              </Button>
            </div>
          )}
        </div>
      </section>

      <CLICTABand 
        title="¿Te gustaría contribuir al blog?"
        description="Comparte tus conocimientos con nuestra comunidad"
        ctaText="Escríbenos"
        ctaLink="#contact"
        variant="gradient"
      />
      <ContactSideBySide />
    </div>
  );
};

export default Blog;
