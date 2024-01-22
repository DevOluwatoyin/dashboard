import DashboardHeader from "@/components/DashboardHeader";
import Interviews from "@/components/Interviews";
import UserStats from "@/components/UserStats";
import Cta from "@/components/Cta";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <DashboardHeader />
      <div className="flex flex-col p-[30px] gap-[30px] bg-gradient-linear-two">
        <UserStats />
        <Cta />
        <Interviews />
      </div>
    </>
  );
};

export default Dashboard;
