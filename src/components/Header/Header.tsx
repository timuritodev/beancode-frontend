import { FC } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import icon from "../../images/person.svg";
import loop from "../../images/loop.svg";
import CartButton from "../CartButton/CartButton";

const Header: FC = () => {
  return (
    <header className="header" id="header">
      <div className="header__container">
        <Link to="/">
          <img className="header__logo" alt="logo" src={logo} />
        </Link>
        <div className="header__links">
          <Link to="/" className="header__link">
            Интернет-магазин
          </Link>
          <Link to="/sign-up" className="header__link">
            Регистрация
          </Link>
          <Link to="/sign-in" className="header__link">
            Логин
          </Link>
        </div>
        <div className="header__search__container">
          <form className="header__search">
            <img
              className="header__search-button_search"
              src={loop}
              alt="Кнопка поиска"
            />
            <input
              className="header__search-input"
              id="name"
              name="name"
              type="text"
              placeholder="Поиск"
              // onChange={handleChange}
              // onBlur={setSearchClose}
              // value={values}
              autoComplete="off"
            />
          </form>
          <Link to="/profile">
            <img className="" alt="icon" src={icon} />
          </Link>
        </div>
      </div>
      <CartButton />
    </header>
  );
};

export default Header;
