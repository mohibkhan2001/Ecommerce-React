import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

function shuffleSwapTwoItems(arr) {
  const newArr = [...arr];
  const len = newArr.length;
  if (len < 2) return newArr;

  let idx1 = Math.floor(Math.random() * len);
  let idx2;
  do {
    idx2 = Math.floor(Math.random() * len);
  } while (idx2 === idx1);

  const temp = newArr[idx1].placement;
  newArr[idx1] = { ...newArr[idx1], placement: newArr[idx2].placement };
  newArr[idx2] = { ...newArr[idx2], placement: temp };

  return newArr;
}

export function useSwappableItems(initialItems, intervalMs = 300) {
  const [items, setItems] = useState(initialItems);
  const isPausedRef = useRef(false);
  const intervalRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return; // disable if reduced motion

    intervalRef.current = setInterval(() => {
      if (isPausedRef.current) return;

      setItems((prev) => shuffleSwapTwoItems(prev));
    }, intervalMs);

    return () => clearInterval(intervalRef.current);
  }, [prefersReducedMotion, intervalMs]);

  return { items, isPausedRef };
}
