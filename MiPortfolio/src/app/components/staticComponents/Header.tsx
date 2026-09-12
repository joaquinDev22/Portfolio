import WebMenu from "../navigation/WebMenu";
import BurgerMenu from "../ui/BurgerMenu";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-900/95 backdrop-blur-md text-white border-b border-slate-800/80 shadow-lg">
 
      <div className="relative flex items-center justify-center p-4">
        <div id="triple-dot-decoration" className="absolute left-4 sm:left-8 flex gap-2">
          <div className="w-3.5 h-3.5 bg-red-600 rounded-full"></div>
          <div className="w-3.5 h-3.5 bg-yellow-400 rounded-full"></div>
          <div className="w-3.5 h-3.5 bg-green-600 rounded-full"></div>
        </div>

        <h1 className="sm:text-2xl text-xl font-bold">Portfolio JoacoDev</h1>

        <BurgerMenu />
      </div>

      <WebMenu />

    </header>
  );
}