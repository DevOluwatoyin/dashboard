import Image from "next/image";
import React from "react";
import more from "/public/icons/more.svg";
import calendar from "/public/icons/calendar.svg";
import camera from "/public/icons/camera.svg";

const InterviewsCard: React.FC<{ interviewDetails: InterviewProps }> = ({
  interviewDetails: item,
}) => {
  return (
    <div className="drop bg-white min-w-fit h-[203px] flex-1 flex-shrink-0 rounded-2xl flex items-center justify-center p-4">
      <div>
        <div className="flex justify-between items-start">
          <div>
            <Image src={item.image} alt={item.name} />
            <Image
              src={item.companyImage}
              alt={item.companyName}
              className="relative -bottom-2.5 right-3"
            />
          </div>
          <button>
            <Image src={more} alt="view more options" />
          </button>
        </div>
        <p className="mt-[11px]">
          <span className="block font-semibold leading-[25px] text-heading-dark">
            {item.name}
          </span>
          <span className="block text-primary font-bold text-sm leading-[22.68px]">
            {item.companyName}
          </span>
        </p>
        <div className="font-bold text-[8px] text-gray-lighter flex items-center gap-1 mt-4 md:gap-4 md:text-xs">
          <div className="flex items-center justify-center gap-1 md:gap-2">
            <Image src={calendar} alt="calendar" />
            <span>Thu. 24</span>
          </div>
          <div className="flex items-center justify-center gap-1 md:gap-3">
            <Image src={camera} alt="camera" />
            <span>11:00 - 12:00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewsCard;
