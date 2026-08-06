import type { Project } from "../types";

export const projectsData: Project[] = [
  {
    title: "Plataforma de Empleos - WorkLink",
    category: "fullstack",
    description: "Plataforma de empleos freelance y tradicional desarrollada como proyecto académico final de la UTN. Integra autenticación de usuarios, pasarela de pago y sección de bootcamps.",
    longDescription: "WorkLink es una plataforma fullstack completa desarrollada como proyecto final académico en la UTN. Permite a usuarios registrarse como empleadores o postulantes, publicar ofertas de trabajo, aplicar a posiciones y gestionar bootcamps de capacitación. Cuenta con autenticación segura con JWT, integración con pasarela de pagos para planes premium, panel de administración, y un sistema de notificaciones en tiempo real. El backend fue construido con Java Spring Boot exponiendo una API REST, mientras que el frontend consume dicha API con React + TypeScript.",
    tags: ["React", "TypeScript", "Node.js", "Java - SpringBoot", "MySQL", "Tailwind CSS"],
    githubFrontUrl: "https://github.com/joaquinDev22/Proyecto-Final-Front-End",
    githubBackUrl: "https://github.com/joaquinDev22/Proyecto-Final-Progra-3",
    liveUrl: "https://proyect-worklink.netlify.app",
    imageColor: "from-blue-600/40 via-indigo-600/40 to-slate-900",
    image: "/WorkLink.png",
    images: ["/WorkLink.png"]
  },
  {
    title: "GuitarLA - Tienda Virtual E-Commerce",
    category: "frontend",
    description: "Tienda virtual interactiva de guitarras e instrumentos musicales con carrito de compras completo, actualización dinámica de cantidades y persistencia en LocalStorage.",
    longDescription: "GuitarLA es una tienda e-commerce de instrumentos musicales con una experiencia de usuario fluida. El carrito de compras permite agregar, eliminar y ajustar cantidades de productos con actualizaciones dinámicas del total. Los datos del carrito persisten entre sesiones gracias a LocalStorage. La arquitectura de la aplicación fue diseñada con useReducer para un manejo de estado predecible y escalable. El diseño es completamente responsivo y utiliza Tailwind CSS para una apariencia moderna.",
    tags: ["React 19", "TypeScript", "useReducer", "Tailwind CSS", "LocalStorage"],
    githubFrontUrl: "https://github.com/joaquinDev22/GuitarLa-Tienda-Virtual-UseReducer",
    liveUrl: "https://guitarla-by-joacodev.netlify.app/",
    imageColor: "from-amber-600/40 via-orange-600/40 to-slate-900",
    image: "/guitarLa.png",
    images: ["/guitarLa.png"]
  },
  {
    title: "Control de Gastos & Presupuestos",
    category: "frontend",
    description: "Aplicación de gestión financiera personal para el seguimiento de presupuestos, filtrado por categorías de gastos y balance dinámico en tiempo real utilizando Context API.",
    longDescription: "Esta aplicación de finanzas personales permite al usuario definir un presupuesto inicial y registrar gastos categorizados (alimentación, transporte, ocio, salud, etc.). El balance se actualiza en tiempo real mostrando cuánto resta del presupuesto. Se implementó Context API junto con useReducer para una gestión de estado global robusta. Incluye filtrado por categorías, edición y eliminación de gastos, y una barra de progreso visual del presupuesto consumido. Los datos persisten en LocalStorage entre sesiones.",
    tags: ["React", "TypeScript", "Context API", "useReducer", "Tailwind CSS"],
    githubFrontUrl: "https://github.com/joaquinDev22/Control-de-gastos-presupuestos-e-ingresos-context-API",
    liveUrl: "https://budget-tracker-by-joaquindev22.netlify.app/",
    imageColor: "from-emerald-600/40 via-teal-600/40 to-slate-900",
    image:"/budgetTracker.png",
    images: ["/budgetTracker.png"]
  },
  {
    title: "Contador de Calorías & Fitness Tracker",
    category: "frontend",
    description: "Rastreador de salud e ingesta calórica diaria. Permite registrar ejercicios, comidas y calcular el balance calórico positivo o negativo de forma interactiva.",
    longDescription: "Fitness Tracker es una aplicación de salud que permite al usuario registrar tanto los alimentos consumidos como los ejercicios realizados durante el día. Calcula automáticamente el balance calórico (calorías consumidas vs. quemadas) mostrando si hay superávit o déficit. Usa Custom Hooks para encapsular la lógica de estado y LocalStorage para persistencia. La interfaz es limpia e intuitiva, con formularios de ingreso rápido para alimentos y ejercicios con sus valores calóricos correspondientes.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Custom Hooks", "LocalStorage"],
    githubFrontUrl: "https://github.com/joaquinDev22/Contador-De-Calorias",
    liveUrl: "https://github.com/joaquinDev22/Contador-De-Calorias",
    imageColor: "from-purple-600/40 via-indigo-600/40 to-slate-900"
  },
  {
    title: "Calculadora de Propinas & Consumos",
    category: "frontend",
    description: "Herramienta de cálculo instantáneo para órdenes de restaurantes y propinas por porcentaje, aplicando arquitectura basada en el hook useReducer.",
    longDescription: "Una app utilitaria diseñada para agilizar el proceso de cobro en restaurantes. Permite agregar ítems a una orden, seleccionar el porcentaje de propina deseado (10%, 20%, 50%) y ver al instante el subtotal, el monto de la propina y el total final. El estado global es manejado con useReducer siguiendo el patrón de reducers y actions, garantizando una arquitectura limpia y predecible. Incluye la funcionalidad de resetear la orden completa con un solo click.",
    tags: ["React", "TypeScript", "useReducer", "Tailwind CSS"],
    githubFrontUrl: "https://github.com/joaquinDev22/Calculadora-de-Propinas-useReducer",
    liveUrl: "https://github.com/joaquinDev22/Calculadora-de-Propinas-useReducer",
    imageColor: "from-sky-600/40 via-blue-600/40 to-slate-900"
  }
];