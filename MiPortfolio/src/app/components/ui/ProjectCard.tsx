import type { Project } from "../../types/projectType";
import Badge from "./Badge";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { nombreProyecto, descripcion, tecnologias, imagen1, repoUrl, demoUrl, enDesarrollo } = project;

  return (
    <article className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col hover:border-slate-700 transition-all shadow-md">
      <div className="relative overflow-hidden rounded-lg mb-4 aspect-video bg-slate-800/80 border border-slate-800 flex items-center justify-center">
        {enDesarrollo && (
          <span className="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30 backdrop-blur-xs shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            En desarrollo
          </span>
        )}

        {imagen1 ? (
          <img 
            src={imagen1} 
            alt={nombreProyecto} 
            className={`w-full h-full object-cover transition-opacity ${enDesarrollo ? "opacity-85" : "opacity-100"}`}
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-2 text-slate-500 p-4 text-center">
            <svg className="w-8 h-8 text-slate-600 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <span className="text-xs font-medium tracking-wide">Vista previa próximamente</span>
          </div>
        )}
      </div>

      <h3 className="text-xl font-bold text-white mb-2">{nombreProyecto}</h3>
      <p className="text-slate-400 text-sm mb-4 grow">{descripcion}</p>

      <div className="flex gap-2 flex-wrap mb-6">
        {tecnologias?.map((tech) => (
          <Badge key={tech} className="border border-slate-700 px-2 py-0.5 rounded-md text-xs bg-slate-800 text-slate-300 font-medium">
            {tech}
          </Badge>
        ))}
      </div>

      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-800/80">
        <a 
          href={repoUrl} 
          target="_blank" 
          rel="noreferrer"
          className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
        >
          Código en GitHub →
        </a>

        {enDesarrollo || !demoUrl ? (
          <span 
            title="La versión desplegada estará disponible pronto"
            className="text-xs font-medium text-slate-500 bg-slate-800/60 border border-slate-800 px-2.5 py-1 rounded-md flex items-center gap-1.5 cursor-not-allowed select-none"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500/50" />
            Demo próximamente
          </span>
        ) : (
          <a 
            href={demoUrl} 
            target="_blank" 
            rel="noreferrer"
            className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
          >
            Ver Demo →
          </a>
        )}
      </div>
    </article>
  );
}
