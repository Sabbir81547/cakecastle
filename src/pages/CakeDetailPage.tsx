import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, Clock, Users, Sparkles, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getCakeBySlug, getRelatedCakes } from '@/data/cakes';
import { getWhatsAppLink } from '@/data/siteConfig';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageGallery from '@/components/ImageGallery';
import CakeCard from '@/components/CakeCard';
import PageTransition from '@/components/PageTransition';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function CakeDetailPage() {
  const { slug } = useParams();
  const { language, t } = useLanguage();
  const cake = getCakeBySlug(slug || '');
  const [selectedSize, setSelectedSize] = useState(0);

  if (!cake) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-xl sm:text-2xl font-bold mb-4">
            {language === 'bn' ? 'কেক পাওয়া যায় নাই' : 'Cake not found'}
          </h1>
          <Link to="/cakes" className="btn-primary text-sm sm:text-base">{t('cake.backToCakes')}</Link>
        </div>
      </div>
    );
  }

  const relatedCakes = getRelatedCakes(cake.id, cake.category);
  const currentSize = cake.sizes[selectedSize];
  const orderMessage = `Hi! I want to order ${cake.name.en} (${currentSize.size} - ৳${currentSize.price})`;

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="container-custom px-4">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 overflow-x-auto whitespace-nowrap"
          >
            <Link to="/" className="hover:text-primary transition-colors flex-shrink-0">
              {language === 'bn' ? 'হোম' : 'Home'}
            </Link>
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <Link to="/cakes" className="hover:text-primary transition-colors flex-shrink-0">
              {language === 'bn' ? 'কেক' : 'Cakes'}
            </Link>
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="text-foreground font-medium truncate max-w-[120px] sm:max-w-[200px]">{cake.name[language]}</span>
          </motion.nav>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12"
          >
            {/* Image Gallery */}
            <motion.div variants={itemVariants} className="relative">
              {cake.isBestseller && (
                <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10 px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold bg-accent text-accent-foreground shadow-lg"
                >
                  🏆 {t('featured.bestseller')}
                </motion.span>
              )}
              {cake.isNew && (
                <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold bg-primary text-primary-foreground shadow-lg flex items-center gap-1"
                >
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                  {t('featured.new')}
                </motion.span>
              )}
              <ImageGallery images={cake.gallery.length > 0 ? cake.gallery : [cake.image]} alt={cake.name[language]} />
            </motion.div>

            {/* Details */}
            <motion.div variants={containerVariants} className="space-y-4 sm:space-y-6">
              {/* Title & Description */}
              <motion.div variants={itemVariants}>
                <span className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium bg-primary/10 text-primary mb-2 sm:mb-3">
                  {cake.category.charAt(0).toUpperCase() + cake.category.slice(1)}
                </span>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground mb-3 sm:mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {cake.name[language]}
                </h1>
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">{cake.description[language]}</p>
              </motion.div>

              {/* Size Selection */}
              <motion.div variants={itemVariants} className="bg-muted/50 rounded-xl sm:rounded-2xl p-4 sm:p-5">
                <h3 className="font-semibold mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                  <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-[10px] sm:text-xs">1</span>
                  {t('cake.selectSize')}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                  {cake.sizes.map((size, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => setSelectedSize(idx)}
                      className={`p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 transition-all text-left ${
                        selectedSize === idx
                          ? 'border-primary bg-primary/10 shadow-md'
                          : 'border-border hover:border-primary/50 bg-background'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="block font-semibold text-foreground text-sm sm:text-base">{size.size}</span>
                      <span className="text-xs sm:text-sm text-muted-foreground">{size.weight}</span>
                      <span className="block text-lg sm:text-xl font-bold text-primary mt-1">৳{size.price}</span>
                      <span className="text-[10px] sm:text-xs text-muted-foreground">{size.serves}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Info Cards */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-2 sm:gap-3">
                <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-muted text-xs sm:text-sm">
                  <Users className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  <span className="text-muted-foreground">{currentSize.serves}</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-muted text-xs sm:text-sm">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  <span className="text-muted-foreground">{cake.preparationTime}</span>
                </div>
              </motion.div>

              {/* Order Button */}
              <motion.div variants={itemVariants}>
                <motion.a
                  href={getWhatsAppLink(orderMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center text-base sm:text-lg py-3 sm:py-4 shadow-lg"
                  whileHover={{ scale: 1.02, boxShadow: '0 10px 30px -10px rgba(37, 211, 102, 0.4)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                  {t('cake.orderViaWhatsapp')} - ৳{currentSize.price}
                </motion.a>
                
                <p className="text-[10px] sm:text-xs text-center text-muted-foreground mt-2 sm:mt-3">
                  {language === 'bn' ? 'হোয়াটসঅ্যাপে ক্লিক কইরা সরাসরি অর্ডার দিন' : 'Click to order directly via WhatsApp'}
                </p>
              </motion.div>

              {/* Ingredients */}
              <motion.div variants={itemVariants} className="pt-3 sm:pt-4 border-t border-border">
                <h3 className="font-semibold mb-2 sm:mb-3 text-foreground text-sm sm:text-base">{t('cake.ingredients')}</h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {cake.ingredients[language].map((ing, idx) => (
                    <motion.span 
                      key={idx} 
                      className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-muted text-xs sm:text-sm text-foreground"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + idx * 0.05 }}
                    >
                      {ing}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Related Cakes */}
          {relatedCakes.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-12 sm:mt-16 lg:mt-20"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-6 sm:mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
                {t('cake.relatedCakes')}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {relatedCakes.map((rc, idx) => (
                  <CakeCard key={rc.id} cake={rc} index={idx} compact />
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
      </div>
    </PageTransition>
  );
}
