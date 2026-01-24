import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { galleryItems, categories } from '@/data/cakes';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { ChevronLeft, ChevronRight, X, ZoomIn, Camera } from 'lucide-react';

export default function GalleryPage() {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = '';
  };

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? filteredItems.length - 1 : selectedIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === filteredItems.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  // Generate varied heights for masonry effect
  const getItemHeight = (index: number): string => {
    const patterns = ['aspect-square', 'aspect-[3/4]', 'aspect-square', 'aspect-[4/5]', 'aspect-[3/4]', 'aspect-square'];
    return patterns[index % patterns.length];
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container-custom px-4">
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-10 sm:mb-14"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-secondary text-secondary-foreground">
                <Camera className="w-4 h-4" aria-hidden="true" />
                {language === 'bn' ? 'আমাদের সৃষ্টি' : 'Our Creations'}
              </span>
              <h1 className="heading-section text-foreground mb-4">{t('gallery.title')}</h1>
              <p className="text-muted-foreground max-w-xl mx-auto">{t('gallery.subtitle')}</p>
            </motion.div>

            {/* Filter Pills */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-14"
              role="tablist"
              aria-label={language === 'en' ? 'Gallery filters' : 'গ্যালারি ফিল্টার'}
            >
              <button
                onClick={() => setActiveFilter('all')}
                role="tab"
                aria-selected={activeFilter === 'all'}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  activeFilter === 'all' 
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105' 
                    : 'bg-muted hover:bg-secondary hover:scale-102'
                }`}
              >
                ✨ {t('gallery.all')}
              </button>
              {categories.slice(0, 5).map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.slug)}
                  role="tab"
                  aria-selected={activeFilter === cat.slug}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                    activeFilter === cat.slug 
                      ? 'bg-primary text-primary-foreground shadow-lg scale-105' 
                      : 'bg-muted hover:bg-secondary hover:scale-102'
                  }`}
                >
                  {cat.icon} {cat.name[language]}
                </button>
              ))}
            </motion.div>

            {/* Masonry Gallery Grid */}
            <div 
              className="columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-4 space-y-3 sm:space-y-4"
              role="tabpanel"
              aria-label={language === 'en' ? 'Gallery images' : 'গ্যালারি ছবি'}
            >
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="break-inside-avoid mb-3 sm:mb-4"
                  >
                    <motion.button
                      onClick={() => openLightbox(index)}
                      className={`group relative w-full ${getItemHeight(index)} rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 block`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      aria-label={`${language === 'en' ? 'View' : 'দেখুন'}: ${item.title[language]}`}
                    >
                      {/* Image */}
                      <img
                        src={item.image}
                        alt={item.title[language]}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                        loading="lazy"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      
                      {/* Zoom Icon */}
                      <div className="absolute top-3 right-3 p-2 rounded-full bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300" aria-hidden="true">
                        <ZoomIn className="w-4 h-4 text-white" />
                      </div>
                      
                      {/* Title */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-white font-semibold text-sm sm:text-base drop-shadow-lg">
                          {item.title[language]}
                        </span>
                        <span className="block text-white/80 text-xs sm:text-sm mt-0.5">
                          {categories.find(c => c.slug === item.category)?.name[language]}
                        </span>
                      </div>

                      {/* Decorative corner accent */}
                      <div className="absolute top-0 left-0 w-12 h-12 bg-gradient-to-br from-primary/30 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                    </motion.button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Empty State */}
            {filteredItems.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <p className="text-muted-foreground">
                  {language === 'bn' ? 'এই ক্যাটাগরিতে কোনো ছবি নাই' : 'No images in this category'}
                </p>
              </motion.div>
            )}
          </div>
        </main>
        <Footer />

        {/* Lightbox */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
              onClick={closeLightbox}
              onKeyDown={handleKeyDown}
              tabIndex={0}
              role="dialog"
              aria-modal="true"
              aria-label={language === 'en' ? 'Image lightbox' : 'ইমেজ লাইটবক্স'}
            >
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white focus:outline-none focus:ring-2 focus:ring-white"
                aria-label={language === 'en' ? 'Close lightbox' : 'লাইটবক্স বন্ধ করুন'}
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation */}
              {filteredItems.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      goToPrevious();
                    }}
                    className="absolute left-2 sm:left-4 z-10 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white focus:outline-none focus:ring-2 focus:ring-white"
                    aria-label={language === 'en' ? 'Previous image' : 'আগের ছবি'}
                  >
                    <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      goToNext();
                    }}
                    className="absolute right-2 sm:right-4 z-10 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white focus:outline-none focus:ring-2 focus:ring-white"
                    aria-label={language === 'en' ? 'Next image' : 'পরের ছবি'}
                  >
                    <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
                  </button>
                </>
              )}

              {/* Main lightbox image */}
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="max-w-[90vw] max-h-[85vh] px-4"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={filteredItems[selectedIndex].image}
                  alt={filteredItems[selectedIndex].title[language]}
                  className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
                />
                {/* Image title */}
                <div className="text-center mt-4">
                  <h3 className="text-white text-lg sm:text-xl font-semibold">
                    {filteredItems[selectedIndex].title[language]}
                  </h3>
                  <p className="text-white/60 text-sm mt-1">
                    {categories.find(c => c.slug === filteredItems[selectedIndex].category)?.name[language]}
                  </p>
                </div>
              </motion.div>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 text-white text-sm">
                {selectedIndex + 1} / {filteredItems.length}
              </div>

              {/* Thumbnail strip at bottom */}
              {filteredItems.length > 1 && (
                <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-2 px-4 py-2 rounded-xl bg-white/10 max-w-[90vw] overflow-x-auto">
                  {filteredItems.slice(0, 8).map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedIndex(idx);
                      }}
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 focus:outline-none ${
                        idx === selectedIndex
                          ? 'border-white scale-110'
                          : 'border-transparent opacity-50 hover:opacity-100'
                      }`}
                      aria-label={`${language === 'en' ? 'View' : 'দেখুন'}: ${item.title[language]}`}
                    >
                      <img
                        src={item.image}
                        alt={item.title[language]}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
}
