import React from "react";
import Image from "next/image";
import Link from "next/link";
import purpleLogo from "/public/icons/logo2.svg";
import { sideLists } from "@/constants/sidebarNav";
import Button from "./Button";
import divider from "/public/icons/divider.svg";
import Contact from "./Contact";
import user from "/public/icons/user.svg";
import logout from "/public/icons/logout.svg";
import close from "/public/icons/close.svg";

interface SidebarProps {
  isOpen: boolean;
  toggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggle }) => {
  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } lg:block lg:w-[200px] xl:w-[250px] fixed text-center h-screen z-50 transition-all ${
        isOpen ? "bg-white" : ""
      }`}
    >
      <div className="flex flex-col justify-between w-full h-full gap-7">
        <div className="relative top-8 left-6 flex items-center gap-2">
          <Link
            href="/dashboard"
            className="flex items-center gap-1 max-w-[200px]"
          >
            <Image src={purpleLogo} alt="stryke logo" />
            <span className="text-[28px] font-bold leading-[38px] text-[#646DFF]">
              Stryke
            </span>
          </Link>
          <button className="flex items-center text-center lg:hidden">
            <Image
              src={close}
              alt="close sidebar"
              className="w-fit"
              onClick={toggle}
            />
          </button>
        </div>

        <div className="flex flex-col w-full justify-between pt-12">
          {sideLists.map((item) => (
            <Button
              key={item.id}
              icon={item.image}
              text={item.text}
              number={item.number}
              buttonStyles={`flex flex-between items-center px-6 py-3 gap-5 font-semibold text-sm text-gray-dark cursor-pointer hover:text-primary transition-all text-xs xl:text-base ${item.style}`}
            />
          ))}
        </div>

        <Image src={divider} alt="divider" className="" />

        <Contact />

        <div className="flex flex-col mt-auto">
          <Button
            icon={user}
            text="Account"
            buttonStyles="flex flex-between items-center px-6 py-3 gap-5 font-semibold text-sm text-gray-dark cursor-pointer hover:text-primary transition-all"
          />
          <Button
            icon={logout}
            text="Logout"
            link="/"
            buttonStyles="flex flex-between items-center px-6 py-3 gap-5 font-semibold text-sm text-gray-dark cursor-pointer hover:text-primary transition-all"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
