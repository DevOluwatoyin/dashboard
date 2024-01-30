import React from "react";
import InterviewsCard from "./InterviewsCard";
import { interviewsData } from "@/constants/interviewsData";

const Interviews = () => {
  return (
    <section>
      <div className="flex h-[22px] justify-between items-end font-bold px-3">
        <h4 className="text-lg text-heading-dark">Interviews</h4>
        <button className="text-xs text-primary">Show all</button>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-5 pt-4 md:flex-row md:gap-8 lg:justify-between xl:flex-nowrap">
        {interviewsData.map((item: InterviewProps) => (
          <InterviewsCard key={item.id} interviewDetails={item} />
        ))}
      </div>
    </section>
  );
};

export default Interviews;
