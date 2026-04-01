import React, { useState, useEffect } from 'react';
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

const SectionReveal = ({ children, id, className }: { children: React.ReactNode; id?: string; className?: string }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

const Hero = () => {
  return (
    <section id="home" className="pt-48 pb-20 px-4 overflow-hidden relative">
      <div className="absolute inset-0 bg-grid -z-10" />
      <div className="max-w-7xl mx-auto relative">
        {/* Background Decorative Elements */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-20 -left-20 w-64 h-64 bg-primary/30 rounded-full blur-[100px] -z-10"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-secondary/30 rounded-full blur-[100px] -z-10"
        />

        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20 
            }}
            className="inline-flex items-center px-4 py-1.5 rounded-full glass text-primary text-sm font-medium mb-8 shadow-xl shadow-primary/5"
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mr-2"
            >
              <Zap size={14} fill="currentColor" />
            </motion.div>
            Product Builder
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-zinc-900 dark:text-white mb-8 font-display leading-[0.9]"
          >
            Transformez vos idées en <span className="text-gradient">produits rentables.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-2xl text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-12 leading-relaxed"
          >
            Expert Product Builder : je combine No-Code et IA pour lancer vos produits digitaux en un temps record.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <motion.a 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className="px-10 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-2xl shadow-primary/20 text-lg"
            >
              Voir mes réalisations
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="px-10 py-4 glass text-zinc-900 dark:text-white rounded-2xl font-bold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all text-lg"
            >
              Lancer mon projet
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <SectionReveal id="about" className="py-32 px-4 bg-zinc-50 dark:bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 aspect-square">
              <img 
                src="/profil.jpg" 
                alt="Steve Emane" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-primary/10 rounded-full -z-10 animate-pulse" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-8 font-display">
              À propos de <span className="text-gradient">moi</span>
            </h2>
            <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <p>
                Passionné par la création de produits digitaux, j'accompagne les entrepreneurs et les entreprises dans la transformation de leurs idées en solutions concrètes et rentables.
              </p>
              <p>
                Mon approche repose sur l'utilisation stratégique du <span className="text-primary font-bold">No-Code</span> et de l'<span className="text-secondary dark:text-accent font-bold">Intelligence Artificielle</span>. Cette combinaison me permet de construire des produits robustes, scalables et esthétiques en une fraction du temps requis par le développement traditionnel.
              </p>
              <p>
                Que vous ayez besoin d'un MVP (Minimum Viable Product) pour tester votre marché ou d'une application métier complexe pour automatiser vos processus, je mets mon expertise à votre service pour garantir un lancement réussi et un ROI optimal.
              </p>
            </div>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <div className="px-6 py-3 rounded-2xl glass border-primary/20 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                <span className="font-bold text-zinc-900 dark:text-white">Disponible pour de nouveaux projets</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionReveal>
  );
};

const Services = () => {
  return (
    <SectionReveal id="services" className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6 font-display">Mes Services</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
            Une approche agile pour transformer vos idées en produits numériques concrets.
          </p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-6 gap-6"
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className={`p-10 rounded-3xl glass hover:border-primary/50 transition-all group shadow-sm hover:shadow-2xl flex flex-col ${
                index === 0 ? 'md:col-span-4' : index === 1 ? 'md:col-span-2' : 'md:col-span-3'
              }`}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 font-display">{service.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionReveal>
  );
};

const Projects = () => {
  // Only show first 3 projects on landing page
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <SectionReveal id="projects" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6 font-display">Mes Réalisations</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
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
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Link 
            to="/projects"
            className="inline-flex items-center px-10 py-5 glass text-zinc-900 dark:text-white rounded-2xl font-bold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all text-lg"
          >
            Voir tous mes projets <ExternalLink size={22} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </SectionReveal>
  );
};

const Process = () => {
  const steps = [
    {
      title: "1. Stratégie & Design",
      description: "On définit ensemble vos objectifs business pour concevoir une solution qui convertit réellement.",
      icon: <Search className="w-6 h-6" />
    },
    {
      title: "2. Build (No-Code & IA)",
      description: "Je développe votre produit en utilisant les meilleurs outils pour une mise sur le marché immédiate.",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "3. Lancement & Scale",
      description: "Mise en ligne, tests utilisateurs et optimisation continue pour garantir votre croissance.",
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  return (
    <SectionReveal id="process" className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">Votre Succès en 3 Étapes</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Une méthodologie éprouvée pour transformer vos ambitions en produits digitaux performants.
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
    </SectionReveal>
  );
};

const TechStack = () => {
  const tools = [
    "Lovable", "Bolt", "v0", "Google AI Studio", "Tailwind CSS", "React", "Framer Motion", "Lucide",
    "Lovable", "Bolt", "v0", "Google AI Studio", "Tailwind CSS", "React", "Framer Motion", "Lucide"
  ];

  return (
    <section className="py-16 border-y border-zinc-200 dark:border-zinc-800 overflow-hidden bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">Ma Stack Technique</p>
      </div>
      <div className="relative flex overflow-x-hidden">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-16 md:gap-32 items-center py-4"
        >
          {tools.map((tool, i) => (
            <span key={`${tool}-${i}`} className="text-2xl md:text-4xl font-bold text-zinc-300 dark:text-zinc-800 hover:text-primary transition-colors cursor-default font-display">
              {tool}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "C'est quoi un Product Builder ?",
      answer: "Un Product Builder est un expert hybride qui combine vision produit et maîtrise technique. J'utilise le No-Code et l'IA pour concevoir et lancer des solutions complètes en un temps record, là où une agence traditionnelle mettrait des mois."
    },
    {
      question: "Pourquoi choisir le No-Code plutôt que le code traditionnel ?",
      answer: "Pour gagner un avantage compétitif majeur : la vitesse. Le No-Code permet de tester votre marché 10x plus vite et à moindre coût, tout en offrant une scalabilité robuste pour accompagner votre croissance."
    },
    {
      question: "Est-ce que je serai propriétaire de mon produit ?",
      answer: "Absolument. Une fois le projet livré, je vous transfère la propriété totale de tous les comptes et outils. Vous êtes 100% autonome et maître de votre technologie."
    },
    {
      question: "Proposez-vous un accompagnement après le lancement ?",
      answer: "Oui, je ne vous laisse pas seul. Je propose des forfaits de maintenance et d'évolution pour ajuster votre produit en fonction des retours de vos utilisateurs et garantir sa pérennité."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionReveal id="faq" className="py-32 px-4">
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
    </SectionReveal>
  );
};

const Contact = () => {
  return (
    <SectionReveal id="contact" className="py-32 bg-secondary dark:bg-zinc-950 text-white px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10 -z-10" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Donnez vie à votre vision dès aujourd'hui</h2>
            <p className="text-zinc-300 text-lg mb-10">
              Vous avez une idée de site web ou d'application ? Ne la laissez pas dormir. Contactez-moi directement pour en discuter.
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
    </SectionReveal>
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
        <About />
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
