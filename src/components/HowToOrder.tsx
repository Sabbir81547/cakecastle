import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cake, MessageSquare, CreditCard, Gift } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const steps = [
  {
    icon: Cake,
    titleKey: 'order.step1.title',
    descKey: 'order.step1.desc',
    color: 'var(--primary)',
  },
  {
    icon: MessageSquare,
    titleKey: 'order.step2.title',
    descKey: 'order.step2.desc',
    color: 'var(--accent)',
  },
  {
    icon: CreditCard,
    titleKey: 'order.step3.title',
    descKey: 'order.step3.desc',
    color: 'var(--burgundy-light)',
  },
  {
    icon: Gift,
    titleKey: 'order.step4.title',
    descKey: 'order.step4.desc',
    color: 'var(--gold)',
  },
];

export default function HowToOrder() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { t, language } = useLanguage();

  return (
    <section ref={sectionRef} className="section-padding" style={{ background: 'hsl(var(--secondary))' }}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <span 
            className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 bg-background"
            style={{ color: 'hsl(var(--foreground))' }}
          >
            📱 {language === 'bn' ? 'সহজ অর্ডারিং' : 'Easy Ordering'}
          </span>
          <h2 className="heading-section text-foreground">{t('order.title')}</h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.titleKey}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center group"
              >
                {/* Connector Line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 sm:top-12 left-[60%] w-[80%] h-0.5 bg-border" />
                )}

                {/* Icon */}
                <motion.div
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-3 sm:mb-4 lg:mb-6 rounded-full flex items-center justify-center relative z-10"
                  style={{ background: `hsl(${step.color})` }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" style={{ color: 'hsl(var(--primary-foreground))' }} />
                  
                  {/* Step Number */}
                  <span 
                    className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold"
                    style={{ 
                      background: 'hsl(var(--background))',
                      color: 'hsl(var(--foreground))',
                      boxShadow: 'var(--shadow-soft)'
                    }}
                  >
                    {index + 1}
                  </span>
                </motion.div>

                {/* Content */}
                <h3 className="text-sm sm:text-base lg:text-xl font-semibold text-foreground mb-1 sm:mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {t(step.titleKey)}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{t(step.descKey)}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8 }}
          className="mt-8 sm:mt-12 text-center"
        >
          <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
            {language === 'bn' ? 'গ্রহণযোগ্য পেমেন্ট পদ্ধতি' : 'Accepted Payment Methods'}
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-background text-foreground font-medium text-xs sm:text-sm shadow-soft">
              💵 {language === 'bn' ? 'ক্যাশ' : 'Cash'}
            </span>
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-white" style={{ background: '#E2136E' }}>
              bKash
            </span>
          
          </div>
        </motion.div>
      </div>
    </section>
  );
}
