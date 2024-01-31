import Image from "next/image";
import Link from "next/link";
import React from "react";

const Button: React.FC<GeneralButtonProps> = ({
  link = "",
  text,
  icon = "",
  buttonStyles = "",
  linkStyles = "",
  target,
  rel,
  number,
}) => {
  if (link)
    return (
      <Link href={link} target={target} rel={rel} className={linkStyles}>
        {icon ? (
          <div className="relative w-4 h-4">
            <Image src={icon} alt={link} fill className="object-cover" />
          </div>
        ) : null}
        {text ? <span className="w-max">{text}</span> : null}
      </Link>
    );
  else
    return (
      <button className={buttonStyles}>
        {icon ? (
          <div className="relative">
            <Image src={icon} alt="" className="object-cover" />
          </div>
        ) : null}
        {text ? <span className="w-max">{text}</span> : null}
        {number && (
          <span className="w-max inline-block text-primary bg-[#E1E8FF] px-[10px] py-0.5 rounded-full ml-auto">
            {number}
          </span>
        )}
      </button>
    );
};

export default Button;
