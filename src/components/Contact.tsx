import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Clock, Phone, MessageCircle, Facebook } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { siteConfig, getWhatsAppLink, quickMessages } from '@/data/siteConfig';

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { t, language } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      labelKey: 'contact.location',
      valueKey: 'contact.locationValue',
    },
    {
      icon: Clock,
      labelKey: 'contact.hours',
      valueKey: 'contact.hoursValue',
    },
    {
      icon: Phone,
      labelKey: 'contact.phone',
      value: siteConfig.phone,
    },
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef} 
      className="section-padding relative overflow-hidden"
      style={{ background: 'hsl(var(--primary))' }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10"
          style={{ background: 'hsl(var(--gold))' }}
        />
        <div 
          className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'hsl(var(--rose))' }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span 
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{ 
              background: 'hsl(var(--primary-foreground) / 0.2)',
              color: 'hsl(var(--primary-foreground))'
            }}
          >
            📍 {t('contact.subtitle')}
          </span>
          <h2 
            className="heading-section"
            style={{ color: 'hsl(var(--primary-foreground))' }}
          >
            {t('contact.title')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.labelKey}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl"
                  style={{ background: 'hsl(var(--primary-foreground) / 0.1)' }}
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'hsl(var(--primary-foreground) / 0.2)' }}
                  >
                    <Icon className="w-6 h-6" style={{ color: 'hsl(var(--primary-foreground))' }} />
                  </div>
                  <div>
                    <span 
                      className="block text-sm opacity-80"
                      style={{ color: 'hsl(var(--primary-foreground))' }}
                    >
                      {t(item.labelKey)}
                    </span>
                    <span 
                      className="block font-semibold text-lg"
                      style={{ color: 'hsl(var(--primary-foreground))' }}
                    >
                      {item.value || t(item.valueKey!)}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center gap-4"
          >
            <motion.a
              href={getWhatsAppLink(language === 'en' ? quickMessages.general.en : quickMessages.general.bn)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              style={{ 
                background: '#25D366',
                color: 'white',
              }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-6 h-6" />
              {t('contact.whatsapp')}
            </motion.a>

            <motion.a
              href={siteConfig.facebookPageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              style={{ 
                background: '#1877F2',
                color: 'white',
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Facebook className="w-6 h-6" />
              {t('contact.facebook')}
            </motion.a>

            <motion.a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center justify-center gap-3 py-4 px-6 rounded-2xl font-semibold text-lg border-2 transition-all duration-300 hover:scale-[1.02]"
              style={{ 
                borderColor: 'hsl(var(--primary-foreground))',
                color: 'hsl(var(--primary-foreground))',
                background: 'transparent',
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-6 h-6" />
              {t('contact.callUs')}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
