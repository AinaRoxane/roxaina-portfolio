"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface ScreensData {
  images: { src: string; alt: string }[];
  logo: string;
  company: string;
  companyUrl: string;
  socials: { label: string; url: string }[];
}

const screensData: Record<string, ScreensData> = {
  "efanamby-fulltime": {
    images: [
      { src: "/images/e-fanamby/dashboard.png", alt: "e-Fanamby dashboard" },
      { src: "/images/e-fanamby/dashboard-2.png", alt: "e-Fanamby dashboard overview" },
      { src: "/images/e-fanamby/list-matchs.png", alt: "e-Fanamby matches list" },
      { src: "/images/e-fanamby/data-individual-match.png", alt: "e-Fanamby individual match data" },
      { src: "/images/e-fanamby/stats-player-per-season.png", alt: "e-Fanamby player stats per season" },
      { src: "/images/e-fanamby/login.png", alt: "e-Fanamby login screen" },
    ],
    logo: "/images/e-fanamby/logo.jpg",
    company: "e-Fanamby",
    companyUrl: "https://www.e-fanamby.com",
    socials: [
      { label: "Facebook", url: "https://www.facebook.com/profile.php?id=61591732342702" },
      { label: "LinkedIn", url: "https://www.linkedin.com/company/e-fanamby" },
    ],
  },
  "efanamby-intern": {
    images: [
      { src: "/images/e-fanamby/dashboard.png", alt: "e-Fanamby dashboard" },
      { src: "/images/e-fanamby/dashboard-2.png", alt: "e-Fanamby dashboard overview" },
      { src: "/images/e-fanamby/list-matchs.png", alt: "e-Fanamby matches list" },
      { src: "/images/e-fanamby/data-individual-match.png", alt: "e-Fanamby individual match data" },
      { src: "/images/e-fanamby/stats-player-per-season.png", alt: "e-Fanamby player stats per season" },
      { src: "/images/e-fanamby/login.png", alt: "e-Fanamby login screen" },
    ],
    logo: "/images/e-fanamby/logo.png",
    company: "e-Fanamby",
    companyUrl: "https://www.e-fanamby.com",
    socials: [
      { label: "Facebook", url: "https://www.facebook.com/profile.php?id=61591732342702" },
      { label: "LinkedIn", url: "https://www.linkedin.com/company/e-fanamby" },
    ],
  },
};

interface ScreensSectionProps {
  activeKey: string;
}

export default function ScreensSection({ activeKey }: ScreensSectionProps) {
  const data = screensData[activeKey];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [activeKey]);

  if (!data) return null;

  const total = data.images.length;
  const current = data.images[index];

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <div className="screens">
      {/* Carousel */}
      <div className="screens-carousel">
        <button
          type="button"
          className="screens-arrow screens-arrow-left"
          onClick={prev}
          aria-label="Previous screenshot"
        >
          <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <div className="screens-viewport">
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            width={1280}
            height={800}
            className="screens-image"
          />
        </div>

        <button
          type="button"
          className="screens-arrow screens-arrow-right"
          onClick={next}
          aria-label="Next screenshot"
        >
          <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="screens-dots">
        {data.images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            className={`screens-dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to screenshot ${i + 1}`}
          />
        ))}
      </div>

      {/* Company footer */}
      <div className="screens-footer">
        <div className="screens-company">
          <Image
            src={data.logo}
            alt={`${data.company} logo`}
            width={40}
            height={40}
            className="screens-logo"
          />
          <a
            href={data.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="screens-company-name"
          >
            {data.company}
          </a>
        </div>

        <div className="screens-socials">
          {data.socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="screens-social-link"
              aria-label={social.label}
            >
              <span>{social.label}</span>
              <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17 17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}