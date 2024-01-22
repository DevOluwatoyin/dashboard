import home from "../assets/home.svg";
import hamster from "../assets/hamster.svg";
import chat from "../assets/chat.svg";
import services from "../assets/services.svg";
import customers from "../assets/customers.svg";

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
