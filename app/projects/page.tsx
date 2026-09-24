"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import { projects } from "@/data/projects";
import { ProjectCard, ProjectModal } from "@/components/sections/Projects";
import { TbArrowLeft, TbChevronLeft, TbChevronRight } from "react-icons/tb";
import { Project } from "@/types";

const filterTags = [
  "All",
  "Fullstack",
  "Next.js",
  "React",
  "Vue.js",
  "Nuxt.js",
  "TypeScript",
  "Node.js",
];

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [selectedTag, setSelectedTag] = useState("All");

  const [startIndex, setStartIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(3);
  const STEP_WIDTH = 124; // 112px button (w-28) + 12px gap-3

  // Responsive: calculate max sliding offset according to viewport width
  // Desktop (md): shows 5 buttons (maxIndex = 8 - 5 = 3)
  // Tablet (sm): shows 3 buttons (maxIndex = 8 - 3 = 5)
  // Mobile: shows 2 buttons (maxIndex = 8 - 2 = 6)
  useEffect(() => {
    // Force instant scroll to top on mount
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    const scrollTimer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 10);

    // Refresh AOS for route transitions
    AOS.refresh();

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMaxIndex(Math.max(0, filterTags.length - 5));
      } else if (window.innerWidth >= 640) {
        setMaxIndex(Math.max(0, filterTags.length - 3));
      } else {
        setMaxIndex(Math.max(0, filterTags.length - 2));
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(scrollTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePrevTags = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNextTags = () => {
    setStartIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  // Filter projects: supports "Fullstack" filter and specific tech stack filters
  const filteredProjects =
    selectedTag === "All"
      ? projects
      : selectedTag === "Fullstack"
      ? projects.filter(
          (p) =>
            p.githubServer !== undefined ||
            p.tags.includes("MongoDB") ||
            p.tags.includes("Node.js")
        )
      : projects.filter((p) => p.tags.includes(selectedTag));

  return (
    <main
      data-aos="fade"
      data-aos-delay="200"
      data-aos-duration="500"
      data-aos-easing="ease-out"
      className="min-h-screen bg-(--color-bg) py-10 sm:py-14"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Back to Home Navigation */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-(--color-text-secondary) hover:text-accent transition-colors mb-8 cursor-pointer"
        >
          <TbArrowLeft className="text-lg transition-transform group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </Link>

        {/* Page Header */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">
            Directory
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold text-(--color-text-primary) mb-4">
            All Projects
          </h1>
          <p className="text-(--color-text-secondary) text-sm sm:text-base leading-relaxed">
            A complete archive of web applications, platforms, and client work I&apos;ve developed. Filter by tech stack to explore specific technologies.
          </p>
        </div>

        {/* Carousel Filter Bar (Responsive & Spacious Gap) */}
        <div className="relative mb-12 flex items-center justify-center gap-3 sm:gap-6 max-w-4xl mx-auto">
          {/* Previous Button */}
          <button
            type="button"
            onClick={handlePrevTags}
            disabled={startIndex === 0}
            aria-label="Previous tags"
            className={`h-11 w-11 shrink-0 rounded-xl flex items-center justify-center transition-all ${
              startIndex === 0
                ? "bg-accent/15 text-accent/40 cursor-not-allowed"
                : "bg-accent text-white hover:bg-(--color-accent-dark) shadow-sm cursor-pointer"
            }`}
          >
            <TbChevronLeft className="text-2xl" />
          </button>

          {/* Responsive Viewport Window: 2 buttons on Mobile, 3 on Tablet, 5 on Desktop */}
          <div className="w-61 sm:w-93 md:w-157 overflow-hidden px-1.5 py-3">
            {/* Smooth Sliding Track */}
            <div
              className="flex items-center gap-3 transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${startIndex * STEP_WIDTH}px)` }}
            >
              {filterTags.map((tag) => {
                const isActive = selectedTag === tag;
                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setSelectedTag(tag)}
                    className={`w-28 shrink-0 rounded-full py-2.5 text-xs sm:text-sm font-semibold text-center transition-all duration-300 cursor-pointer select-none truncate px-3 ${
                      isActive
                        ? "bg-accent text-white shadow-md shadow-accent/25 scale-105"
                        : "bg-white border border-(--color-border) text-(--color-text-primary) hover:border-accent/50 hover:text-accent shadow-xs"
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={handleNextTags}
            disabled={startIndex >= maxIndex}
            aria-label="Next tags"
            className={`h-11 w-11 shrink-0 rounded-xl flex items-center justify-center transition-all ${
              startIndex >= maxIndex
                ? "bg-accent/15 text-accent/40 cursor-not-allowed"
                : "bg-accent text-white hover:bg-(--color-accent-dark) shadow-sm cursor-pointer"
            }`}
          >
            <TbChevronRight className="text-2xl" />
          </button>
        </div>

        {/* Projects Grid with Fade Transition */}
        <div
          key={selectedTag}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 animate-in fade-in duration-300"
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              onClick={() => setActiveProject(project)}
            />
          ))}
        </div>

        {/* Fallback for empty filter */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-(--color-text-secondary)">
            <p className="text-lg font-medium">No projects found with tag &quot;{selectedTag}&quot;.</p>
            <button
              onClick={() => setSelectedTag("All")}
              className="mt-3 text-sm text-accent hover:underline cursor-pointer"
            >
              Reset filter to All
            </button>
          </div>
        )}
      </div>

      {/* Reusable Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </main>
  );
}
