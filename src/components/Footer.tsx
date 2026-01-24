import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getFacebookLink, getInstagramLink } from '@/data/siteConfig';
import Logo from './Logo';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { key: 'nav.home', href: '/', isLink: true },
    { key: 'nav.cakes', href: '/cakes', isLink: true },
    { key: 'nav.gallery', href: '/gallery', isLink: true },
    { key: 'nav.custom', href: '/custom-order', isLink: true },
  ];

  const legalLinks = [
    { key: 'footer.terms', href: '/terms', isLink: true },
  ];

  const socialLinks = [
    { 
      icon: Facebook, 
      href: getFacebookLink(), 
      label: 'Facebook',
      color: '#1877F2'
    },
    { 
      icon: Instagram, 
      href: getInstagramLink(), 
      label: 'Instagram',
      color: '#E4405F'
    },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom section-padding pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <motion.div className="mb-4" whileHover={{ scale: 1.02 }}>
              <Link to="/">
                <Logo size="md" showText={true} inverted />
              </Link>
            </motion.div>
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              {t('footer.tagline')}
            </p>
            <p className="text-background/60 text-sm">
              Beanibazar, Sylhet, Bangladesh
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
              {legalLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">{t('footer.payment')}</h4>
            <div className="space-y-2">
              <span className="block text-background/70 text-sm">💵 Cash on Delivery</span>
              <span className="block text-sm" style={{ color: '#E2136E' }}>● bKash: 01896314889</span>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">{t('footer.followUs')}</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    style={{ background: social.color }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm text-center sm:text-left">
            © {currentYear} Cake Castle Beanibazar. {t('footer.rights')}.
          </p>
          <p className="text-background/60 text-sm flex items-center gap-1">
            {t('footer.madeWith')} <Heart className="w-4 h-4 text-rose" /> {t('footer.inBangladesh')}
          </p>
        </div>
      </div>
    </footer>
  );
}
