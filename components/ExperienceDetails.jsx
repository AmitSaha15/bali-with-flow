import { Clock, Diamond, Heart, MapPin, User, Zap } from "lucide-react";
import ExperienceHighlights from "./ExperienceHighlights";
import DiscoverCulture from "./DiscoverCulture";
import AvailableDates from "./AvailableDates";
import BookingInfo from "./BookingInfo";

const ExperienceDetails = () => {
  return (
    <div className="space-y-6 md:space-y-8">
      <h1 className="text-2xl md:text-[32px] font-bold text-[#384B40] leading-tight">
        Experience a Day with a Balinese Family
      </h1>

      <p className="text-base md:text-[18px] font-regular text-black">
        Slow down. Watch the light move across the rice fields. Learn how to
        make coconut oil the way it's been done for generations. This is Bali
        with soul — the part you don't find in guidebooks.
      </p>

      <div className="space-y-4">
        <h2 className="text-lg md:text-[18px] font-semibold text-[#384B40]">
          How can I connect with locals without it feeling forced or touristy?
        </h2>
        <p className="text-gray-700 text-base md:text-[18px]">
          You spend a day with Tiwi and her family. You help make offerings,
          walk their land, cook lunch together, and share stories. No
          performance. Just presence.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl md:text-[24px] font-bold text-[#384B40]">
          What's included?
        </h2>
        <ul className="space-y-3">
          <IncludedItem
            icon={<Diamond className="text-orange-500" size={20} />}
            text="Walk through the rice fields with Tiwi"
          />
          <IncludedItem
            icon={<Zap className="text-orange-500" size={20} />}
            text="Learn how to make offerings & coconut oil"
          />
          <IncludedItem
            icon={<Heart className="text-orange-500" size={20} />}
            text="Cook & enjoy an authentic Balinese lunch"
          />
          <IncludedItem
            icon={<Clock className="text-orange-500" size={20} />}
            text="Option to stay overnight in the family home"
          />
        </ul>
      </div>

      <div className="flex flex-wrap gap-3">
        <Tag icon={<MapPin size={16} />} text="Village near Ubud" />
        <Tag icon={<Clock size={16} />} text="9am - 12am" />
        <Tag icon={<User size={16} />} text="Private" />
      </div>

      <ExperienceHighlights />
      <DiscoverCulture />
      <AvailableDates />
      <BookingInfo />
    </div>
  );
};

const IncludedItem = ({ icon, text }) => (
  <li className="flex items-center gap-3">
    <div className="flex-shrink-0">{icon}</div>
    <span className="text-black text-base font-regular">{text}</span>
  </li>
);

const Tag = ({ icon, text }) => (
  <div className="flex items-center gap-2 bg-[#384B40] text-white text-sm font-medium px-3 py-1.5 rounded-full">
    {icon}
    <span>{text}</span>
  </div>
);

export default ExperienceDetails;
