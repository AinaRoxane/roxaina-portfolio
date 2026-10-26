interface SectionHeaderProps {
  title: string;
  id?: string;
}

export default function SectionHeader({ title, id }: SectionHeaderProps) {
  return (
    <section aria-labelledby={id ?? title} className="mb-10">
      <h2
        id={id}
        className="flex items-center gap-4 text-[2.5rem] font-medium text-ink tracking-[-0.025em]"
      >
        <span className="text-ink font-normal mr-1">/</span> {title}
      </h2>
      <span className="flex-1 h-px bg-line" />
    </section>
  );
}
