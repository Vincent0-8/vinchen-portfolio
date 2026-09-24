import Image from "next/image";
import { TbBrandGithub, TbBrandLinkedin, TbMail, TbArrowDown, TbArrowRight } from "react-icons/tb";

export default function Hero() {
  return (
    <section
      id="hero"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="600"
      className="container max-w-4xl pt-12 pb-16 md:pt-16 md:pb-24"
    >
      {/* 1. Header Row: Avatar + Name + Social Icons */}
      <div className="flex items-center gap-5 sm:gap-6 mb-6">
        {/* Avatar */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-(--color-border) shrink-0 shadow-sm">
          <Image
            src="/images/profile.webp"
            alt="Vincent Chen"
            fill
            sizes="112px"
            className="object-cover"
          />
        </div>

        {/* Name & Social Links */}
        <div>
          <div className="flex items-center gap-2 mb-2 sm:mb-2.5">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-(--color-text-primary) tracking-tight">
              Vincent Chen
            </h1>
          </div>

          {/* Micro Social Icons */}
          <div className="flex items-center gap-3 text-(--color-text-secondary)">
            <a
              href="https://github.com/Vincent0-8"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hover:text-accent transition-colors"
            >
              <TbBrandGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/vincent-chenn/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:text-accent transition-colors"
            >
              <TbBrandLinkedin size={22} />
            </a>
            <a
              href="mailto:me@vincentchenn.com"
              aria-label="Send Email"
              className="hover:text-accent transition-colors"
            >
              <TbMail size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* 2. Headline Title */}
      <div className="mb-4 flex">
        <h2 className="text-lg sm:text-xl font-bold text-(--color-text-primary)">
          Full-stack Web Developer <span className="text-(--color-text-secondary) font-normal">— MERN Stack & TypeScript</span>
        </h2>
      </div>

      {/* 3. Bio Description */}
      <p className="text-(--color-text-secondary) leading-relaxed text-sm sm:text-base max-w-6xl mb-8">
        Full-stack Web Developer with hands-on experience in full-stack MERN development, specializing in building clean and performant web applications with{" "}
        <span className="inline-flex items-center font-medium text-accent bg-accent/10 px-2 py-0.5 rounded text-xs">
          React
        </span>{" "}
        <span className="inline-flex items-center font-medium text-accent bg-accent/10 px-2 py-0.5 rounded text-xs">
          TypeScript
        </span>{" "}
        <span className="inline-flex items-center font-medium text-accent bg-accent/10 px-2 py-0.5 rounded text-xs">
          Express
        </span>{" "}
        and{" "}
        <span className="inline-flex items-center font-medium text-accent bg-accent/10 px-2 py-0.5 rounded text-xs">
          MongoDB
        </span>
        . Backed by robust state management with Redux Toolkit, I focus on transforming complex ideas into scalable, production-ready digital solutions.
      </p>

      {/* 4. Action Button */}
      <div>
        <a
          href="/assets/resume/vincent-resume.pdf"
          target="_blank" 
          rel="noopener noreferrer"
          className="group no-underline inline-flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-(--color-accent-dark) transition-colors shadow-sm cursor-pointer"
        >
          View Resume
          <TbArrowRight className="transition-transform duration-200 group-hover:translate-x-1" size={16} />
        </a>
      </div>
    </section>
  );
}
