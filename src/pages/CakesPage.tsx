import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { cakes, categories } from '@/data/cakes';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CakeCard from '@/components/CakeCard';
import PageTransition from '@/components/PageTransition';

export default function CakesPage() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredCakes = activeCategory === 'all' 
    ? cakes 
    : cakes.filter(cake => cake.category === activeCategory);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="container-custom px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-2 sm:mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              {t('cakesPage.title')}
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">{t('cakesPage.subtitle')}</p>
          </motion.div>

          {/* Category Filter - Scrollable on mobile */}
          <div className="relative mb-8 sm:mb-12">
            <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide justify-start sm:justify-center">
              <motion.button
                onClick={() => setActiveCategory('all')}
                className={`flex-shrink-0 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                  activeCategory === 'all'
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-muted text-muted-foreground hover:bg-secondary'
                }`}
                whileTap={{ scale: 0.95 }}
              >
                {t('cakesPage.allCategories')}
              </motion.button>
              {categories.map(cat => (
                <motion.button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.slug)}
                  className={`flex-shrink-0 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                    activeCategory === cat.slug
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'bg-muted text-muted-foreground hover:bg-secondary'
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  {cat.icon} {cat.name[language]}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Cakes Grid */}
          {filteredCakes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredCakes.map((cake, index) => (
                <CakeCard key={cake.id} cake={cake} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 sm:py-16"
            >
              <p className="text-muted-foreground text-sm sm:text-base">{t('cakesPage.noResults')}</p>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
      </div>
    </PageTransition>
  );
}
