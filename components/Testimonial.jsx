"use client";
import React, { useRef } from "react";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    rating: 5,
    text: "We wanted magic, and Flora delivered it tenfold. From a private chef dinner in the jungle to a surprise waterfall hike I'll never forget — every detail felt like it was made for us. I didn't worry once. It was honestly the best week of our lives.",
    author: {
      name: "Emily & Josh",
      description: "Newlyweds, NYC",
      avatar: "/assests/images/avatar1.png",
    },
  },
  {
    rating: 5,
    text: "I booked a few day trips to get out of Canggu and wow... life-changing. I saw a sunrise from the top of a volcano, had lunch with a local family, and worked from a bamboo treehouse with the best WIFI I've had in months. Totally inspired.",
    author: {
      name: "Lena Ray",
      description: "Solo Traveler, Berlin",
      avatar: "/assests/images/avatar2.png",
    },
  },
  {
    rating: 5,
    text: "Flora's guide made everything so easy. It's like your well-traveled best friend whispering in your ear: 'Skip that, go here, trust me.' I downloaded it the night before my flight and felt totally ready. Worth 10x the price.",
    author: {
      name: "Thomas",
      description: "First-Time Visitor, London",
      avatar: "/assests/images/avatar3.png",
    },
  },
  {
    rating: 4,
    text: "An unforgettable experience. The attention to detail was impeccable, and the local guides were incredibly knowledgeable and friendly. We discovered hidden gems we would have never found on our own. Highly recommend for an authentic adventure.",
    author: {
      name: "Samantha Lee",
      description: "Adventure Seeker, Toronto",
      avatar: "/assests/images/avatar1.png",
    },
  },
];

const StarRating = ({ rating, className }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    );
  }
  return <div className={`flex items-center gap-1 ${className}`}>{stars}</div>;
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="flex-shrink-0 w-[90%] sm:w-[450px] lg:w-[32%] bg-white border border-gray-200/80 rounded-3xl p-8 shadow-sm snap-start">
      <div className="flex flex-col h-full">
        <StarRating rating={testimonial.rating} />
        <p className="mt-6 text-black text-lg font-medium leading-relaxed flex-grow">
          {testimonial.text}
        </p>
        <div className="flex flex-col items-start justify-start gap-4 mt-8">
          <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={testimonial.author.avatar}
              alt={testimonial.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-black text-[16px]">
              {testimonial.author.name}
            </p>
            <p className="text-black text-[16px]">
              {testimonial.author.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Testimonial() {
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.querySelector("div");
      if (card) {
        const cardWidth = card.offsetWidth;
        const gap = 24;
        const scrollAmount = cardWidth + gap;

        scrollContainerRef.current.scrollBy({
          left: direction === "right" ? scrollAmount : -scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="bg-[#FDF8F2] font-sans w-full py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-sans font-bold text-[#384B40]">
            What our escapees say about us
          </h1>
          <p className="mt-4 text-lg text-black">
            See how escapees from around the world experienced the real Bali —
            curated with care, heart, and local soul.
          </p>
        </div>

        <div className="mt-16">
          <div
            ref={scrollContainerRef}
            className="flex snap-x snap-mandatory pb-8 gap-6 overflow-x-auto scrollbar-hidden"
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>

        <div className="flex justify-start items-start gap-4 mt-8">
          <button
            onClick={() => handleScroll("left")}
            aria-label="Scroll left"
            className="w-32 h-8 flex items-center justify-center rounded-full border-2 border-[#384B40] text-[#384B40] hover:bg-[#384B40] hover:text-white transition-colors duration-300 focus:outline-none"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => handleScroll("right")}
            aria-label="Scroll right"
            className="w-32 h-8 flex items-center justify-center rounded-full border-2 border-[#384B40] text-[#384B40] hover:bg-[#384B40] hover:text-white transition-colors duration-300 focus:outline-none"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
