import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  womensClothing,
  mensClothing,
  electronics,
  furniture,
  gamingItem,
} from "../data/HeroImages";
import { NavLink } from "react-router-dom";
import { useSwappableItems } from "../hooks/useSwappableItems"; // import your new hook

const initialItems = [
  {
    id: "gaming",
    src: gamingItem,
    alt: "Gaming Console",
    placement: "col-start-1 col-end-3 row-start-1 row-end-4",
  },
  {
    id: "mens",
    src: mensClothing,
    alt: "Men's Clothing",
    placement: "col-start-1 col-end-3 row-start-4 row-end-6",
  },
  {
    id: "electronics",
    src: electronics,
    alt: "Electronics",
    placement: "col-start-3 col-end-5 row-start-1 row-end-3",
  },
  {
    id: "furniture",
    src: furniture,
    alt: "Furniture",
    placement: "col-start-3 col-end-5 row-start-3 row-end-6",
  },
  {
    id: "womens",
    src: womensClothing,
    alt: "Women's Clothing",
    placement: "col-start-5 col-end-7 row-start-1 row-end-6",
  },
];

export default function Hero() {
  const { items, isPausedRef } = useSwappableItems(initialItems, 1500);
  const prefersReducedMotion = useReducedMotion();

  const motionTransition = { type: "spring", stiffness: 400, damping: 40 };

  return (
    <section
      className="w-full max-h-screen h-screen grid grid-cols-6 grid-rows-5 gap-0 relative overflow-hidden"
      style={{ boxSizing: "border-box" }}
    >
      <div className="absolute inset-0 bg-black/60 pointer-events-none z-10 select-none" />

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 select-none">
        <span className="text-emerald-300 text-sm tracking-widest uppercase">
          Welcome to Our Store
        </span>

        <h1 className="mt-2 text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
          Discover Your Style
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-xl">
          Shop the latest collections in fashion, electronics, furniture & more.
        </p>

        <NavLink
          to="/shop"
          className="mt-6 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer z-30"
        >
          Shop Now
        </NavLink>
      </div>

      {items.map((item) => (
        <motion.div
          key={item.id}
          className={`${item.placement} overflow-hidden z-0`}
          layout
          transition={motionTransition}
          initial={false}
          style={{
            touchAction: "manipulation",
            willChange: "transform, opacity",
            maxHeight: "100vh",
          }}
        >
          <motion.img
            src={item.src}
            alt={item.alt}
            draggable={false}
            className="object-cover w-full h-full block"
            layout
            whileHover={{ scale: prefersReducedMotion ? 1 : 1.02 }}
            transition={{ ...motionTransition, duration: 5.5 }}
            style={{
              transformOrigin: "center center",
              backfaceVisibility: "hidden",
              willChange: "transform, opacity",
            }}
            onLoad={(e) => {
              e.currentTarget.style.display = "block";
            }}
          />
        </motion.div>
      ))}
    </section>
  );
}
