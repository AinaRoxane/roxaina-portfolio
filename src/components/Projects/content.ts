export interface Project {
  id: string;
  company: string;
  category: string;
  title: string;
  description: string[];
  tech: string[];
  image?: string;
  why?: { label: string; href: string };
  url?: string;
}

export const projectsData: Project[] = [
  {
    id: "mijery",
    company: "Mijery ID",
    category: "Identité & Sécurité",
    title: "Fournisseur d'identité",
    image: "/images/mijery-id.png",
    description: [
      "Chaque plateforme malgache fait face aux mêmes défis : authentification, liaison de comptes, récupération de mot de passe. Sans fournisseur partagé, chaque équipe doit tout construire.",
      "MIJERY ID est un fournisseur OAuth 2.0 / OpenID Connect autonome. Il implémente le flux Authorization Code avec PKCE, émet des JWT signés RS256, et fait tourner les jetons de rafraîchissement.",
    ],
    tech: [
      "Spring Boot",
      "PostgreSQL",
      "OAuth 2.0",
      "OpenID Connect",
      "PKCE",
      "RS256",
      "JWKS",
      "Refresh Token Rotation",
    ],
    why: {
      label: "L'identité numérique : bâtir la confiance et simplifier les usages",
      href: "#",
    },
    url: "https://roxaina.me",
  },
  {
    id: "chronicles",
    company: "Chronicles MG",
    category: "Créativité & Culture",
    title: "Plateforme de publication",
    image: "/images/chronicles-mg.png",
    description: [
      "Les créateurs malgaches publient dans plusieurs langues et formats, mais les outils disponibles ne rassemblent pas publication, accès lecteur et paiements locaux.",
      "Chronicles est une plateforme pour webnovels et webcomics. Paiements MVola, Orange Money, Airtel et Visa consolidés dans un portefeuille auditable avec un partage 70/30.",
    ],
    tech: [
      "Next.js",
      "Spring Boot",
      "PostgreSQL",
      "OAuth 2.0",
      "OpenID Connect",
      "JWT",
      "JWKS",
      "Docker",
      "Cloudinary",
      "Tailwind CSS",
    ],
    why: {
      label: "La culture, une infrastructure",
      href: "#",
    },
    url: "https://chronicles-mg.roxaina.me",
  },
];