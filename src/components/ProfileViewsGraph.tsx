"use client";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import chat2 from "../assets/chat2.svg";
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

  useEffect(() => {
    setGraphData(graphDataLists);
    const YScales = getYScales(graphDataLists);
    setScaleValues(YScales.scaleValues);
    setMaxScaleValue(YScales.maxScaleValue);
    setBarGroups(graphDataLists.map((list) => list.views));
  }, []);

  return (
    <div className="drop w-[825px] h-[415px] flex-shrink-0 bg-white rounded-3xl flex-1 p-6">
      <div className="flex justify-between items-center">
        <h4 className="text-theme-dark font-semibold leading-[25px]">
          Profile views
        </h4>
        <div className="flex items-center gap-14">
          <div className="flex items-center justify-between gap-8">
            {viewersList.map((item) => (
              <p
                key={item.id}
                className="flex items-center font-bold text-gray-lighter text-xs gap-4"
              >
                <Image src={item.image} alt={item.text} />
                <span>{item.text}</span>
              </p>
            ))}
          </div>
          <Button
            buttonStyles="rounded-md text-white text-xs font-semibold bg-primary py-3 px-5 flex items-center gap-2"
            text="Export"
            icon={chat2}
          />
        </div>
      </div>
      <div className="pt-8 flex justify-center h-[290px]">
        <BarGraph
          maxValue={maxScaleValue}
          barGroups={barGroups}
          scaleValues={scaleValues.toReversed()}
        />
      </div>
    </div>
  );
};

export default ProfileViewsGraph;
