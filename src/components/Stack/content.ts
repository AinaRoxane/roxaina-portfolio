export interface TechCategory {
  category: string;
  technologies: string[];
}

export const stackContent = {
  title: "Stack",
  intro: "Quelques technologies avec lesquelles je travaille :",
  categories: [
    {
      category: "Backend",
      technologies: ["Java", "Spring Boot", "Spring Security","MySQL", "PostgreSQL", "OAuth2", "OIDC"],
    },
    {
      category: "Frontend",
      technologies: ["Next.js", "React", "TypeScript", "Javascript", "Tailwind CSS", "Bootstrap CSS", "HTML", "CSS"],
    },
    {
      category: "Infrastructure & DevOps",
      technologies: ["Docker", "Caddy", "Cloudinary", "FFmpeg", "Git", "Python (YOLO / Roboflow)"],
    },
    {
      category: "Security",
      technologies: ["JWT", "Spring Authorization Server", "RS256", "JWKS", "PKCE"],
    },
  ],
} as const;
