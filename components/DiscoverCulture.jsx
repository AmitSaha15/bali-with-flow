import { Clock, Diamond, Heart, MessageCircle, Zap } from "lucide-react";

const DiscoverCulture = () => {
  return (
    <section className="space-y-6 px-4 md:px-0">
      <h2 className="text-2xl lg:text-[32px] font-bold text-[#384B40] leading-tight">
        Discover Local Culture with a Balinese Family (Tiwi)
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
        <IncludedItem
          icon={<MessageCircle className="text-orange-500" size={20} />}
          text="The host speaks french and english"
        />
      </ul>
      <button className="font-medium text-[#384B40] text-[16px] underline hover:text-green-700">
        Show Details
      </button>
    </section>
  );
};

const IncludedItem = ({ icon, text }) => (
  <li className="flex items-center gap-3">
    <div className="flex-shrink-0">{icon}</div>
    <span className="text-black text-[16px] font-regular">{text}</span>
  </li>
);

export default DiscoverCulture;
