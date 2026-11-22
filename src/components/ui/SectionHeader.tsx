interface SectionHeaderProps {
  title: string;
  id?: string;
}

export default function SectionHeader({ title, id }: SectionHeaderProps) {
  return (
    <section aria-labelledby={id ?? title} className="mb-12">
      <h2
        id={id}
        className="flex items-center gap-4 text-4xl md:text-5xl font-display font-bold text-ink tracking-tight mb-12"
      >
        <span className="text-gray-300 mr-2">/</span> {title}
      </h2>
    </section>
  );
}
