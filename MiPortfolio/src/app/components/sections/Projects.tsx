import { projectsDb } from "../../data/projectsDb";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  return (
    <section id="proyectos" className="">
      <h2 className="w-full text-3xl font-bold text-white mb-1 mt-1 text-center py-2">
        Mis Proyectos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projectsDb.map((p) => (
          <ProjectCard key={p.id} project={p}/>
        ))}
      </div>
    </section>
  );
}