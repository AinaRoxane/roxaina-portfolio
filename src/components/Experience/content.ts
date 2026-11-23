export interface Experience {
  id: string;
  company: string;
  dates: string[];
  title: string;
  bullets: string[];
  image?: string;
  why?: { label: string; href: string };
}

export const experienceData: Experience[] = [
  {
    id: "efanamby",
    company: "e-Fanamby",
    dates: ["Janv. 2026 – Présent", "Juil. 2025 – Déc. 2025"],
    title: "Full-Stack Developer",
    image: "/images/e-fanamby.png",
    bullets: [
      "Architecturé et développé une plateforme SaaS d'analyse de football (Spring Boot, Next.js, PostgreSQL), traitant plus de 160 indicateurs de performance sur 19 matchs et 400+ joueurs.",
      "Conçu un pipeline automatisé de génération de moments forts (YouTube, Google Drive, S3), éliminant plus de 4 heures de montage manuel par match.",
      "Contribué au product-market fit via des analyses de marché, une refonte complète de l'UI, et une pitch présenté comme finaliste aux POESAM 2026.",
    ],
    why: { label: "Parier sur la data en Afrique", href: "#" },
  },
];
