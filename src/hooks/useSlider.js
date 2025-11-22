import { useState, useEffect, useCallback } from "react";

export default function useSlider(length, options = {}) {
  const {
    initialIndex = 0,
    autoPlay = false,
    autoPlayInterval = 1000,
  } = options;

  const [index, setIndex] = useState(() => {
    return Math.max(0, Math.min(initialIndex, Math.max(0, length - 1)));
  });

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + length) % length);
  }, [length]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % length);
  }, [length]);

  // autoplay effect - no pause on hover, always running if autoPlay=true
  useEffect(() => {
    if (!autoPlay || length <= 1) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % length);
    }, autoPlayInterval);

    return () => clearInterval(id);
  }, [autoPlay, autoPlayInterval, length]);

  // keyboard support (optional)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  return { index, prev, next };
}
