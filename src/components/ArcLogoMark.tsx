"use client";

import React from "react";

interface ArcLogoMarkProps {
  size?: number;
  className?: string;
  /** Kept for API compatibility; the mark is a static image. */
  animate?: boolean;
}

/**
 * GDG on Campus CUJ chapter mark — the `< >` code bracket in the Google
 * colours. Served from `public/image.png` so it matches the brand asset
 * exactly at every size (favicon through hero).
 */
export function ArcLogoMark({ size = 32, className = "" }: ArcLogoMarkProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/image.png"
      width={size}
      height={size}
      alt="GDG on Campus CUJ chapter mark"
      draggable={false}
      className={`inline-block select-none object-contain ${className}`}
    />
  );
}
