import SectionHeader from "@/components/ui/SectionHeader";
import { projectsContent } from "./content";

export default function Projects() {
  const { title, projects } = projectsContent;

  return (
    <section id="projects" className="mb-26">
      <SectionHeader title={title} id="projects" />

      <div className="flex flex-col gap-10 md:gap-14">
        {projects.map((project) => (
          <article
            key={project.name}
            id={`project-${project.name.replace(/\s+/g, "-").toLowerCase()}`}
            className="flex flex-col md:flex-row gap-10 md:gap-14"
          >
            {/* Left rail: project name label (was the tab) */}
            <div className="md:min-w-[180px] md:border-r md:border-line md:pr-6">
              <span className="text-ink text-[0.9rem] italic font-medium block">
                {project.name}
              </span>
            </div>

            {/* Details */}
            <div className="flex-1 text-justify">
              <h3 className="text-ink mb-3 flex items-center gap-2 flex-wrap">
                <span
                  className="text-3xl font-semibold leading-none"
                  style={{
                    fontFamily: project.official_fonts.replace(/[\[\]]/g, ""),
                  }}
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

              <p className="text-ink italic text-[0.95rem] leading-[1.5] mb-4">
                {project.problematic}
              </p>

              <p className="text-muted text-[0.95rem] leading-[1.5] mb-4">
                {project.description}
              </p>

              <ul
                className="flex flex-wrap gap-2 list-none m-0 p-0"
                aria-label="Technologies used"
              >
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="text-xs text-muted border border-line rounded px-2 py-1"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}