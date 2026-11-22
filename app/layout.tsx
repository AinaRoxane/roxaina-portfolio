import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

// Load the fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Roxane Aina",
  url: "https://roxaina.me",
  jobTitle: "Développeuse Full-Stack & Autrice",
  description:
    "Développeuse full-stack et autrice basée à Antananarivo, Madagascar. Conceçoit des plateformes data-driven avec Spring Boot, Next.js et PostgreSQL. Ouverte au remote et au freelance.",
  address: { "@type": "PostalAddress", addressCountry: "MG" },
  email: "mailto:roxane.rakotoarimanana@gmail.com",
  knowsAbout: [
    "Spring Boot",
    "Next.js",
    "PostgreSQL",
    "TypeScript",
    "Python",
    "Docker",
    "FFmpeg",
    "OAuth2",
    "OIDC",
    "JWT",
    "RS256",
    "JWKS",
    "PKCE",
    "Computer Vision",
    "RLHF",
  ],
  sameAs: [
    "https://github.com/AinaRoxane",
    "https://linkedin.com/in/roxane-aina",
  ],
  hasOccupation: [
    { "@type": "Occupation", name: "Développeuse Full-Stack", startDate: "2026-01" },
    { "@type": "Occupation", name: "Ingénieure Logiciel", startDate: "2025-07", endDate: "2025-12" },
  ],
};

const projectSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Chronicles MG",
  alternateName: "mdg-chronicles",
  applicationCategory: "Édition",
  operatingSystem: "Web",
  description:
    "Une plateforme de publication pour les créateurs malgaches avec paiements mobile-money natifs et partage des revenus 70/30.",
  author: { "@type": "Person", name: "Roxane Aina" },
  url: "https://mdg-chronicles.vercel.app",
};

const mijerySchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "MIJERY ID",
  alternateName: "mijery-id",
  applicationCategory: "Sécurité",
  operatingSystem: "Web",
  description:
    "Un fournisseur d'identité OAuth2/OIDC autonome pour les applications malgaches. Implémente le flux authorization-code avec PKCE, des JWT RS256 validés via JWKS, et des refresh tokens à usage unique.",
  author: { "@type": "Person", name: "Roxane Aina" },
  url: "https://mijery.mg",
};

export const metadata: Metadata = {
  title: "Roxane Aina · Portfolio",
  description:
    "Développeuse full-stack & autrice basée à Antananarivo, Madagascar — ouverte au remote et au freelance. Spring Boot, Next.js, PostgreSQL. Actuellement Développeuse Full-Stack chez e-Fanamby.",
  openGraph: {
    title: "Roxane Aina",
    description:
      "Développeuse full-stack & autrice basée à Antananarivo, Madagascar — ouverte au remote et au freelance. Spring Boot, Next.js, PostgreSQL.",
    url: "https://roxaina.me",
    type: "website",
    locale: "fr_FR",
    siteName: "roxaina.me",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roxane Aina — Développeuse Full-Stack",
    description:
      "Développeuse full-stack & autrice basée à Antananarivo, Madagascar — ouverte au remote et au freelance.",
  },
  alternates: {
    canonical: "https://roxaina.me",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink font-sans leading-[1.6] antialiased selection:bg-blue-200 selection:text-blue-900">
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Script
          id="project-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
        />
        <Script
          id="mijery-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(mijerySchema) }}
        />
        {children}
      </body>
    </html>
  );
}