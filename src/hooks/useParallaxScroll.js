import { useState, useEffect } from "react";

/**
 * Tracks vertical scroll position and converts it into per-layer offsets
 * for a simple parallax effect. `multipliers` is an object like
 * { far: 0.04, mid: 0.1, near: 0.18 } - smaller numbers move less (read as
 * "farther away"), larger numbers move more (read as "closer").
 *
 * Respects prefers-reduced-motion by never attaching the scroll listener,
 * so offsets stay at 0 and the background stays still.
 */
export function useParallaxScroll(multipliers) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const offsets = {};
  for (const [layer, multiplier] of Object.entries(multipliers)) {
    offsets[layer] = scrollY * multiplier;
  }
  return offsets;
}