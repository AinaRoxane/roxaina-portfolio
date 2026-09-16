import HeroImage from "./HeroImage";
import { heroContent } from "./content";

export default function HeroSection() {
  const { greeting, title, description, email, cta } = heroContent;

  return (
    <section
      id="home"
      className="min-h-[80vh] grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10 items-center"
    >
      <HeroImage />

      <div>
        <h1 className="text-[2.5rem] sm:text-[3.5rem] font-normal text-ink tracking-[-0.02em] mb-6 leading-[1.1]">
          {greeting}
          <span className="inline-block text-ink font-light ml-0.5 animate-blink">
            |
          </span>
        </h1>

        <p className="text-[0.95rem] text-ink font-semibold my-1">
          {title}
        </p>

        <p className="text-[0.95rem] text-muted max-w-[32rem] leading-[1.7] mb-8">
          {description}
        </p>

        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-3 px-6 py-3 rounded bg-ink text-white font-medium text-[0.9rem] transition-all duration-[250ms] hover:-translate-y-0.5"
        >
          <svg
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-[18px] h-[18px] stroke-current"
            fill="none"
            strokeWidth={2}
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          <span>{cta}</span>
        </a>
      </div>
    </section>
  );
}
