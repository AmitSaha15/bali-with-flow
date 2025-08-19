import Image from "next/image";

import image1 from "../public/assests/images/image1.png";
import image2 from "../public/assests/images/image2.png";
import image3 from "../public/assests/images/image3.png";
import image4 from "../public/assests/images/image4.png";
import image5 from "../public/assests/images/image5.png";
import image6 from "../public/assests/images/image6.png";
import { Clock, Earth, Luggage, MapPin, UsersIcon } from "lucide-react";

const galleryImages = [
  { src: { image1 }, alt: "Balinese paddy field", aspect: "aspect-video" },
  { src: { image2 }, alt: "Balinese temple statue", aspect: "aspect-square" },
  { src: { image3 }, alt: "Balinese forest", aspect: "aspect-video" },
  { src: { image4 }, alt: "Traditional offerings", aspect: "aspect-video" },
  { src: { image5 }, alt: "Sky above rice fields", aspect: "aspect-video" },
  { src: { image6 }, alt: "Traditional attire", aspect: "aspect-portrait" },
];

const stats = [
  {
    icon: <MapPin color="#ff9800" size={20} />,
    label: "Location",
    value: "Kaleki",
    id: 1,
  },
  {
    icon: <Clock color="#ff9800" size={20} />,
    label: "Duration",
    value: "Morning 9-12",
    id: 2,
  },
  {
    icon: <UsersIcon color="#ff9800" size={20} />,
    label: "Escapees",
    value: "8",
    id: 3,
  },
  {
    icon: <Luggage color="#ff9800" size={20} />,
    label: "Type of trip",
    value: "Private",
    id: 4,
  },
  {
    icon: <Earth color="#ff9800" size={20} />,
    label: "Category",
    value: "Full day trip",
    id: 5,
  },
];

export default function HeroSection() {
  return (
    <section className="bg-[#fff3e5] pb-12">
      <div className="pt-10 mb-6 flex flex-wrap justify-center gap-6">
        <div className="flex flex-wrap justify-center items-center gap-6">
          <div className="flex flex-col gap-4 justify-between">
            <div className="rounded-xl overflow-hidden ">
              <Image
                src={image1}
                alt={galleryImages.alt}
                width={320}
                height={190}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="rounded-xl overflow-hidden ">
              <Image
                src={image2}
                alt={galleryImages[1].alt}
                width={250}
                height={380}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="rounded-xl overflow-hidden ">
            <Image
              src={image3}
              alt={galleryImages[2].alt}
              width={280}
              height={180}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-4 justify-between">
            <div className="rounded-xl overflow-hidden relative">
              <Image
                src={image4}
                alt={galleryImages[3].alt}
                width={250}
                height={380}
                className="object-cover w-full h-full"
              />
            </div>
            <div className=" rounded-xl overflow-hidden ">
              <Image
                src={image5}
                alt={galleryImages[4].alt}
                width={570}
                height={180}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="rounded-xl overflow-hidden relative">
            <Image
              src={image6}
              alt={galleryImages[5].alt}
              width={570}
              height={180}
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-3 right-2 bg-[#fff] rounded-[12px] px-2 py-1 text-black text-[10px] font-medium shadow cursor-pointer">
              View all images
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#384B40] text-center mt-8 mb-4 w-full max-w-3xl">
          Balinese Day with a Local Family
        </h1>
        <p className="max-w-2xl text-center text-[#000] text-base mb-10">
          Immerse yourself in the heart of Balinese culture by spending a day
          with a local family. This authentic experience offers a unique glimpse
          into daily life, traditions, and the warmth of Balinese hospitality.
        </p>
      </div>

      <div className="w-full flex justify-center px-4">
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between rounded-[32px] border-[0.5px] border-[#384B40] p-4 md:px-6 md:py-4 shadow w-full max-w-5xl divide-y md:divide-y-0 md:divide-x divide-[#384B40]/40">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex-1 flex flex-col items-center justify-center py-2 md:py-0 px-2"
            >
              <div className="flex items-center gap-2 mb-1">
                {stat.icon}
                <div className="text-sm font-semibold text-[#384B40]">
                  {stat.label}
                </div>
              </div>
              <div className="text-base font-medium text-gray-600">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
