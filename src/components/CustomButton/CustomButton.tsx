import { FC } from "react";
import "./CustomButton.css";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();
  return (
    <button
      className={
        className
          ? className
          : `${
              buttonText !== "Сохранить" && buttonText !== "Войти"
                ? `${
                    location.pathname === "/sign-in" ||
                    location.pathname === "/sign-up"
                      ? "button button_type_toMain-sign-in"
                      : "button button_type_toMain"
                  }`
                : `${
                    location.pathname === "/preferences"
                      ? "button button_type_preferences"
                      : `${
                          location.pathname === "/profile"
                            ? "button button_type_profile"
                            : "button"
                        }`
                  }`
            }`
      }
      disabled={disabled}
      type={type}
      onClick={handleButtonClick}
    >
      {buttonText}
    </button>
  );
};
