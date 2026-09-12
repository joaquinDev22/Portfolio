import { createContext, useContext, useState, type ReactNode } from "react";
import { techCategories, techStack, softSkills } from "../data/skillsDb";
import type { TechCategory, TechSkill, SoftSkill } from "../types/skillsType";

interface SkillsContextType {
  categories: TechCategory[];
  allSkills: TechSkill[];
  softSkills: SoftSkill[];
  selectedCategory: TechCategory | "All";
  setSelectedCategory: (category: TechCategory | "All") => void;
  filteredSkills: TechSkill[];
}

const SkillsContext = createContext<SkillsContextType | undefined>(undefined);

export function SkillsProvider({ children }: { children: ReactNode }) {
  const [selectedCategory, setSelectedCategory] = useState<TechCategory | "All">("All");

  const filteredSkills =
    selectedCategory === "All"
      ? techStack
      : techStack.filter((tech) => tech.category === selectedCategory);

  return (
    <SkillsContext.Provider
      value={{
        categories: techCategories,
        allSkills: techStack,
        softSkills,
        selectedCategory,
        setSelectedCategory,
        filteredSkills,
      }}
    >
      {children}
    </SkillsContext.Provider>
  );
}

export function useSkills() {
  const context = useContext(SkillsContext);
  if (!context) {
    throw new Error("useSkills debe usarse dentro de un SkillsProvider");
  }
  return context;
}

