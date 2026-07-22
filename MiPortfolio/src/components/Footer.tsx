export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950/80 backdrop-blur-md text-center py-8 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm font-mono">
          &copy; {currentYear} JoacoDev. Todos los derechos reservados.
        </p>
        <p className="text-gray-500 text-xs font-mono">
          Hecho con React, TypeScript y Tailwind CSS v4
        </p>
      </div>
    </footer>
  );
}
