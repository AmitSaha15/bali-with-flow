"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, Plus, Minus } from "lucide-react";
import Image from "next/image";
import MapImage from "../public/assests/images/Map-Image.png";

const BookingInfo = () => {
  const [expandedSections, setExpandedSections] = useState({
    meeting: true,
    startEnd: false,
    suitability: false,
    cancellation: false,
    packing: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <section className="space-y-6 mt-10 w-full md:max-w-[500px]">
      <div className="p-4 pl-0">
        <h2 className="text-2xl md:text-[32px] font-bold text-[#384B40]">
          Additional Information
        </h2>
      </div>

      <div className="border-b border-gray-200">
        <button
          onClick={() => toggleSection("meeting")}
          className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-50"
        >
          <h3 className="text-xl md:text-[24px] font-bold text-[#384B40]">
            Where will we meet?
          </h3>
          {expandedSections.meeting ? (
            <Minus className="w-5 h-5 text-black" />
          ) : (
            <Plus className="w-5 h-5 text-black" />
          )}
        </button>

        {expandedSections.meeting && (
          <div className="px-4 pb-4">
            <div className="relative mb-4 h-48 bg-gray-100 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100">
                <div className="absolute top-4 left-4 text-[#0369F0] bg-white p-2 rounded shadow-sm text-xs">
                  View larger map
                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-6 h-6 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
                </div>

                <Image
                  src={MapImage}
                  width={700}
                  height={480}
                  className="object-cover w-full h-full"
                  alt="Map"
                />
              </div>

              <div className="absolute top-4 right-4 flex flex-col bg-white rounded shadow">
                <button className="p-2 border-b border-gray-200">
                  <Plus className="w-4 h-4 text-[#C4C4C4]" />
                </button>
                <button className="p-2">
                  <Minus className="w-4 h-4 text-[#C4C4C4]" />
                </button>
              </div>
            </div>

            <div className="space-y-3 text-sm text-gray-700">
              <div>
                <span className="font-medium">Pickup & Drop-off Location:</span>
                <span className="ml-1">
                  Your hotel or villa within Ubud, Canggu, Seminyak, or Sanur
                  areas
                </span>
              </div>

              <div>
                <span className="font-medium">Pickup Time:</span>
                <span className="ml-1">
                  7:30 AM – We'll confirm the exact time based on your location
                </span>
              </div>

              <div>
                <span className="font-medium">Drop-off Time:</span>
                <span className="ml-1">
                  Around 4:30 PM (depending on traffic and group pace)
                </span>
              </div>

              <div>
                <span className="font-medium">Private Transfers:</span>
                <span className="ml-1">
                  Clean, air-conditioned vehicle with a friendly local driver
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="border-b border-gray-200">
        <button
          onClick={() => toggleSection("startEnd")}
          className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-50"
        >
          <h3 className="text-xl md:text-[24px] font-bold text-[#384B40]">
            Start and Ends
          </h3>
          {expandedSections.startEnd ? (
            <Minus className="w-5 h-5 text-black" />
          ) : (
            <Plus className="w-5 h-5 text-black" />
          )}
        </button>

        {expandedSections.startEnd && (
          <div className="px-4 pb-4">
            <div className="text-sm text-gray-700">
              <p>
                Tour starts at 7:30 AM with hotel pickup and ends around 4:30 PM
                with drop-off at your accommodation.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="border-b border-gray-200">
        <button
          onClick={() => toggleSection("suitability")}
          className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-50"
        >
          <h3 className="text-xl md:text-[24px] font-bold text-[#384B40]">
            Suitability / Accessibility
          </h3>
          {expandedSections.suitability ? (
            <Minus className="w-5 h-5 text-black" />
          ) : (
            <Plus className="w-5 h-5 text-black" />
          )}
        </button>

        {expandedSections.suitability && (
          <div className="px-4 pb-4">
            <div className="text-sm text-gray-700">
              <p>
                This tour involves moderate walking and is suitable for most
                fitness levels. Please inform us of any mobility concerns.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="border-b border-gray-200">
        <button
          onClick={() => toggleSection("cancellation")}
          className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-50"
        >
          <h3 className="text-xl md:text-[24px] font-bold text-[#384B40]">
            Cancellation and other policies
          </h3>
          {expandedSections.cancellation ? (
            <Minus className="w-5 h-5 text-black" />
          ) : (
            <Plus className="w-5 h-5 text-black" />
          )}
        </button>

        {expandedSections.cancellation && (
          <div className="px-4 pb-4">
            <div className="text-sm text-gray-700">
              <p>
                Free cancellation up to 24 hours before the tour.
                Weather-related cancellations are fully refundable.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="border-b border-gray-200">
        <button
          onClick={() => toggleSection("packing")}
          className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-50"
        >
          <h3 className="text-xl md:text-[24px] font-bold text-[#384B40]">
            What to Pack?
          </h3>
          {expandedSections.packing ? (
            <Minus className="w-5 h-5 text-black" />
          ) : (
            <Plus className="w-5 h-5 text-black" />
          )}
        </button>

        {expandedSections.packing && (
          <div className="px-4 pb-4">
            <div className="text-sm text-gray-700">
              <ul className="list-disc list-inside space-y-1">
                <li>Comfortable walking shoes</li>
                <li>Sun hat and sunscreen</li>
                <li>Water bottle</li>
                <li>Camera</li>
                <li>Light jacket for air-conditioned vehicle</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BookingInfo;
