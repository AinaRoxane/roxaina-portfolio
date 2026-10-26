export interface Experience {
  title: string;
  company: string;
  date: string;
  dateTime?: string;
  dateTimeEnd?: string;
  bullets: string[];
}

export const experienceData: Record<string, Experience> = {
  "efanamby-fulltime": {
    title: "Full-Stack Developer",
    company: "@ e-Fanamby",
    date: "January 2026 – Present",
    dateTime: "2026-01",
    bullets: [
      "Architected and developed a full-stack football analytics SaaS platform using Spring Boot, Next.js, and PostgreSQL, processing over 160 hierarchical performance indicators across 19 annotated matches and 400+ profiled players, including data ingestion (forms/CSV), a dynamic player rating engine, video synchronization of actions, and a multilingual system (MG/FR/EN/ES).",
      "Designed an automated highlights generation pipeline capable of relying on videos from YouTube, Google Drive, a local VPS, or external S3 storage, eliminating over 4 hours of manual editing per match.",
      "Contributed to product-market fit by conducting market and cost analyses, leading a complete UI rebranding, and pitching the solution as a finalist at the POESAM 2026 awards.",
    ],
  },
  "efanamby-intern": {
    title: "Software Engineer (Intern)",
    company: "@ e-Fanamby",
    date: "July 2025 – December 2025",
    dateTime: "2025-07",
    dateTimeEnd: "2025-12",
    bullets: [
      "Built a desktop application that automatically generates match highlights using YOLO, Roboflow, FFmpeg, and Python (PySide).",
      "Trained computer vision models to identify teams, players, and passes – enabling automated tactical analysis without manual video editing.",
    ],
  },
  outlier: {
    title: "Linguistic AI Specialist",
    company: "@ Outlier (Freelance)",
    date: "August 2024 – January 2025",
    dateTime: "2024-08",
    dateTimeEnd: "2025-01",
    bullets: [
      "Trained and aligned Large Language Models (LLMs) via RLHF (Reinforcement Learning from Human Feedback) workflows.",
      "Specialized in creative writing quality and French-English translation accuracy for AI training data generation.",
    ],
  },
};

export const navItems: { key: string; label: string }[] = [
  { key: "efanamby-fulltime", label: "e-Fanamby (2026)" },
  { key: "efanamby-intern", label: "e-Fanamby (2025)" },
  { key: "outlier", label: "Outlier (2024–2025)" },
];
