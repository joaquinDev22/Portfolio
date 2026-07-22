export type ProjectCategory = "fullstack" | "frontend" | "backend";
export type CategoryFilter = "all" | ProjectCategory;

export interface Project {
  title: string;
  category: ProjectCategory;
  description: string;
  tags: string[];
  githubFrontUrl: string;
  githubBackUrl?: string;
  liveUrl: string;
  imageColor: string;
  image?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface AboutStat {
  icon: string;
  title: string;
  desc: string;
}

export interface SkillItem {
  name: string;
  level: number;
  color: string;
}

export interface SkillCategory {
  title: string;
  iconName: "layers" | "cpu" | "wrench";
  skills: SkillItem[];
  glow: string;
}

export interface ContactDetail {
  iconName: "mail" | "linkedin" | "github" | "mapPin";
  label: string;
  value: string;
  href: string;
}