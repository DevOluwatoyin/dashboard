import { interviewsData } from "@/constants/interviewsData";
import React from "react";
import InterviewsCard from "./InterviewsCard";

const Interviews = () => {
  return (
    <section>
      <div className="flex h-[22px] justify-between items-end font-bold">
        <h4 className="text-lg text-heading-dark">Interviews</h4>
        <button className="text-xs text-primary">Show all</button>
      </div>
      <div className="flex items-center flex-wrap gap-8 pt-4">
        {interviewsData.map((item: InterviewProps) => (
          <InterviewsCard key={item.id} interviewDetails={item} />
        ))}
      </div>
    </section>
  );
};

export default Interviews;
