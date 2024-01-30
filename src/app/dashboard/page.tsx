import DashboardHeader from "@/components/DashboardHeader";
import Interviews from "@/components/Interviews";
import UserStats from "@/components/UserStats";
import React from "react";
import Cta from "@/components/Cta";
import Viewers from "@/components/Viewers";
import ProfileViewsGraph from "@/components/ProfileViewsGraph";
import Sidebar from "@/components/Sidebar";
import SidebarControl from "@/components/SidebarControl";

const Dashboard = () => {
  return (
    <div className="flex w-full">
      {/* <Sidebar /> */}
      <div className="flex-1 md:ml-[250px]">
        {/* <SidebarControl /> */}
        <DashboardHeader />
        <div className="flex flex-col gap-[30px] bg-gradient-linear-two p-3 lg:p-[30px]">
          <UserStats />
          {/* <div className="grid grid-rows-2 justify-center lg:grid-cols-[3fr_1fr] lg:gap-[30px]">
            <ProfileViewsGraph />
            <div className="grid grid-rows-2 gap-[30px] flex-col">
              <Viewers />
              <Cta />
            </div>
          </div> */}
          <Interviews />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
