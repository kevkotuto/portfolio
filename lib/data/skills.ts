export type SkillLevel = "expert" | "avance" | "intermediaire";

export type Skill = {
  name: string;
  level: SkillLevel;
  years: number;
  category: SkillCategory;
};

export type SkillCategory =
  | "frontend"
  | "backend"
  | "mobile"
  | "ai"
  | "devops"
  | "database"
  | "payment"
  | "tools";

export const skills: Skill[] = [
  // Frontend
  { name: "TypeScript", level: "expert", years: 5, category: "frontend" },
  { name: "JavaScript", level: "expert", years: 7, category: "frontend" },
  { name: "Next.js", level: "expert", years: 4, category: "frontend" },
  { name: "React", level: "expert", years: 5, category: "frontend" },
  { name: "Tailwind CSS", level: "expert", years: 4, category: "frontend" },
  { name: "shadcn/ui", level: "expert", years: 2, category: "frontend" },
  { name: "Framer Motion", level: "avance", years: 3, category: "frontend" },
  { name: "HTML / CSS", level: "expert", years: 8, category: "frontend" },

  // Backend
  { name: "Node.js", level: "expert", years: 6, category: "backend" },
  { name: "NestJS", level: "expert", years: 3, category: "backend" },
  { name: "Express", level: "expert", years: 5, category: "backend" },
  { name: "Python", level: "avance", years: 4, category: "backend" },
  { name: "REST API", level: "expert", years: 6, category: "backend" },
  { name: "WebSocket", level: "avance", years: 3, category: "backend" },
  { name: "SOAP / Dynamics NAV", level: "intermediaire", years: 2, category: "backend" },

  // Mobile
  { name: "React Native", level: "expert", years: 4, category: "mobile" },
  { name: "Expo", level: "expert", years: 3, category: "mobile" },
  { name: "Swift / SwiftUI", level: "intermediaire", years: 1, category: "mobile" },

  // AI
  { name: "LLM / RAG", level: "avance", years: 2, category: "ai" },
  { name: "LangChain", level: "avance", years: 2, category: "ai" },
  { name: "Vector DB / pgvector", level: "avance", years: 1, category: "ai" },
  { name: "TensorFlow", level: "intermediaire", years: 2, category: "ai" },

  // DevOps
  { name: "Docker", level: "expert", years: 4, category: "devops" },
  { name: "Nginx", level: "expert", years: 5, category: "devops" },
  { name: "PM2", level: "expert", years: 5, category: "devops" },
  { name: "Linux / Ubuntu", level: "expert", years: 6, category: "devops" },
  { name: "GitHub Actions", level: "avance", years: 3, category: "devops" },
  { name: "VPS Management", level: "expert", years: 5, category: "devops" },

  // Database
  { name: "PostgreSQL", level: "expert", years: 5, category: "database" },
  { name: "MongoDB", level: "expert", years: 4, category: "database" },
  { name: "Redis", level: "avance", years: 3, category: "database" },
  { name: "MySQL", level: "avance", years: 5, category: "database" },
  { name: "Elasticsearch", level: "avance", years: 2, category: "database" },
  { name: "Prisma", level: "avance", years: 2, category: "database" },

  // Payments
  { name: "Wave Mobile Money", level: "expert", years: 3, category: "payment" },
  { name: "CinetPay", level: "avance", years: 2, category: "payment" },
  { name: "Orange Money", level: "avance", years: 2, category: "payment" },
  { name: "Stripe", level: "avance", years: 3, category: "payment" },

  // Tools / Misc
  { name: "Git", level: "expert", years: 8, category: "tools" },
  { name: "Arduino / ESP32", level: "avance", years: 4, category: "tools" },
  { name: "Cloudinary", level: "avance", years: 3, category: "tools" },
  { name: "Nodemailer", level: "expert", years: 4, category: "tools" },
  { name: "Figma", level: "avance", years: 4, category: "tools" },
];

export const categoryLabels: Record<SkillCategory, string> = {
  frontend: "Frontend",
  backend: "Backend",
  mobile: "Mobile",
  ai: "IA",
  devops: "DevOps & Infra",
  database: "Bases de données",
  payment: "Paiements",
  tools: "Outils",
};

export const skillsByCategory = skills.reduce<Record<SkillCategory, Skill[]>>(
  (acc, s) => {
    if (!acc[s.category]) acc[s.category] = [];
    acc[s.category].push(s);
    return acc;
  },
  {} as Record<SkillCategory, Skill[]>
);
