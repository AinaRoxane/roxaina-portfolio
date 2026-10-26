import SectionHeader from "@/components/ui/SectionHeader";
import { experienceData, navItems } from "./content";

// Keep the same visual order as the tab nav, but render every entry.
// Falls back to object order if a navItem key is missing from experienceData.
const orderedKeys = navItems
  .map((item) => item.key)
  .filter((key) => key in experienceData);

const orderedEntries = orderedKeys.length
  ? orderedKeys.map((key) => ({ key, ...experienceData[key] }))
  : Object.entries(experienceData).map(([key, value]) => ({ key, ...value }));

export default function Experience() {
  return (
    <section id="experience" className="mb-38">
      <SectionHeader title="experience" id="experience" />

      <div className="flex flex-col gap-10 md:gap-14">
        {orderedEntries.map((entry) => {
          const navItem = navItems.find((n) => n.key === entry.key);
          const entryId = `exp-${entry.key}`;
          return (
            <article
              key={entry.key}
              id={entryId}
              aria-labelledby={`${entryId}-title`}
              className="flex flex-col md:flex-row gap-10 md:gap-14"
            >
              {/* Left rail: shows the label for this entry, styled like the old nav */}
              <div className="md:min-w-[180px] md:border-r md:border-line md:pr-6">
                <span className="text-ink text-[0.9rem] font-medium block">
                  {navItem?.label ?? entry.key}
                </span>
              </div>

              {/* Right column: title, date, bullets */}
              <div className="flex-1">
                <div className="mb-1">
                  <h3 id={`${entryId}-title`} className="text-2xl font-medium text-ink mb-1 flex flex-wrap items-baseline gap-2">
                    {entry.title}{" "}
                    <span className="text-ink font-medium">{entry.company}</span>
                  </h3>
                  <time
                    dateTime={entry.dateTime}
                    className="block text-xs uppercase text-muted tracking-[0.05em] mb-6"
                  >
                    {entry.date}
                  </time>
                </div>
                <ul className="flex flex-col gap-4 m-0 text-justify">
                  {entry.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-muted leading-[1.6] text-[0.95rem] text-left before:content-['▸'] before:text-ink before:font-bold before:shrink-0 before:mt-0.5"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}