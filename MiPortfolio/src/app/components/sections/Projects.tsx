import { projectsDb } from "../../data/projectsDb";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  return (
    <section id="proyectos" className="w-full max-w-6xl mx-auto px-4 py-8 sm:py-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
        Mis Proyectos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsDb.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}