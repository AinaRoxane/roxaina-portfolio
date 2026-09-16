interface SectionHeaderProps {
  title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <h2 className="text-[2.5rem] font-medium text-ink tracking-[-0.025em]">
        <span className="text-ink font-normal mr-1">/</span> {title}
      </h2>
      <span className="flex-1 h-px bg-line" />
    </div>
  );
}
