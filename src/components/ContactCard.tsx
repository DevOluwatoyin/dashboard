import Image from 'next/image';
import React from 'react'
import chat from "/public/icons/chat.svg";

const ContactCard: React.FC<{ contactsDetails: ContactsData }> = ({
  contactsDetails:item
}) => {
  return (
    <div className="flex w-full items-center gap-2 xl:gap-4">
      <Image src={item.image} alt={item.name} />
      <div className="flex flex-col items-start">
        <span className="font-semibold text-[10px] leading-[23px] text-gray-dark xl:text-sm">
          {item.name}
        </span>
        <span className="text-[8px] text-gray-lighter leading-[20px] xl:text-xs">
          {item.location}
        </span>
      </div>
      <Image src={chat} alt="message icon" className="ml-auto" />
    </div>
  );
};

export default ContactCard