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
      { text: "Fullstack Developer", strong: true },
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
        text: "My journey is driven by a simple conviction: Madagascar doesn't just need to consume technology; it needs to build it. Whether I am building data-driven tools or creating a home for Malagasy storytellers, I focus on systems that are rooted in local realities.",
      },
    ],
    [
      {
        text: "I am at the beginning of my journey, and I am seeking opportunities—freelance projects, remote roles, or partnerships—where I can bring my fullstack skills and my creative vision to teams that want to build something meaningful.",
      },
    ],
  ],
} as const;
