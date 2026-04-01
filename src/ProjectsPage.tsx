import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import { PROJECTS } from './data';

export default function ProjectsPage() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-primary/30">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      <main className="pt-48 pb-20 px-4 relative">
        <div className="absolute inset-0 bg-grid -z-10" />
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-24"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white mb-8 font-display tracking-tight">Toutes mes réalisations</h1>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-xl leading-relaxed">
              Découvrez l'ensemble des produits que j'ai conçus et lancés. Chaque réalisation est le fruit d'une collaboration étroite pour transformer une idée en un produit performant.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -12 }}
                className="flex flex-col h-full rounded-3xl overflow-hidden glass hover:border-primary/50 transition-all duration-500 group shadow-lg hover:shadow-2xl"
              >
                <div className="p-10 flex-grow">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6 font-display group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-8 text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="p-10 pt-0 mt-auto">
                  <motion.a 
                    whileHover={{ x: 8 }}
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary font-bold text-lg group-hover:underline decoration-2 underline-offset-8"
                  >
                    Voir le projet <ExternalLink size={20} className="ml-2" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-32 p-16 rounded-[3rem] glass text-center relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
            <h2 className="text-4xl font-bold mb-6 font-display">Vous avez un projet en tête ?</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-10 max-w-xl mx-auto text-lg">
              Je suis toujours à la recherche de nouveaux défis. Discutons de la manière dont je peux vous aider à lancer votre solution.
            </p>
            <Link 
              to="/#contact" 
              className="px-10 py-5 bg-primary text-white rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-2xl shadow-primary/20 text-lg inline-block"
            >
              Me contacter
            </Link>
          </motion.div>
        </div>
      </main>

      <footer className="py-12 border-t border-zinc-200 dark:border-zinc-800 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <Link to="/" className="text-2xl font-bold text-primary">
            semane<span className="text-secondary dark:text-accent">.</span>
          </Link>
          <div className="text-zinc-500 dark:text-zinc-400 text-sm">
            © {new Date().getFullYear()} Steve Emane. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}
