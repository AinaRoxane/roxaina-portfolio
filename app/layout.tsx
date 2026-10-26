import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Dancing_Script } from "next/font/google";
import "./globals.css";

// Load the fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
});

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Roxane Aina",
  url: "https://roxaina.me",
  jobTitle: "Full-Stack Developer",
  description:
    "Full-stack developer and author based in Antananarivo, Madagascar. Builds data-driven platforms with Spring Boot, Next.js, and PostgreSQL. Open to remote & freelance.",
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
    { "@type": "Occupation", name: "Full-Stack Developer", startDate: "2026-01" },
    { "@type": "Occupation", name: "Software Engineer", startDate: "2025-07", endDate: "2025-12" },
  ],
};

const projectSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Chronicles MG",
  alternateName: "mdg-chronicles",
  applicationCategory: "Publishing",
  operatingSystem: "Web",
  description:
    "A publishing platform for Malagasy creators with native mobile-money payments and a 70/30 revenue split.",
  author: { "@type": "Person", name: "Roxane Aina" },
  url: "https://mdg-chronicles.vercel.app",
};

const mijerySchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "MIJERY ID",
  alternateName: "mijery-id",
  applicationCategory: "Security",
  operatingSystem: "Web",
  description:
    "A standalone OAuth2/OIDC identity provider for Malagasy applications. Implements authorization-code flow with PKCE, RS256 JWTs validated via JWKS, and single-use refresh tokens.",
  author: { "@type": "Person", name: "Roxane Aina" },
  url: "https://mijery.mg",
};

export const metadata: Metadata = {
  title: "Roxane Aina · Portfolio",
  description:
    "Full-stack developer & author based in Antananarivo, Madagascar — open to remote & freelance. Spring Boot, Next.js, PostgreSQL. Currently Full-Stack Developer at e-Fanamby.",
  openGraph: {
    title: "Roxane Aina",
    description:
      "Full-stack developer & author based in Antananarivo, Madagascar — open to remote & freelance. Spring Boot, Next.js, PostgreSQL.",
    url: "https://roxaina.me",
    type: "website",
    locale: "en_US",
    siteName: "roxaina.me",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roxane Aina — Full-Stack Developer",
    description:
      "Full-stack developer & author based in Antananarivo, Madagascar — open to remote & freelance.",
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
      lang="en"
      className={`${inter.variable} ${dancingScript.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink font-sans leading-[1.6] antialiased">
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
        />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(mijerySchema) }}
        />
        {children}
      </body>
    </html>
  );
}