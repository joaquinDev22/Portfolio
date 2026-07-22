import { ExternalLink } from "lucide-react";
import Icon from "./Icon";
import ImageWithFallback from "./ImageWithFallback";
import type { Project } from "../../types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group glass-panel rounded-2xl overflow-hidden border border-white/10 flex flex-col h-full hover:border-blue-500/30 transition-all duration-300">
      <div
        className={`h-48 relative flex items-center justify-center border-b border-white/5 overflow-hidden ${
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

        <span className="absolute top-4 right-4 px-2.5 py-1 text-xs font-mono uppercase bg-slate-950/80 border border-white/15 text-blue-400 rounded-lg z-10">
          {project.category}
        </span>
      </div>

      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between items-start text-left">
        <div className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
            {project.title}
          </h3>

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
          {project.githubFrontUrl && (
            <a
              href={project.githubFrontUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[120px] inline-flex items-center justify-center gap-2 px-3 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-slate-900 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white transition-all duration-200"
            >
              <Icon name="github" className="w-4 h-4" />
              {project.githubBackUrl ? "Front-End" : "Código"}
            </a>
          )}

          {project.githubBackUrl && (
            <a
              href={project.githubBackUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[120px] inline-flex items-center justify-center gap-2 px-3 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-slate-900 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white transition-all duration-200"
            >
              <Icon name="github" className="w-4 h-4" />
              Back-End
            </a>
          )}

          {project.liveUrl && project.liveUrl !== project.githubFrontUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[100px] inline-flex items-center justify-center gap-2 px-3 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-all duration-200"
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
