import Badge from "../ui/Badge";
import { useSkills } from "../../context/SkillsContext";

export default function Skills() {
  const { categories, softSkills, allSkills } = useSkills();

  return (
    <section id="habilidades" className="py-16 px-4 w-full max-w-6xl mx-auto">
      <h2 className="text-center text-3xl sm:text-4xl font-bold text-white mb-12">
        Mis Habilidades
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-lg">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 text-center">
              Habilidades Blandas
            </h3>
            <p className="text-slate-400 text-sm mb-6 text-center">
              Habilidades interpersonales que aplico para colaborar en equipos ágiles y resolver desafíos.
            </p>

            <div className="flex flex-wrap gap-2.5 justify-center">
              {softSkills.map((skill) => (
                <Badge key={skill} variant="default" size="md" dot>
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Stack Tecnológico */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-lg">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 text-center">
              Stack Tecnológico
            </h3>
            <p className="text-slate-400 text-sm mb-6 text-center">
              Herramientas y tecnologías que domino para el desarrollo frontend y backend.
            </p>

            <div className="space-y-5 mt-4">
              {categories.map((category) => (
                <div key={category}>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    {category}
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {allSkills
                      .filter((tech) => tech.category === category)
                      .map((tech) => (
                        <Badge key={tech.name} variant="blue" size="md">
                          {tech.name}
                        </Badge>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}