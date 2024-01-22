import DashboardHeader from "@/components/DashboardHeader";
import Interviews from "@/components/Interviews";
import UserStats from "@/components/UserStats";
import Sidebar from "@/components/Sidebar";
import React from "react";
import Cta from "@/components/Cta";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-[250px]">
        <DashboardHeader />
        <div className="flex flex-col p-[30px] gap-[30px] bg-gradient-linear-two">
          <UserStats />
          <Cta />
          <Interviews />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
