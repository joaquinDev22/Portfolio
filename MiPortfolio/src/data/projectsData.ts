import type { Project } from "../types";

export const projectsData: Project[] = [
  {
    title: "Plataforma de Empleos - WorkLink",
    category: "fullstack",
    description: "Plataforma de empleos freelance y tradicional desarrollada como proyecto académico final de la UTN. Integra autenticación de usuarios, pasarela de pago y sección de bootcamps.",
    tags: ["React", "TypeScript", "Node.js", "Java - SpringBoot", "MySQL", "Tailwind CSS"],
    githubFrontUrl: "https://github.com/joaquinDev22/Proyecto-Final-Front-End",
    githubBackUrl: "https://github.com/joaquinDev22/Proyecto-Final-Progra-3",
    liveUrl: "https://proyect-worklink.netlify.app",
    imageColor: "from-blue-600/40 via-indigo-600/40 to-slate-900",
    image: "/WorkLink.png"
  },
  {
    title: "GuitarLA - Tienda Virtual E-Commerce",
    category: "frontend",
    description: "Tienda virtual interactiva de guitarras e instrumentos musicales con carrito de compras completo, actualización dinámica de cantidades y persistencia en LocalStorage.",
    tags: ["React 19", "TypeScript", "useReducer", "Tailwind CSS", "LocalStorage"],
    githubFrontUrl: "https://github.com/joaquinDev22/GuitarLa-Tienda-Virtual-UseReducer",
    liveUrl: "https://guitarla-by-joacodev.netlify.app/",
    imageColor: "from-amber-600/40 via-orange-600/40 to-slate-900",
    image: "/guitarLa.png"
  },
  {
    title: "Control de Gastos & Presupuestos",
    category: "frontend",
    description: "Aplicación de gestión financiera personal para el seguimiento de presupuestos, filtrado por categorías de gastos y balance dinámico en tiempo real utilizando Context API.",
    tags: ["React", "TypeScript", "Context API", "useReducer", "Tailwind CSS"],
    githubFrontUrl: "https://github.com/joaquinDev22/Control-de-gastos-presupuestos-e-ingresos-context-API",
    liveUrl: "https://github.com/joaquinDev22/Control-de-gastos-presupuestos-e-ingresos-context-API",
    imageColor: "from-emerald-600/40 via-teal-600/40 to-slate-900"
  },
  {
    title: "Contador de Calorías & Fitness Tracker",
    category: "frontend",
    description: "Rastreador de salud e ingesta calórica diaria. Permite registrar ejercicios, comidas y calcular el balance calórico positivo o negativo de forma interactiva.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Custom Hooks", "LocalStorage"],
    githubFrontUrl: "https://github.com/joaquinDev22/Contador-De-Calorias",
    liveUrl: "https://github.com/joaquinDev22/Contador-De-Calorias",
    imageColor: "from-purple-600/40 via-indigo-600/40 to-slate-900"
  },
  {
    title: "Calculadora de Propinas & Consumos",
    category: "frontend",
    description: "Herramienta de cálculo instantáneo para órdenes de restaurantes y propinas por porcentaje, aplicando arquitectura basada en el hook useReducer.",
    tags: ["React", "TypeScript", "useReducer", "Tailwind CSS"],
    githubFrontUrl: "https://github.com/joaquinDev22/Calculadora-de-Propinas-useReducer",
    liveUrl: "https://github.com/joaquinDev22/Calculadora-de-Propinas-useReducer",
    imageColor: "from-sky-600/40 via-blue-600/40 to-slate-900"
  }
];