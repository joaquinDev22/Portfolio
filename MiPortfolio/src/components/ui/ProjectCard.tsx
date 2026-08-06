import { ExternalLink, Eye } from "lucide-react";
import Icon from "./Icon";
import ImageWithFallback from "./ImageWithFallback";
import type { Project } from "../../types";

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export default function ProjectCard({ project, onOpenModal }: ProjectCardProps) {
  const hasLiveDemo =
    project.liveUrl && project.liveUrl !== project.githubFrontUrl;

  return (
    <article className="group glass-panel rounded-2xl overflow-hidden border border-white/10 flex flex-col h-full hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
      {/* Clickable image area — opens modal */}
      <button
        onClick={() => onOpenModal(project)}
        aria-label={`Ver detalles de ${project.title}`}
        className={`relative h-48 w-full flex items-center justify-center border-b border-white/5 overflow-hidden cursor-pointer ${
          !project.image ? `bg-linear-to-br ${project.imageColor}` : "bg-slate-900"
        }`}
      >
        {project.image ? (
          <ImageWithFallback
            src={project.image}
            alt={`Captura de pantalla de ${project.title}`}
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-white/5 to-transparent opacity-40" />
        )}

        {project.image && (
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-slate-950/20" />
        )}

        {/* "Ver más" overlay on hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-blue-600/0 group-hover:bg-blue-600/20 transition-all duration-300">
          <div className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 px-4 py-2 bg-slate-950/80 border border-blue-500/40 rounded-full text-sm font-semibold text-white backdrop-blur-sm">
            <Eye className="w-4 h-4 text-blue-400" />
            Ver detalles
          </div>
        </div>

        <span className="absolute top-4 right-4 px-2.5 py-1 text-xs font-mono uppercase bg-slate-950/80 border border-white/15 text-blue-400 rounded-lg z-10">
          {project.category}
        </span>
      </button>

      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between items-start text-left">
        <div className="space-y-4">
          {/* Title — clickable too */}
          <button
            onClick={() => onOpenModal(project)}
            className="text-left cursor-pointer group/title"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 group/title-hover:text-blue-400 transition-colors duration-300">
              {project.title}
            </h3>
          </button>

          <p className="text-gray-400 text-sm leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 text-xs rounded-full bg-slate-900 border border-white/5 text-gray-300 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-6 mt-auto w-full">
          {/* "Ver detalles" button */}
          <button
            onClick={() => onOpenModal(project)}
            className="flex-1 min-w-30 inline-flex items-center justify-center gap-2 px-3 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-slate-900 border border-white/10 hover:border-blue-500/40 text-gray-300 hover:text-blue-400 transition-all duration-200 cursor-pointer"
          >
            <Eye className="w-4 h-4" />
            Detalles
          </button>

          {project.githubFrontUrl && (
            <a
              href={project.githubFrontUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 min-w-30 inline-flex items-center justify-center gap-2 px-3 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-slate-900 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white transition-all duration-200"
            >
              <Icon name="github" className="w-4 h-4" />
              {project.githubBackUrl ? "Front-End" : "Código"}
            </a>
          )}

          {hasLiveDemo && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 min-w-25 inline-flex items-center justify-center gap-2 px-3 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-all duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
