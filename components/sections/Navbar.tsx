"use client";

import { useState, useEffect, useRef } from "react";
import { TbMenu2, TbX } from "react-icons/tb";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Do not hide navbar if mobile menu is open
      if (isMenuOpen) return;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-(--color-border) flex justify-center animate-navbar-in transition-transform duration-300 will-change-transform ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="container h-20 flex items-center justify-between gap-8 relative">
        {/* 1. Logo SVG */}
        <a href="/" className="no-underline" aria-label="Vincent Home">
          <svg width="50" height="50" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <polygon
              points="50,5 89,27.5 89,72.5 50,95 11,72.5 11,27.5"
              fill="var(--color-accent)"
            />
            <text
              x="50"
              y="68.5"
              textAnchor="middle"
              fill="white"
              fontSize="48"
              fontWeight="bold"
              fontFamily="Inter, sans-serif"
            >
              V
            </text>
          </svg>
        </a>

        {/* 2. Desktop Navigation */}
        <ul className="list-none hidden md:flex gap-8">
          <li><a className="no-underline text-(--color-text-secondary) hover:text-accent transition-colors duration-200 text-sm font-medium" href="#skills">Skills</a></li>
          <li><a className="no-underline text-(--color-text-secondary) hover:text-accent transition-colors duration-200 text-sm font-medium" href="#projects">Projects</a></li>
          <li><a className="no-underline text-(--color-text-secondary) hover:text-accent transition-colors duration-200 text-sm font-medium" href="#education">Education</a></li>
          <li><a className="no-underline text-(--color-text-secondary) hover:text-accent transition-colors duration-200 text-sm font-medium" href="#certifications">Certifications</a></li>
          <li><a className="no-underline text-(--color-text-secondary) hover:text-accent transition-colors duration-200 text-sm font-medium" href="#contact">Contact</a></li>
        </ul>

        {/* 3. Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-(--color-text-primary) hover:text-accent transition-colors cursor-pointer"
          >
            {isMenuOpen ? <TbX size={28} /> : <TbMenu2 size={28} />}
          </button>
        </div>

        {/* 4. Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-(--color-border) py-6 px-6 shadow-xl md:hidden flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <a
              onClick={() => setIsMenuOpen(false)}
              className="no-underline text-(--color-text-primary) hover:text-accent font-medium text-base py-1 transition-colors"
              href="#skills"
            >
              Skills
            </a>
            <a
              onClick={() => setIsMenuOpen(false)}
              className="no-underline text-(--color-text-primary) hover:text-accent font-medium text-base py-1 transition-colors"
              href="#projects"
            >
              Projects
            </a>
            <a
              onClick={() => setIsMenuOpen(false)}
              className="no-underline text-(--color-text-primary) hover:text-accent font-medium text-base py-1 transition-colors"
              href="#education"
            >
              Education
            </a>
            <a
              onClick={() => setIsMenuOpen(false)}
              className="no-underline text-(--color-text-primary) hover:text-accent font-medium text-base py-1 transition-colors"
              href="#certifications"
            >
              Certifications
            </a>
            <a
              onClick={() => setIsMenuOpen(false)}
              className="no-underline text-(--color-text-primary) hover:text-accent font-medium text-base py-1 transition-colors"
              href="#contact"
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
