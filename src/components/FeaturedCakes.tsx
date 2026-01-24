import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { getFeaturedCakes } from '@/data/cakes';
import CakeCard from '@/components/CakeCard';

export default function FeaturedCakes() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { t, language } = useLanguage();
  
  const featuredCakes = getFeaturedCakes(6);

  return (
    <section 
      id="menu" 
      ref={sectionRef} 
      className="section-padding bg-background"
      aria-labelledby="featured-cakes-heading"
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 bg-secondary text-secondary-foreground">
            🎂 {t('featured.subtitle')}
          </span>
          <h2 id="featured-cakes-heading" className="heading-section text-foreground">
            {t('featured.title')}
          </h2>
        </motion.div>

        {/* Cakes Grid - Creative masonry-like layout */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
          role="list"
          aria-label={language === 'en' ? 'Featured cakes' : 'বৈশিষ্ট্যযুক্ত কেক'}
        >
          {featuredCakes.map((cake, index) => (
            <motion.div
              key={cake.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={index === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}
              role="listitem"
            >
              <CakeCard cake={cake} index={index} />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-10 sm:mt-14"
        >
          <Link
            to="/cakes"
            className="btn-secondary inline-flex items-center gap-2 text-sm sm:text-base group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label={language === 'en' ? 'View all cakes' : 'সব কেক দেখুন'}
          >
            {t('featured.viewAll')}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
