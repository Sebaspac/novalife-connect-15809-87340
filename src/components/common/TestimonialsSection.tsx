import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { testimonials } from '@/data/testimonials';
const TestimonialsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -1000,
        behavior: 'smooth'
      });
    }
  };
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 1000,
        behavior: 'smooth'
      });
    }
  };
  return <section className="py-24 lg:py-32 bg-background">
      <div className="content-container">
        {/* Section Title - Apple style */}
        <div className="animate-fade-in mb-16 lg:mb-24 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-semibold text-foreground tracking-tight">Esto dicen nuestros clientes</h2>
        </div>

        {/* Desktop Navigation Buttons - Minimal style */}
        <div className="hidden lg:flex justify-center gap-3 mb-12">
          <button onClick={scrollLeft} className="h-11 w-11 rounded-full bg-muted/50 hover:bg-muted flex items-center justify-center transition-all duration-200 hover:scale-105" aria-label="Previous testimonial">
            <ChevronLeft className="h-5 w-5 text-foreground/70" />
          </button>
          <button onClick={scrollRight} className="h-11 w-11 rounded-full bg-muted/50 hover:bg-muted flex items-center justify-center transition-all duration-200 hover:scale-105" aria-label="Next testimonial">
            <ChevronRight className="h-5 w-5 text-foreground/70" />
          </button>
        </div>

        {/* Horizontal Scroll Container */}
        <div ref={scrollContainerRef} className="flex overflow-x-auto gap-12 lg:gap-20 pb-8 scroll-smooth snap-x snap-mandatory scrollbar-hide" style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}>
          {testimonials.map(testimonial => <div key={testimonial.id} className="flex-none w-full snap-center">
              {/* Side-by-side layout */}
              <div className="grid grid-cols-1 lg:grid-cols-[45%_1fr] gap-12 lg:gap-16 xl:gap-20 items-center max-w-7xl mx-auto">
                {/* Photo on left - large and prominent */}
                <div className="relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-3xl">
                  <img src={testimonial.photo} alt={`${testimonial.name} - ${testimonial.role}`} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
                </div>

                {/* Content on right */}
                <div className="flex flex-col justify-center space-y-8 lg:space-y-10">
                  {/* Quote */}
                  <blockquote className="text-xl lg:text-3xl xl:text-4xl font-normal leading-relaxed lg:leading-[1.3] text-foreground/90 tracking-tight">
                    {testimonial.quote_full.split('\n').map((paragraph, index) => <p key={index} className={index > 0 ? 'mt-6' : ''}>
                        {paragraph}
                      </p>)}
                  </blockquote>

                  {/* Author info */}
                  <div className="space-y-2">
                    <div className="font-semibold text-base lg:text-lg text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm lg:text-base text-muted-foreground font-light">
                      {testimonial.role}
                    </div>
                    <div className="text-sm lg:text-base text-muted-foreground font-light">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>)}
        </div>

        {/* Dots indicator - Apple style */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => <button key={index} onClick={() => {
          if (scrollContainerRef.current) {
            const scrollWidth = scrollContainerRef.current.scrollWidth;
            const itemWidth = scrollWidth / testimonials.length;
            scrollContainerRef.current.scrollTo({
              left: itemWidth * index,
              behavior: 'smooth'
            });
          }
        }} className="h-2 w-2 rounded-full bg-muted-foreground/30 hover:bg-muted-foreground/50 transition-all duration-200" aria-label={`Go to testimonial ${index + 1}`} />)}
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;