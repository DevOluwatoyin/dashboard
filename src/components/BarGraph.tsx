import React from "react";
import BarGroup from "./BarGroup";

const BarGraph: React.FC<BarGraphProps> = ({
  maxValue,
  barGroups,
  scaleValues,
  days,
}) => {
  const scaleValuesReversed = [...scaleValues].reverse();

  return (
    <div className="relative flex-1">
      <div className="absolute w-full h-full top-0 left-0 flex flex-col gap-9 justify-between -z-10">
        {scaleValuesReversed.map((value, id) => (
          <div
            key={id}
            className="relative h-fit w-full flex items-center pl-4 sm:pl-6 md:gap-8 md:px-10"
          >
            <span className="absolute text-[8px] text-gray-lighter -left-1 md:text-[10px]">
              {value.scale}
            </span>
            <hr className="border-t-2 border-dashed border-[#E4ECF7] h-[1px] w-[695px] flex-1" />
          </div>
        ))}
      </div>

      <div className="w-full h-full flex justify-between gap-5 pl-5 sm:pl-8 md:px-10">
        {barGroups.map((item, id) => (
          <div className="flex flex-col items-center">
            <BarGroup key={id} maxValue={maxValue} dataGroup={item.views} />
            <span className="text-[10px] text-gray-lighter absolute -bottom-6">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarGraph;
