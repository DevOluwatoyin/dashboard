"use client";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import chat2 from "/public/icons/chat2.svg";
import { viewersList } from "@/constants/viewersList";
import Image from "next/image";
import { graphDataLists, scaleValues } from "@/constants/scale";
import { getYScales } from "@/constants/scale";
import BarGraph from "./BarGraph";

const ProfileViewsGraph = () => {
  const [graphData, setGraphData] = useState<GraphData[]>([]);
  const [scaleValues, setScaleValues] = useState<GraphScale[]>([]);
  const [maxScaleValue, setMaxScaleValue] = useState<number>(0);
  const [barGroups, setBarGroups] = useState<[Views, Views, Views][]>([]);
  const [days, setDays] = useState<string[]>([]);

  function manageGraphData(dataLists: GraphData[]) {
    const YScales = getYScales(graphDataLists);
    setScaleValues(YScales.scaleValues);
    setMaxScaleValue(YScales.maxScaleValue);
    setBarGroups(graphDataLists.map((list) => list.views));

    setDays(graphData.map((data) => data.day));
  }

  useEffect(() => {
    setGraphData(graphDataLists);
  }, []);

  useEffect(() => {
    manageGraphData(graphData);
  }, [graphData]);

  return (
    <div className="drop w-full h-[415px] bg-white rounded-3xl flex-1 pr-3 pl-4 py-6 md:p-6 xl:max-w-screen-[2000px]">
      <div className="flex justify-between items-center gap-2 md:gap-10">
        <h4 className="text-theme-dark font-semibold text-sm leading-[25px]md:text-base">
          Profile views
        </h4>
        <div className="flex items-center gap-4 sm:gap-8 md:gap-14">
          <div className="flex flex-col md:gap-8 md:justify-between md:flex-row md:items-center">
            {viewersList.map((item) => (
              <p
                key={item.id}
                className="flex items-center text-[8px] font-bold text-gray-lighter gap-2 md:text-xs md:gap-4"
              >
                <Image src={item.image} alt={item.text} />
                <span>{item.text}</span>
              </p>
            ))}
          </div>
          <Button
            buttonStyles="rounded-md text-white text-xs font-semibold bg-primary p-2 md:py-3 md:px-5 flex items-center gap-2"
            text="Export"
            icon={chat2}
          />
        </div>
      </div>
      <div className="pt-8 flex justify-center h-[290px]">
        <BarGraph
          maxValue={maxScaleValue}
          barGroups={barGroups}
          scaleValues={scaleValues}
          days={days}
        />
      </div>
    </div>
  );
};

export default ProfileViewsGraph;
