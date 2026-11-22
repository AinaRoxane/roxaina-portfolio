import SectionHeader from "@/components/ui/SectionHeader";
import { aboutContent, type TextSegment } from "./content";

function renderSegment(segment: TextSegment, key: number) {
  if (segment.href) {
    return (
      <a
        key={key}
        href={segment.href}
        target="_blank"
        rel="noopener noreferrer"
      >
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
  const { title, paragraphs, bullets } = aboutContent;
  return (
    <section id="about" className="py-20">
      <SectionHeader title={title} id="about" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Main Bio */}
        <div className="space-y-6 text-base text-gray-600 leading-relaxed">
          {paragraphs.map((segments, i) => (
            <p key={i} className="mb-6 last:mb-0">
              {segments.map(renderSegment)}
            </p>
          ))}
        </div>

        {/* Bullet List */}
        <div>
          <ul className="space-y-4 text-sm text-gray-600">
            {bullets.map((bullet, i) => (
              <li key={i} className="relative pl-5">
                <span
                  className={`absolute left-0 top-2 w-1.5 h-1.5 rounded-full ${
                    i === 0 ? "bg-blue-600" : "bg-gray-400"
                  }`}
                ></span>
                <strong className="text-black font-bold">
                  {bullet.label}
                </strong>{" "}
                {bullet.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
