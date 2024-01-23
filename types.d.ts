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

  interface InterviewProps {
    id: number;
    image: string | StaticImageData;
    name: string;
    companyName: string;
    companyImage: string | StaticImageData;
  }
}
