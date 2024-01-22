import Image from "next/image";
import React from "react";

const UserStatsCard: React.FC<{ statDetails: StatsProps }> = ({
  statDetails: item,
}) => {
  return (
    <div
      key={item.id}
      className="drop w-[255px] h-[100px] flex items-center pl-6 gap-3 bg-white rounded-2xl flex-shrink-0"
    >
      <Image src={item.image} alt="connectivity icon" />
      <div>
        <p className="text-xs text-gray-lighter font-bold">{item.title}</p>
        <p className="inline-flex items-center gap-3">
          <span className="text-theme-dark text-xl font-semibold">
            {item.value}{" "}
          </span>
          <span className={`font-bold text-xs ${item.style}`}>{item.rate}</span>
        </p>
      </div>
    </div>
  );
};

export default UserStatsCard;
