import React from "react";
import { stats } from "@/constants/userStats";
import UserStatsCard from "./UserStatsCard";

const UserStats = () => {
  return (
    <div className="grid gap-[30px] w-full items-center grid-cols-4 justify-center flex-wrap">
      {stats.map((item) => (
        <UserStatsCard key={item.id} statDetails={item} />
      ))}
    </div>
  );
};

export default UserStats;
