"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const AvailableDates = () => {
  const [selectedDate, setSelectedDate] = useState(6);
  const calendarDays = [
    { day: 27, currentMonth: false },
    { day: 28, currentMonth: false },
    { day: 29, currentMonth: false },
    { day: 30, currentMonth: false },
    { day: 1, currentMonth: true },
    { day: 2, currentMonth: true },
    { day: 3, currentMonth: true },
    { day: 4, currentMonth: true },
    { day: 5, currentMonth: true },
    { day: 6, currentMonth: true },
    { day: 7, currentMonth: true },
    { day: 8, currentMonth: true },
    { day: 9, currentMonth: true },
    { day: 10, currentMonth: true },
    { day: 11, currentMonth: true },
    { day: 12, currentMonth: true },
    { day: 13, currentMonth: true },
    { day: 14, currentMonth: true },
    { day: 15, currentMonth: true },
    { day: 16, currentMonth: true },
    { day: 17, currentMonth: true },
    { day: 18, currentMonth: true },
    { day: 19, currentMonth: true },
    { day: 20, currentMonth: true },
    { day: 21, currentMonth: true },
    { day: 22, currentMonth: true },
    { day: 23, currentMonth: true },
    { day: 24, currentMonth: true },
    { day: 25, currentMonth: true },
    { day: 26, currentMonth: true },
    { day: 27, currentMonth: true },
    { day: 28, currentMonth: true },
    { day: 29, currentMonth: true },
    { day: 30, currentMonth: true },
    { day: 31, currentMonth: true },
  ];

  return (
    <section className="space-y-4 md:space-y-6 mt-6 md:mt-10">
      <h2 className="text-2xl md:text-[32px] font-bold text-[#384B40]">
        Next Available Dates
      </h2>
      <div className="bg-white rounded-2xl shadow p-4 sm:p-6 max-w-md">
        <div className="flex justify-between items-center mb-4">
          <p className="font-medium text-base sm:text-[17px] text-[#6B7897]">
            December 2025
          </p>
          <div className="flex items-center gap-2">
            <button className="p-1 rounded-full hover:bg-gray-100 text-gray-400">
              <ChevronLeft size={20} />
            </button>
            <button className="p-1 rounded-full hover:bg-gray-100 text-gray-400">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-y-2 text-center text-sm">
          {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
            <div key={index} className="font-medium text-gray-500">
              {day}
            </div>
          ))}
          {calendarDays.map((date, index) => (
            <div key={index} className="flex justify-center items-center">
              <button
                onClick={() => date.currentMonth && setSelectedDate(date.day)}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full transition-colors ${
                  !date.currentMonth
                    ? "text-gray-300"
                    : selectedDate === date.day
                    ? "bg-[#384B40] text-white"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                {date.day}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-3">
        <h3 className="font-bold text-xl md:text-2xl text-[#384B40]">
          Book slot for December {selectedDate}
        </h3>
        <button className="border text-[#384B40] border-[#384B40] rounded-2xl px-4 py-2 text-sm font-medium hover:bg-gray-100 transition-colors">
          9 am - 12 am
        </button>
      </div>
    </section>
  );
};

export default AvailableDates;
