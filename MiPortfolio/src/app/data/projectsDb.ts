import type { Project } from "../types/projectType";

export const projectsDb: Project[] = [
  {
    id: 1,
    nombreProyecto: "Contador de Calorías",
    tecnologias: ["React", "TypeScript", "Tailwind CSS"],
    imagen1: "/projects/calorias.png",
    descripcion: "Aplicación para conteo de calorías y consumo diario con useReducer.",
    repoUrl: "https://github.com/...",
    demoUrl: "https://..."
  },
  {
    id: 2,
    nombreProyecto: "Mi Proyecto Final",
    tecnologias: ["Angular", "SpringBoot", "MySQL"],
    imagen1: "/projects/final.png",
    descripcion: "Sistema empresarial fullstack con SpringBoot y base de datos relacional.",
    repoUrl: "https://github.com/..."
  },
  {
    id: 3,
    nombreProyecto: "Mi Proyecto Final",
    tecnologias: ["Angular", "SpringBoot", "MySQL"],
    imagen1: "/projects/final.png",
    descripcion: "Sistema empresarial fullstack con SpringBoot y base de datos relacional.",
    repoUrl: "https://github.com/..."
  }
];