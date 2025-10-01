import { useState, useEffect, useRef } from 'react';
import { Testimonial } from '@/data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // IntersectionObserver for mobile auto-expand
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only auto-expand on mobile/touch devices
          if (window.matchMedia('(hover: none)').matches) {
            setIsExpanded(entry.intersectionRatio >= 0.6);
          }
        });
      },
      { threshold: [0.6] }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsExpanded(false);
  };

  const handleFocus = () => {
    setIsExpanded(true);
  };

  const handleBlur = () => {
    if (!isHovered) {
      setIsExpanded(false);
    }
  };

  return (
    <div 
      ref={cardRef}
      className="relative group cursor-pointer focus-within:outline-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      tabIndex={0}
      role="article"
      aria-expanded={isExpanded}
      style={{ marginBottom: isExpanded ? '-12px' : '0' }}
    >
      {/* Main Card */}
      <div className={`
        relative overflow-hidden rounded-2xl transition-all duration-200 ease-out
        ${isExpanded ? 'shadow-elegant z-[2]' : 'shadow-soft z-[1]'}
      `}>
        {/* Portrait Image */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={testimonial.photo}
            alt={`${testimonial.name} - ${testimonial.role}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
          
          {/* Bottom Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        {/* Overlay Panel */}
        <div className={`
          absolute left-0 right-0 bottom-0 p-4
          bg-gradient-to-t from-background/95 to-background/85 backdrop-blur-sm
          transition-all duration-200 ease-out
          ${isExpanded 
            ? 'h-[90%] translate-y-0' 
            : 'h-[35%] translate-y-0'
          }
        `}>
          <div className="h-full flex flex-col justify-end overflow-hidden">
            {/* Quote Content - Expanded State */}
            <div className={`
              transition-opacity duration-200 ease-out
              ${isExpanded ? 'opacity-100' : 'opacity-0'}
              ${isExpanded ? 'block' : 'hidden'}
              flex-1 overflow-y-auto
            `}>
              <div className="text-sm leading-relaxed text-foreground mb-4 pr-2">
                {testimonial.quote_full.split('\n').map((paragraph, index) => (
                  <p key={index} className={index > 0 ? 'mt-3' : ''}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Quote Teaser - Collapsed State */}
            <div className={`
              transition-opacity duration-200 ease-out
              ${isExpanded ? 'opacity-0' : 'opacity-100'}
              ${isExpanded ? 'hidden' : 'block'}
            `}>
              <p className="text-sm leading-relaxed text-foreground mb-4 line-clamp-2">
                "{testimonial.quote_short}"
              </p>
            </div>

            {/* Author Info - Always Visible */}
            <div className="mt-auto flex-shrink-0">
              <div className="font-semibold text-foreground text-sm">
                {testimonial.name}
              </div>
              <div className="text-muted-foreground text-xs line-clamp-2">
                {testimonial.role} • {testimonial.company}
              </div>
              {testimonial.tag && (
                <div className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-md mt-2">
                  {testimonial.tag}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;