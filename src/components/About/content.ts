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
        text: ", where I combine data analysis and software engineering to help build the continent’s future sports analytics platform.",
      },
    ],
    [
      {
        text: "I design systems where trust matters: identity, payments, and data pipelines. Alongside my work, I’m building shared infrastructure for Malagasy products, starting with identity and a home for local storytellers. I believe in technology built around local realities.",
      },
    ],
    [
      {
        text: "I’m early in my career and open to freelance projects, remote roles, and partnerships with teams building serious things, where I can bring both full-stack engineering and product vision.",
      },
    ],
  ],
} as const;
