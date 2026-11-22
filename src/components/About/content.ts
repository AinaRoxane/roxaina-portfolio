export type TextSegment = {
  text: string;
  href?: string;
  strong?: boolean;
  highlight?: boolean;
};

export const aboutContent = {
  title: "À propos",
  paragraphs: [
    [
      { text: "Construire, c'est ce que je fais de mieux : chez " },
      {
        text: "e-Fanamby",
        href: "https://www.linkedin.com/company/e-fanamby/posts/?feedView=all",
      },
      {
        text: ", j'allie analyse de données et ingénierie logicielle pour bâtir la future plateforme d'analytique sportive du continent.",
      },
    ],
    [
      {
        text: "Je conçois des systèmes où la confiance compte (identité, paiements, pipelines de données) et j'écris des histoires. Les deux obéissent à la même règle : ",
      },
      {
        text: "on ne construit bien que ce qui tient debout dans le réel.",
        strong: true,
      },
    ],
  ],
  bullets: [
    {
      label: "Si vous recrutez :",
      text: "full-stack de la base de données à l'interface (Spring Boot, Next.js, PostgreSQL), avec une vraie vision produit. Disponible en remote.",
    },
    {
      label: "Si vous lisez :",
      text: "Chronicles MG est une maison pour les webnovels et webcomics malgaches, et pour mes propres univers (A stale price, Ariary, RN7, etc).",
    },
    {
      label: "Si vous investissez :",
      text: "Mijery ID et Chronicles sont des briques d'infrastructure partagée, sur un marché où presque tout reste à construire.",
    },
    {
      label: "Si vous construisez :",
      text: "parlons. Je cherche des équipes qui font des choses qui comptent.",
    },
  ],
} as const;
