import { FFBaseProps } from "../../Utils/generalTypes"

export enum FFButtonClass {
  MAIN = "ff-button-main",
}

export enum FFButtonType {
  NAVBAR = "navbar",
   CIRCULAR = "circular",
}

export enum FFButtonSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export type FFButtonProps = FFBaseProps & {
  text: string;
  onClick: () => void;
  btnType?: FFButtonType;
  size?: FFButtonSize;
  icon?: React.FC;
  disabled?: boolean;

};
