import { motion } from 'framer-motion';
import { MessageCircle, ChevronDown, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { getWhatsAppLink, quickMessages, siteConfig } from '@/data/siteConfig';
import heroCake from '@/assets/hero-cake.jpg';

export default function Hero() {
  const { t, language } = useLanguage();

  return (
    <section 
      id="home" 
      className="relative min-h-[100svh] flex items-center gradient-hero overflow-hidden"
      aria-label={language === 'en' ? 'Hero section' : 'হিরো সেকশন'}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute -top-20 -right-20 w-48 sm:w-72 h-48 sm:h-72 rounded-full opacity-20"
          style={{ background: 'hsl(var(--rose))' }}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 -left-20 w-64 sm:w-96 h-64 sm:h-96 rounded-full opacity-10"
          style={{ background: 'hsl(var(--gold))' }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        {/* Floating sparkles */}
        <motion.div
          className="absolute top-1/4 right-1/4 text-accent hidden sm:block"
          animate={{ y: [-10, 10, -10], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Sparkles className="w-6 h-6" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-1/4 text-primary hidden sm:block"
          animate={{ y: [10, -10, 10], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        >
          <Star className="w-4 h-4" />
        </motion.div>
      </div>

      <div className="container-custom section-padding pt-20 sm:pt-24 md:pt-32">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 bg-secondary text-secondary-foreground"
            >
              🏰 {t('hero.badge')}
            </motion.span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-foreground mb-3 sm:mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              {t('hero.title')}
              <span className="block text-gradient">{t('hero.subtitle')}</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground mb-1 sm:mb-2 font-medium">
              {t('hero.tagline')}
            </p>

            <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-6 sm:mb-8 leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <motion.a
                href={getWhatsAppLink(language === 'en' ? quickMessages.general.en : quickMessages.general.bn)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-sm sm:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label={language === 'en' ? 'Order now via WhatsApp' : 'হোয়াটসঅ্যাপে অর্ডার দিন'}
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                {t('hero.orderNow')}
              </motion.a>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  to="/cakes" 
                  className="btn-secondary inline-flex items-center justify-center w-full sm:w-auto text-sm sm:text-base"
                  aria-label={language === 'en' ? 'View our cake menu' : 'আমাদের কেক মেনু দেখুন'}
                >
                  {t('hero.viewMenu')}
                </Link>
              </motion.div>
            </div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start mt-8 sm:mt-10"
              role="list"
              aria-label={language === 'en' ? 'Trust indicators' : 'বিশ্বাসযোগ্যতা সূচক'}
            >
              <div className="text-center" role="listitem">
                <span className="block text-xl sm:text-2xl font-bold text-primary">{siteConfig.stats.happyCustomers}</span>
                <span className="text-xs sm:text-sm text-muted-foreground">{t('hero.happyCustomers')}</span>
              </div>
              <div className="w-px h-10 sm:h-12 bg-border" aria-hidden="true" />
              <div className="text-center" role="listitem">
                <span className="block text-xl sm:text-2xl font-bold text-primary">100%</span>
                <span className="text-xs sm:text-sm text-muted-foreground">{t('hero.freshDaily')}</span>
              </div>
              <div className="w-px h-10 sm:h-12 bg-border" aria-hidden="true" />
              <div className="text-center" role="listitem">
                <span className="block text-xl sm:text-2xl font-bold text-primary">{siteConfig.stats.fbRating}★</span>
                <span className="text-xs sm:text-sm text-muted-foreground">{t('hero.fbRating')}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image - Creative 3-Tier Cake Shape */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative flex justify-center"
            aria-hidden="true"
          >
            <div className="relative w-[280px] h-[360px] sm:w-[340px] sm:h-[440px] lg:w-[420px] lg:h-[520px]">
              
              {/* Creative Tiered Cake Container */}
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-end"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                {/* Top Tier - Small dome */}
                <div className="relative z-30">
                  <motion.div 
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-rose-200 via-rose-300 to-rose-200 shadow-lg flex items-center justify-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-lg sm:text-2xl">🍒</span>
                  </motion.div>
                </div>

                {/* Main Cake Image Container - 3-Tier Cake Shape */}
                <div className="relative -mt-3 sm:-mt-4">
                  {/* Glow effect behind */}
                  <motion.div 
                    className="absolute -inset-4 sm:-inset-6 rounded-[60%_60%_50%_50%/30%_30%_70%_70%] opacity-30 blur-xl"
                    style={{ background: 'linear-gradient(135deg, hsl(var(--rose)), hsl(var(--gold-light)))' }}
                    animate={{ 
                      scale: [1, 1.05, 1],
                      opacity: [0.3, 0.4, 0.3]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  />

                  {/* Cake tier frame - Top tier deco */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-[60%] h-3 sm:h-4 bg-gradient-to-b from-rose-100 to-rose-200 rounded-t-full opacity-60 z-20" />

                  {/* Main cake image in 3-tier cake shape using SVG clipPath */}
                  <div className="relative">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 400" aria-hidden="true">
                      <defs>
                        <clipPath id="cakeClipPath">
                          {/* Top tier */}
                          <ellipse cx="160" cy="60" rx="50" ry="35" />
                          <rect x="110" y="55" width="100" height="50" />
                          {/* Middle tier */}
                          <ellipse cx="160" cy="130" rx="80" ry="40" />
                          <rect x="80" y="125" width="160" height="80" />
                          {/* Bottom tier */}
                          <ellipse cx="160" cy="230" rx="120" ry="50" />
                          <rect x="40" y="225" width="240" height="120" />
                          {/* Base */}
                          <ellipse cx="160" cy="350" rx="140" ry="40" />
                        </clipPath>
                      </defs>
                    </svg>
                    
                    <div 
                      className="relative w-[240px] h-[300px] sm:w-[300px] sm:h-[380px] lg:w-[360px] lg:h-[440px] overflow-hidden shadow-float"
                      style={{
                        clipPath: 'polygon(30% 0%, 70% 0%, 75% 8%, 85% 12%, 90% 20%, 92% 28%, 95% 35%, 100% 50%, 100% 85%, 95% 92%, 85% 97%, 70% 100%, 30% 100%, 15% 97%, 5% 92%, 0% 85%, 0% 50%, 5% 35%, 8% 28%, 10% 20%, 15% 12%, 25% 8%)',
                        borderRadius: '45% 45% 8% 8% / 15% 15% 5% 5%'
                      }}
                    >
                      <img
                        src={heroCake}
                        alt={language === 'en' ? 'Delicious homemade cake from Cake Castle Beanibazar' : 'কেক ক্যাসল বিয়ানীবাজার থেকে সুস্বাদু ঘরে তৈরি কেক'}
                        className="w-full h-full object-cover scale-110"
                        loading="eager"
                      />
                      {/* Gradient overlay for depth */}
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-foreground/5" />
                      
                      {/* Tier separator lines */}
                      <div className="absolute top-[18%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                      <div className="absolute top-[45%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                    </div>

                    {/* Frosting drips on sides */}
                    <div className="absolute top-[15%] -left-1 w-3 h-8 bg-gradient-to-b from-rose-100 to-transparent rounded-full opacity-70" />
                    <div className="absolute top-[20%] -right-1 w-3 h-6 bg-gradient-to-b from-rose-100 to-transparent rounded-full opacity-70" />
                    <div className="absolute top-[40%] -left-2 w-2 h-10 bg-gradient-to-b from-rose-100 to-transparent rounded-full opacity-50" />
                  </div>
                </div>

                {/* Cake Stand/Pedestal */}
                <div className="relative w-[200px] sm:w-[260px] lg:w-[320px] -mt-2">
                  {/* Stand plate */}
                  <div className="h-3 sm:h-4 bg-gradient-to-b from-amber-200 via-amber-300 to-amber-400 rounded-t-full shadow-md" />
                  {/* Stand stem */}
                  <div className="mx-auto w-16 sm:w-20 h-4 sm:h-5 bg-gradient-to-b from-amber-300 to-amber-500" />
                  {/* Stand base */}
                  <div className="mx-auto w-24 sm:w-32 h-2 sm:h-3 bg-gradient-to-b from-amber-400 to-amber-600 rounded-b-lg shadow-lg" />
                </div>
              </motion.div>

              {/* Floating Badge - Price */}
              <motion.div
                className="absolute bottom-24 sm:bottom-32 -right-2 sm:right-0 lg:right-4 bg-background/95 backdrop-blur-sm rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-card border border-border z-40"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
              >
                <span className="text-xs sm:text-sm font-medium text-muted-foreground">{t('hero.startsFrom')}</span>
                <span className="block text-lg sm:text-xl font-bold text-primary">৳{siteConfig.delivery.minOrder}</span>
              </motion.div>

              {/* Floating Badge - Homemade */}
              <motion.div
                className="absolute top-16 sm:top-20 -left-2 sm:left-0 lg:left-4 bg-primary text-primary-foreground rounded-full px-2 sm:px-3 py-1 sm:py-1.5 shadow-lg z-40"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: [-3, 3, -3] }}
                transition={{ delay: 1.2, rotate: { duration: 4, repeat: Infinity } }}
              >
                <span className="text-[10px] sm:text-xs font-bold whitespace-nowrap">✨ {language === 'en' ? 'Homemade' : 'ঘরে তৈরি'}</span>
              </motion.div>

              {/* Sparkle decorations */}
              <motion.div
                className="absolute top-8 right-12 text-accent z-50"
                animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.div>
              <motion.div
                className="absolute top-32 -left-4 text-primary z-50"
                animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              >
                <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
              </motion.div>
              <motion.div
                className="absolute bottom-40 right-8 text-gold z-50 hidden sm:block"
                animate={{ opacity: [0.4, 1, 0.4], rotate: [0, 180, 360] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Star className="w-3 h-3 fill-accent text-accent" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a 
            href="#menu" 
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg p-2"
            aria-label={language === 'en' ? 'Scroll to menu' : 'মেনুতে স্ক্রোল করুন'}
          >
            <span className="text-xs sm:text-sm mb-2">{t('common.scroll')}</span>
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
