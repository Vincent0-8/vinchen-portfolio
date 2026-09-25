"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { projects } from "@/data/projects";
import { 
  TbExternalLink, 
  TbBrandGithub, 
  TbX, 
  TbZoomIn, 
  TbZoomInArea, 
  TbArrowRight,
  TbChevronLeft,
  TbChevronRight 
} from "react-icons/tb";
import { Project } from "@/types"

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div 
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-(--color-border) bg-white transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-(--color-bg) border-b border-(--color-border)">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          loading="lazy"
          decoding="async"
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-bold text-(--color-text-primary) transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-(--color-text-secondary) line-clamp-2">
          {project.description}
        </p>

        <div className="mt-3.5 mb-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="rounded-md border border-(--color-border) bg-(--color-bg) px-2.5 py-1 text-xs font-medium text-(--color-text-secondary)"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-(--color-border) pt-4">
          <button 
            type="button"
            onClick={onClick} 
            className="flex items-center gap-1.5 text-sm font-semibold text-accent transition-transform group-hover:translate-x-1 cursor-pointer"
          >
            View More <TbArrowRight className="text-base" />
          </button>
        </div>
      </div>
    </div>  
  );
} 

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const screenshots = project.screenshots && project.screenshots.length > 0
    ? project.screenshots
    : [{ title: project.title, imageUrl: project.imageUrl }];

  const currentScreenshot = screenshots[currentImgIndex] || screenshots[0];

  const handlePrev = () => {
    setCurrentImgIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImgIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Lock scroll background saat modal buka
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />

      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-(--color-border) bg-white p-5 sm:p-8 shadow-2xl space-y-6">
        <div className="flex items-start justify-between gap-4 pr-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-(--color-text-primary)">
              {project.title}
            </h2>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-(--color-border) bg-(--color-bg) px-2.5 py-1 text-xs font-medium text-(--color-text-secondary)"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Close button */}
          <button 
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 z-20 rounded-full bg-slate-100 p-2 text-(--color-text-secondary) hover:text-(--color-text-primary) hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <TbX className="text-xl" />
          </button>
        </div>

        {/* Screenshot Viewport with Prev / Next Navigation */}
        <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-(--color-border) bg-slate-400/30 flex items-center justify-center group">
          <img 
            src={currentScreenshot.imageUrl} 
            alt={currentScreenshot.title} 
            className="h-full w-full object-contain"
          />

          {/* Previous button */}
          {screenshots.length > 1 && (
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous screenshot"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 hover:bg-black/85 text-white p-2.5 backdrop-blur-xs transition-all opacity-80 group-hover:opacity-100 cursor-pointer shadow-md"
            >
              <TbChevronLeft className="text-xl" />
            </button>
          )}

          {/* Next button */}
          {screenshots.length > 1 && (
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next screenshot"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 hover:bg-black/85 text-white p-2.5 backdrop-blur-xs transition-all opacity-80 group-hover:opacity-100 cursor-pointer shadow-md"
            >
              <TbChevronRight className="text-xl" />
            </button>
          )}

          {/* Screenshot Caption Badge */}
          <div className="absolute bottom-3 left-3 rounded-md bg-black/70 backdrop-blur-md px-3 py-1.5 text-xs font-medium text-white flex items-center gap-2">
            <span>{currentScreenshot.title}</span>
            {screenshots.length > 1 && (
              <span className="text-slate-400 font-normal">
                ({currentImgIndex + 1} of {screenshots.length})
              </span>
            )}
          </div>
        </div>

        {/* Thumbnail Strip (only shown when multiple screenshots exist) */}
        {screenshots.length > 1 && (
          <div className="flex gap-3 overflow-x-auto py-2.5 px-1 -mx-1">
            {screenshots.map((shot, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentImgIndex(idx)}
                className={`relative h-14 sm:h-16 aspect-video shrink-0 overflow-hidden rounded-lg border-2 transition-all cursor-pointer ${
                  currentImgIndex === idx
                    ? "border-accent shadow-xs scale-105"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={shot.imageUrl}
                  alt={shot.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        )}

        {/* Project Description */}
        <div className="border-t border-(--color-border) pt-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-accent mb-2.5">
            About This Project
          </h4>
          <p className="text-(--color-text-secondary) text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Action Buttons: Live Preview & GitHub Repos */}
        <div className="flex flex-wrap items-center gap-3 pt-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-white text-sm font-medium hover:bg-(--color-accent-dark) transition-colors shadow-xs"
            >
              <TbExternalLink size={18} />
              <span>Live Preview</span>
            </a>
          )}

          {project.githubClient && (
            <a
              href={project.githubClient}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-(--color-border) bg-white text-(--color-text-primary) text-sm font-medium hover:border-accent hover:text-accent transition-colors"
            >
              <TbBrandGithub size={18} />
              <span>Client Repo</span>
            </a>
          )}

          {project.githubServer && (
            <a
              href={project.githubServer}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-(--color-border) bg-white text-(--color-text-primary) text-sm font-medium hover:border-accent hover:text-accent transition-colors"
            >
              <TbBrandGithub size={18} />
              <span>Server Repo</span>
            </a>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}


export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" data-aos="fade-up" className="section py-16 sm:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">
            Selected Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-(--color-text-primary) mb-4">
            Featured Projects
          </h2>
          <p className="text-(--color-text-secondary) text-sm sm:text-base leading-relaxed">
            A showcase of recent web applications and platforms I&apos;ve built, focusing on performance, usability, and modern architecture.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              onClick={() => setActiveProject(project)}
            />
          ))}
        </div>

        {/* Explore All Projects CTA */}
        <div className="flex justify-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl border border-(--color-border) bg-white hover:bg-(--color-accent) text-(--color-text-primary) hover:text-white font-medium transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 cursor-pointer"
          >
            <span>Explore All Projects ({projects.length})</span>
            <TbArrowRight className="text-(--color-text-primary) transition-transform duration-200 group-hover:translate-x-1 group-hover:text-white " />
          </Link>
        </div>
      </div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
