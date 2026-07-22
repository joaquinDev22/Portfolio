import { User, Code, GraduationCap, Award, Sparkles } from "lucide-react";
import ImageWithFallback from "./ui/ImageWithFallback";

const ABOUT_STATS = [
  {
    icon: <GraduationCap className="w-6 h-6 text-blue-400" />,
    title: "Educación & Formación",
    desc: "Formación enfocada en desarrollo de software, arquitectura web y metodologías de trabajo eficientes.",
  },
  {
    icon: <Code className="w-6 h-6 text-emerald-400" />,
    title: "Desarrollo de Software",
    desc: "Enfocado en construir aplicaciones web completas (Frontend y Backend) con estándares modernos.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-purple-400" />,
    title: "Filosofía de Trabajo",
    desc: "Pasión por el código limpio, optimización de recursos y diseño de experiencia de usuario (UX) intuitiva.",
  },
];

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="py-20 px-6 md:px-8 relative overflow-hidden"
    >
      <div className="absolute right-0 top-1/3 w-64 h-64 bg-indigo-600/5 rounded-full blur-[80px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-gray-400 text-xs font-mono uppercase tracking-widest mb-3">
            <User className="w-3.5 h-3.5" />
            Conóceme
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Sobre <span className="bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Mí</span>
          </h2>
          <div className="h-1 w-12 bg-blue-500 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-emerald-500 rounded-2xl blur-md opacity-40 group-hover:opacity-75 transition duration-500" />

              <div className="relative bg-slate-950 p-3 rounded-2xl border border-white/10">
                <ImageWithFallback
                  src="/imagen-mia.png"
                  fallbackSrc="https://placehold.co/400x400/0f172a/3b82f6?text=JoacoDev"
                  alt="JoacoDev Foto de Perfil"
                  className="w-72 h-72 sm:w-80 sm:h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>

            <div className="glass-panel mt-6 px-5 py-3 rounded-xl border border-white/10 flex items-center gap-3">
              <Award className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="text-gray-300 text-sm font-medium">
                Resolviendo problemas complejos con código simple.
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            <h3 className="text-2xl font-bold text-white">
              Creando soluciones digitales eficientes y escalables
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Soy un desarrollador fullstack apasionado por la tecnología y la creación de productos digitales interactivos. Me enfoco en escribir código semántico, mantenible y optimizado. Me encanta estar en constante aprendizaje sobre nuevas tecnologías, herramientas y metodologías de desarrollo.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Mi experiencia abarca desde el diseño del frontend hasta la lógica del backend e integraciones de bases de datos. Me adapto rápidamente a las necesidades de cada proyecto, priorizando la experiencia del usuario final y el rendimiento de la aplicación.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              {ABOUT_STATS.map((stat, i) => (
                <div
                  key={i}
                  className="glass-panel glass-panel-hover p-5 rounded-2xl flex flex-col space-y-3"
                >
                  <div className="p-2 w-fit rounded-lg bg-slate-900 border border-white/5">
                    {stat.icon}
                  </div>
                  <h4 className="text-white font-bold text-sm">{stat.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
