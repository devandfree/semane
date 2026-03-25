import { ReactNode } from 'react';
import { Globe, Zap, Layers, Briefcase } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  link: string;
  tags: string[];
  image?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: ReactNode;
}

export const PROJECTS: Project[] = [
  {
    title: "Kyros",
    description: "Expert en conseil et accompagnement pour le choix de solutions logicielles adaptées aux PME.",
    link: "https://kyros-ec.vercel.app/",
    tags: ["Conseil", "SaaS", "PME"]
  },
  {
    title: "PromptArchitect",
    description: "Plateforme pour structurer vos idées, définir votre design et générer des prompts optimisés pour Lovable, Google AI Studio, Bolt, v0, etc.",
    link: "https://prompt-architect-roan.vercel.app/",
    tags: ["IA", "Productivity", "Design"]
  },
  {
    title: "Santé & Sourire",
    description: "Cabinet de soins dentaire ultra moderne et nouvelle génération.",
    link: "https://sourire-sante.vercel.app",
    tags: ["Santé", "Moderne", "Web"]
  }
];

export const SERVICES: Service[] = [
  {
    title: "Sites Web Haute-Performance",
    description: "Conception de sites vitrines modernes qui captent l'attention et convertissent vos visiteurs en clients fidèles.",
    icon: <Globe className="w-6 h-6" />
  },
  {
    title: "MVP & SaaS sur Mesure",
    description: "Lancez votre produit digital en un temps record pour valider votre marché et générer vos premiers revenus sans attendre.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Automatisation & IA Stratégique",
    description: "Boostez votre productivité et réduisez vos coûts opérationnels en intégrant l'IA et le No-Code au cœur de votre business.",
    icon: <Layers className="w-6 h-6" />
  },
  {
    title: "Conseil & Accompagnement Logiciel",
    description: "Expertise stratégique pour le choix et l'implémentation de solutions logicielles adaptées aux besoins spécifiques des PME.",
    icon: <Briefcase className="w-6 h-6" />
  }
];
