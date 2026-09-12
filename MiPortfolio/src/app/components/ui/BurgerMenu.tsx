import { useMenu } from "../../context/MenuContext";


export default function BurgerMenu() {
    const { isOpen, toggleMenu } = useMenu();
    
  return (
    <button
        onClick={toggleMenu}
        className="sm:hidden absolute right-4 sm:right-8 w-8 h-8 flex flex-col justify-center items-center cursor-pointer focus:outline-none z-50"
    >

        <span
            className={`block absolute h-1 w-6 bg-gray-200 rounded transition-all duration-300 ease-in-out ${
            isOpen ? "rotate-45" : "-translate-y-2"
            }`}
        />

        <span
            className={`block absolute h-1 w-6 bg-gray-200 rounded transition-all duration-400 ease-in-out ${
            isOpen ? "opacity-0 rotate-45" : "opacity-100"
            }`}
        />

        <span
            className={`block absolute h-1 w-6 bg-gray-200 rounded transition-all duration-300 ease-in-out ${
            isOpen ? "-rotate-45" : "translate-y-2"
            }`}
        />
    </button>
  )
}
