import type { NavItem, SkillCategory, ContactDetail } from "../types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre Mí", href: "#sobre-mi" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    iconName: "layers",
    glow: "hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]",
    skills: [
      { name: "React", level:'intermediate', color: "bg-blue-500" },
      { name: "TypeScript", level: 'intermediate', color: "bg-indigo-500" },
      { name: "JavaScript", level: 'intermediate', color: "bg-yellow-500" },
      { name: "Tailwind CSS", level: 'intermediate', color: "bg-sky-400" },
      { name: "HTML5 & CSS3", level: 'intermediate', color: "bg-orange-500" },
    ],
  },
  {
    title: "Backend Development",
    iconName: "cpu",
    glow: "hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]",
    skills: [
      { name: "Node.js", level: 'basic', color: "bg-green-500" },
      { name: "Java", level: 'intermediate', color: "bg-gray-400" },
      { name: "SpringBoot", level: 'intermediate', color: "bg-blue-600" },
      { name: "REST APIs", level: 'basic', color: "bg-teal-500" },
    ],
  },
  {
    title: "Base de Datos & Herramientas",
    iconName: "wrench",
    glow: "hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]",
    skills: [
      { name: "MySQL", level: 'intermediate', color: "bg-cyan-600" },
      { name: "Postman", level: 'intermediate', color: "bg-orange-400" },
    ],
  },
];

export const CONTACT_DETAILS: ContactDetail[] = [
  {
    iconName: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/joacodev",
    href: "https://linkedin.com/in/joacodev",
  },
  {
    iconName: "github",
    label: "GitHub",
    value: "github.com/joaquinDev22",
    href: "https://github.com/joaquinDev22",
  },
  {
    iconName: "mapPin",
    label: "Ubicación",
    value: "Mar del Plata, Buenos Aires, Argentina",
    href: "#",
  },
];

export const HERO_CODE_SNIPPET = `const developer = {
  name: "JoacoDev",
  role: "Fullstack Developer",
  skills: ["React", "TypeScript", "Node.js", "TailwindCSS", "RESTful APIs"],
  passion: "Construir experiencias web increíbles",
  hiringStatus: "Disponible para nuevos desafíos"
};`;
