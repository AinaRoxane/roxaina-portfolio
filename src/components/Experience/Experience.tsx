"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { experienceData, navItems } from "./content";

const navItemBase =
  "text-muted py-2 text-[0.9rem] font-medium cursor-pointer transition-colors duration-200 border-none bg-transparent text-left relative hover:text-ink";

const navItemActive =
  "text-ink after:content-[''] after:absolute after:bg-ink after:-bottom-px after:left-0 after:w-5 after:h-0.5 md:after:top-0 md:after:bottom-auto md:after:left-full md:after:w-0.5 md:after:h-full";

export default function Experience() {
  const [activeKey, setActiveKey] = useState("efanamby-fulltime");
  const data = experienceData[activeKey];

  return (
    <section id="experience" className="mb-16">
      <SectionHeader title="experience" />

      <div className="flex flex-col md:flex-row gap-10 md:gap-14">
        <div className="flex flex-row flex-wrap gap-x-6 gap-y-2 border-b border-line pb-4 md:flex-col md:border-b-0 md:border-r md:border-line md:pr-6 md:pb-0 md:min-w-[180px]">
          {navItems.map((item) => (
            <button
              key={item.key}
              type="button"
              data-key={item.key}
              onClick={() => setActiveKey(item.key)}
              className={`${navItemBase} ${activeKey === item.key ? navItemActive : ""}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex-1">
          <div className="text-2xl font-medium text-ink mb-1 flex flex-wrap items-baseline gap-2">
            {data.title} <span className="text-ink font-medium">{data.company}</span>
          </div>
          <span className="block text-xs uppercase text-muted tracking-[0.05em] mb-6">
            {data.date}
          </span>
          <ul className="flex flex-col gap-4 m-0">
            {data.bullets.map((bullet, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-muted leading-[1.6] text-[0.95rem] text-left before:content-['▸'] before:text-ink before:font-bold before:shrink-0 before:mt-0.5"
              >
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
