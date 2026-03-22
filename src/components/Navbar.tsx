import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { Sun, Moon, Menu, X, ArrowLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navLinks = [
    { name: 'Accueil', href: isHomePage ? '#home' : '/#home' },
    { name: 'Services', href: isHomePage ? '#services' : '/#services' },
    { name: 'Méthode', href: isHomePage ? '#process' : '/#process' },
    { name: 'Réalisations', href: isHomePage ? '#projects' : '/#projects' },
    { name: 'FAQ', href: isHomePage ? '#faq' : '/#faq' },
    { name: 'Contact', href: isHomePage ? '#contact' : '/#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-left"
        style={{ scaleX }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-primary">semane<span className="text-secondary dark:text-accent">.</span></span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {!isHomePage && (
              <Link to="/" className="text-zinc-600 dark:text-zinc-300 hover:text-primary dark:hover:text-primary transition-colors font-medium flex items-center mr-4">
                <ArrowLeft size={18} className="mr-2" /> Accueil
              </Link>
            )}
            {isHomePage && navLinks.map((link, i) => (
              <motion.a 
                key={link.name} 
                href={link.href} 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-zinc-600 dark:text-zinc-300 hover:text-primary dark:hover:text-primary transition-colors font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </motion.a>
            ))}
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-zinc-600 dark:text-zinc-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {isHomePage ? navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-zinc-600 dark:text-zinc-300 hover:text-primary dark:hover:text-primary"
                >
                  {link.name}
                </a>
              )) : (
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-zinc-600 dark:text-zinc-300 hover:text-primary dark:hover:text-primary"
                >
                  Retour à l'accueil
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
