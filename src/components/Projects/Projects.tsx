import SectionHeader from "@/components/ui/SectionHeader";
import { projectsContent } from "./content";

export default function Projects() {
  const { title, projects } = projectsContent;

  return (
    <section id="projects" className="mb-32">
      <SectionHeader title={title} id="projects" />

      <div className="flex flex-col gap-10 md:gap-14">
        {projects.map((project, index) => (
          <article
            key={project.name}
            id={`project-${project.name
              .replace(/\s+/g, "-")
              .toLowerCase()}`}
            className="grid grid-cols-1 gap-6 md:grid-cols-[180px_minmax(0,1fr)] md:gap-14"
          >
            {/* Project identity */}
            <aside className="md:border-r md:border-line md:pr-6">
              <div className="md:sticky md:top-8">
                <p className="text-sm font-medium italic text-ink">
                  {project.name}
                </p>
              </div>
            </aside>

            {/* Project details */}
            <div className="min-w-0">
              {/* Heading and external link */}
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <h3
                  className="text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl"
                  style={
                    project.official_fonts
                      ? {
                        fontFamily: project.official_fonts.replace(
                          /[\[\]]/g,
                          "",
                        ),
                      }
                      : undefined
                  }
                >
                  {project.official_name}
                </h3>

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-ink/70 transition-colors hover:border-ink hover:text-ink"
                    aria-label={`Visit ${project.official_name}`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-[18px] w-[18px] stroke-current"
                      fill="none"
                      strokeWidth={1.8}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M7 17 17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </a>
                )}
              </div>

              {/* Problem / context */}
              <div className="mb-6">
                <p className="text-base leading-7 text-ink md:text-[0.95rem]">
                  {project.problematic}
                </p>
              </div>

              {/* Solution and architecture */}
              <div className="mb-6 flex flex-col gap-4">
                {project.description.map((paragraph, paragraphIndex) => (
                  <p
                    key={paragraphIndex}
                    className="text-sm leading-7 text-muted md:text-[0.95rem] md:leading-8"
                  >
                    {paragraph.split(/(`[^`]+`)/g).map((part, partIndex) =>
                      part.startsWith("`") && part.endsWith("`") ? (
                        <code
                          key={partIndex}
                          className="rounded bg-ink/5 px-1.5 py-0.5 font-mono text-[0.88em] text-ink"
                        >
                          {part.slice(1, -1)}
                        </code>
                      ) : (
                        part
                      ),
                    )}
                  </p>
                ))}
              </div>

              {/* Technology stack */}
              <div>
                <ul
                  className="m-0 flex list-none flex-wrap gap-2 p-0"
                  aria-label={`Technologies used by ${project.official_name}`}
                >
                  {project.tech.map((technology) => (
                    <li
                      key={technology}
                      className="rounded border border-line px-2.5 py-1.5 text-xs text-ink/80 transition-colors hover:border-ink/50"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}