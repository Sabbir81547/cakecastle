import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { siteConfig } from '@/data/siteConfig';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-3 h-3 sm:w-4 sm:h-4 ${
            i < rating ? 'fill-accent text-accent' : 'fill-muted text-muted'
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });
  const { language } = useLanguage();

  const testimonials = siteConfig.testimonials;

  return (
    <section 
      ref={sectionRef} 
      className="section-padding bg-background overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 bg-accent/20 text-accent-foreground">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-accent text-accent" aria-hidden="true" />
            {language === 'bn' ? 'গ্রাহকদের মতামত' : 'Customer Reviews'}
          </span>
          <h2 id="testimonials-heading" className="heading-section text-foreground">
            {language === 'bn' ? 'আমাদের সন্তুষ্ট গ্রাহকরা' : 'What Our Customers Say'}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-2 sm:mt-3 max-w-xl mx-auto">
            {language === 'bn' 
              ? 'আমাদের গ্রাহকদের মিষ্টি অভিজ্ঞতা দেখেন' 
              : 'See the sweet experiences of our happy customers'}
          </p>
        </motion.div>

        {/* Testimonials Grid with creative cake-slice shaped cards */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8"
          role="list"
          aria-label={language === 'en' ? 'Customer testimonials' : 'গ্রাহক প্রতিক্রিয়া'}
        >
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative group"
              role="listitem"
            >
              {/* Decorative cake slice shape top */}
              <div className="absolute -top-2 left-8 right-8 h-3 bg-gradient-to-b from-rose-100 to-transparent rounded-t-full opacity-60" aria-hidden="true" />
              
              <div 
                className="relative p-5 sm:p-6 lg:p-7 bg-gradient-to-br from-card to-muted/50 shadow-soft border border-border/50 transition-all duration-300 group-hover:shadow-float"
                style={{
                  borderRadius: '20% 20% 16px 16px / 15% 15% 16px 16px',
                  clipPath: 'polygon(5% 10%, 20% 2%, 50% 0%, 80% 2%, 95% 10%, 100% 100%, 0% 100%)'
                }}
              >
                {/* Quote Icon */}
                <div className="absolute top-4 sm:top-5 right-4 sm:right-5 opacity-10 group-hover:opacity-20 transition-opacity" aria-hidden="true">
                  <Quote className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary" />
                </div>

                {/* Content */}
                <div className="relative pt-2">
                  {/* Rating */}
                  <StarRating rating={testimonial.rating} />

                  {/* Text */}
                  <blockquote className="mt-3 sm:mt-4 text-foreground leading-relaxed text-sm sm:text-base">
                    <p>"{testimonial.text[language]}"</p>
                  </blockquote>

                  {/* Author */}
                  <footer className="mt-4 sm:mt-5 flex items-center gap-3 pt-4 border-t border-border/50">
                    <div 
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-xl sm:text-2xl shadow-sm"
                      aria-hidden="true"
                    >
                      {testimonial.avatar}
                    </div>
                    <div>
                      <cite className="font-semibold text-foreground text-sm sm:text-base not-italic">
                        {testimonial.name[language]}
                      </cite>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {testimonial.location[language]} • {testimonial.cakeType[language]}
                      </p>
                    </div>
                  </footer>
                </div>
              </div>

              {/* Decorative plate under card */}
              <div className="mx-8 h-1.5 bg-gradient-to-b from-amber-200 to-amber-100 rounded-b-full" aria-hidden="true" />
            </motion.article>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 sm:mt-14 p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border border-primary/10"
          role="region"
          aria-label={language === 'en' ? 'Business statistics' : 'ব্যবসার পরিসংখ্যান'}
        >
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 lg:gap-20">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">{siteConfig.stats.happyCustomers}</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                {language === 'bn' ? 'সন্তুষ্ট গ্রাহক' : 'Happy Customers'}
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">{siteConfig.stats.fbRating}</p>
              <p className="text-xs sm:text-sm text-muted-foreground flex items-center justify-center gap-1 mt-1">
                <Star className="w-3 h-3 fill-accent text-accent" aria-hidden="true" />
                {language === 'bn' ? 'এফবি রেটিং' : 'FB Rating'}
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">{siteConfig.stats.cakesMade}</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                {language === 'bn' ? 'কেক তৈরি' : 'Cakes Made'}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
