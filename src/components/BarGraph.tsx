import React from "react";
import BarGroup from "./BarGroup";

const BarGraph: React.FC<BarGraphProps> = ({
  maxValue,
  barGroups,
  scaleValues,
  days,
}) => {
  return (
    <div className="relative flex-1">
      <div className="absolute w-full h-full top-0 left-0 flex flex-col gap-9 justify-between -z-10">
        {scaleValues.map((value, id) => (
          <div
            key={id}
            className="relative h-fit w-full flex items-center gap-8 px-10"
          >
            <span className="absolute text-[10px] text-gray-lighter -left-1">
              {value.scale}
            </span>
            <hr className="border-t-2 border-dashed border-[#E4ECF7] h-[1px] w-[695px] flex-1" />
          </div>
        ))}
      </div>

      <div className="w-full h-full flex justify-between px-10">
        {barGroups.map((item, id) => (
          <BarGroup key={id} maxValue={maxValue} dataGroup={item} />
        ))}
      </div>

      <div className="flex justify-between px-10 mt-4">
        {days.map((day, id) => (
          <span key={id} className="text-[10px] text-gray-lighter">{ day}</span>
        ))}
      </div>
    </div>
  );
};

export default BarGraph;
