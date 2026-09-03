import Hero from "@/components/sections/Hero";
import Education from "@/components/sections/Education"; 
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Certification from "@/components/sections/Certification";

export default function Home() {
  return (
    <main className="flex-1 w-full">
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Certification />
      <Contact />
    </main>
  );
}
