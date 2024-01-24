import React from "react";

const Bar: React.FC<BarProps> = ({ color, value, maxValue, width = "8px" }) => {
  return (
    <div className="h-full flex" style={{ width: width }}>
      <div
        style={{
          height: `${(value / maxValue) * 100}%`,
          background: color,
        }}

        className="rounded-[100px] w-full self-end"
      ></div>
    </div>
  );
};

export default Bar;
