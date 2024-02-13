import { FC } from "react";
import "./CustomButton.css";

export interface ICustomButton {
	buttonText: string;
	handleButtonClick?: () => void;
	type: 'button' | 'submit' | 'reset';
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

  return (
    <button
      className="button"
      disabled={disabled}
      type={type}
      onClick={handleButtonClick}
    >
      {buttonText}
    </button>
  );
};
