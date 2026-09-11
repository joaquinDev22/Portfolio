import { useState } from "react";
import BurgerMenu from "../ui/BurgerMenu";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="relative flex bg-slate-900 text-white p-2 items-center justify-center"> 
        <div id="triple-dot-decoration" className="absolute left-4 flex gap-2">
            <div className="w-4 h-4 bg-red-600 rounded-full"></div>
            <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
            <div className="w-4 h-4 bg-green-600 rounded-full"></div>
        </div>
        <h1 className="sm:text-2xl text-xl font-bold">Portfolio JoacoDev</h1>
        <BurgerMenu isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)}/>
    </header>
  )
}
