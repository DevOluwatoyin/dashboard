import React from "react";
import { stats } from "@/constants/userStats";
import UserStatsCard from "./UserStatsCard";

const UserStats = () => {
  return (
    <div className="grid grid-cols-2 gap-5 w-full items-center justify-center md:grid-cols-3 md:gap-8 lg:grid-cols-4 lg:gap-[30px]">
      {stats.map((item) => (
        <UserStatsCard key={item.id} statDetails={item} />
      ))}
    </div>
  );
};

export default UserStats;
