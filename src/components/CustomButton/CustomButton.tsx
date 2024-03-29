import { FC } from "react";
import "./CustomButton.css";

export interface ICustomButton {
  buttonText: string;
  handleButtonClick?: () => void;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}

export const CustomButton: FC<ICustomButton> = ({
  buttonText,
  handleButtonClick,
  type,
  disabled,
  className,
}) => {
  // const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
  //   if (event.key === "Enter" || event.key === "Escape") {
  //     if (handleButtonClick) {
  //       handleButtonClick();
  //     }
  //   }
  // };

  return (
    <button
      className="button"
      disabled={disabled}
      type={type}
      onClick={handleButtonClick}
      // onKeyDown={handleKeyDown}
    >
      {buttonText}
    </button>
  );
};
