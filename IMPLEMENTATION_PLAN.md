# Plan de Implementación: Arquitectura de Navegación Completa (Mobile Drawer + WebMenu)

Este documento detalla la arquitectura y los pasos para estructurar la navegación completa de tu portfolio:
1. **Menú Móvil (*Mobile Drawer*)**: Se desliza suavemente de derecha a izquierda con fondo oscuro translúcido (*backdrop*), gestionado mediante **React Context API** y el hook **`useMenu`**.
2. **Menú de Escritorio (*WebMenu*)**: Barra de navegación horizontal visible en pantallas medianas y grandes (`>= 640px`).
3. **Navegación Limpia**: Desplazamiento suave con `scrollIntoView({ behavior: 'smooth' })` manteniendo la URL limpia en `localhost:5173/` (sin `#` en la barra de direcciones).

---

## 1. Diagrama de la Arquitectura

```mermaid
flowchart TD
    A["App.tsx (envuelto en MenuProvider)"] --> B["Header.tsx"]
    A --> C["MobileMenu.tsx (Drawer Lateral)"]
    
    subgraph Estado Global (MenuContext)
        M["MenuContext (isOpen, toggleMenu, closeMenu)"]
    end
    
    B --> D["WebMenu.tsx (visible en PC: hidden sm:flex)"]
    B --> E["BurgerMenu.tsx (visible en móvil: sm:hidden)"]
    
    E -.->|toggleMenu| M
    C -.->|closeMenu| M
    M -.->|isOpen| E
    M -.->|isOpen| C
```

---

## 2. Componentes y Código Paso a Paso

### Paso 0: Prerrequisito indispensable de compilación

1. **En `MiPortfolio/index.html`**:
   Asegúrate de que el contenedor esté vacío:
   ```html
   <div id="root"></div>
   <script type="module" src="/src/main.tsx"></script>
   ```

2. **Crear `MiPortfolio/src/main.tsx`**:
   ```tsx
   import { StrictMode } from 'react'
   import { createRoot } from 'react-dom/client'
   import App from './app/App'
   import './app/app.css'

   createRoot(document.getElementById('root')!).render(
     <StrictMode>
       <App />
     </StrictMode>,
   )
   ```

---

### Paso 1: Crear el Contexto del Menú (`src/app/context/MenuContext.tsx`)

Crea la carpeta `src/app/context/` y el archivo `MenuContext.tsx`:

```tsx
import { createContext, useContext, useState, ReactNode } from "react";

interface MenuContextType {
  isOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  openMenu: () => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export function MenuProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);
  const openMenu = () => setIsOpen(true);

  return (
    <MenuContext.Provider value={{ isOpen, toggleMenu, closeMenu, openMenu }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu debe ser utilizado dentro de un MenuProvider");
  }
  return context;
}
```

---

### Paso 2: Botón Hamburguesa Animado (`src/app/components/ui/BurgerMenu.tsx`)

Botón con animación hacia cruz (**X**), visible únicamente en celulares (`sm:hidden`) y con `z-50` para quedar por encima del panel:

```tsx
import { useMenu } from "../../context/MenuContext";

export default function BurgerMenu() {
  const { isOpen, toggleMenu } = useMenu();

  return (
    <button
      onClick={toggleMenu}
      className="sm:hidden w-8 h-8 flex flex-col justify-center items-center cursor-pointer focus:outline-none z-50"
      aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
    >
      <span
        className={`block absolute h-1 w-6 bg-gray-200 rounded transition-all duration-300 ease-in-out ${
          isOpen ? "rotate-45" : "-translate-y-2"
        }`}
      />

      <span
        className={`block absolute h-1 w-6 bg-gray-200 rounded transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />

      <span
        className={`block absolute h-1 w-6 bg-gray-200 rounded transition-all duration-300 ease-in-out ${
          isOpen ? "-rotate-45" : "translate-y-2"
        }`}
      />
    </button>
  );
}
```

---

### Paso 3: Menú Móvil Deslizable (*Drawer*) (`src/app/components/navigation/MobileMenu.tsx`)

Panel lateral que desliza de derecha a izquierda (`translate-x-full` -> `translate-x-0`), con fondo oscuro (*backdrop*) y scroll suave sin ensuciar la URL:

```tsx
import { useState } from "react";
import { useMenu } from "../../context/MenuContext";

export default function MobileMenu() {
  const { isOpen, closeMenu } = useMenu();
  const [activeSection, setActiveSection] = useState("sobre-mi");

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    closeMenu();

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 1. Fondo oscuro semitransparente (Backdrop) */}
      <div
        onClick={closeMenu}
        className={`sm:hidden fixed inset-0 bg-black/60 backdrop-blur-xs z-30 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* 2. Panel lateral que desliza de derecha a izquierda */}
      <div
        className={`sm:hidden fixed top-0 right-0 h-full w-64 max-w-[80vw] bg-slate-900 border-l border-slate-800 p-6 z-40 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col space-y-6 mt-16 text-left">
          <button
            type="button"
            onClick={() => handleNavClick("sobre-mi")}
            className={`text-lg font-medium transition-colors text-left cursor-pointer ${
              activeSection === "sobre-mi"
                ? "text-blue-400 font-bold"
                : "text-slate-300 hover:text-white"
            }`}
          >
            Sobre mí
          </button>

          <button
            type="button"
            onClick={() => handleNavClick("habilidades")}
            className={`text-lg font-medium transition-colors text-left cursor-pointer ${
              activeSection === "habilidades"
                ? "text-blue-400 font-bold"
                : "text-slate-300 hover:text-white"
            }`}
          >
            Habilidades
          </button>

          <button
            type="button"
            onClick={() => handleNavClick("proyectos")}
            className={`text-lg font-medium transition-colors text-left cursor-pointer ${
              activeSection === "proyectos"
                ? "text-blue-400 font-bold"
                : "text-slate-300 hover:text-white"
            }`}
          >
            Proyectos
          </button>

          <button
            type="button"
            onClick={() => handleNavClick("contacto")}
            className={`text-lg font-medium transition-colors text-left cursor-pointer ${
              activeSection === "contacto"
                ? "text-blue-400 font-bold"
                : "text-slate-300 hover:text-white"
            }`}
          >
            Contacto
          </button>
        </nav>
      </div>
    </>
  );
}
```

---

### Paso 4: Menú de Escritorio (`src/app/components/navigation/WebMenu.tsx`)

Barra de navegación horizontal visible únicamente en pantallas de computadora (`hidden sm:flex`):

```tsx
import { useState } from "react";

