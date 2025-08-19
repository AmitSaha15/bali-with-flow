import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const ExperienceHighlights = () => {
  const highlights = [
    {
      imageUrl: "/assests/images/experience-image.png",
      caption: "Balinese Day with a local family",
    },
    {
      imageUrl: "/assests/images/image3.png",
      caption: "Visit a local temple",
    },
  ];

  return (
    <section className="space-y-6">
      <div className="flex justify-between items-center mt-10">
        <h2 className="text-2xl font-semibold text-[#384B40]">
          Experience Highlights
        </h2>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full text-[#384B40] hover:bg-gray-200 transition-colors">
            <ArrowLeft size={20} />
          </button>
          <button className="p-2 rounded-full text-[#384B40] hover:bg-gray-200 transition-colors">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {highlights.map((highlight, index) => (
          <div key={index} className="group">
            {/* --- CHANGES ARE HERE --- */}
            <div className="w-full aspect-[4/5] bg-gray-200 rounded-xl overflow-hidden mb-3">
              <Image
                src={highlight.imageUrl}
                alt={highlight.caption}
                height={400}
                width={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="font-semibold text-black text-[22px] pr-5">
              {highlight.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceHighlights;
