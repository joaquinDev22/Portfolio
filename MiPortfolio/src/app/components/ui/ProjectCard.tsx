import type { Project } from "../../types/projectType";
import Badge from "./Badge";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { nombreProyecto, descripcion, tecnologias, imagen1, repoUrl, demoUrl } = project;

  return (
    <article className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col hover:border-slate-700 transition-all hover:cursor-pointer shadow-md">
      <div className="overflow-hidden rounded-lg mb-4 aspect-video bg-slate-800">
        <img 
          src={imagen1} 
          alt={nombreProyecto} 
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-xl font-bold text-white mb-2">{nombreProyecto}</h3>
      <p className="text-slate-400 text-sm mb-4 grow">{descripcion}</p>

      <div className="flex gap-2 flex-wrap mb-6">
        {tecnologias?.map((tech) => (
          <Badge key={tech} variant="blue" size="md">
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

        {demoUrl && (
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
