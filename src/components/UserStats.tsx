import React from "react";
import { stats } from "@/constants/userStats";
import UserStatsCard from "./UserStatsCard";

const UserStats = () => {
  return (
    <div className="flex gap-[30px] md:flex-row w-full items-center justify-center flex-wrap">
      {stats.map((item) => (
        <UserStatsCard key={item.id} statDetails={item} />
      ))}
    </div>
  );
};

export default UserStats;
