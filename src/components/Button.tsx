import Image from "next/image";
import Link from "next/link";
import React from "react";

const Button: React.FC<GeneralButtonProps> = ({
  link = "",
  text,
  icon = "",
  buttonStyles = "",
  linkStyles = "",
}) => {
  if (link)
    return (
      <Link
        href={link}
        target="_blank"
        rel="no referrer"
        className={linkStyles}
      >
        <button className={buttonStyles}>
          {icon ? (
            <div className="relative w-4 h-4">
              <Image src={icon} alt={link} fill className="object-cover" />
            </div>
          ) : null}
          {text ? <span className="w-max">{text}</span> : null}
        </button>
      </Link>
    );
  else
    return (
      <button className={buttonStyles}>
        {icon ? (
          <div className="relative w-4 h-4">
            <Image src={icon} alt="" fill className="object-cover" />
          </div>
        ) : null}
        {text ? <span className="w-max">{text}</span> : null}
      </button>
    );
};

export default Button;
