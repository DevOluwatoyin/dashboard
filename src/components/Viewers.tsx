import { viewersList } from "@/constants/viewersList";
import Image from "next/image";
import React from "react";

const Viewers = () => {
  return (
    <div className="drop w-[255px] h-[234px] rounded-3xl flex-shrink-0 bg-white p-5">
      <p className="text-theme-dark font-semibold leading-[25px]">Viewers</p>
      <div className="flex items-center justify-center gap-4 pt-8">
        <div className="flex flex-col gap-4">
          {viewersList.map((item) => (
            <div key={item.id}>
              <p className="flex items-center gap-1">
                <Image src={item.image} alt={item.text} />
                <span className="text-xs text-heading-dark">{item.number}</span>
              </p>
              <p className="text-[10px] text-gray-lighter">{item.text}</p>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Viewers;
