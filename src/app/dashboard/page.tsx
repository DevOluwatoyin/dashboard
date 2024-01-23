import DashboardHeader from "@/components/DashboardHeader";
import Interviews from "@/components/Interviews";
import UserStats from "@/components/UserStats";
import Sidebar from "@/components/Sidebar";
import React from "react";
import Cta from "@/components/Cta";
import Viewers from "@/components/Viewers";
import ProfileViewsGraph from "@/components/ProfileViewsGraph";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-[250px]">
        <DashboardHeader />
        <div className="flex flex-col p-[30px] gap-[30px] bg-gradient-linear-two">
          <UserStats />
          <div className="flex justify-center gap-7">
            <ProfileViewsGraph />
            <div className="flex gap-7 flex-col">
              <Viewers />
              <Cta />
            </div>
          </div>
          <Interviews />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
