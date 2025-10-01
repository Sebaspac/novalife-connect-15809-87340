import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BlogPost } from '@/data/blogPosts';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <article className="group">
      {/* Image */}
      <Link to={`/blog/${post.slug}`} className="block relative overflow-hidden rounded-3xl mb-6">
        <div className="aspect-[16/9] bg-muted">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="space-y-4">
        {/* Category */}
        <div className="text-sm font-medium text-primary uppercase tracking-wide">
          {post.category}
        </div>

        {/* Title */}
        <Link to={`/blog/${post.slug}`}>
          <h3 className="text-2xl lg:text-3xl font-semibold leading-tight tracking-tight group-hover:text-primary/80 transition-colors">
            {post.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
          {post.excerpt}
        </p>

        {/* Date & Reading Time */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-3 text-sm text-muted-foreground/70">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>
          
          {/* CTA Button */}
          <Link 
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            Weiterlesen
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
