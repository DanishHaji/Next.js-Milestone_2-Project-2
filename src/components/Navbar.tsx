'use client';

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar bg-base-200 shadow-lg sm:[640px] md:[768px] lg:[1024px]">
      <div className="flex items-center justify-between px-4 py-2">
        {/* Logo Section */}
        <a className="text-3xl font-bold">
          Danish <span className="text-[#00FFFF]">Haji</span>
        </a>

        {/* Hamburger Icon for small screens */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="text-3xl"
            type="submit"
          >
            {/* Hamburger Icon (open) */}
            {!isMenuOpen ? (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              // Close Icon (close)
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
            {/* Optional: visually hidden text */}
            <span className="sr-only">
              {isMenuOpen ? "Close menu" : "Open menu"}
            </span>
          </button>
        </div>

        {/* Navbar Links */}
        <div
          className={`lg:flex ${isMenuOpen ? "block" : "hidden"} lg:block`}
        >
          <ul className="menu menu-horizontal px-1 flex flex-col  lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 text-lg font-semibold">
            <li>
              <Link href="/" className="hover:text-indigo-600 ">
                Home
              </Link>
            </li>
            <li>
              <Link href="#project" className= " hover:text-indigo-600 text-lg">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#skills" className="hover:text-indigo-600">
                Skills
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-indigo-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-indigo-600">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
