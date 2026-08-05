"use client";

import { useState } from "react";

interface Experience {
  title: string;
  company: string;
  date: string;
  bullets: string[];
}

const experienceData: Record<string, Experience> = {
  "efanamby-fulltime": {
    title: "FullStack Developer",
    company: "@ e‑Fanamby",
    date: "JANUARY 2026 – PRESENT",
    bullets: [
      "Architected a modular SaaS platform for football analytics using Spring Boot, Next.js, and PostgreSQL.",
      "Designed 35+ REST APIs, 12+ database migrations, RBAC, subscriptions, and automated video pipelines (FFmpeg).",
      "Validated by the Malagasy Football Federation (FMF) and FIFA Talent Development Scheme (Barea U15).",
      "Built advanced features: player rating systems, tactical dashboards, match formation builder (SVG/drag‑drop), and match timeline sync.",
    ],
  },
  "efanamby-intern": {
    title: "Software Engineer (Intern)",
    company: "@ e‑Fanamby",
    date: "JULY 2025 – DECEMBER 2025",
    bullets: [
      "Built a desktop application that automatically generates match highlights using YOLO, Roboflow, FFmpeg, and Python (PySide).",
      "Trained computer vision models to identify teams, players, and passes – enabling automated tactical analysis without manual video editing.",
    ],
  },
  fianarako: {
    title: "FullStack Developer & Data Engineer",
    company: "@ Fianarako.io (Freelance)",
    date: "NOVEMBER 2025 – MARCH 2026",
    bullets: [
      "Built complete school management modules (student progress, grades, attendance, payroll, finance) using Spring Boot, Next.js, PostgreSQL.",
      "Developed Python‑SQL ETL pipelines to migrate legacy databases to PostgreSQL with strict data validation.",
      "Ensured data integrity and performance for 10+ educational institutions across Madagascar.",
    ],
  },
  kidinov: {
    title: "Frontend Engineer",
    company: "@ Kidinov (Freelance)",
    date: "APRIL 2026 – MAY 2026",
    bullets: [
      "Built accessible React Native and TypeScript interfaces for families of children with neurodevelopmental disorders (ASD, ADHD, dyslexia).",
      "Focused on UX accessibility, ensuring the platform was intuitive and inclusive for all users.",
    ],
  },
  outlier: {
    title: "Linguistic AI Specialist",
    company: "@ Outlier (Freelance)",
    date: "AUGUST 2024 – JANUARY 2025",
    bullets: [
      "Trained and aligned Large Language Models (LLMs) via RLHF (Reinforcement Learning from Human Feedback) workflows.",
      "Specialized in creative writing quality and French‑English translation accuracy for AI training data generation.",
    ],
  },
};

const navItems: { key: string; label: string }[] = [
  { key: "efanamby-fulltime", label: "e‑Fanamby (2026)" },
  { key: "efanamby-intern", label: "e‑Fanamby (2025)" },
  { key: "fianarako", label: "Fianarako.io" },
  { key: "kidinov", label: "Kidinov" },
  { key: "outlier", label: "Outlier" },
];

export default function ExperienceSection() {
  const [activeKey, setActiveKey] = useState("efanamby-fulltime");
  const data = experienceData[activeKey];

  return (
    <div className="exp-layout">
      <div className="exp-nav" id="expNav">
        {navItems.map((item) => (
          <button
            key={item.key}
            className={`exp-nav-item ${activeKey === item.key ? "active" : ""}`}
            data-key={item.key}
            onClick={() => setActiveKey(item.key)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="exp-details" id="expDetails">
        <div className="exp-title">
          {data.title} <span className="exp-company">{data.company}</span>
        </div>
        <span className="exp-date">{data.date}</span>
        <ul className="exp-bullet-list">
          {data.bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}