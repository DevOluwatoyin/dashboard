import React from "react";
import Image from "next/image";
import Link from "next/link";
import purpleLogo from "../assets/logo2.svg";
import { sideLists } from "@/constants/sidebarNav";
import Button from "./Button";
import divider from "../assets/divider.svg";
import Contact from "./Contact";
import user from "../assets/user.svg"
import logout from "../assets/logout.svg"

const Sidebar = () => {
  return (
    <div className="drop bg-white w-[250px] flex-shrink-0 text-center">
      <Link
        href="/dashboard"
        className="flex items-center gap-1 relative top-8 left-6 max-w-[200px]"
      >
        <Image src={purpleLogo} alt="stryke logo" />
        <span className="text-[28px] font-bold leading-[38px] text-[#646DFF]">
          Stryke
        </span>
      </Link>
      <div className="flex flex-col w-full relative top-20 justify-between">
        {sideLists.map((item) => (
          <Button
            key={item.id}
            icon={item.image}
            text={item.text}
            number={item.number}
            buttonStyles={`flex flex-between items-center px-8 py-4 gap-5 font-semibold text-sm text-gray-dark ${item.style}`}
          />
        ))}
      </div>

      <Image src={divider} alt="divider" className="relative -bottom-24" />

      <Contact />

      {/* <div className="mt-auto">
        <Button icon={user} text="Account" />
        <Button icon={logout} text="Logout" />
      </div> */}
    </div>
  );
};

export default Sidebar;
