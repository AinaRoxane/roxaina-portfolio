"use client";

import { useState, useCallback, useEffect } from "react";

interface ScreenshotProps {
  src?: string;
  alt: string;
  className?: string;
}

export default function Screenshot({ src, alt, className }: ScreenshotProps) {
  const [isLoading, setIsLoading] = useState(Boolean(src));
  const [error, setError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    setError(false);
  }, []);

  const handleError = useCallback(() => {
    setIsLoading(false);
    setError(true);
  }, []);

  // Safety net: never stay stuck in loading state forever
  useEffect(() => {
    if (!src || !isLoading) return;
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [src, isLoading]);

  // No image provided → placeholder
  if (!src) {
    return (
      <div
        className={`aspect-video bg-gray-200 rounded-xl border border-gray-300 flex items-center justify-center overflow-hidden ${className ?? ""}`}
      >
        <span className="text-gray-400 text-sm">{alt}</span>
      </div>
    );
  }

  // Image failed to load → error placeholder
  if (error) {
    return (
      <div
        className={`aspect-video bg-gray-100 rounded-xl border border-gray-300 flex items-center justify-center ${className ?? ""}`}
      >
        <span className="text-gray-400 text-sm">Image indisponible</span>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full rounded-xl border border-gray-300 overflow-hidden ${className ?? ""}`}
    >
      {/* Loading shimmer — fixed height, no forced aspect ratio to avoid stretching */}
      {isLoading && (
        <div
          className="h-64 bg-gray-100 animate-pulse flex items-center justify-center z-10"
        >
          <span className="text-gray-400 text-sm">Chargement…</span>
        </div>
      )}

      {/* Image: w-full h-auto so container paper-cuts to intrinsic aspect ratio */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-auto block ${
          isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-300"
        }`}
        onLoad={handleLoad}
        onError={handleError}
        decoding="async"
      />
    </div>
  );
}