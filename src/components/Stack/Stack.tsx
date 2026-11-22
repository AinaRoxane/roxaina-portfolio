import SectionHeader from "@/components/ui/SectionHeader";
import { stackContent } from "./content";

interface StackProps {
  className?: string;
}

export default function Stack({ className }: StackProps) {
  const { title, intro, categories } = stackContent;

  return (
    <section id="stack" className={`${className ?? ""} mb-20 border-t border-gray-200 pt-20`}>
      <SectionHeader title={title} id="stack" />

      <p className="text-gray-500 mb-10 text-base">{intro}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
        {categories.map((cat) => (
          <article key={cat.category}>
            <h3
              className="font-display font-bold text-lg text-gray-900 mb-4 border-b border-gray-200 pb-2"
            >
              {cat.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-600 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
