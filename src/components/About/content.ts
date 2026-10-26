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
      { text: "Full-Stack Developer", strong: true },
      { text: " at " },
      {
        text: "e-Fanamby",
        href: "https://www.linkedin.com/company/e-fanamby/posts/?feedView=all",
      },
      {
        text: ", where I apply my skills in data analysis and software engineering to help build the continent's future sports analytics platform.",
      },
    ],
    [
      {
        text: "My journey is driven by a simple conviction: Madagascar doesn't just need to consume technology; it needs to build it. I'm building shared infrastructure for Malagasy products — identity first, because it's the layer everything else depends on. Whether I am building data-driven tools or creating a home for Malagasy storytellers, I focus on systems that are rooted in local realities.",
      },
    ],
    [
      {
        text: "I am early in my career and looking for teams building serious things — freelance projects, remote roles, or partnerships where I can bring both full-stack engineering and product vision.",
      },
    ],
  ],
} as const;
