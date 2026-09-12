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
      <div
        onClick={closeMenu}
        className={`sm:hidden fixed inset-0 bg-black/60 backdrop-blur-xs z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

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