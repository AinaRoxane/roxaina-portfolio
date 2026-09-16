export interface Experience {
  title: string;
  company: string;
  date: string;
  bullets: string[];
}

export const experienceData: Record<string, Experience> = {
  "efanamby-fulltime": {
    title: "FullStack Developer",
    company: "@ e‑Fanamby",
    date: "JANUARY 2026 – PRESENT",
    bullets: [
      "Architected and developed a full-stack football analytics SaaS platform using Spring Boot, Next.js, and PostgreSQL, including data ingestion (forms/CSV), a dynamic player rating engine, video synchronization of actions, and a multilingual system (MG/FR/EN/ES).",
      "Designed an automated highlights generation pipeline capable of relying on videos from YouTube, Google Drive, a local VPS, or external S3 storage, eliminating over 4 hours of manual editing per match.",
      "Contributed to product-market fit by conducting market and cost analyses, leading a complete UI rebranding, and presenting the solution to stakeholders.",
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

export const navItems: { key: string; label: string }[] = [
  { key: "efanamby-fulltime", label: "e‑Fanamby (2026)" },
  { key: "efanamby-intern", label: "e‑Fanamby (2025)" },
  { key: "outlier", label: "Outlier" },
];
