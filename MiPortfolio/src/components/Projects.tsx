import { useState, useMemo } from "react";
import { Folder, Filter } from "lucide-react";
import { projectsData } from "../data/projectsData";
import ProjectCard from "./ui/ProjectCard";
import type { CategoryFilter } from "../types";

interface FilterButton {
  label: string;
  value: CategoryFilter;
}

const FILTER_BUTTONS: FilterButton[] = [
  { label: "Todos", value: "all" },
  { label: "Fullstack", value: "fullstack" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
];

export default function Projects() {
  const [filter, setFilter] = useState<CategoryFilter>("all");

  const filteredProjects = useMemo(() => {
    if (filter === "all") return projectsData;
    return projectsData.filter((project) => project.category === filter);
  }, [filter]);

  return (
    <section
      id="proyectos"
      className="py-20 px-6 md:px-8 relative overflow-hidden"
    >
      <div className="absolute right-10 bottom-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-gray-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Folder className="w-3.5 h-3.5" />
            Portafolio
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Proyectos <span className="bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Realizados</span>
          </h2>
          <div className="h-1 w-12 bg-blue-500 rounded-full mx-auto mt-4" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs text-gray-400 mr-2 font-mono uppercase">
            <Filter className="w-3.5 h-3.5" />
            Filtrar por:
          </div>
          <div className="flex flex-wrap gap-2 p-1.5 bg-slate-950/80 border border-white/10 rounded-2xl">
            {FILTER_BUTTONS.map((btn) => (
              <button
                key={btn.value}
                onClick={() => setFilter(btn.value)}
                className={`px-4 py-1.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  filter === btn.value
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 glass-panel rounded-2xl border border-white/10">
            <p className="text-gray-400 font-mono">
              No hay proyectos en la categoría seleccionada actualmente.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
