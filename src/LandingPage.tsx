import { useState, useEffect } from 'react';
import { 
  Phone, 
  ExternalLink, 
  MessageSquare,
  Zap,
  CheckCircle2,
  Linkedin,
  Twitter,
  Github,
  ChevronDown,
  ChevronUp,
  Cpu,
  Rocket,
  Search
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import { PROJECTS, SERVICES } from './data';

// --- Animation Variants ---
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Background Decorative Elements */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10"
        />

        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20 
            }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <Zap size={14} className="mr-2" />
            Product Builder
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6"
          >
            Transformez vos idées en produits réels, <span className="text-primary">10x plus vite.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-2xl text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed"
          >
            J'aide les PME et Startups à lancer leurs solutions web en un temps record grâce à la puissance du No-Code et de l'IA.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className="px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              Voir mes réalisations
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="px-8 py-4 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white rounded-xl font-semibold hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all"
            >
              Me contacter
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-zinc-50 dark:bg-zinc-900/50 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">Mes Services</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Une approche agile pour transformer vos idées en produits numériques concrets.
          </p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-primary dark:hover:border-primary transition-all group shadow-sm hover:shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">{service.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Projects = () => {
  // Only show first 3 projects on landing page
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <section id="projects" className="py-20 bg-zinc-50 dark:bg-zinc-900/50 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">Mes Réalisations</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Découvrez quelques-uns des projets que j'ai réalisés récemment.
          </p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeInUp}
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
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link 
            to="/projects"
            className="inline-flex items-center px-8 py-4 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white rounded-xl font-semibold hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all border border-zinc-200 dark:border-zinc-700"
          >
            Voir tous mes projets <ExternalLink size={20} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      title: "1. Stratégie & Design",
      description: "On définit ensemble vos objectifs, votre cible et l'architecture de votre solution.",
      icon: <Search className="w-6 h-6" />
    },
    {
      title: "2. Build (No-Code & IA)",
      description: "Je développe votre produit en utilisant les meilleurs outils pour une rapidité maximale.",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "3. Lancement & Itération",
      description: "Mise en ligne, tests utilisateurs et ajustements pour garantir un produit parfait.",
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  return (
    <section id="process" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">Ma Méthodologie</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Comment je parviens à livrer des produits de qualité 10x plus vite.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-zinc-200 dark:bg-zinc-800 -translate-y-1/2 z-0"></div>
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center bg-white dark:bg-zinc-950 p-6"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-6 shadow-lg shadow-primary/30"
              >
                {step.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">{step.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechStack = () => {
  const tools = [
    "Lovable", "Bolt", "v0", "Google AI Studio", "Tailwind CSS", "React", "Framer Motion", "Lucide"
  ];

  return (
    <section className="py-12 border-y border-zinc-200 dark:border-zinc-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-zinc-400">Ma Stack Technique</p>
      </div>
      <motion.div 
        animate={{ x: [0, -100, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex flex-nowrap justify-center gap-8 md:gap-16 px-4 whitespace-nowrap"
      >
        {tools.map((tool) => (
          <span key={tool} className="text-xl md:text-2xl font-bold text-zinc-300 dark:text-zinc-700 hover:text-primary transition-colors cursor-default">
            {tool}
          </span>
        ))}
      </motion.div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "C'est quoi un Product Builder ?",
      answer: "Un Product Builder est un profil hybride entre le développeur et le product manager. J'utilise des outils No-Code et l'IA pour concevoir, designer et lancer des produits numériques complets de manière ultra-rapide."
    },
    {
      question: "Pourquoi choisir le No-Code plutôt que le code traditionnel ?",
      answer: "Pour la vitesse et le coût. Le No-Code permet de lancer un produit en quelques jours au lieu de quelques mois, tout en gardant une grande flexibilité pour les évolutions futures."
    },
    {
      question: "Est-ce que je serai propriétaire de mon site ?",
      answer: "Absolument. Une fois le projet terminé, je vous transfère la propriété totale de tous les outils et comptes utilisés."
    },
    {
      question: "Proposez-vous de la maintenance ?",
      answer: "Oui, je propose des forfaits d'accompagnement pour faire évoluer votre produit après son lancement initial."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">Questions Fréquentes</h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Tout ce que vous devez savoir pour démarrer notre collaboration.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
              >
                <span className="font-bold text-zinc-900 dark:text-white">{faq.question}</span>
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-zinc-600 dark:text-zinc-400 border-t border-zinc-200 dark:border-zinc-800">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary dark:bg-zinc-950 text-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Prêt à lancer votre projet ?</h2>
            <p className="text-zinc-300 text-lg mb-10">
              Vous avez une idée de site web ou d'application ? Contactez-moi directement pour en discuter.
            </p>
            
            <div className="space-y-6">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-zinc-400">Ligne directe</p>
                  <a href="tel:+237622186389" className="text-xl font-semibold hover:text-primary transition-colors">+237 622 18 63 89</a>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 text-accent flex items-center justify-center mr-4">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-sm text-zinc-400">WhatsApp</p>
                  <a href="https://wa.me/237622186389" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold hover:text-accent transition-colors">Discuter sur WhatsApp</a>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-zinc-900 p-8 md:p-12 rounded-3xl text-zinc-900 dark:text-white shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-8">Pourquoi travailler avec moi ?</h3>
            <ul className="space-y-6">
              {[
                "Rapidité d'exécution (10x plus vite)",
                "Expertise No-Code & IA",
                "Approche orientée business et ROI",
                "Accompagnement personnalisé",
                "Solutions évolutives et maintenables"
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircle2 className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-zinc-200 dark:border-zinc-800 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-bold text-primary"
        >
          semane<span className="text-secondary dark:text-accent">.</span>
        </motion.div>
        <div className="text-zinc-500 dark:text-zinc-400 text-sm">
          © {new Date().getFullYear()} Steve Emane. Tous droits réservés.
        </div>
        <div className="flex space-x-6">
          <motion.a 
            whileHover={{ y: -5, color: '#ff8040' }}
            href="https://linkedin.com/in/steveemane" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-zinc-400 transition-colors"
          >
            <Linkedin size={20} />
          </motion.a>
          <motion.a 
            whileHover={{ y: -5, color: '#ff8040' }}
            href="https://twitter.com/steveemane" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-zinc-400 transition-colors"
          >
            <Twitter size={20} />
          </motion.a>
          <motion.a 
            whileHover={{ y: -5, color: '#ff8040' }}
            href="https://github.com/steveemane" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-zinc-400 transition-colors"
          >
            <Github size={20} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default function LandingPage() {
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
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-primary/30"
    >
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <TechStack />
        <Services />
        <Process />
        <Projects />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
}
