import React from "react";
import BarGroup from "./BarGroup";

const BarGraph: React.FC<BarGraphProps> = ({ maxValue, barGroups }) => {
  return (
    <div className="relative flex-1">
      <div className="absolute w-full h-full top-0 left-0 flex flex-col gap-9">
        {["", "", "", "", "", ""].map((_, id) => (
          <div key={id} className="h-[15px] w-full flex items-center pr-8">
            <hr className="border-t-2 border-dashed border-[#E4ECF7] h-[1px] w-[695px] flex-1" />
          </div>
        ))}
      </div>

      <div className="w-full h-full flex justify-between">
        {barGroups.map((item, id) => (
          <BarGroup key={id} maxValue={maxValue} dataGroup={item} />
        ))}
      </div>
    </div>
  );
};

export default BarGraph;
