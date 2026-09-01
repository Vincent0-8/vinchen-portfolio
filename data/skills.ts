import { SkillCategory } from "@/types";
import { SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiHtml5, SiCss, SiVite, SiNodedotjs, SiExpress, SiMongodb, SiRedux, SiGit, SiGithub, SiFigma, SiVercel, SiRailway } from "react-icons/si";
import { TbApi, TbBrandAdobePhotoshop, TbBrandAdobeIllustrator } from "react-icons/tb";

export const skillCategories: SkillCategory[] = [
  {
    category: "FRONTEND",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
    ],
  },
  {
    category: "BACKEND & DATABASE",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "REST API", icon: TbApi, color: "#6c63ff" },
      { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
    ],
  },
  {
    category: "VERSION CONTROL & TOOLS",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
      { name: "Railway", icon: SiRailway, color: "#0B0D0E" },
    ],
  },
  {
    category: "DESIGN TOOLS",
    skills: [
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Adobe Illustrator", icon: TbBrandAdobeIllustrator, color: "#FF9A00" },
      { name: "Adobe Photoshop", icon: TbBrandAdobePhotoshop, color: "#31A8FF" }
    ],
  },
];
