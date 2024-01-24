import React from "react";
import Button from "./Button";

const Cta = () => {
  return (
    <div className="drop bg-white rounded-2xl w-full h-[151px] flex flex-col items-center justify-center gap-8 px-4">
      <div className="w-full h-[46px] flex-shrink-0 bg-border-light rounded-lg flex items-center justify-between px-3 overflow-hidden">
        <input
          type="email"
          name="subscription mail"
          id="subscription"
          placeholder="E-mail"
          className="bg-inherit p-2 justify-start max-w-[50%] focus-within:outline-dashed focus-within:outline-primary rounded-2xl"
        />
        <Button
          text="Subscribe"
          buttonStyles="inline-flex text-xs rounded-md bg-primary text-white px-5 py-3 font-semibold"
        />
      </div>
      <p className="text-sm text-gray-dark pl-6 leading-[23px] self-start">
        Follow your statistics.
      </p>
    </div>
  );
};

export default Cta;
