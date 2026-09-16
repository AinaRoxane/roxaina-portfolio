export type TextSegment = {
  text: string;
  href?: string;
  strong?: boolean;
  highlight?: boolean;
};

export const aboutContent = {
  title: "about me",
  paragraphs: [
    [
      { text: "I am currently a " },
      { text: "FullStack Developer", strong: true },
      { text: " at " },
      { text: "e-Fanamby", highlight: true },
      {
        text: ", where I put my business management, data analyst, computer vision and developer skills to work for the continent's future sports analytics platform. Previously, I worked for ",
      },
      { text: "Kidinov", href: "https://www.kidinov.fr/" },
      { text: " and " },
      { text: "Fianarako.io", href: "https://fianarako.io/" },
      { text: " as a freelancer to quick-start their platforms." },
    ],
    [{ text: "Here are some technologies I have been working with:" }],
  ],
  technologies: [
    "Python",
    "Java",
    "Spring Boot",
    "Next.js",
    "PostgreSQL",
    "TypeScript",
    "React Native",
    "Docker",
  ],
} as const;
