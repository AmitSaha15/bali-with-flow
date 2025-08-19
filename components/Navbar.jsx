"use client";

import { useState } from "react";
import Link from "next/link";
import logo from "../public/assests/logo.png";
import Image from "next/image";

const HamburgerIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = (
    <>
      <Link href="/">Home</Link>
      <Link href="/experiences">Experiences</Link>
      <Link href="/guide">Guide</Link>
      <div className="flex items-center gap-1 cursor-pointer">
        <span>Itineraries</span>
        <svg width="12" height="8" fill="none" viewBox="0 0 12 8">
          <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
      <Link href="/faq">FAQ</Link>
    </>
  );

  return (
    <header className="bg-[#fff3e5] sticky lg:static top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between px-4 lg:px-10 py-5">
        <Link href="/">
          <Image src={logo} alt="Logo" height={30} width={150} priority />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-black">
          {navLinks}
          <button className="ml-4 px-4 py-2 rounded-[16px] bg-[#384b40] text-white font-normal hover:bg-[#1d3126] transition-colors">
            Book a call
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="absolute top-full left-0 w-full bg-[#fff3e5] shadow-md">
            <div className="flex flex-col items-center gap-6 py-8 text-black">
              {navLinks}
              <button className="mt-4 px-6 py-2 rounded-[16px] bg-[#384b40] text-white font-normal hover:bg-[#1d3126] transition-colors">
                Book a call
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
