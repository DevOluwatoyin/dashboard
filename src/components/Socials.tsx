"use client"
import { socials } from "@/constants/socials";
import React from "react";
import Button from "./Button";

const Socials= () => {

  return (
    <div className="flex justify-center gap-4 relative z-10">
      {socials.map((item, id: number) => {
        return (
          <Button
            key={id}
            icon={item.image}
            buttonStyles="bg-white px-6 py-4 rounded-lg shadow-min hover:bg-primary-soft transition-all"
          />
        );
      })}
    </div>
  );
};

export default Socials;
