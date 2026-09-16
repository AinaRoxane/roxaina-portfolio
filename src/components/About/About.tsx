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
  const { title, paragraphs } = aboutContent;

  return (
    <section id="about" className="md:col-span-6">
      <SectionHeader title={title} />

      <div className="text-muted text-base text-[0.95rem]  text-justify leading-[1.5]">
        {paragraphs.map((segments, i) => (
          <p key={i} className="mb-6 last:mb-0">
            {segments.map(renderSegment)}
          </p>
        ))}
      </div>
    </section>
  );
}
