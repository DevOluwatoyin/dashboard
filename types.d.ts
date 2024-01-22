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
  }

  interface InputProps {
    name: string;
    value?: string;
    label: string;
    type?: HTMLInputTypeAttribute;
    placeholder: string;
    id?: string;
  }

  interface GeneralListData {
    id: number;
    image: string;
    link?: string;
    title?: string;
  }

  interface StatsProps extends GeneralListData {
    value: string;
    rate: string;
    style: string;
  }
}
