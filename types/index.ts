import { ElementType } from "react";

export interface ProjectScreenshot {
  title: string;
  imageUrl: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  githubClient: string;
  githubServer?: string;
  liveUrl: string;
  imageUrl: string;
  featured: boolean; 
  screenshots: ProjectScreenshot[];
}


export interface NavLink {
  label: string; 
  href: string;
}

export interface EducationItem {
  id: string;
  period: string;
  degree: string;
  institution: string;
  location: string;
  description: string;
  focus: string[];
}

export interface SkillItem {
  name: string;
  icon: ElementType;
  color?: string; 
}
export interface SkillCategory {
  category: string;
  skills: SkillItem[];
}
