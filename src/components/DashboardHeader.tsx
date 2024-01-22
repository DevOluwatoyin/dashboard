import React from "react";
import Button from "./Button";
import download from "../assets/download.svg";
import create from "../assets/create.svg";

const DashboardHeader = () => {
  return (
    <div className="h-[99px] bg-white pt-[30px] pb-8 border-b border-border-light">
      <header className="flex justify-between items-center px-[30px]">
        <h2 className="text-heading-dark text-[28px] font-semibold">
          Dashboard
        </h2>
        <div className="inline-flex items-center gap-4 text-xs font-semibold">
          <Button
            text="Download"
            icon={download}
            buttonStyles="rounded-md py-3 px-5 flex gap-[10px] items-center border border-border-light text-theme-dark"
          />
          <Button
            text="Create"
            icon={create}
            buttonStyles="rounded-md py-3 px-5 flex items-center gap-[10px] bg-primary text-white"
          />
        </div>
      </header>
    </div>
  );
};

export default DashboardHeader;
