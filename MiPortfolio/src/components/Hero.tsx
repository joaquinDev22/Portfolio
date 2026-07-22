import { Mail, ArrowRight, Download, Terminal } from "lucide-react";
import Icon from "./ui/Icon";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { useSmoothScroll } from "../hooks/useSmoothScroll";
import { useTypingEffect } from "../hooks/useTypingEffect";
import { HERO_CODE_SNIPPET } from "../data/portfolioData";

export default function Hero() {
  const codeText = useTypingEffect(HERO_CODE_SNIPPET, 20);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const { scrollToSection } = useSmoothScroll(80);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 md:px-8 overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-semibold tracking-wider uppercase animate-pulse">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            Disponible para trabajar
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Hola, soy{" "}
            <span className="bg-linear-to-r from-blue-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-sm">
              JoacoDev
            </span>
          </h1>

          <p className="text-xl md:text-2xl font-bold text-gray-200">
            Desarrollador Fullstack
          </p>

          <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed">
            Especializado en el desarrollo de aplicaciones web escalables y robustas. Combino un diseño de interfaz de usuario pulido y moderno con arquitecturas eficientes del lado del servidor.
          </p>

          <div className="flex gap-4">
            <a
              href="https://github.com/joaquinDev22"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-white/10 text-gray-400 hover:text-white hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300"
              aria-label="Perfil de GitHub"
            >
              <Icon name="github" className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-white/10 text-gray-400 hover:text-white hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300"
              aria-label="Perfil de LinkedIn"
            >
              <Icon name="linkedin" className="h-5 w-5" />
            </a>
            <a
              href="mailto:joacodev.mdp@gmail.com"
              className="p-3 rounded-xl bg-slate-900 border border-white/10 text-gray-400 hover:text-white hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300"
              aria-label="Contacto por Correo"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
            <button
              onClick={() => scrollToSection("#proyectos")}
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 active:scale-[0.98] shadow-lg hover:shadow-blue-500/20 transition-all duration-200 cursor-pointer"
            >
              Ver Proyectos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <a
              href="/CV_Joaquindev.pdf"
              download="CV_Joaquindev.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold border border-white/10 hover:border-white/20 active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              Descargar CV
              <Download className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 w-full">
          <div className="glass-panel w-full rounded-2xl shadow-2xl overflow-hidden border border-white/10 flex flex-col h-85">
            <div className="bg-slate-950/90 px-4 py-3 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-500 font-mono">
                <Terminal className="w-3.5 h-3.5" />
                <span>joacodev.ts</span>
              </div>
              <div className="w-12" />
            </div>

            <div className="p-5 flex-1 font-mono text-xs sm:text-sm text-left overflow-y-auto bg-slate-950/40 select-none text-emerald-400 leading-relaxed scrollbar-none">
              <div className="text-blue-400">
                <span className="text-emerald-500">JoacoDev-PC</span>:
                <span className="text-purple-400">~/portfolio</span>${" "}
                <span className="text-white">npm run dev</span>
              </div>
              <div className="text-gray-400 mb-3">VITE v8.1.0 ready in 124 ms</div>

              <pre className="text-gray-300">
                {codeText}
                <span className="inline-block w-1.5 h-4 ml-0.5 bg-blue-400 animate-terminal-cursor align-middle" />
              </pre>
            </div>
          </div>
        </div>
      </div>

      {isDesktop && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none opacity-50">
          <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
            Desplazar
          </span>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full p-1 flex justify-center">
            <div className="w-1.5 h-2 bg-blue-500 rounded-full animate-bounce mt-1" />
          </div>
        </div>
      )}
    </section>
  );
}
