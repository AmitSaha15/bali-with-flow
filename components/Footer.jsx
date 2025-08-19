import Image from "next/image";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-[#384B40] text-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div
        className="absolute inset-0 bg-repeat bg-center opacity-50"
        style={{ backgroundImage: "url('/assests/images/footer-bg.png')" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8">
            <Image
              src="/assests/footer-logo.png"
              alt="Baliwithflow Logo"
              width={170}
              height={35}
            />
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-4 mb-10 text-white text-[16px]">
            <Link
              href="/"
              className="hover:text-white transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/experiences"
              className="hover:text-white transition-colors duration-300"
            >
              Experiences
            </Link>
            <Link
              href="/guide"
              className="hover:text-white transition-colors duration-300"
            >
              Guide
            </Link>
            <Link
              href="/itineraries"
              className="hover:text-white transition-colors duration-300"
            >
              Itineraries
            </Link>
            <Link
              href="/faq"
              className="hover:text-white transition-colors duration-300"
            >
              FAQ
            </Link>
          </nav>

          <div className="w-full h-[0px] border-[1px] border-white mb-10"></div>

          <div className="w-full flex flex-col md:flex-row justify-between items-center text-sm text-white text-[14px] gap-6">
            <p className="order-2 md:order-1 text-center md:text-left">
              © {new Date().getFullYear()} Bali With Flow. All rights reserved.
            </p>
            <div className="order-1 md:order-2 flex flex-wrap justify-center gap-x-6 gap-y-2">
              <Link
                href="/privacy-policy"
                className="underline hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="underline hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookie-settings"
                className="underline hover:text-white transition-colors duration-300"
              >
                Cookies Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
