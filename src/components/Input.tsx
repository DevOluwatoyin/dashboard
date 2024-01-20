import React from "react";

const Input: React.FC<InputProps> = ({
  type,
  name = "",
  value,
  placeholder = "",
  label = "",
}) => {
  return (
    <label htmlFor={name}>
      <span className="block md:text-gray-dark mb-2">{label}</span>
      <input
        className="text-black placeholder:text-gray-light w-full h-[46px] pt-3.5 pl-4 pb-4 pr-[50px] rounded-md shadow-3xl focus-within:outline-dashed focus-within:outline-primary transition-all"
        type={type}
        id={name}
        value={value}
        placeholder={placeholder}
        required
      />
    </label>
  );
};

export default Input;
