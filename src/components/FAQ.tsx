import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown, HelpCircle, Cake } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { siteConfig } from '@/data/siteConfig';

export default function FAQ() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });
  const { language } = useLanguage();
  const [openId, setOpenId] = useState<number | null>(1);

  const faqItems = siteConfig.faq;

  return (
    <section 
      ref={sectionRef} 
      className="section-padding bg-muted/30"
      aria-labelledby="faq-heading"
    >
      <div className="container-custom">
        {/* Header with decorative elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 bg-secondary text-secondary-foreground">
            <HelpCircle className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
            {language === 'bn' ? 'সাধারণ প্রশ্ন' : 'Common Questions'}
          </span>
          <h2 id="faq-heading" className="heading-section text-foreground">
            {language === 'bn' ? 'প্রায়শই জিজ্ঞাসিত প্রশ্ন' : 'Frequently Asked Questions'}
          </h2>
        </motion.div>

        {/* FAQ Items - Creative accordion with cake-themed design */}
        <div 
          className="max-w-3xl mx-auto space-y-3 sm:space-y-4"
          role="region"
          aria-label={language === 'en' ? 'FAQ accordion' : 'প্রশ্ন-উত্তর'}
        >
          {faqItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative"
            >
              {/* Decorative layer line on active */}
              {openId === item.id && (
                <motion.div 
                  className="absolute -top-1 left-4 right-4 h-2 bg-gradient-to-b from-rose-200 to-transparent rounded-t-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  aria-hidden="true"
                />
              )}
              
              <div
                className={`relative overflow-hidden transition-all duration-300 ${
                  openId === item.id 
                    ? 'shadow-lg rounded-2xl sm:rounded-3xl' 
                    : 'shadow-soft rounded-xl sm:rounded-2xl hover:shadow-md'
                }`}
                style={openId === item.id ? {
                  borderRadius: '16px 16px 16px 16px',
                  background: 'var(--gradient-cta)'
                } : {
                  background: 'var(--gradient-card)'
                }}
              >
                <button
                  onClick={() => setOpenId(openId === item.id ? null : item.id)}
                  className={`w-full text-left p-4 sm:p-5 lg:p-6 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${
                    openId === item.id 
                      ? 'text-primary-foreground' 
                      : 'hover:bg-primary/5'
                  }`}
                  aria-expanded={openId === item.id}
                  aria-controls={`faq-answer-${item.id}`}
                  id={`faq-question-${item.id}`}
                >
                  <div className="flex items-center justify-between gap-3 sm:gap-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Cake 
                        className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 ${
                          openId === item.id ? 'text-primary-foreground' : 'text-primary'
                        }`} 
                        aria-hidden="true" 
                      />
                      <span className="font-semibold text-sm sm:text-base lg:text-lg">
                        {item.question[language]}
                      </span>
                    </div>
                    <motion.span
                      animate={{ rotate: openId === item.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                      aria-hidden="true"
                    >
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.span>
                  </div>
                  
                  <motion.div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${item.id}`}
                    initial={false}
                    animate={{
                      height: openId === item.id ? 'auto' : 0,
                      opacity: openId === item.id ? 1 : 0,
                      marginTop: openId === item.id ? 12 : 0
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className={`text-xs sm:text-sm lg:text-base leading-relaxed pl-6 sm:pl-8 ${
                      openId === item.id ? 'text-primary-foreground/90' : 'text-muted-foreground'
                    }`}>
                      {item.answer[language]}
                    </p>
                  </motion.div>
                </button>
              </div>
              
              {/* Decorative stand under card */}
              {openId === item.id && (
                <motion.div 
                  className="mx-auto w-[60%] h-1 bg-gradient-to-b from-amber-300 to-amber-100 rounded-b-full"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 0.2 }}
                  aria-hidden="true"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
