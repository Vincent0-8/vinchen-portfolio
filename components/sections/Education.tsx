import { educationList } from "@/data/education";
import { TbSchool } from "react-icons/tb";

export default function Education() {
  return (
    <section id="education" data-aos="fade-up" className="section">
      <div className="container max-w-4xl">
        {/* Section Header */}
        <p className="text-accent text-sm font-medium text-center tracking-widest uppercase mb-2">
          Academic Background
        </p>
        <h2 className="text-3xl font-bold text-center text-(--color-text-primary) mb-12">
          Education
        </h2>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-(--color-border) ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-12">
          {educationList.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Dot Marker */}
              <div className="absolute -left-8.25 sm:-left-10.25 top-1 w-4 h-4 rounded-full bg-white border-3 border-accent group-hover:bg-accent group-hover:scale-125 transition-all shadow-sm" />

                {/* Header: Degree & Period */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5">
                  <h3 className="text-md sm:text-xl font-bold text-(--color-text-primary) group-hover:text-accent transition-colors flex items-center gap-2">
                    <TbSchool className="text-accent shrink-0" size={22} />
                    {item.degree}
                  </h3>
                  <span className="text-sm sm:text-md font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full w-fit">
                    {item.period}
                  </span>
                </div>

                {/* Institution & Location */}
                <p className="text-sm font-medium text-(--color-text-secondary) mb-3">
                  {item.institution} • {item.location}
                </p>

                {/* Focus Topics / Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {item.focus.map((topic) => (
                    <span
                      key={topic}
                      className="text-xs font-medium px-2.5 py-1 bg-(--color-surface) text-(--color-text-secondary) rounded-md border border-(--color-border)"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
