import Image from "next/image";
import React from "react";

const UserStatsCard: React.FC<{ statDetails: StatsProps }> = ({
  statDetails: item,
}) => {
  return (
    <div
      key={item.id}
      className="drop h-[100px] flex items-center gap-2 p-4 bg-white rounded-2xl md:gap-3 md:pl-6"
    >
      <Image src={item.image} alt="connectivity icon" />
      <div>
        <p className="text-[9px] text-gray-lighter font-bold xs:text-[10px] md:text-xs">
          {item.title}
        </p>
        <p className="inline-flex items-center gap-1 md:gap-3">
          <span className="text-theme-dark text-xs font-semibold xs:text-base md:text-xl">
            {item.value}
          </span>
          <span
            className={`font-bold text-[8px] xs:text-[10px] md:text-xs ${item.style}`}
          >
            {item.rate}
          </span>
        </p>
      </div>
    </div>
  );
};

export default UserStatsCard;
