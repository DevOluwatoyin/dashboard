import Image from "next/image";
import Link from "next/link";
import React from "react";
import purpleLogo from "/public/icons/logo2.svg";
import ham from "/public/icons/ham.svg"
import close from "/public/icons/close.svg"

const SidebarControl = () => {
  return (
    <div className="px-[30px] pt-4 flex justify-between items-center md:hidden">
      <Link
        href="/dashboard"
        className="flex items-center gap-1 relative max-w-[200px]"
      >
        <Image src={purpleLogo} alt="stryke logo" />
        <span className="text-[28px] font-bold leading-[38px] text-[#646DFF]">
          Stryke
        </span>
      </Link>

    </div>
  );
};

export default SidebarControl;
