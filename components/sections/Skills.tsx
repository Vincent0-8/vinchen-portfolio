"use client";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" data-aos="fade-up" className="section">
      <div className="container max-w-4xl">
        {/* Section Header */}
        <p className="text-accent text-sm font-medium text-center tracking-widest uppercase mb-2">
          Technical Stack
        </p>
        <h2 className="text-3xl font-bold text-center text-(--color-text-primary) mb-12">
          Skills 
        </h2>

        {/* Categories Container */}
        <div className="space-y-8">
          {skillCategories.map((group) => (
            <div key={group.category}>
              {/* Category Header */}
              <h3 className="text-sm font-bold text-(--color-text-secondary) tracking-[0.2em] uppercase mb-3">
                {group.category}
              </h3>

              {/* Flexbox Pills Row */}
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-2 px-3.5 py-2 bg-(--color-surface) border border-(--color-border) rounded-lg hover:border-accent hover:-translate-y-0.5 transition-all shadow-2xs cursor-default group"
                    >
                      <Icon
                        style={{ color: skill.color }}
                        size={18}
                        className="group-hover:scale-110 transition-transform shrink-0"
                      />
                      <span className="text-xs sm:text-sm font-medium text-(--color-text-primary)">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
