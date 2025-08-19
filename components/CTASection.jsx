import { ArrowRight } from "lucide-react";
import Image from "next/image";
import ctaImage from "../public/assests/images/cta-image.jpg";

export default function CTASection() {
  return (
    <div className="relative font-sans text-white pt-10">
      {/* Adjusted padding for different screen sizes */}
      <div className="relative h-[450px] sm:h-[500px] lg:h-[600px] flex items-center justify-center p-4 sm:p-6 md:p-8">
        <Image
          src={ctaImage}
          alt="Host in Bali"
          layout="fill" // Use layout="fill" for responsive background images in Next.js
          objectFit="cover" // Ensure the image covers the container without distortion
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* The main content container */}
        <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-6xl">
          {/* Content is centered on mobile, and aligned left on medium screens and up */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              About the Host
            </h1>
            <p className="text-base sm:text-lg text-white max-w-md">
              "I've spent 6+ years discovering the real Bali—what most people
              never get to see. I created BaliwithFlow to share that magic with
              escapees who crave meaning, depth, and effortless beauty in every
              detail."
            </p>
            {/* Buttons stack on mobile and are in a row on larger screens */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button className="flex items-center justify-center bg-[#FBAD2C] hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-[16px] shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out">
                <span>Book Escape</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="bg-white/20 hover:bg-white/30 border border-white text-white font-medium px-6 py-3 rounded-[16px] shadow-lg">
                Plan personal trip
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
