"use client";

import { useState } from "react";
import { TbMail, TbBrandLinkedin, TbBrandGithub, TbCopy, TbCheck, TbArrowUpRight } from "react-icons/tb";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "chenvincent.846@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" data-aos="fade-up" className="section">
      <div className="container max-w-4xl">
        {/* Header */}
        <p className="text-accent text-sm font-medium text-center tracking-widest uppercase mb-2">
          Get in Touch
        </p>
        <h2 className="text-3xl font-bold text-center text-(--color-text-primary) mb-4">
          Let&apos;s Connect
        </h2>
        <p className="text-center text-(--color-text-secondary) max-w-xl mx-auto text-sm sm:text-base mb-12">
          Feel free to reach out for opportunities, collaborations, or just to say hello!
        </p>

        {/* 3 Direct Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1. Email Card */}
          <div className="bg-(--color-surface) border border-(--color-border) rounded-xl p-6 flex flex-col justify-between hover:border-accent transition-all shadow-2xs group">
            <div>
              <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <TbMail size={24} />
              </div>
              <h3 className="text-base font-bold text-(--color-text-primary) mb-1">
                Email
              </h3>
              <p className="text-xs text-(--color-text-secondary) break-all mb-6">
                {email}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${email}`}
                className="no-underline inline-flex items-center justify-center gap-1.5 bg-accent text-white text-xs font-medium py-2 px-3 rounded-lg hover:bg-(--color-accent-dark) transition-colors cursor-pointer"
              >
                Send Email
                <TbArrowUpRight size={14} />
              </a>
              <button
                onClick={handleCopy}
                className="inline-flex items-center justify-center gap-1.5 bg-(--color-bg) border border-(--color-border) text-(--color-text-primary) text-xs font-medium py-2 px-3 rounded-lg hover:border-accent transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <TbCheck size={14} className="text-green-500" />
                    <span className="text-green-500 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <TbCopy size={14} />
                    Copy Address
                  </>
                )}
              </button>
            </div>
          </div>

          {/* 2. LinkedIn Card */}
          <div className="bg-(--color-surface) border border-(--color-border) rounded-xl p-6 flex flex-col justify-between hover:border-accent transition-all shadow-2xs group">
            <div>
              <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <TbBrandLinkedin size={24} />
              </div>
              <h3 className="text-base font-bold text-(--color-text-primary) mb-1">
                LinkedIn
              </h3>
              <p className="text-xs text-(--color-text-secondary) mb-6">
                Let&apos;s connect on professional network.
              </p>
            </div>

            <a
              href="https://www.linkedin.com/in/vincent-chenn/"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline inline-flex items-center justify-center gap-1.5 bg-(--color-surface) border border-accent text-accent text-xs font-medium py-2 px-3 rounded-lg hover:bg-accent hover:text-white transition-colors cursor-pointer"
            >
              View Profile
              <TbArrowUpRight size={14} />
            </a>
          </div>

          {/* 3. GitHub Card */}
          <div className="bg-(--color-surface) border border-(--color-border) rounded-xl p-6 flex flex-col justify-between hover:border-accent transition-all shadow-2xs group">
            <div>
              <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <TbBrandGithub size={24} />
              </div>
              <h3 className="text-base font-bold text-(--color-text-primary) mb-1">
                GitHub
              </h3>
              <p className="text-xs text-(--color-text-secondary) mb-6">
                Explore my codebases and Full-stack repositories.
              </p>
            </div>

            <a
              href="https://github.com/Vincent0-8"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline inline-flex items-center justify-center gap-1.5 bg-(--color-surface) border border-accent text-accent text-xs font-medium py-2 px-3 rounded-lg hover:bg-accent hover:text-white transition-colors cursor-pointer"
            >
              Explore Repos
              <TbArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
