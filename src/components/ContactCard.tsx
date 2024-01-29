import Image from 'next/image';
import React from 'react'
import chat from "/public/icons/chat.svg";

const ContactCard: React.FC<{ contactsDetails: ContactsData }> = ({
  contactsDetails:item
}) => {
  return (
    <div className="flex w-full items-center gap-4">
      <Image src={item.image} alt={item.name} />
      <div className="flex flex-col items-start">
        <span className="font-semibold text-sm leading-[23px] text-gray-dark">
          {item.name}
        </span>
        <span className="text-xs text-gray-lighter leading-[20px]">
          {item.location}
        </span>
      </div>
      <Image src={chat} alt="message icon" className="ml-auto" />
    </div>
  );
};

export default ContactCard