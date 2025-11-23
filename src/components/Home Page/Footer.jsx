import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-emerald-950 text-gray-300 py-10 mt-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Logo + About */}
          <div>
            <h1 className="text-2xl font-bold text-white tracking-wide mb-3">
              NovaMart
            </h1>
            <p className="text-sm leading-6 text-gray-400">
              Your one-stop online store for premium products at the best price.
              Delivering quality & trust right to your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Customer Service
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Join Our Newsletter
            </h3>
            <p className="text-sm text-gray-400 mb-3">
              Stay updated with new arrivals & offers.
            </p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-l-md bg-emerald-900 text-gray-200 placeholder-gray-400 focus:outline-none"
              />
              <button className="px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded-r-md">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-emerald-800 mt-10 pt-5 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} NovaMart. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
