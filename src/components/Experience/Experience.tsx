import SectionHeader from "@/components/ui/SectionHeader";
import Screenshot from "@/components/ui/Screenshot";
import { experienceData } from "./content";

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-gray-200 pt-20">
      <SectionHeader title="Expérience" id="experience" />

      <div className="flex flex-col gap-8 md:gap-12">
        {experienceData.map((entry) => (
          <article
            key={entry.id}
            id={`exp-${entry.id}`}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-20"
          >
            {/* Col 1: company + dates */}
            <div className="md:col-span-3">
              <h3 className="text-xl font-display font-bold text-gray-900">
                {entry.company}
              </h3>
              {entry.dates.map((date, i) => (
                <p
                  key={i}
                  className={`text-sm text-gray-500 ${i === 0 ? "mt-1" : ""}`}
                >
                  {date}
                </p>
              ))}
            </div>

            {/* Col 2: screenshot + title + bullets */}
            <div className="md:col-span-6 flex flex-col gap-6">
              <Screenshot
                src={entry.image}
                alt={`Screenshot ${entry.company}`}
              />
              <div className="flex justify-between items-end border-b border-gray-200 pb-3">
                <h4 className="text-2xl font-display font-bold">
                  {entry.title}
                </h4>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 transition-colors font-medium text-sm flex items-center gap-1"
                >
                  Voir le projet
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
              <ul className="space-y-3 text-gray-600 text-sm list-disc list-outside ml-4 marker:text-gray-400">
                {entry.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>

            {/* Col 3: Pourquoi ? + Architecture button */}
            <div className="md:col-span-3 flex flex-col justify-between">
              {entry.why && (
                <div className="mb-8">
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-4">
                    Pourquoi ?
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-500 list-disc list-outside ml-4 marker:text-gray-400">
                    <li>
                      <a
                        href={entry.why.href}
                        className="hover:text-black transition-colors underline decoration-gray-300 underline-offset-4"
                      >
                        {entry.why.label}
                      </a>
                    </li>
                  </ul>
                </div>
              )}
              <div className="mt-auto">
                <a
                  href="#"
                  className="inline-flex ml-auto justify-center items-center gap-2 bg-blue-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Architecture
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h6v6H3zM15 15h6v6h-6zM15 3h6v6h-6zM9 6h6M6 9v6h9v-6"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}