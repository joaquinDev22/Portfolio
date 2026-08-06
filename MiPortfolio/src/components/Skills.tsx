import { Cpu, Layers, Wrench } from "lucide-react";
import { SKILL_CATEGORIES } from "../data/portfolioData";
import type { SkillCategory, SkillItem } from "../types";

interface CategoryIconProps {
  name: SkillCategory["iconName"];
}

function CategoryIcon({ name }: CategoryIconProps) {
  switch (name) {
    case "layers":
      return <Layers className="w-5 h-5 text-blue-400" />;
    case "cpu":
      return <Cpu className="w-5 h-5 text-emerald-400" />;
    case "wrench":
      return <Wrench className="w-5 h-5 text-purple-400" />;
    default:
      return null;
  }
}

function formatSkillLevel(level: SkillItem["level"]) {
  switch (level) {
    case "advanced":
      return "Avanzado";
    case "intermediate":
      return "Intermedio";
    case "basic":
    default:
      return "Básico";
  }
}

export default function Skills() {
  return (
    <section
      id="habilidades"
      className="py-20 px-6 md:px-8 relative overflow-hidden bg-slate-950/40 border-y border-white/5"
    >
      <div className="absolute left-0 bottom-1/3 w-72 h-72 bg-emerald-600/5 rounded-full blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-gray-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Cpu className="w-3.5 h-3.5" />
            Especialidades
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Mis <span className="bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Habilidades</span>
          </h2>
          <div className="h-1 w-12 bg-blue-500 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className={`glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 transition-all duration-300 ${category.glow}`}
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="p-2 bg-slate-900 rounded-xl border border-white/5">
                  <CategoryIcon name={category.iconName} />
                </div>
                <h3 className="text-white font-bold text-lg">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2.5"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`h-2.5 w-2.5 rounded-full ${skill.color}`} />
                      <span className="text-gray-200 font-medium">{skill.name}</span>
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-400">
                      {formatSkillLevel(skill.level)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
