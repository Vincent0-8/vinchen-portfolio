"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { projects } from "@/data/projects";
import { TbExternalLink, TbBrandGithub, TbX, TbZoomIn, TbZoomInArea } from "react-icons/tb";


export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(0)
  const [selectedImage, setSelectedImage] = useState(0);

  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const currentProject = projects[selectedProject];
  const currentScreenshot = currentProject.screenshots[selectedImage] || currentProject.screenshots[0];

  const scrollThumbnailIntoView = (index: number) => {
    const el = thumbnailRefs.current[index];
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  const handleSelectProject = (index: number) => {
    setSelectedProject(index);
    setSelectedImage(0);
  };

  const handlePrevImage = () => {
    const nextIndex = selectedImage === 0 ? currentProject.screenshots.length - 1 : selectedImage - 1;
    setSelectedImage(nextIndex);
    scrollThumbnailIntoView(nextIndex);
  };

  const handleNextImage = () => {
    const nextIndex = selectedImage === currentProject.screenshots.length - 1 ? 0 : selectedImage + 1;
    setSelectedImage(nextIndex);
    scrollThumbnailIntoView(nextIndex);
  };

  const [isZoomOpen, setIsZoomOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsZoomOpen(false);
    };

    if (isZoomOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isZoomOpen]);



  return (
    <section id="projects" data-aos="fade-up" className="section">
      <div className="container">
        {/* Section Header */}
        <p className="text-accent text-sm font-medium text-center tracking-widest uppercase mb-2">
          Recent Works
        </p>
        <h2 className="text-3xl font-bold text-center text-(--color-text-primary) mb-8">
          My Portfolio
        </h2>

        {/* Projects Filter */}
        <div className="flex justify-center gap-3 mb-8">
          {projects.map((project, index) => (
            <button
            key={project.slug}
            onClick={() => handleSelectProject(index)}
            className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer 
              ${selectedProject === index
                ? "bg-(--color-accent) text-white shadow-md"
                : "bg-white text-(--color-text-primary) border border-(--color-border) hover:border-accent hover:text-(--color-text-primary)"
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>

        {/* Projects Showcase */}
        <div className="bg-white border border-(--color-border) rounded-xl p-6 shadow-sm">

          {/* Carousel Navigation: Prev Button + Thumbnail Strip + Next Button */}
          <div className="flex items-center gap-2 sm:gap-3 mb-6">

            {/* Previous Button */}
            <button
              onClick={handlePrevImage}
              aria-label="Previous screenshot"
              className="w-10 h-10 shrink-0 bg-accent text-white rounded-lg flex items-center justify-center hover:bg-(--color-accent-dark) transition-colors cursor-pointer text-lg font-bold"
            >
              ‹
            </button>

            {/* Thumbnail Strip */}
            <div className="flex gap-2 sm:gap-3 overflow-x-auto py-3 px-1 flex-1 items-center">
              {currentProject.screenshots.map((shot, index) => (
                <button
                  key={index}
                  ref={(el) => {
                    thumbnailRefs.current[index] = el;
                  }}
                  onClick={() => {
                    setSelectedImage(index);
                    scrollThumbnailIntoView(index);
                  }}
                  className={`relative shrink-0 w-16 h-12 sm:w-24 sm:h-16 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                    selectedImage === index
                      ? "border-accent scale-105 shadow-sm"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={shot.imageUrl}
                    alt={shot.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNextImage}
              aria-label="Next screenshot"
              className="w-10 h-10 shrink-0 bg-accent text-white rounded-lg flex items-center justify-center hover:bg-(--color-accent-dark) transition-colors cursor-pointer text-lg font-bold"
            >
              ›
            </button>
          </div>

          {/* Main Screen Viewport */}
          <div onClick={() => setIsZoomOpen(true)} className="relative w-full aspect-video max-h-105 md:max-h-120 bg-(--color-bg) rounded-xl overflow-hidden border border-(--color-border) flex items-center justify-center mb-6 cursor-zoom-in group">
            {/* Active Screenshot */}
            <img
              src={currentScreenshot.imageUrl}
              alt={currentScreenshot.title}
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />

            {/* Caption */}
            <div className="absolute bottom-3 left-3 bg-text-primary/85 backdrop-blur-md text-white text-xs sm:text-sm font-medium px-3 py-1.5 rounded-md flex items-center gap-1.5">
              <TbZoomIn size={16} />
              {currentScreenshot.title}
            </div>
          </div>

          {/* Project Info & Actions */}
          <div className="space-y-4 pt-2">
            
            {/* Header Row */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h3 className="text-2xl font-bold text-(--color-text-primary)">
                {currentProject.title}
              </h3>

              {/* Action Links */}
              <div className="flex items-center gap-3 flex-wrap">
                {/* 1. Live Preview Button */}
                <a
                  href={currentProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline inline-flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-(--color-accent-dark) transition-colors shadow-sm"
                >
                  <TbExternalLink size={18} />
                  Live Preview
                </a>

                {/* 2. GitHub Client Repo */}
                <a
                  href={currentProject.githubClient}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline inline-flex items-center gap-2 bg-white text-(--color-text-primary) border border-(--color-border) px-4 py-2.5 rounded-lg text-sm font-medium hover:border-accent transition-colors"
                >
                  <TbBrandGithub size={18} />
                  Client Repo
                </a>

                {/* 3. GitHub Server Repo */}
                {currentProject.githubServer && (
                  <a
                    href={currentProject.githubServer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline inline-flex items-center gap-2 bg-white text-(--color-text-primary) border border-(--color-border) px-4 py-2.5 rounded-lg text-sm font-medium hover:border-accent transition-colors"
                  >
                    <TbBrandGithub size={18} />
                    Server Repo
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-(--color-text-secondary) text-sm sm:text-base leading-relaxed">
              {currentProject.description}
            </p>

            {/* Tech Stack / Leveraged Skills Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {currentProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1 bg-accent/10 text-accent rounded-full border border-accent/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Zoom Modal — rendered via Portal to escape AOS transform context */}
      {isZoomOpen && typeof document !== "undefined" && createPortal(
        <div
          onClick={() => setIsZoomOpen(false)}
          className="fixed inset-0 z-100 bg-black/90 backdrop-blur-md flex items-center justify-center overflow-y-auto"
          style={{ animation: "fadeIn 0.2s ease" }}
        >
         
          {/* Fullscreen Image — stopPropagation so clicking image doesn't close modal */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-6xl max-h-[85dvh] w-full flex flex-col items-center justify-center"
          >

            {/* Close Button */}
            <button
              onClick={() => setIsZoomOpen(false)}
              aria-label="Close zoom modal"
              className="absolute -top-10 right-0 text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              <TbX size={28} />
            </button>

            <img
              src={currentScreenshot.imageUrl}
              alt={currentScreenshot.title}
              className="max-h-[80dvh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
            />
            <p className="text-white/90 text-sm font-medium mt-3 text-center">
              {currentScreenshot.title}
            </p>
          </div>
        </div>,
        document.body
      )}

    </section>
  );
}
