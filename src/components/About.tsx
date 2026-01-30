import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Clock, MapPin, Heart, Award, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { siteConfig } from '@/data/siteConfig';
import cakeWedding from '@/assets/cake-wedding.jpg';
import cakeChocolate from '@/assets/cake-chocolate.jpg';

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { t, language } = useLanguage();

  const features = [
    { icon: Sparkles, textKey: 'about.handmade', color: 'from-blue-400 to-blue-500' },
    { icon: Clock, textKey: 'about.fresh', color: 'from-amber-400 to-amber-500' },
    { icon: MapPin, textKey: 'about.local', color: 'from-primary to-primary/80' },
  ];

  const highlights = [
    { 
      icon: Heart, 
      value: siteConfig.stats.happyCustomers, 
      label: language === 'bn' ? 'সন্তুষ্ট গ্রাহক' : 'Happy Customers' 
    },
    { 
      icon: Award, 
      value: siteConfig.stats.yearsExperience, 
      label: language === 'bn' ? 'বছরের অভিজ্ঞতা' : 'Years Experience' 
    },
    { 
      icon: Users, 
      value: siteConfig.stats.cakesMade, 
      label: language === 'bn' ? 'কেক তৈরি' : 'Cakes Made' 
    },
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="section-padding bg-background overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Creative Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Background decorative shapes */}
            <div 
              className="absolute -top-8 -left-8 w-32 h-32 rounded-full opacity-30 blur-2xl"
              style={{ background: 'hsl(var(--rose))' }}
              aria-hidden="true"
            />
            <div 
              className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full opacity-20 blur-2xl"
              style={{ background: 'hsl(var(--gold))' }}
              aria-hidden="true"
            />

            {/* Main image container - Creative cake shape */}
            <div className="relative">
              {/* Decorative frosting drips */}
              <div className="absolute -top-3 left-1/4 right-1/4 flex justify-center gap-2 z-10" aria-hidden="true">
                <div className="w-3 h-6 bg-gradient-to-b from-rose-200 to-rose-100 rounded-b-full" />
                <div className="w-4 h-8 bg-gradient-to-b from-rose-300 to-rose-100 rounded-b-full" />
                <div className="w-3 h-5 bg-gradient-to-b from-rose-200 to-rose-100 rounded-b-full" />
                <div className="w-4 h-7 bg-gradient-to-b from-rose-300 to-rose-100 rounded-b-full" />
              </div>

              {/* Main Image with cake dome shape */}
              <div 
                className="relative overflow-hidden shadow-float"
                style={{
                  borderRadius: '45% 45% 20px 20px / 25% 25% 20px 20px',
                  clipPath: 'polygon(3% 12%, 15% 4%, 35% 0%, 65% 0%, 85% 4%, 97% 12%, 100% 100%, 0% 100%)'
                }}
              >
                <img
                  src={cakeWedding}
                  alt={language === 'en' ? 'Beautiful wedding cake from Cake Castle' : 'কেক ক্যাসল থেকে সুন্দর বিয়ার কেক'}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-transparent" />
              </div>

              {/* Cake stand base */}
              <div className="relative mx-auto -mt-1" aria-hidden="true">
                <div className="mx-auto w-[75%] h-4 bg-gradient-to-b from-amber-200 via-amber-300 to-amber-400 rounded-b-lg shadow-md" />
                <div className="mx-auto w-16 h-3 bg-gradient-to-b from-amber-300 to-amber-500" />
                <div className="mx-auto w-24 h-2 bg-gradient-to-b from-amber-400 to-amber-600 rounded-b-lg shadow-lg" />
              </div>

              {/* Secondary floating image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 5 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 sm:-left-10 w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shadow-float border-4 border-background z-20"
              >
                <img
                  src={cakeChocolate}
                  alt={language === 'en' ? 'Delicious chocolate cake' : 'সুস্বাদু চকলেট কেক'}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-4 -right-4 sm:bottom-8 sm:right-0 bg-background/95 backdrop-blur-sm rounded-2xl p-4 sm:p-5 shadow-float border border-border z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary-foreground" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="block text-2xl font-bold text-primary">{siteConfig.stats.fbRating}★</span>
                    <span className="text-xs text-muted-foreground">
                      {language === 'bn' ? 'এফবি রেটিং' : 'FB Rating'}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <span 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6 bg-secondary text-secondary-foreground"
            >
              <Heart className="w-4 h-4 fill-current" aria-hidden="true" />
              {language === 'bn' ? 'আমাদের গল্প' : 'Our Story'}
            </span>

            <h2 id="about-heading" className="heading-section text-foreground mb-6">
              {t('about.title')}
            </h2>

            <p className="text-body text-muted-foreground mb-8 leading-relaxed">
              {t('about.description')}
            </p>

            {/* Features - Creative pill badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.textKey}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="group relative"
                  >
                    <div 
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r ${feature.color} text-white shadow-md transition-transform duration-300 group-hover:scale-105`}
                    >
                      <Icon className="w-4 h-4" aria-hidden="true" />
                      <span className="text-sm font-medium">
                        {t(feature.textKey)}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Highlights - Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-4 p-4 sm:p-6 rounded-2xl bg-muted/50 border border-border/50 mb-8"
              role="list"
              aria-label={language === 'en' ? 'Business highlights' : 'ব্যবসার হাইলাইট'}
            >
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="text-center" role="listitem">
                    <Icon className="w-5 h-5 mx-auto mb-2 text-primary" aria-hidden="true" />
                    <span className="block text-xl sm:text-2xl font-bold text-foreground">{item.value}</span>
                    <span className="text-[10px] sm:text-xs text-muted-foreground">{item.label}</span>
                  </div>
                );
              })}
            </motion.div>

            {/* CTA */}
            <motion.a
              href="#contact"
              className="btn-primary inline-flex group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label={language === 'en' ? 'Order now' : 'এখনই অর্ডার করুন'}
            >
              {t('nav.order')}
              <motion.span
                className="ml-2"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                aria-hidden="true"
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
