import React from "react";
import useSlider from "../hooks/useSlider";
import { sliderData } from "../data/HeroImages";

const Hero = ({ autoPlay = true, interval = 4000 }) => {
  // const sliderButtons = '-translate-y-1/2 z-20 w-10 h-20 bg-emerald-900 flex items-center justify-center hover:bg-emerald-950 focus:outline-none transition-all rounded-[0_40px_40px_0]';
  const baseButton =
    "-translate-y-1/2 z-20 w-10 h-20 flex items-center justify-center hover:bg-emerald-950 focus:outline-none transition-all";

  const prevButton = `absolute left-4 top-1/2 bg-emerald-900 rounded-[40px_0_0_40px] ${baseButton}`;

  const nextButton = `absolute right-4 top-1/2 bg-emerald-900 rounded-[0_40px_40px_0] ${baseButton}`;

  const { index, prev, next } = useSlider(sliderData.length, {
    autoPlay,
    autoPlayInterval: interval,
  });

  return (
    <section className="relative w-full overflow-hidden select-none">
      <div className="absolute inset-0 bg-black/50 pointer-events-none z-10"></div>

      <div
        className="relative w-full h-full md:h-[80vh] flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {sliderData.map(
          ({ image, title, description, ctaText, ctaLink }, i) => (
            <div key={i} className="w-full shrink-0 relative">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                <h2 className="text-3xl font-bold">{title}</h2>
                <p className="mt-2 max-w-xl">{description}</p>
                <a
                  href={ctaLink}
                  className="mt-4 inline-block bg-blue-600 px-4 py-2 rounded"
                >
                  {ctaText}
                </a>
              </div>
            </div>
          )
        )}
      </div>

      {/* Prev button */}
      {/* Prev button */}
      <button onClick={prev} aria-label="Previous slide" className={prevButton}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Next button */}
      <button onClick={next} aria-label="Next slide" className={nextButton}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </section>
  );
};

export default Hero;
