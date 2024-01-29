import home from "/public/icons/home.svg";
import hamster from "/public/icons/hamster.svg";
import chat from "/public/icons/chat.svg";
import services from "/public/icons/services.svg";
import customers from "/public/icons/customers.svg";

export const sideLists: SideListData[] = [
  {
    id: 1,
    image: home,
    text: "Dashboard",
  },
  {
    id: 2,
    image: hamster,
    text: "Projects",
  },
  {
    id: 3,
    image: chat,
    text: "Messages",
    number: "6",
    style: "message-color"
  },
  {
    id: 4,
    image: services,
    text: "Services",
  },
  {
    id: 5,
    image: customers,
    text: "Customers",
  },
];