export default function WebMenu() {
  const [activeSection, setActiveSection] = useState("sobre-mi");

  const handleNavClick = (id: string) => {
    setActiveSection(id);

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="hidden sm:flex items-center gap-6 text-sm font-medium">
      <button
        type="button"
        onClick={() => handleNavClick("sobre-mi")}
        className={`transition-colors cursor-pointer ${
          activeSection === "sobre-mi"
            ? "text-blue-400 font-bold"
            : "text-slate-300 hover:text-white"
        }`}
      >
        Sobre mí
      </button>

      <button
        type="button"
        onClick={() => handleNavClick("habilidades")}
        className={`transition-colors cursor-pointer ${
          activeSection === "habilidades"
            ? "text-blue-400 font-bold"
            : "text-slate-300 hover:text-white"
        }`}
      >
        Habilidades
      </button>

      <button
        type="button"
        onClick={() => handleNavClick("proyectos")}
        className={`transition-colors cursor-pointer ${
          activeSection === "proyectos"
            ? "text-blue-400 font-bold"
            : "text-slate-300 hover:text-white"
        }`}
      >
        Proyectos
      </button>

      <button
        type="button"
        onClick={() => handleNavClick("contacto")}
        className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
          activeSection === "contacto"
            ? "bg-blue-600 text-white font-bold"
            : "bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border border-blue-500/30"
        }`}
      >
        Contacto
      </button>
    </nav>
  );
}
```

---

### Paso 5: Encabezado Unificado (`src/app/components/staticComponents/Header.tsx`)

Combina los tres puntos de decoración, el título y la navegación responsiva (`WebMenu` en PC + `BurgerMenu` en celular):

```tsx
import BurgerMenu from "../ui/BurgerMenu";
import WebMenu from "../navigation/WebMenu";

export default function Header() {
  return (
    <header className="relative z-50 flex bg-slate-900 text-white p-4 items-center justify-between border-b border-slate-800/80"> 
      {/* 1. Círculos decorativos */}
      <div id="triple-dot-decoration" className="flex gap-2">
        <div className="w-3.5 h-3.5 bg-red-600 rounded-full"></div>
        <div className="w-3.5 h-3.5 bg-yellow-400 rounded-full"></div>
        <div className="w-3.5 h-3.5 bg-green-600 rounded-full"></div>
      </div>

      {/* 2. Título */}
      <h1 className="sm:text-2xl text-xl font-bold">Portfolio JoacoDev</h1>

      {/* 3. Navegación a la derecha */}
      <div className="flex items-center">
        {/* Visible en PC (hidden sm:flex) */}
        <WebMenu />

        {/* Visible en móvil (sm:hidden) */}
        <BurgerMenu />
      </div>
    </header>
  );
}
```

---

### Paso 6: Integración en `src/app/App.tsx`

```tsx
import { MenuProvider } from "./context/MenuContext";
import Header from "./components/staticComponents/Header";
import MobileMenu from "./components/navigation/MobileMenu";
import Footer from "./components/staticComponents/Footer";

export default function App() {
  return (
    <MenuProvider>
      <div className="min-h-screen flex flex-col bg-slate-950 text-white">
        <Header />
        <MobileMenu />

        <main className="flex-grow p-4">
          {/* Próximas secciones con sus respectivos IDs para el scroll:
              <section id="sobre-mi">...</section>
              <section id="habilidades">...</section>
              <section id="proyectos">...</section>
              <section id="contacto">...</section>
          */}
        </main>

        <Footer />
      </div>
    </MenuProvider>
  );
}
```

---

## 3. Plan de Verificación

1. **Ejecutar servidor**:
   `npm run dev` en `MiPortfolio`.
2. **Prueba en PC (`>= 640px`)**:
   - Se muestran los enlaces horizontales de `WebMenu`.
   - El botón hamburguesa está oculto.
   - Al hacer clic en un enlace, se marca en azul y la URL se mantiene limpia en `localhost:5173/`.
3. **Prueba en Móvil (`< 640px`)**:
   - Los enlaces horizontales se ocultan y aparece el botón hamburguesa.
   - Al tocar la hamburguesa, desliza suavemente el panel lateral desde la derecha y aparece el fondo oscuro.
   - La cruz queda visible y permite cerrar el menú.
   - Tocar fuera del panel (en el fondo oscuro) también cierra el menú.
