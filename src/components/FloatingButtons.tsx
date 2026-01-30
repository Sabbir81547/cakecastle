import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Phone, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { siteConfig } from '@/data/siteConfig';

export default function FloatingButtons() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const { t, language } = useLanguage();

  // Show greeting bubble after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGreeting(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const quickMessages = [
    { en: 'I want to order a cake', bn: 'আমি একটি কেক অর্ডার করতে চাই' },
    { en: 'What are your prices?', bn: 'আপনার দাম কত?' },
    { en: 'Do you deliver?', bn: 'আপনি কি ডেলিভারি করেন?' },
    { en: 'Custom cake inquiry', bn: 'কাস্টম কেক সম্পর্কে জানতে চাই' },
  ];

  const handleQuickMessage = (msg: string) => {
    const encodedMsg = encodeURIComponent(msg);
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${encodedMsg}`, '_blank');
    setIsChatOpen(false);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-4">
        {/* Greeting Bubble */}
        <AnimatePresence>
          {showGreeting && !isChatOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 20 }}
              className="bg-white px-4 py-3 rounded-2xl shadow-xl border border-gray-100 mb-2 relative max-w-[200px]"
            >
              <button 
                onClick={() => setShowGreeting(false)}
                className="absolute -top-2 -right-2 bg-gray-100 rounded-full p-1 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
              <p className="text-sm font-medium text-gray-800 leading-tight">
                {language === 'en' ? '👋 Hello! Need help ordering a cake?' : '👋 আসসালামু আলাইকুম! কেক অর্ডারে কি সাহায্য করতে পারি?'}
              </p>
              {/* Pointer */}
              <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-gray-100 rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chat Widget */}
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="mb-4 w-[calc(100vw-2.5rem)] sm:w-80 rounded-2xl shadow-2xl overflow-hidden border border-border/50"
              style={{ background: 'hsl(var(--background))' }}
            >
              {/* Header */}
              <div 
                className="p-3 sm:p-4 flex items-center justify-between"
                style={{ background: 'hsl(var(--primary))' }}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="relative">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center text-lg sm:text-xl">
                      🍰
                    </div>
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 border-2 border-[hsl(var(--primary))] rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white leading-none mb-1 text-sm sm:text-base">Cake Castle Bot</h4>
                    <span className="text-[9px] sm:text-[10px] text-white/80 uppercase tracking-wider font-semibold">Online & Ready</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-3 sm:p-4 max-h-[60vh] sm:max-h-[400px] overflow-y-auto bg-gradient-to-b from-primary/5 to-transparent">
                <div className="bg-muted p-2.5 sm:p-3 rounded-2xl rounded-tl-none text-xs sm:text-sm text-foreground mb-4 shadow-sm leading-relaxed">
                  {t('chat.greeting')}
                </div>

                <div className="space-y-2 mb-4">
                  <p className="text-[9px] sm:text-[10px] text-muted-foreground font-semibold uppercase tracking-wider text-center mb-3">Quick Actions</p>
                  {quickMessages.map((msg, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleQuickMessage(msg[language])}
                      className="w-full text-left p-2.5 sm:p-3 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 hover:translate-x-1 flex items-center justify-between group bg-background border border-border/50 hover:border-primary/50 shadow-sm"
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>{msg[language]}</span>
                      <Send 
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" 
                      />
                    </motion.button>
                  ))}
                </div>

                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-bold transition-all duration-300 hover:shadow-lg hover:brightness-105 active:scale-95"
                  style={{ 
                    background: '#25D366',
                    color: 'white'
                  }}
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  {language === 'en' ? 'Chat on WhatsApp' : 'হোয়াটসঅ্যাপ চ্যাট'}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Buttons Stack */}
        <div className="flex flex-col gap-3">
          {/* Phone Button */}
          <motion.a
            href={`tel:${siteConfig.phone}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-white transition-transform hover:rotate-12"
            style={{ background: 'hsl(var(--primary))' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Call us"
          >
            <Phone className="w-5 h-5" />
          </motion.a>

          {/* Main Bot Button */}
          <motion.button
            onClick={() => {
              setIsChatOpen(!isChatOpen);
              setShowGreeting(false);
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-white relative"
            style={{ background: isChatOpen ? 'hsl(var(--foreground))' : '#25D366' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Pulse effect when closed */}
            {!isChatOpen && (
              <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
            )}
            
            <AnimatePresence mode="wait">
              {isChatOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X className="w-7 h-7" />
                </motion.div>
              ) : (
                <motion.div
                  key="chat"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <MessageSquare className="w-7 h-7" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </>
  );
}
