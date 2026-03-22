import { ReactNode } from 'react';
import { Globe, Zap, Layers } from 'lucide-react';

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
  },
  {
    title: "EcoTrack",
    description: "Solution de suivi d'empreinte carbone pour les entreprises industrielles.",
    link: "#",
    tags: ["Écologie", "B2B", "Dashboard"]
  },
  {
    title: "FitFlow",
    description: "Application mobile de coaching sportif personnalisé avec IA.",
    link: "#",
    tags: ["Mobile", "IA", "Fitness"]
  },
  {
    title: "LuxeStay",
    description: "Plateforme de réservation de villas de luxe avec conciergerie intégrée.",
    link: "#",
    tags: ["Voyage", "Luxe", "Booking"]
  }
];

export const SERVICES: Service[] = [
  {
    title: "Sites Web Professionnels",
    description: "Des sites vitrines modernes et performants pour booster votre présence en ligne.",
    icon: <Globe className="w-6 h-6" />
  },
  {
    title: "Mini-Applications Web",
    description: "Des outils internes ou SaaS spécifiques à vos besoins métiers, développés en un temps record.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Solutions No-Code & IA",
    description: "Optimisation de vos processus grâce aux meilleurs outils du marché pour une agilité maximale.",
    icon: <Layers className="w-6 h-6" />
  }
];
