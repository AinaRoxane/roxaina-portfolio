export interface Project {
  name: string;
  official_name: string;
  official_fonts: string;
  problematic: string;
  description: string;
  tech: string[];
  url?: string;
}

export const projectsContent = {
  title: "projects",
  projects: [
    {
      name: "mdg-chronicles",
      official_fonts: "'Dancing Script', cursive",
      official_name: "Malagasy Chronicles",
      problematic: "Madagascar's creative talent is abundant, but the digital infrastructure to support it is almost non-existent. Local writers and artists lack a fair, dedicated platform that understands their language, their local payment methods, and their need for monetization. Without this, cultural stories remain untold, and creators are forced to abandon their craft or go through a much harder path.",
      description: "Chronicles is the direct answer to this gap: a publishing platform built by and for Malagasy creators. It combines a native wallet system integrating local mobile money (MVola, Orange Money, Airtel Money) and Visa, a transparent 70/30 revenue split, and complete internationalization (MG/FR/EN). It features dual-format reading engines (webnovel/webcomic), creator analytics dashboards, content protection, and a comprehensive admin back-office (Chronicles Studio) to ensure a sustainable, self-governed creative economy.",
      tech: ["Spring Boot", "Next.js", "PostgreSQL", "Docker", "Tailwind CSS", "JWT", "Cloudinary"],
      url: "https://mdg-chronicles.vercel.app"
    }
  ] as Project[],
} as const;
