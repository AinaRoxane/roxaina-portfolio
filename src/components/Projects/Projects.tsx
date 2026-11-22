import SectionHeader from "@/components/ui/SectionHeader";
import Screenshot from "@/components/ui/Screenshot";
import { projectsData } from "./content";

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-gray-200 pt-20 mb-20">
      <SectionHeader title="Projets" id="projects" />

      <div className="flex flex-col gap-8 md:gap-12">
        {projectsData.map((project) => {
          const linkProps = project.url
            ? {
                href: project.url,
                target: "_blank" as const,
                rel: "noopener noreferrer" as const,
              }
            : null;

          return (
            <article
              key={project.id}
              id={`proj-${project.id}`}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-20"
            >
              {/* Col 1: project + category */}
              <div className="md:col-span-3">
                <h3 className="text-xl font-display font-bold text-gray-900">
                  {project.company}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {project.category}
                </p>
              </div>

              {/* Col 2: screenshot + title + description */}
              <div className="md:col-span-6 flex flex-col gap-6">
                <Screenshot
                  src={project.image}
                  alt={`Screenshot ${project.company}`}
                />
                <div className="flex justify-between items-end border-b border-gray-200 pb-3">
                  <h4 className="text-2xl font-display font-bold">
                    {project.title}
                  </h4>
                  {linkProps ? (
                    <a
                      {...linkProps}
                      className="text-blue-600 hover:text-blue-800 transition-colors font-medium text-sm flex items-center gap-1"
                    >
                      Voir le projet
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  ) : (
                    <span className="text-blue-600 hover:text-blue-800 transition-colors font-medium text-sm flex items-center gap-1">
                      Voir le projet
                    </span>
                  )}
                </div>
                <div className="text-gray-600 text-sm space-y-4">
                  {project.description.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-600 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Col 3: Pourquoi ? + Architecture button */}
              <div className="md:col-span-3 flex flex-col justify-between">
                {project.why && (
                  <div className="mb-8">
                    <h3 className="text-xl font-display font-bold text-gray-900 mb-4">
                      Pourquoi ?
                    </h3>
                    <ul className="space-y-3 text-sm text-gray-500 list-disc list-outside ml-4 marker:text-gray-400">
                      <li>
                        <a
                          href={project.why.href}
                          className="hover:text-black transition-colors underline decoration-gray-300 underline-offset-4"
                        >
                          {project.why.label}
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
                <div className="mt-auto">
                  <a
                    href="#"
                    className="inline-flex ml-auto justify-end items-center gap-2 bg-blue-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h6v6H3zM15 15h6v6h-6zM15 3h6v6h-6zM9 6h6M6 9v6h9v-6"
                      />
                    </svg>
                    Voir l'architecture
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
