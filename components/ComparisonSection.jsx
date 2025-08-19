"use client";
import React, { useRef } from "react";
import { MapPin, ArrowLeft, ArrowRight } from "lucide-react";

import Image from "next/image";

const suggestions = [
  {
    imageUrl: "/assests/images/surf-image.jpg",
    tags: ["Canggu", "Half Day Trip", "Private"],
    title: "Surf in Canggu",
    price: "35,00,000.00",
    description:
      "Wake up, grab your board and head to the beach while it's still quiet. This is your moment to catch your first wave — and do it with someone who kn...",
  },
  {
    imageUrl: "/assests/images/retreat-image.jpg",
    tags: ["Canggu", "Half Day Trip", "Private/Group"],
    title: "Balinese Healing in Retreat",
    price: "60,00,000.00",
    description:
      "You know that moment when you realise you've been carrying too much — in your body, your head, your heart? This is the kind of space that h...",
  },
  {
    imageUrl: "/assests/images/experience-image.png",
    tags: ["Canggu", "Full Day Trip", "Private"],
    title: "Balinese Day with a local family",
    price: "15,00,000.00",
    description:
      "Slow down. Watch the light move across the rice fields. Learn how to make coconut oil the way it's been done for generations. This is Bali with soul...",
  },
  {
    imageUrl: "/assests/images/image6.png",
    tags: ["Ubud", "Full Day Trip", "Group"],
    title: "Jungle Trekking Adventure",
    price: "45,00,000.00",
    description:
      "Explore the lush jungles of Ubud, discover hidden waterfalls, and experience the incredible biodiversity of the island. A true adventure for nature lovers.",
  },
];

const Tag = ({ icon, text, color, fontColor }) => (
  <div
    className="flex items-center gap-1 backdrop-blur-sm rounded-full px-2 py-1 text-xs"
    style={{
      backgroundColor: color || "rgba(0, 0, 0, 0.25)",
      color: fontColor,
    }}
  >
    {icon}
    <span>{text}</span>
  </div>
);

const SuggestionCard = ({ item }) => {
  return (
    <div className="flex-shrink-0 w-[90%] sm:w-[380px] bg-white border border-gray-200/80 rounded-[12px] shadow-sm snap-start overflow-hidden">
      <div className="relative h-56">
        <Image
          src={item.imageUrl}
          alt={item.title}
          width={500}
          height={300}
          className="w-full h-full object-cover rounded-[12px]"
        />
      </div>
      <div className="relative p-6 flex flex-col h-[calc(100%-14rem)]">
        <div className="absolute top-3 left-3 flex flex-wrap items-center gap-2">
          <Tag
            icon={<MapPin size={12} />}
            text={item.tags[0]}
            color={"#384B40"}
            fontColor={"#fff"}
          />
          <Tag text={item.tags[1]} color={"#407C59"} fontColor={"#fff"} />
          <Tag text={item.tags[2]} color={"#FDF3E8"} fontColor={"#000"} />
        </div>
        <div className="pt-6 flex flex-col items-start justify-start">
          <h3 className="text-[20px] font-semibold text-black leading-tight">
            {item.title}
          </h3>
          <p className="mt-2 text-[#407C59] font-medium text-[22px]">
            From IDR {item.price}/ person
          </p>
          <p className="mt-2 text-gray-600 text-sm leading-relaxed flex-grow">
            {item.description}
          </p>
        </div>
        <div className="flex items-center gap-4 mt-6">
          <button className="bg-[#384B40] text-white font-medium text-[16px] py-2 px-6 rounded-[16px]">
            Book Escape
          </button>
          <button className="text-[#384B40] font-medium text-[16px] py-2 px-4 rounded-xl underline">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default function ComparisonSection() {
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
    <div className="bg-white font-sans w-full py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-[52px] font-bold sm:text-5xl font-sans text-[#384B40] tracking-tight">
            You may also like
          </h2>
        </div>

        <div className="mt-10">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory pb-8 gap-6 scrollbar-hidden"
          >
            {suggestions.map((item, index) => (
              <SuggestionCard key={index} item={item} />
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 mt-5">
          <button
            onClick={() => handleScroll("left")}
            aria-label="Scroll left"
            className="w-32 h-8 flex items-center justify-center rounded-[100px] border-3 border-[#384B40] text-[#384B40] hover:bg-gray-800 hover:text-white transition-colors duration-300 focus:outline-none "
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => handleScroll("right")}
            aria-label="Scroll right"
            className="w-32 h-8 flex items-center justify-center rounded-[100px] border-3 border-[#384B40] text-[#384B40] hover:bg-gray-800 hover:text-white transition-colors duration-300 focus:outline-none "
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
