import Image from "next/image";
import { TbBrandGithub, TbBrandLinkedin, TbMail, TbArrowDown } from "react-icons/tb";

export default function Hero() {
  return (
    <section
      id="hero"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="600"
      className="container pt-12 pb-20 md:pt-20 md:pb-28"
    >
      {/* 1. Header Row: Avatar + Name + Social Icons */}
      <div className="flex items-center gap-5 mb-6">
        {/* Avatar */}
        <div className="relative w-35 h-35 sm:w-50 sm:h-50 rounded-full overflow-hidden border-3 border-(--color-border) shrink-0 shadow-md">
          <Image
            src="/images/profile.webp"
            alt="Vincent Chen"
            fill
            sizes="200px"
            className="object-cover"
          />
        </div>

        {/* Name, Verified Badge, & Social Links */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-(--color-text-primary) tracking-tight">
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
              <TbBrandGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/vincent-chenn/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:text-accent transition-colors"
            >
              <TbBrandLinkedin size={30} />
            </a>
            <a
              href="mailto:chenvincent.846@gmail.com"
              aria-label="Send Email"
              className="hover:text-accent transition-colors"
            >
              <TbMail size={30} />
            </a>
          </div>
        </div>
      </div>

      {/* 2. Headline Title */}
      <div className="mb-5 flex">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-(--color-text-primary)">
          Full-stack Web Engineer <span className="text-(--color-text-secondary) font-normal">— MERN Stack & TypeScript </span>
        </h2>
       
      </div>

      {/* 3. Bio Description */}
      <p className="text-(--color-text-secondary) leading-relaxed text-justify text-base sm:text-xl mb-8">
        Full-stack Web Engineer with hands-on experience in full-stack MERN development, specializing in building clean and performant web applications with{" "}
        <span className="inline-flex items-center font-medium text-accent bg-accent/10 px-2 py-0.5 rounded text-xs sm:text-sm">
          React
        </span>{" "}
        <span className="inline-flex items-center font-medium text-accent bg-accent/10 px-2 py-0.5 rounded text-xs sm:text-sm">
          TypeScript
        </span>{" "}
        <span className="inline-flex items-center font-medium text-accent bg-accent/10 px-2 py-0.5 rounded text-xs sm:text-sm">
          Express
        </span>{" "}
        and{" "}
        <span className="inline-flex items-center font-medium text-accent bg-accent/10 px-2 py-0.5 rounded text-xs sm:text-sm">
          MongoDB
        </span>
        .  Backed by robust state management with Redux Toolkit, I focus on transforming complex ideas into scalable, production-ready digital solutions.
      </p>

      {/* 4. Action Button */}
      <div>
        <a
          href="#projects"
          className="no-underline inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-(--color-accent-dark) transition-colors shadow-sm cursor-pointer"
        >
          View Projects
          <TbArrowDown size={16} />
        </a>
      </div>
    </section>
  );
}
