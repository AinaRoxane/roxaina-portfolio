"use client";

import { useState } from "react";
import { heroContent } from "./content";
import TypeWriter from "./TypeWriter";
import BigSquare from "./BigSquare";


const { bio, ctaCv, ctaContact, email, marqueeText } = heroContent;

export default function HeroSection() {
  const [isBigSquareHovered, setIsBigSquareHovered] = useState(false);

  return (
    <section className="pt-16 pb-12 flex flex-col items-center text-center">
      {/* Big Square (animated 2x2) */}
      <BigSquare
        className="w-48 md:w-64 mb-10"
        onHoverStart={() => setIsBigSquareHovered(true)}
        onHoverEnd={() => setIsBigSquareHovered(false)}
      />

      {/* Text Content */}
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 flex items-center justify-center">
          Tongasoa <TypeWriter isPaused={isBigSquareHovered} />
        </h1>

        <p className="text-xl md:text-2xl font-medium mb-8 text-gray-900">
          <strong className="font-bold">Roxane Aina</strong>,{" "}
          <span className="text-blue-600 underline decoration-blue-600 decoration-2 underline-offset-4">
            Développeuse
          </span>{" "}
          Full-Stack &{" "}
          <span className="text-blue-600 underline decoration-blue-600 decoration-2 underline-offset-4">
            Autrice
          </span>.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10 text-lg">{bio}</p>

        <div className="flex flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="/pdf/RoxaneAina_ProjectCreation.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 px-4 py-2.5 sm:px-8 sm:py-3.5 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-colors text-sm sm:text-lg"
          >
            {ctaCv}
          </a>
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center justify-center gap-2 bg-black text-white px-4 py-2.5 sm:px-8 sm:py-3.5 rounded-lg font-medium hover:bg-gray-800 transition-colors text-sm sm:text-lg"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            {ctaContact}
          </a>
        </div>
      </div>

      {/* Marquee / Ticker */}
      <div className="w-full mt-16 border-y border-gray-300 py-4 overflow-hidden bg-gray-50">
        <div className="animate-marquee">
          <span
            className="mx-6 text-sm font-medium tracking-widest text-gray-500 uppercase"
          >
            {marqueeText}
          </span>
        </div>
      </div>
    </section>
  );
}
