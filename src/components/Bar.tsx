import React from "react";

const Bar: React.FC<BarProps> = ({ color, value, maxValue, width = "8px" }) => {
  return (
    <div className="h-full flex" style={{ width: width }}>
      <div
        style={{
          height: `${(value / maxValue) * 100}%`,
          background: color,
        }}
        className="rounded-[100px] w-full self-end cursor-pointer group"
      >
        <div className="hidden rounded-md bg-gradient-linear-two text-center w-10 h-10 relative -top-8 -left-4  items-center justify-center group-hover:flex">
          <span
            className="w-1 h-1 rounded-full inline-block"
            style={{ background: color }}
          ></span>
          <span className="text-xs font-bold text-gray-dark pl-1">{value}</span>
        </div>
      </div>
    </div>
  );
};

export default Bar;
