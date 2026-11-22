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
    "Développeuse Full-Stack basée à Madagascar. Spécialisée dans les systèmes d'identité (OAuth2, JWT), le SaaS et les plateformes culturelles. Disponible en freelance et remote.",
  address: { "@type": "PostalAddress", addressCountry: "MG" },
  email: "mailto:hello@roxaina.me",
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

export const metadata: Metadata = {
  title: "Roxane Aina · Dev Fullstack & Autrice",
  // Changed meta description here:
  description:
    "Portfolio de Roxane Aina, développeuse Full-Stack basée à Madagascar. Spécialisée dans les systèmes d'identité (OAuth2, JWT), le SaaS et les plateformes culturelles. Disponible en freelance et remote.",
  openGraph: {
    title: "Roxane Aina",
    // Updated for consistency
    description:
      "Portfolio de Roxane Aina, développeuse Full-Stack basée à Madagascar. Spécialisée dans les systèmes d'identité (OAuth2, JWT), le SaaS et les plateformes culturelles. Disponible en freelance et remote.",
    url: "https://roxaina.me",
    type: "website",
    locale: "fr_FR",
    siteName: "roxaina.me",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roxane Aina · Dev Fullstack & Autrice",
    // Updated for consistency
    description:
      "Portfolio de Roxane Aina, développeuse Full-Stack basée à Madagascar. Spécialisée dans les systèmes d'identité (OAuth2, JWT), le SaaS et les plateformes culturelles. Disponible en freelance et remote.",
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
        {children}
      </body>
    </html>
  );
}