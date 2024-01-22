import DashboardHeader from "@/components/DashboardHeader";
import Interviews from "@/components/Interviews";
import UserStats from "@/components/UserStats";
import Cta from "@/components/Cta";
import Sidebar from "@/components/Sidebar";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div>
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
