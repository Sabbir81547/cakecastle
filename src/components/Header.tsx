import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Logo from './Logo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'bn' : 'en');
  };

  const isHomePage = location.pathname === '/';

  const navItems = [
    { key: 'nav.home', href: '/', isLink: true },
    { key: 'nav.cakes', href: '/cakes', isLink: true },
    { key: 'nav.gallery', href: '/gallery', isLink: true },
    { key: 'nav.custom', href: '/custom-order', isLink: true },
    { key: 'nav.about', href: isHomePage ? '#about' : '/#about', isLink: !isHomePage },
    { key: 'nav.contact', href: isHomePage ? '#contact' : '/#contact', isLink: !isHomePage },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-20 px-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" onClick={handleNavClick}>
              <Logo size="md" showText={true} />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden lg:flex items-center gap-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {navItems.map((item) => (
              item.isLink ? (
                <Link
                  key={item.key}
                  to={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium"
                >
                  {t(item.key)}
                </Link>
              ) : (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium"
                >
                  {t(item.key)}
                </a>
              )
            ))}
          </motion.div>

          {/* Right Side */}
          <motion.div
            className="flex items-center gap-3 sm:gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border hover:border-primary/50 transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">
                {language === 'en' ? 'বাং' : 'EN'}
              </span>
            </button>

            {/* Order Button - Desktop */}
            <Link
              to="/custom-order"
              className="hidden sm:flex btn-primary text-sm"
            >
              {t('nav.order')}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-background border-t border-border"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item, index) => (
                  item.isLink ? (
                    <motion.div key={item.key}>
                      <Link
                        to={item.href}
                        onClick={handleNavClick}
                        className="block py-3 px-4 rounded-lg hover:bg-muted transition-colors font-medium"
                      >
                        {t(item.key)}
                      </Link>
                    </motion.div>
                  ) : (
                    <motion.a
                      key={item.key}
                      href={item.href}
                      onClick={handleNavClick}
                      className="block py-3 px-4 rounded-lg hover:bg-muted transition-colors font-medium"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {t(item.key)}
                    </motion.a>
                  )
                ))}
                
                {/* Terms link in mobile */}
                <motion.div>
                  <Link
                    to="/terms"
                    onClick={handleNavClick}
                    className="block py-3 px-4 rounded-lg hover:bg-muted transition-colors font-medium text-muted-foreground"
                  >
                    {t('nav.terms')}
                  </Link>
                </motion.div>

                <motion.div className="pt-2">
                  <Link
                    to="/custom-order"
                    onClick={handleNavClick}
                    className="block btn-primary text-center"
                  >
                    {t('nav.order')}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
