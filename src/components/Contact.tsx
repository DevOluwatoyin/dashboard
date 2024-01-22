import { contactsDetails } from "@/constants/contactsDetails";
import Image from "next/image";
import React from "react";
import ContactCard from "./ContactCard";

const Contact = () => {
  return (
    <div className="top-32 relative">
      <h5 className="flex items-center gap-3 pl-6">
        <span className="uppercase text-[11px] font-semibold text-gray-lighter">
          Contacts
        </span>
        <span className="w-max inline-block text-primary bg-[#E1E8FF] px-[10px] text-xs font-bold py-0.5 rounded-full">
          6
        </span>
      </h5>

      <div className="pt-6 px-6 flex flex-col gap-[30px]">
        {contactsDetails.map((item, id) => (
          <ContactCard key={id} contactsDetails={item} />
        ))}
      </div>
    </div>
  );
};

export default Contact;
