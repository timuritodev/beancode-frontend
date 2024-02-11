import { FC } from "react";
import "./Burger.css";

interface BurgerProps {
  isPopupOpen: boolean;
  switchPopup: () => void;
}

export const Burger: FC<BurgerProps> = ({ isPopupOpen, switchPopup }) => {
  return (
    <div className={`burger ${isPopupOpen ? "burger_opened" : ""}`}>
      <div className="burger__content">
        <ul className="burger__links-container">
          <li className="burger__link">Пункт 1</li>
        </ul>
        <button className="burger__close" type="button" onClick={switchPopup} />
      </div>
    </div>
  );
};
