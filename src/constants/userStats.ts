import pinkIcon from "/public/icons/pink-connection.svg";
import blueIcon from "/public/icons/blue-connection.svg";
import orangeIcon from "/public/icons/orange-connection.svg";
import greenIcon from "/public/icons/green-connection.svg";

export const stats: StatsProps[] = [
  {
    id: 1,
    image: pinkIcon,
    title: "Applicants",
    value: "2.300",
    rate: "(+5%)",
    style: "text-success",
  },
  {
    id: 2,
    image: blueIcon,
    title: "New jobs",
    value: "12",
    rate: "(+20%)",
    style: "text-success",
  },
  {
    id: 3,
    image: orangeIcon,
    title: "Growth",
    value: "23%",
    rate: "(-15%)",
    style: "text-success",
  },
  {
    id: 4,
    image: greenIcon,
    title: "Recruitments",
    value: "57",
    rate: "(+5%)",
    style: "text-danger",
  },
];
