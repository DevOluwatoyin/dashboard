import React from "react";
import Image from "next/image";
import Link from "next/link";
import purpleLogo from "../assets/logo2.svg";
import { sideLists } from "@/constants/sidebarNav";
import Button from "./Button";

const Sidebar = () => {
  return (
    <div className="drop bg-white w-[250px] flex-shrink-0">
      <Link
        href="/dashboard"
        className="flex items-center gap-1 relative top-8 left-6"
      >
        <Image src={purpleLogo} alt="stryke logo" />
        <span className="text-[28px] font-bold leading-[38px] text-[#646DFF]">
          Stryke
        </span>
      </Link>
      <div className="flex flex-col w-full relative top-20 justify-between">
        {sideLists.map((item) => (
          <Button key={item.id} icon={item.image} text={item.text} number={item.number} buttonStyles={`flex flex-between items-center px-8 py-4 gap-5 font-semibold text-sm text-gray-dark ${item.style}`} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
