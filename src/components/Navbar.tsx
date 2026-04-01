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
    { name: 'À propos', href: isHomePage ? '#about' : '/#about' },
    { name: 'Services', href: isHomePage ? '#services' : '/#services' },
    { name: 'Méthode', href: isHomePage ? '#process' : '/#process' },
    { name: 'Réalisations', href: isHomePage ? '#projects' : '/#projects' },
    { name: 'FAQ', href: isHomePage ? '#faq' : '/#faq' },
    { name: 'Contact', href: isHomePage ? '#contact' : '/#contact' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 glass rounded-2xl shadow-2xl shadow-black/5 dark:shadow-white/5">
      <motion.div 
        className="absolute bottom-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"
        style={{ scaleX }}
      />
      <div className="px-6">
        <div className="flex justify-between h-16 items-center">
          <Link 
            to="/" 
            onClick={(e) => {
              if (isHomePage) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="flex-shrink-0 flex items-center"
          >
            <span className="text-2xl font-bold text-primary font-display tracking-tight">semane<span className="text-secondary dark:text-accent">.</span></span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            {isHomePage && navLinks.map((link, i) => (
              <motion.a 
                key={link.name} 
                href={link.href} 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-zinc-600 dark:text-zinc-300 hover:text-primary dark:hover:text-primary transition-colors font-bold text-sm uppercase tracking-widest relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </motion.a>
            ))}
            <div className="h-6 w-[1px] bg-zinc-200 dark:bg-zinc-800 mx-2" />
            <motion.button 
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
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
            className="md:hidden bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border-t border-zinc-200 dark:border-zinc-800 overflow-hidden rounded-b-2xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {isHomePage ? navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-bold text-zinc-600 dark:text-zinc-300 hover:text-primary dark:hover:text-primary transition-colors border-b border-zinc-100 dark:border-zinc-900 last:border-none"
                >
                  {link.name}
                </a>
              )) : (
                <>
                  <Link
                    to="/projects"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-4 text-base font-bold text-zinc-600 dark:text-zinc-300 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    Réalisations
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
