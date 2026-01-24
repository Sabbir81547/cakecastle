import { motion } from 'framer-motion';
import { MessageCircle, Palette, FileText, CreditCard, Gift } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getWhatsAppLink, quickMessages } from '@/data/siteConfig';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import heroCake from '@/assets/hero-cake.jpg';

export default function CustomOrderPage() {
  const { language, t } = useLanguage();

  const steps = [
    { icon: Palette, title: t('custom.step1.title'), desc: t('custom.step1.desc') },
    { icon: FileText, title: t('custom.step2.title'), desc: t('custom.step2.desc') },
    { icon: CreditCard, title: t('custom.step3.title'), desc: t('custom.step3.desc') },
    { icon: Gift, title: t('custom.step4.title'), desc: t('custom.step4.desc') },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section - Pink themed like reference */}
        <section className="pt-24 pb-16 relative overflow-hidden" style={{ background: 'hsl(var(--rose))' }}>
          <div className="container-custom px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h1 className="heading-section text-foreground mb-6">{t('custom.title')}</h1>
              <p className="text-lg text-foreground/80 mb-8">{t('custom.subtitle')}</p>
              <motion.a
                href={getWhatsAppLink(quickMessages.customOrder[language])}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <MessageCircle className="w-5 h-5" />
                {t('custom.requestQuote')}
              </motion.a>
            </motion.div>

            {/* Cake Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl mx-auto"
            >
              <div className="rounded-3xl overflow-hidden shadow-float">
                <img src={heroCake} alt="Custom cake decoration" className="w-full h-auto" />
              </div>
              <p className="text-center mt-4 text-foreground/70 italic">{t('custom.handcrafted')}</p>
            </motion.div>
          </div>
        </section>

        {/* How it Works */}
        <section className="section-padding bg-background">
          <div className="container-custom px-4">
            <h2 className="heading-section text-center text-foreground mb-12">{t('custom.process.title')}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
                      <Icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <span className="text-sm text-muted-foreground mb-2 block">Step {index + 1}</span>
                    <h3 className="heading-card text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
