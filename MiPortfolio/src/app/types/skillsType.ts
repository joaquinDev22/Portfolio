export type TechCategory = "Frontend" | "Backend" | "Database" | "Tools"

export interface TechSkill {
  icon: string
  name?: string
  category: TechCategory
}

export type SoftSkill = string

