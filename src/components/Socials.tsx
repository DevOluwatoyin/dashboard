import { socials } from "@/constants/socials";
import React from "react";
import Button from "./Button";

const Socials: React.FC<SocialsGroup> = ({ socialsArr: SocialsProps }) => {
  return (
    <div className="flex justify-center gap-4 relative z-10">
      {socials.map((item, id: number) => {
        return (
          <Button
            key={id}
            link={item.link}
            icon={item.image}
            buttonStyles="bg-white px-6 py-4 rounded-lg shadow-min"
            linkStyles="w-auto"
          />
        );
      })}
    </div>
  );
};

export default Socials;
