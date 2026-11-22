export const headerContent = {
  logo: "roxaina.me",
  nav: [
    { label: "Accueil", href: "#" },
    { label: "À propos", href: "#about" },
    { label: "Stack", href: "#stack" },
  ],
  dropdowns: [
    {
      label: "Expérience",
      items: [
        { label: "e-Fanamby", href: "#exp-efanamby" },
        { label: "Outlier.ai", href: "#exp-outlier" },
      ],
    },
    {
      label: "Projets",
      items: [
        { label: "Mijery ID", href: "#proj-mijery" },
        { label: "Chronicles MG", href: "#proj-chronicles" },
      ],
    },
  ],
  email: "hello@roxaina.me",
  socials: {
    github: "https://github.com/AinaRoxane",
    linkedin: "https://linkedin.com/in/roxane-aina",
  },
} as const;
