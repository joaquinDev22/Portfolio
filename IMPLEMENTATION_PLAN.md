# Plan de Implementación: Arquitectura de Navegación con Context y Custom Hook (`useMenu`)

Este documento detalla el análisis de tu código actual y la guía paso a paso para desacoplar y estructurar la navegación de tu portfolio utilizando **React Context API** y el hook personalizado **`useMenu`**.

---

## 1. Análisis del Estado Actual del Proyecto

### Lo que ya tienes funcionando:
1. **`MiPortfolio/src/app/components/ui/BurgerMenu.tsx`**:
   - Ya tiene la animación con Tailwind CSS para transformarse en cruz (**X**).
   - Ya tiene `sm:hidden` para ocultarse en pantallas de escritorio.
   - Actualmente recibe `isOpen` y `onToggle` por **props**.
2. **`MiPortfolio/src/app/components/staticComponents/Header.tsx`**:
   - Maneja el estado localmente con `const [isOpen, setIsOpen] = useState(false)`.
   - Pasa los props a `<BurgerMenu />`.
   - Tiene los tres puntos decorativos a la izquierda y el título centrado.

### Los puntos a resolver:
- **Prerrequisito crítico**: Falta el archivo `src/main.tsx` (fue eliminado en el refactor) e `index.html` tiene `<App></App>`. Sin esto, Vite no puede levantar el proyecto ni compilar.
- **Desacoplamiento**: Si creamos el menú desplegable con enlaces (`#proyectos`, `#contacto`), ese menú necesita saber cuándo está abierto y cada enlace debe poder cerrar el menú al hacer clic. Con **Context + Custom Hook**, evitamos pasar funciones por props entre múltiples componentes.

---

## 2. Diagrama de la Arquitectura Propuesta

```mermaid
flowchart TD
    A["App.tsx (envuelto en MenuProvider)"] --> B["Header.tsx"]
    A --> C["MobileMenu.tsx (Menú Desplegable)"]
    
    subgraph Estado Global (MenuContext)
        M["MenuContext (isOpen, toggleMenu, closeMenu)"]
    end
    
    B --> D["BurgerMenu.tsx (consume useMenu)"]
    C --> E["Enlaces de navegación (consumen useMenu -> closeMenu)"]
    
    D -.->|toggleMenu| M
    E -.->|closeMenu| M
    M -.->|isOpen| D
    M -.->|isOpen| C
```

---

## 3. Plan de Cambios Paso a Paso (Código Listo para Aplicar)

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

### Paso 1: Crear el Contexto y el Hook (`src/app/context/MenuContext.tsx`)

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

### Paso 2: Actualizar `src/app/components/ui/BurgerMenu.tsx`

Eliminamos los props locales y consumimos `useMenu()` directamente:

```tsx
import { useMenu } from "../../context/MenuContext";

export default function BurgerMenu() {
  const { isOpen, toggleMenu } = useMenu();

  return (
    <button
      onClick={toggleMenu}
      className="sm:hidden absolute right-4 sm:right-8 w-8 h-8 flex flex-col justify-center items-center cursor-pointer focus:outline-none"
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

### Paso 3: Crear el Menú Desplegable (`src/app/components/navigation/MobileMenu.tsx`)

Crea la carpeta `src/app/components/navigation/` y el archivo `MobileMenu.tsx`:

```tsx
import { useMenu } from "../../context/MenuContext";

export default function MobileMenu() {
  const { isOpen, closeMenu } = useMenu();

  if (!isOpen) return null;

  return (
    <div className="sm:hidden fixed inset-x-0 top-14 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 py-6 px-8 z-40 transition-all">
      <nav className="flex flex-col space-y-4 text-center">
        <a
          href="#sobre-mi"
          onClick={closeMenu}
          className="text-lg text-slate-300 hover:text-white transition-colors"
        >
          Sobre mí
        </a>
        <a
          href="#habilidades"
          onClick={closeMenu}
          className="text-lg text-slate-300 hover:text-white transition-colors"
        >
          Habilidades
        </a>
        <a
          href="#proyectos"
          onClick={closeMenu}
          className="text-lg text-slate-300 hover:text-white transition-colors"
        >
          Proyectos
        </a>
        <a
          href="#contacto"
          onClick={closeMenu}
          className="text-lg text-blue-400 font-semibold hover:text-blue-300 transition-colors"
        >
          Contacto
        </a>
      </nav>
    </div>
  );
}
```

---

### Paso 4: Actualizar `src/app/components/staticComponents/Header.tsx`

Quitamos el `useState` local y añadimos la barra de navegación para computadoras (`hidden sm:flex`):

```tsx
import BurgerMenu from "../ui/BurgerMenu";

export default function Header() {
  return (
    <header className="relative flex bg-slate-900 text-white p-4 items-center justify-between border-b border-slate-800"> 
      {/* 1. Círculos de decoración */}
      <div id="triple-dot-decoration" className="flex gap-2">
        <div className="w-3.5 h-3.5 bg-red-600 rounded-full"></div>
        <div className="w-3.5 h-3.5 bg-yellow-400 rounded-full"></div>
        <div className="w-3.5 h-3.5 bg-green-600 rounded-full"></div>
      </div>

      {/* 2. Título */}
      <h1 className="sm:text-2xl text-xl font-bold">Portfolio JoacoDev</h1>

      {/* 3. Menú visible en PC (Oculto en celular) */}
      <nav className="hidden sm:flex gap-6 items-center text-sm font-medium text-slate-300">
        <a href="#sobre-mi" className="hover:text-white transition-colors">Sobre mí</a>
        <a href="#habilidades" className="hover:text-white transition-colors">Habilidades</a>
        <a href="#proyectos" className="hover:text-white transition-colors">Proyectos</a>
        <a href="#contacto" className="text-blue-400 hover:text-blue-300 transition-colors">Contacto</a>
      </nav>

      {/* 4. Menú hamburguesa (Visible en celular, se conecta solo al Context) */}
      <BurgerMenu />
    </header>
  );
}
```

---

### Paso 5: Conectar todo en `src/app/App.tsx`

Envolvemos la aplicación con el `MenuProvider`:

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
          {/* Aquí irán tus secciones: Hero, Proyectos, etc. */}
        </main>

        <Footer />
      </div>
    </MenuProvider>
  );
}
```

---

## 4. Plan de Verificación

1. **Compilar y probar**:
   - Ejecutar `npm run dev` en la carpeta `MiPortfolio`.
   - Abrir `http://localhost:5173`.
2. **Prueba en vista móvil (F12 -> Responsive)**:
   - Al pulsar la hamburguesa: se transforma en **X** y se despliega el menú `MobileMenu`.
   - Al tocar cualquiera de los enlaces (*Proyectos*, *Contacto*): el menú debe cerrarse y el botón debe volver a ser hamburguesa.
3. **Prueba en vista escritorio**:
   - En pantalla completa: desaparece la hamburguesa y aparecen los enlaces en el Header horizontalmente.

