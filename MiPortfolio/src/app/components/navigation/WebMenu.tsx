
import { useState } from "react";

export default function WebMenu() {
  const [activeSection, setActiveSection] = useState("sobre-mi");

  const handleNavClick = (id: string) => {
    setActiveSection(id)

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="hidden sm:flex items-center text-lg p-1 font-medium justify-center space-x-18 bg-slate-800">
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
        className={`transition-colors cursor-pointer ${
          activeSection === "contacto"
            ? "text-blue-400 font-bold"
            : "text-slate-300 hover:text-white"
        }`}
      >
        Contacto
      </button>
    </nav>
  );
}
