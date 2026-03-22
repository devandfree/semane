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
      
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">Toutes mes réalisations</h1>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
              Découvrez l'ensemble des projets que j'ai conçus et lancés. Chaque réalisation est le fruit d'une collaboration étroite pour transformer une idée en un produit performant.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="flex flex-col h-full rounded-2xl overflow-hidden bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="p-8 flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">{project.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                    {project.description}
                  </p>
                </div>
                <div className="p-8 pt-0 mt-auto">
                  <motion.a 
                    whileHover={{ x: 5 }}
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary font-semibold hover:underline"
                  >
                    Voir le projet <ExternalLink size={16} className="ml-2" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-20 p-12 rounded-3xl bg-primary/5 border border-primary/10 text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Vous avez un projet en tête ?</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-xl mx-auto">
              Je suis toujours à la recherche de nouveaux défis. Discutons de la manière dont je peux vous aider à lancer votre solution.
            </p>
            <Link 
              to="/#contact" 
              className="px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
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
