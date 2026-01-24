import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function FloatingButtons() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { t } = useLanguage();

  const quickMessages = [
    { en: 'I want to order a cake', bn: 'আমি একটি কেক অর্ডার করতে চাই' },
    { en: 'What are your prices?', bn: 'আপনার দাম কত?' },
    { en: 'Do you deliver?', bn: 'আপনি কি ডেলিভারি করেন?' },
    { en: 'Custom cake inquiry', bn: 'কাস্টম কেক সম্পর্কে জানতে চাই' },
  ];

  const handleQuickMessage = (msg: string) => {
    const encodedMsg = encodeURIComponent(msg);
    window.open(`https://wa.me/8801XXXXXXXXX?text=${encodedMsg}`, '_blank');
    setIsChatOpen(false);
  };

  return (
    <>
      {/* Chat Widget */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-4 z-50 w-[calc(100%-2rem)] sm:w-80 rounded-2xl shadow-float overflow-hidden"
            style={{ background: 'hsl(var(--background))' }}
          >
            {/* Header */}
            <div 
              className="p-4 flex items-center justify-between"
              style={{ background: 'hsl(var(--primary))' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-background/20 flex items-center justify-center">
                  <span className="text-lg">🏰</span>
                </div>
                <div>
                  <h4 
                    className="font-semibold"
                    style={{ color: 'hsl(var(--primary-foreground))' }}
                  >
                    Cake Castle
                  </h4>
                  <span 
                    className="text-xs opacity-80"
                    style={{ color: 'hsl(var(--primary-foreground))' }}
                  >
                    Usually replies instantly
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="w-8 h-8 rounded-full bg-background/20 flex items-center justify-center transition-colors hover:bg-background/30"
                style={{ color: 'hsl(var(--primary-foreground))' }}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-4">
              <p className="text-sm text-muted-foreground mb-4">
                {t('chat.greeting')}
              </p>

              <div className="space-y-2">
                {quickMessages.map((msg, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleQuickMessage(msg.en)}
                    className="w-full text-left p-3 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-[1.02] flex items-center justify-between group"
                    style={{ 
                      background: 'hsl(var(--secondary))',
                      color: 'hsl(var(--secondary-foreground))'
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{msg.en}</span>
                    <Send 
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" 
                      style={{ color: 'hsl(var(--primary))' }}
                    />
                  </motion.button>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-border">
                <a
                  href="https://wa.me/8801XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-[1.02]"
                  style={{ 
                    background: '#25D366',
                    color: 'white'
                  }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Open WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Buttons */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
        {/* Phone Button */}
        <motion.a
          href="tel:+8801XXXXXXXXX"
          className="floating-btn"
          style={{ background: 'hsl(var(--primary))' }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Call us"
        >
          <Phone className="w-6 h-6" style={{ color: 'hsl(var(--primary-foreground))' }} />
        </motion.a>

        {/* WhatsApp/Chat Button */}
        <motion.button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="floating-btn"
          style={{ background: '#25D366' }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Chat with us"
        >
          <AnimatePresence mode="wait">
            {isChatOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X className="w-6 h-6 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <MessageCircle className="w-6 h-6 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  );
}
