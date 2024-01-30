import React from "react";
import Button from "./Button";
import download from "/public/icons/download.svg";
import create from "/public/icons/create.svg";
import ham from "/public/icons/ham.svg";
import Image from "next/image";

const DashboardHeader = () => {
  return (
    <div className="bg-white border-b border-border-light flex items-center justify-center h-[99px]">
      <header className="flex justify-between items-center px-4 w-full gap-2 lg:px-[30px]">
        <Image
          src={ham}
          alt="open sidebar icon"
          className="max-w-[20px] lg:hidden"
        />

        <h2 className="text-heading-dark text-lg font-semibold md:text-[28px]">
          Dashboard
        </h2>
        <div className="flex items-center text-xs font-semibold gap-1 flex-col justify-center md:inline-flex md:flex-row md:gap-3">
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
