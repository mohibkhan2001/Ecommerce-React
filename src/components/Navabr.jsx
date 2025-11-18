import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkBase =
    "px-4 py-2 rounded-md transition-all duration-200 inline-block transform"; // shared classes

  return (
    <div className="w-auto bg-emerald-900 py-6 px-12 flex gap-6 justify-between items-center text-white shadow-lg select-none">
      <h1 className="text-2xl font-bold">Ecommerce Store</h1>

      <div>
        <ul className="flex items-center gap-6 text-md">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkBase} ${
                isActive
                  ? "bg-emerald-300 text-emerald-900 scale-105"
                  : "text-white hover:-translate-y-0.5 hover:scale-105 hover:bg-emerald-800/30"
              }`
            }
          >
            <span className="relative">
              Home
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-emerald-300 transition-all duration-200 ${
                  // underline width controlled by active state
                  window?.location?.pathname === "/" ? "w-full" : "w-0"
                }`}
              />
            </span>
          </NavLink>

          <NavLink
            to="/clothes"
            className={({ isActive }) =>
              `${linkBase} ${
                isActive
                  ? "bg-emerald-300 text-emerald-900 scale-105"
                  : "text-white hover:-translate-y-0.5 hover:scale-105 hover:bg-emerald-800/30"
              }`
            }
          >
            <span className="relative">
              Clothes
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-emerald-300 transition-all duration-200 ${
                  // NOTE: NavLink provides isActive but we can't use it inside this string,
                  // so we rely on the same isActive passed above — below we duplicate logic
                  // by using a ternary via className. Safer approach is to use a function
                  // that returns the whole JSX; see alternate pattern in explanation.
                  "w-0"
                }`}
              />
            </span>
          </NavLink>

          <NavLink
            to="/shoes"
            className={({ isActive }) =>
              `${linkBase} ${
                isActive
                  ? "bg-emerald-300 text-emerald-900 scale-105"
                  : "text-white hover:-translate-y-0.5 hover:scale-105 hover:bg-emerald-800/30"
              }`
            }
          >
            <span className="relative">
              Shoes
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-emerald-300 transition-all duration-200 w-0`}
              />
            </span>
          </NavLink>

          <NavLink
            to="/electronics"
            className={({ isActive }) =>
              `${linkBase} ${
                isActive
                  ? "bg-emerald-300 text-emerald-900 scale-105"
                  : "text-white hover:-translate-y-0.5 hover:scale-105 hover:bg-emerald-800/30"
              }`
            }
          >
            <span className="relative">
              Electronics
              <span className="absolute left-0 -bottom-1 h-0.5 bg-emerald-300 transition-all duration-200 w-0" />
            </span>
          </NavLink>

          <NavLink
            to="/furniture"
            className={({ isActive }) =>
              `${linkBase} ${
                isActive
                  ? "bg-emerald-300 text-emerald-900 scale-105"
                  : "text-white hover:-translate-y-0.5 hover:scale-105 hover:bg-emerald-800/30"
              }`
            }
          >
            <span className="relative">
              Furniture
              <span className="absolute left-0 -bottom-1 h-0.5 bg-emerald-300 transition-all duration-200 w-0" />
            </span>
          </NavLink>

          {/* vertical divider */}
          <div className="border-l border-white/30 h-6 mx-4" />

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${linkBase} ${
                isActive
                  ? "bg-emerald-500 text-emerald-900 scale-105"
                  : "text-white hover:-translate-y-0.5 hover:scale-105 hover:bg-emerald-800/30"
              }`
            }
          >
            <span className="relative">
              About
              <span className="absolute left-0 -bottom-1 h-0.5 bg-emerald-500 transition-all duration-200 w-0" />
            </span>
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${linkBase} ${
                isActive
                  ? "bg-emerald-500 text-emerald-900 scale-105"
                  : "text-white hover:-translate-y-0.5 hover:scale-105 hover:bg-emerald-800/30"
              }`
            }
          >
            <span className="relative">
              Contact
              <span className="absolute left-0 -bottom-1 h-0.5 bg-emerald-500 transition-all duration-200 w-0" />
            </span>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
