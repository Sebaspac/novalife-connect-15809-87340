import { ContentBlock as ContentBlockType } from '@/data/blogPosts';

interface ContentBlockProps {
  block: ContentBlockType;
}

const ContentBlock = ({ block }: ContentBlockProps) => {
  switch (block.type) {
    case 'text':
      return (
        <div className="mb-12 lg:mb-16">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg lg:text-xl text-foreground/85 leading-[1.7] font-light">
              {block.content}
            </p>
          </div>
        </div>
      );

    case 'image':
      return (
        <div className="my-12 lg:my-16">
          <div className="overflow-hidden">
            <img 
              src={block.image1} 
              alt={block.alt1 || ''} 
              className="w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      );

    case 'text-image':
      return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center my-12 lg:my-16">
          <div>
            <p className="text-lg lg:text-xl text-foreground/85 leading-[1.7] font-light">
              {block.content}
            </p>
          </div>
          <div className="overflow-hidden">
            <img 
              src={block.image1} 
              alt={block.alt1 || ''} 
              className="w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      );

    case 'image-text':
      return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center my-12 lg:my-16">
          <div className="order-2 lg:order-1 overflow-hidden">
            <img 
              src={block.image1} 
              alt={block.alt1 || ''} 
              className="w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-lg lg:text-xl text-foreground/85 leading-[1.7] font-light">
              {block.content}
            </p>
          </div>
        </div>
      );

    case 'image-image':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 my-12 lg:my-16">
          <div className="overflow-hidden">
            <img 
              src={block.image1} 
              alt={block.alt1 || ''} 
              className="w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="overflow-hidden">
            <img 
              src={block.image2} 
              alt={block.alt2 || ''} 
              className="w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      );

    default:
      return null;
  }
};

export default ContentBlock;