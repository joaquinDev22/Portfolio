import WebMenu from "../navigation/WebMenu";
import BurgerMenu from "../ui/BurgerMenu";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-900/95 backdrop-blur-md text-white border-b border-slate-800/80 shadow-lg">
      {/* Fila Superior: Círculos a la izquierda, Título CENTRADO sin chocar, Hamburguesa a la derecha */}
      <div className="relative flex items-center justify-center p-3 sm:p-4">
        {/* Círculos decorativos */}
        <div id="triple-dot-decoration" className="absolute left-4 sm:left-8 flex gap-2">
          <div className="w-3.5 h-3.5 bg-red-600 rounded-full"></div>
          <div className="w-3.5 h-3.5 bg-yellow-400 rounded-full"></div>
          <div className="w-3.5 h-3.5 bg-green-600 rounded-full"></div>
        </div>

        {/* Título: con px-12 para no encimarse con los puntos o la hamburguesa en teléfonos angostos */}
        <h1 className="text-base sm:text-2xl font-bold px-12 truncate text-center">
          Portfolio JoacoDev
        </h1>

        {/* Hamburguesa en celular */}
        <BurgerMenu />
      </div>

      {/* Fila Inferior: Menú de escritorio (oculto automáticamente en celular) */}
      <WebMenu />
    </header>
  );
}