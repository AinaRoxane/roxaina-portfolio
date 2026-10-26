export interface TechCategory {
  category: string;
  technologies: string[];
}

export const stackContent = {
  title: "stack",
  intro: "Here are some technologies I have been working with:",
  categories: [
    {
      category: "Backend",
      technologies: ["Java", "Spring Boot", "Spring Security","MySQL", "PostgreSQL", "OAuth2", "OIDC"],
    },
    {
      category: "Frontend",
      technologies: ["Next.js", "React", "Svelte", "TypeScript", "Javascript", "Tailwind CSS", "Bootstrap CSS", "HTML", "CSS"],
    },
    {
      category: "Infrastructure & DevOps",
      technologies: ["Docker", "Caddy", "Cloudinary", "FFmpeg", "Python (YOLO / Roboflow)"],
    },
    {
      category: "Security",
      technologies: ["JWT", "Spring Authorization Server", "RS256", "JWKS", "PKCE"],
    },
  ],
} as const;
