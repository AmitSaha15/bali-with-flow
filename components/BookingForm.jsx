import React from "react";

const StarIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z"
      clipRule="evenodd"
    />
  </svg>
);

const ChevronDownIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

export default function BookingForm() {
  return (
    <div className="flex items-center justify-center font-sans p-4">
      <div className="w-full max-w-[575px] p-6 sm:p-8 space-y-6 bg-orange-50 rounded-2xl border border-orange-100 shadow-md shadow-[#E87A4E]">
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className="w-6 h-6 text-orange-400" />
          ))}
          <p className="text-gray-800 font-semibold">4.9 (120)</p>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            From IDR 150,000.00/ Person
          </h2>
          <button className="text-sm font-semibold text-gray-600 underline mt-1 hover:text-gray-800 transition-colors">
            Show Prices
          </button>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <div className="flex items-center justify-between w-full px-4 py-3 text-gray-500 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400">
              <span>Guests</span>
              <ChevronDownIcon className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Date and Time"
              className="w-full px-4 py-3 text-gray-500 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-500"
            />
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Select Add ons"
              className="w-full px-4 py-3 text-gray-500 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-500"
            />
          </div>
        </div>

        <button className="w-full sm:w-[40%] flex items-center justify-center px-4 py-3 font-medium text-[13px] text-white bg-[#384B40] rounded-lg cursor-pointer">
          <span>Reserve for free</span>
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
