import { FC, useEffect, useState } from "react";
import "./Burger.css";
import "../Header/Header.css";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import icon from "../../images/person_active.svg";
import loop from "../../images/loop.svg";
import loop_small from "../../images/loop_small.svg";
import logo from "../../images/logo.svg";
import { useResize } from "../../hooks/useResize";

interface BurgerProps {
  isPopupOpen: boolean;
  switchPopup: () => void;
}

export const Burger: FC<BurgerProps> = ({ isPopupOpen, switchPopup }) => {
  const [values, setValues] = useState("");
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = target.value;
    setValues(value);
  };

  const { width } = useResize();
  console.log(width);

  const setSearchClose = () => {
    setIsOpenSearch(false);
  };

  useEffect(() => {
    if (values.length > 0) {
      setIsOpenSearch(true);
    }
    if (values.length < 1) {
      setIsOpenSearch(false);
    }
  }, [values]);
  return (
    <div className={`burger ${isPopupOpen ? "burger_opened" : ""}`}>
      <div className="burger__content">
        <div className="burger__container">
          <div className="burger-header__container">
            <button
              className="burger__close"
              type="button"
              onClick={switchPopup}
            />
            <Link to="/">
              <img className="header__logo" alt="logo" src={logo} />
            </Link>
            <div className="burger-links__wrapper">
              <img
                className="header__search-button_search"
                src={loop_small}
                alt="Кнопка поиска"
              />
              <Link to="/profile">
                <img className="header__profile-icon" alt="icon" src={icon} />
              </Link>
            </div>
          </div>
          <form className="burger__search">
            <img
              className="burger__search-button_search"
              src={loop}
              alt="Кнопка поиска"
            />
            <input
              className="burger__search-input"
              id="name"
              name="name"
              type="text"
              placeholder="Поиск"
              onChange={handleChange}
              //   onBlur={setSearchClose}
              value={values}
              autoComplete="off"
            />
            <Search
              isOpenSearch={isOpenSearch}
              isClose={setSearchClose}
              values={values}
            />
          </form>
          <div className="burger__links-container">
            <Link to="/" className="burger__link">
              Интернет-магазин
            </Link>
            <Link to="/sign-up" className="burger__link">
              Регистрация
            </Link>
            <Link to="/sign-in" className="burger__link">
              Логин
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};