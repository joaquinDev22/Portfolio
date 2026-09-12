export type TechCategory = "Frontend" | "Backend" | "Database" | "Tools";

export interface TechSkill {
  name: string;
  category: TechCategory;
  level?: "Básico" | "Intermedio" | "Avanzado";
}

export type SoftSkill = string;

