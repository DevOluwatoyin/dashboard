"use client"
import DashboardHeader from "@/components/DashboardHeader";
import Interviews from "@/components/Interviews";
import UserStats from "@/components/UserStats";
import React, { useState } from "react";
import Cta from "@/components/Cta";
import Viewers from "@/components/Viewers";
import ProfileViewsGraph from "@/components/ProfileViewsGraph";
import Sidebar from "@/components/Sidebar";
import SidebarControl from "@/components/SidebarControl";

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div className="flex w-full">
      <Sidebar isOpen={isOpen} toggle={handleToggleSidebar} />
      <div className="flex-1 lg:ml-[200px] xl:ml-[250px]">
        {/* <SidebarControl /> */}
        <DashboardHeader toggle={handleToggleSidebar} />
        <div className="flex flex-col gap-[30px] bg-gradient-linear-two p-3 lg:p-[30px]">
          <UserStats />
          <div className="grid grid-rows-2 justify-center gap-[30px] md:max-h-[690px] lg:grid-rows-1 lg:grid-cols-[3fr_1fr] xl:justify-between">
            <ProfileViewsGraph />
            <div className="grid gap-[30px] w-full items-center md:grid-cols-2 md:items-start md:max-h-60 md:mt-auto lg:grid-cols-1 lg:mt-0 lg:items-center lg:grid-rows-2 lg:max-h-[440px] xl:max-w-xl">
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
