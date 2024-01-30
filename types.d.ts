import { StaticImageData } from "next/image";

// Global state types
export {};

declare global {
  interface ComponentWithChildrenOnly {
    children: React.ReactNode;
  }

  interface GeneralButtonProps {
    link?: string;
    text?: string;
    icon?: string;
    buttonStyles?: CSSProperties;
    linkStyles?: CSSProperties;
    target?: string;
    rel?: string;
    number?: string;
  }

  interface InputProps {
    name: string;
    placeholder: string;
    value?: string;
    label: string;
    type?: HTMLInputTypeAttribute;
    id?: string;
  }

  interface GeneralListData {
    id: number;
    image: string;
    link?: string;
  }

  interface SideListData extends GeneralListData {
    text: string;
    number?: string;
    style?: CSSProperties;
  }

  interface ContactsData {
    name: string;
    image: StaticImageData;
    location: string;
  }

  interface StatsProps extends GeneralListData {
    title: string;
    value: string;
    rate: string;
    style: string;
  }

  interface GraphScale {
    scale: string;
  }

  interface Views {
    category?: string;
    color: string;
    value: number;
  }

  interface GraphData {
    day: string;
    views: [Views, Views, Views];
  }

  interface BarProps {
    color: string;
    value: number;
    maxValue: number;
  }

  interface BarGroupProps {
    maxValue: number;
    dataGroup: [Views, Views, Views];
  }

  interface BarGraphProps {
    maxValue: number;
    barGroups: GraphData[];
    scaleValues: GraphScale[];
    days: string[];
  }

  interface YScaleData {
    scaleValues: GraphScale[];
    maxScaleValue: number;
  }

  interface InterviewProps {
    id: number;
    image: string | StaticImageData;
    name: string;
    companyName: string;
    companyImage: string | StaticImageData;
  }
}
