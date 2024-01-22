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
            link={item.link}
            icon={item.image}
            target="_blank"
            rel="no referrer"
            buttonStyles="bg-white px-6 py-4 rounded-lg shadow-min"
          />
        );
      })}
    </div>
  );
};

export default Socials;
