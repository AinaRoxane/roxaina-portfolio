import SectionHeader from "@/components/ui/SectionHeader";
import { stackContent } from "./content";

interface StackProps {
  className?: string;
}

export default function Stack({ className }: StackProps) {
  const { title, intro, categories } = stackContent;

  return (
    <section id="stack" className={`${className ?? ""} mb-26`}>
      <SectionHeader title={title} id="stack" />

      <p className="text-muted text-base text-[0.95rem] leading-[1.8] mb-6">{intro}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat) => (
          <article
            key={cat.category}
            className="flex flex-col md:flex-row gap-10 md:gap-14 p-4 md:p-6 hover:bg-white/50 transition-colors"
          >
            {/* Left rail: category label (same style as experience/projects) */}
            <div className="md:min-w-[180px] md:border-r md:border-line md:pr-6">
              <span className="text-ink text-[0.9rem] font-medium italic block">
                {cat.category}
              </span>
            </div>

            {/* Right column: technologies list */}
            <div className="flex-1">
              <ul className="flex flex-wrap gap-2 list-none m-0 p-0">
                {cat.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="text-xs text-muted border border-line rounded px-2 py-1"
                  >
                    {tech}
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
