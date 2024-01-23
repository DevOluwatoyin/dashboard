import React from "react";
import Button from "./Button";
import chat2 from "../assets/chat2.svg";
import { viewersList } from "@/constants/viewersList";
import Image from "next/image";
import { scaleValues } from "@/constants/scale";

const ProfileViewsGraph = () => {
  return (
    <div className="drop w-[825px] h-[415px] flex-shrink-0 bg-white rounded-3xl flex-1 p-6">
      <div className="flex justify-between items-center">
        <h4 className="text-theme-dark font-semibold leading-[25px]">
          Profile views
        </h4>
        <div className="flex items-center gap-14">
          <div className="flex items-center justify-between gap-8">
            {viewersList.map((item) => (
              <p
                key={item.id}
                className="flex items-center font-bold text-gray-lighter text-xs gap-4"
              >
                <Image src={item.image} alt={item.text} />
                <span>{item.text}</span>
              </p>
            ))}
          </div>
          <Button
            buttonStyles="rounded-md text-white text-xs font-semibold bg-primary py-3 px-5 flex items-center gap-2"
            text="Export"
            icon={chat2}
          />
        </div>
      </div>
      <div className="pt-8">
        <div className="flex flex-col-reverse gap-9">
          {scaleValues.map((value) => (
            <span className="text-[10px] text-gray-lighter flex items-center gap-10 pr-8">
              {value.scale}
              <hr className="border-t-2 border-dashed border-[#E4ECF7] h-[1px] w-[695px] flex-1" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileViewsGraph;
