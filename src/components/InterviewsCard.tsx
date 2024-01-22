import Image from "next/image";
import React from "react";
import more from "../assets/more.svg";
import calendar from "../assets/calendar.svg";
import camera from "../assets/camera.svg";

const InterviewsCard: React.FC<{ interviewDetails: InterviewProps }> = ({
  interviewDetails: item,
}) => {
  return (
    <div className="drop bg-white w-[255px] h-[203px] flex-shrink-0 rounded-2xl flex items-center justify-center">
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
            <Image
              src={more}
              alt="view more options"
            />
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
        <div className="font-bold text-xs text-gray-lighter flex items-center gap-4 mt-4">
          <div className="flex items-center justify-center gap-2">
            <Image src={calendar} alt="calendar" />
            <span>Thu. 24</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Image src={camera} alt="camera" />
            <span>11:00 - 12:00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewsCard;
