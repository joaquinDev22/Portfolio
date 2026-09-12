export default function AboutMe() {
  return (
    <section id="sobre-mi" className="w-full max-w-5xl mx-auto px-4 py-8 sm:py-12">
      <div className="flex flex-col md:flex-row bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-6 sm:p-10 items-center justify-center gap-8 md:gap-12 shadow-xl">
        
        {/* Foto de perfil responsiva: centrada y con tamaño adaptado a móvil */}
        <div 
          id="profile-picture" 
          className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 shrink-0 rounded-2xl bg-[url(/perfil.png)] bg-center bg-cover border-2 border-blue-500/60 shadow-xl shadow-blue-500/10"
          role="img"
          aria-label="foto de perfil de JoacoDev"
        />

        {/* Texto centrado en celular, alineado a la izquierda en PC */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Sobre Mí
          </h2>
          <p id="description" className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg">
            ¡Hola! Soy Joaquin, desarrollador Fullstack enfocado en crear soluciones web modernas, robustas y escalables con React, TypeScript, Tailwind CSS y arquitecturas backend con Node.js y SpringBoot.
          </p>
        </div>

      </div>
    </section>
  );
}
