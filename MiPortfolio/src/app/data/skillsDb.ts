import type { TechCategory, TechSkill, SoftSkill } from "../types/skillsType";

export const techCategories: TechCategory[] = [
  "Frontend",
  "Backend",
  "Database",
  "Tools"
];

export const techStack: TechSkill[] = [
  // Frontend
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },

  // Backend
  { name: "Node.js", category: "Backend" },
  { name: "SpringBoot", category: "Backend" },

  // Database
  { name: "MySQL", category: "Database" },

  // Tools
  { name: "Git / GitHub", category: "Tools" }
];

export const softSkills: SoftSkill[] = [
  "Trabajo en Equipo",
  "Comunicación Asertiva",
  "Resolución de Problemas",
  "Adaptabilidad & Aprendizaje Rápido",
  "Pensamiento Crítico",
  "Proactividad"
];

