import React from "react";
import Bar from "./Bar";

const BarGroup: React.FC<BarGroupProps> = ({ maxValue, dataGroup }) => {
  return (
    <div className="w-fit h-full flex gap-[6px]">
      {dataGroup.map((data, id) => (
        <Bar
          key={id}
          value={data.value}
          color={data.color}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
};

export default BarGroup;
