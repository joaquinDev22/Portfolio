import type { TechCategory, TechSkill, SoftSkill } from "../types/skillsType"

export const techCategories: TechCategory[] = [
  "Frontend",
  "Backend",
  "Database",
  "Tools"
]

export const techStack: TechSkill[] = [
  // Frontend
  { icon:'./icons/AngularIcon.png', name: "Angular v22", category: "Frontend" },
  { icon:'./icons/ReactIcon.png', name: "React 19", category: "Frontend" },
  { icon:'./icons/TypescriptIcon.png', name: "TypeScript 7.0", category: "Frontend" },
  { icon:'./icons/TailwindIcon.png', name: "Tailwind CSS v4", category: "Frontend" },
  { icon:'./icons/JavaScriptIcon.png', name: "JavaScript ES6+", category: "Frontend" },
  { icon:'./icons/HTML5Icon.png', name: "HTML5", category: "Frontend" },
  { icon:'./icons/CSS3Icon.png', name: "CSS3", category: "Frontend" },

  // Backend
  { icon:'./icons/NodeJSIcon.png', name: "Node.js v26.8.2", category: "Backend" },
  { icon:'./icons/SpringBootIcon.png', name: "SpringBoot 4.1", category: "Backend" },
  { icon:'./icons/JavaIcon.png', name: "Java 26", category: "Backend" },
  { icon:'./icons/CIcon.png', category: "Backend" },

  // Database
  { icon:'./icons/MySqlIcon.png', name: "MySQL Workbench", category: "Database" },

  // Tools
  { icon:'./icons/GithubIcon.png', name: "Git / GitHub", category: "Tools" },
  { icon:'./icons/PostmanIcon.png', name: "Postman", category: "Tools" },
  { icon:'./icons/MavenIcon.png', name: "Maven", category: "Tools" },
  { icon:'./icons/AntigravityIcon.png', name: "Antigravity", category: "Tools" }
]

export const softSkills: SoftSkill[] = [
  "Metodologías Ágiles (Scrum / Kanban) y Git Flow",
  "Documentación Técnica y Claridad en Requerimientos",
  "Buenas Prácticas, Clean Code y Code Reviews",
  "Capacidad de Aprendizaje Autodidacta y Adaptabilidad",
  "Pensamiento Crítico",
  "Proactividad"
]

