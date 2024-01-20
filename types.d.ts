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
  }

  interface InputProps {
    name?: string;
    value?: string;
    label?: string;
    type?: HTMLInputTypeAttribute;
    placeholder?: string;
    borders?;
    id?: string;
  }

  interface SocialsProps {
    id: number;
    image: string;
    link: string;
  }

  interface SocialsGroup {
    socialsArr: SocialsProps[];
  }
}
