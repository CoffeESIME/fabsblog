import React from "react";
import {
  FFButtonProps,
  FFButtonType,
  FFButtonClass,
  FFButtonSize,
} from "./FFButton.type";
import { FFBUTTON_SIZE_MAPS, FFBUTTON_VARIANT_MAPS } from "./FFButtons.styles";
import { addClassName } from "../../Utils/generalUtils";
export const FFButton: React.FC<FFButtonProps> = ({
  className,
  id,
  onClick,
  text,
  btnType = FFButtonType.NAVBAR,
  disabled,
  icon,
  size = FFButtonSize.SMALL,
}: FFButtonProps) => {
  const [lineAnimation, setLineAnimation] = React.useState(false);

  return (
    <button
      className={addClassName(
        `${FFButtonClass} ${FFBUTTON_VARIANT_MAPS[btnType]} ${FFBUTTON_SIZE_MAPS[size]}}`,
        className
      )}
      onPointerEnter={() => {
        setLineAnimation(true);
      }}
      onPointerLeave={() => {
        setLineAnimation(false);
      }}
      disabled={disabled}
      onClick={onClick}
      id={id}
    >
      {text}
      <span
        className={
          lineAnimation
            ? `absolute bottom-0 left-0 w-full h-1 bg-red-500 transition-all duration-1000 ease-in-out`
            : ""
        }
      ></span>
    </button>
  );
};
