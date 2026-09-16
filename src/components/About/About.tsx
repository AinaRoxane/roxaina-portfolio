import SectionHeader from "@/components/ui/SectionHeader";
import { aboutContent, type TextSegment } from "./content";

function renderSegment(segment: TextSegment, key: number) {
  if (segment.href) {
    return (
      <a key={key} href={segment.href} target="_blank">
        {segment.text}
      </a>
    );
  }
  if (segment.strong) {
    return <strong key={key}>{segment.text}</strong>;
  }
  if (segment.highlight) {
    return (
      <span key={key} className="font-semibold">
        {segment.text}
      </span>
    );
  }
  return <span key={key}>{segment.text}</span>;
}

export default function About() {
  const { title, paragraphs, technologies } = aboutContent;

  return (
    <section id="about" className="mb-16">
      <SectionHeader title={title} />

      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-10 md:gap-12">
        <div className="text-muted text-base leading-[1.8]">
          {paragraphs.map((segments, i) => (
            <p key={i} className="mb-6 last:mb-0">
              {segments.map(renderSegment)}
            </p>
          ))}

          <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-6 pl-2">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="text-muted text-[0.95rem] flex items-center gap-2.5 before:content-['▸'] before:text-ink before:font-bold"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
