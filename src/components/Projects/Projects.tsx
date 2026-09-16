"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { projectsContent } from "./content";

const navItemBase =
  "text-muted py-2 text-[0.9rem] font-medium cursor-pointer transition-colors duration-200 border-none bg-transparent text-left relative hover:text-ink";

const navItemActive =
  "text-ink after:content-[''] after:absolute after:bg-ink after:-bottom-px after:left-0 after:w-5 after:h-0.5 md:after:top-0 md:after:bottom-auto md:after:left-full md:after:w-0.5 md:after:h-full";

export default function Projects() {
  const { title, projects } = projectsContent;
  const [activeIndex, setActiveIndex] = useState(0);
  const project = projects[activeIndex];

  return (
    <section id="projects" className="mb-26">
      <SectionHeader title={title} />

      <div className="flex flex-col md:flex-row gap-10 md:gap-14">
        {/* project names — special font: 0.9rem italic */}
        <div className="flex flex-row flex-wrap gap-x-6 gap-y-2 border-b border-line pb-4 md:flex-col md:border-b-0 md:border-r md:border-line md:pr-6 md:pb-0 md:min-w-[180px]">
          {projects.map((p, i) => (
            <button
              key={p.name}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`${navItemBase} ${i === activeIndex ? navItemActive : ""}`}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* details */}
        <div className="flex-1 text-justify">
          <h3 className="text-ink mb-3 flex items-center gap-2">
            <span
              className="text-5xl font-semibold leading-none"
              style={{ fontFamily: project.official_fonts.replace(/[\[\]]/g, '') }}
            >
              {project.official_name}
            </span>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-ink/70 hover:text-ink transition-colors"
                aria-label={`Visit ${project.official_name}`}
              >
                <svg
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-[18px] h-[18px] stroke-current"
                  fill="none"
                  strokeWidth={2}
                >
                  <path d="M7 17 17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            )}
          </h3>

          <p className="text-ink italic text-[0.89rem] leading-[1.5] mb-4">
            {project.problematic}
          </p>

          <p className="text-muted text-[0.95rem] leading-[1.7] mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs text-muted border border-line rounded px-2 py-1"
              >
                {t}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
