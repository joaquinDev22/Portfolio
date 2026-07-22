import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useScroll } from "../hooks/useScroll";
import { useSmoothScroll } from "../hooks/useSmoothScroll";
import { NAV_ITEMS } from "../data/portfolioData";
import ImageWithFallback from "./ui/ImageWithFallback";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScroll(20);
  const { scrollToSection } = useSmoothScroll(80);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    scrollToSection(href);
  };

  const linkClass =
    "text-gray-300 hover:text-white font-medium relative pb-1 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[3px] after:w-0 after:bg-blue-500 hover:after:shadow-[0_0_10px_2px_rgba(59,130,246,0.6)] after:transition-all after:duration-300 hover:after:w-full cursor-pointer transition-colors duration-200";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6 md:px-8">
        <button
          type="button"
          className="flex items-center gap-3 cursor-pointer text-left bg-transparent border-0 p-0 focus:outline-none"
          onClick={() => handleNavClick("#inicio")}
          aria-label="Ir al inicio"
        >
          <ImageWithFallback
            src="/Logo.png"
            fallbackSrc="https://placehold.co/80x80/0f172a/3b82f6?text=JD"
            alt="JOACODEV Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
          />
          <div>
            <span className="text-white font-bold tracking-wider text-base md:text-lg block">
              JOACODEV
            </span>
            <span className="text-blue-400 text-xs font-semibold tracking-wider uppercase block -mt-1">
              Fullstack Dev
            </span>
          </div>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className={linkClass}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden text-gray-300 hover:text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full glass-panel border-b border-white/10 transition-all duration-300 ease-in-out origin-top ${
          isOpen
            ? "scale-y-100 opacity-100 visible"
            : "scale-y-0 opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col p-6 gap-5 bg-slate-950/90">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="text-left text-gray-300 hover:text-blue-400 text-lg font-medium py-1 transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
