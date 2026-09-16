import SectionHeader from "@/components/ui/SectionHeader";
import { stackContent } from "./content";

export default function Stack() {
  const { title, intro, technologies } = stackContent;

  return (
    <section id="stack" className="md:col-span-5">
      <SectionHeader title={title} />

      <p className="text-muted text-base text-[0.95rem] leading-[1.8] mb-6">{intro}</p>

      <div className="grid grid-cols-3 gap-x-6 gap-y-2 pl-2">
        {technologies.map((tech) => (
          <div
            key={tech}
            className="text-[0.95rem] text-ink font-semibold flex items-center gap-2.5 before:content-['▸'] before:text-ink before:font-bold"
          >
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
}
