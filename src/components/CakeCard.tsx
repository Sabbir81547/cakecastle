import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { type Cake } from '@/data/cakes';
import { getWhatsAppLink } from '@/data/siteConfig';

interface CakeCardProps {
  cake: Cake;
  index?: number;
  showOverlay?: boolean;
  compact?: boolean;
}

export default function CakeCard({ cake, index = 0, showOverlay = true, compact = false }: CakeCardProps) {
  const { t, language } = useLanguage();

  const orderMessage = language === 'en' 
    ? `Hi! I want to order ${cake.name.en}` 
    : `আসসালামু আলাইকুম! আমি ${cake.name.bn} অর্ডার দিতে চাই`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative"
      role="article"
      aria-label={language === 'en' ? cake.name.en : cake.name.bn}
    >
      {/* Creative Cake-Shaped Card Container */}
      <div className="relative">
        {/* Decorative frosting drips at top */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex gap-1 z-10" aria-hidden="true">
          <div className="w-2 h-4 bg-gradient-to-b from-rose-200 to-rose-100 rounded-b-full" />
          <div className="w-3 h-6 bg-gradient-to-b from-rose-300 to-rose-100 rounded-b-full" />
          <div className="w-2 h-5 bg-gradient-to-b from-rose-200 to-rose-100 rounded-b-full" />
          <div className="w-3 h-4 bg-gradient-to-b from-rose-300 to-rose-100 rounded-b-full" />
          <div className="w-2 h-5 bg-gradient-to-b from-rose-200 to-rose-100 rounded-b-full" />
        </div>

        {/* Main Card with Cake Dome Shape */}
        <div 
          className="relative overflow-hidden transition-all duration-500"
          style={{
            background: 'var(--gradient-card)',
            boxShadow: 'var(--shadow-soft)',
            borderRadius: '50% 50% 16px 16px / 20% 20% 8% 8%',
            clipPath: 'polygon(0% 15%, 5% 8%, 15% 3%, 30% 0%, 50% 0%, 70% 0%, 85% 3%, 95% 8%, 100% 15%, 100% 100%, 0% 100%)'
          }}
        >
          {/* Image Container */}
          <Link 
            to={`/cake/${cake.slug}`} 
            className="block relative aspect-[4/3] overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
            aria-label={language === 'en' ? `View ${cake.name.en} details` : `${cake.name.bn} এর বিস্তারিত দেখুন`}
          >
            <img
              src={cake.image}
              alt={language === 'en' ? cake.name.en : cake.name.bn}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Badges */}
            {/* Top Badge Banner - Redesigned to follow the dome shape */}
            {(cake.isBestseller || cake.isNew || cake.isPopular) && (
              <div 
                className={`absolute top-0 left-0 w-full pt-4 pb-2 z-20 flex items-center justify-center text-center shadow-lg transform -translate-y-1 ${
                  cake.isBestseller 
                    ? 'bg-[#FFB800] text-black' 
                    : cake.isNew 
                      ? 'bg-primary text-white' 
                      : 'bg-[#FF4D4D] text-white'
                }`}
                style={{
                  height: '45px',
                  clipPath: 'polygon(0% 100%, 5% 50%, 15% 20%, 30% 0%, 50% 0%, 70% 0%, 85% 20%, 95% 50%, 100% 100%)'
                }}
              >
                <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase">
                  {cake.isBestseller ? `★ ${t('featured.bestseller')}` : 
                   cake.isNew ? `NEW ${t('featured.new')}` : 
                   `🔥 ${t('featured.popular')}`}
                </span>
              </div>
            )}

            {/* Hover Overlay with Actions */}
            {showOverlay && (
              <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3">
                <motion.a
                  href={getWhatsAppLink(orderMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-xs sm:text-sm px-3 sm:px-4 py-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                  aria-label={language === 'en' ? `Order ${cake.name.en} via WhatsApp` : `হোয়াটসঅ্যাপে ${cake.name.bn} অর্ডার করুন`}
                >
                  <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
                  {t('featured.orderBtn')}
                </motion.a>
              </div>
            )}
          </Link>

          {/* Content Section with Decorative Elements */}
          <div className={`relative p-4 sm:p-5 ${compact ? 'space-y-1' : ''}`}>
            {/* Decorative plate line */}
            <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden="true" />
            
            <Link to={`/cake/${cake.slug}`} className="block group/title">
              <h3 className={`font-semibold text-foreground mb-1.5 group-hover/title:text-primary transition-colors line-clamp-1 ${compact ? 'text-base' : 'heading-card text-lg sm:text-xl'}`}>
                {language === 'en' ? cake.name.en : cake.name.bn}
              </h3>
            </Link>
            
            <p className="text-xs sm:text-sm text-muted-foreground mb-3 line-clamp-2 leading-relaxed">
              {language === 'en' ? cake.shortDescription.en : cake.shortDescription.bn}
            </p>
            
            {/* Price and CTA Row */}
            <div className="flex items-center justify-between flex-wrap gap-2 pt-2 border-t border-border/50">
              <div className="flex items-baseline gap-1">
                <span className="text-[10px] sm:text-xs text-muted-foreground">{t('cake.from')}</span>
                <span className="text-lg sm:text-xl font-bold text-primary">৳{cake.basePrice}</span>
              </div>
              <Link 
                to={`/cake/${cake.slug}`}
                className="inline-flex items-center gap-1 text-primary hover:text-primary/80 text-xs sm:text-sm font-medium group/link transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                aria-label={language === 'en' ? `View details for ${cake.name.en}` : `${cake.name.bn} এর বিস্তারিত দেখুন`}
              >
                {t('featured.viewDetails')}
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover/link:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        {/* Cake Stand Base */}
        <div className="relative mx-auto mt-1" aria-hidden="true">
          {/* Stand plate */}
          <div className="mx-auto w-[70%] h-2 bg-gradient-to-b from-amber-200 to-amber-300 rounded-b-full shadow-sm" />
          {/* Decorative shadow */}
          <div className="mx-auto w-[60%] h-1 bg-foreground/5 rounded-full blur-sm" />
        </div>

        {/* Floating sparkle on hover */}
        <motion.div 
          className="absolute -top-4 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-accent"
          animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          aria-hidden="true"
        >
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.div>
      </div>
    </motion.article>
  );
}
