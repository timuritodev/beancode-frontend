import { FC, useEffect, useState } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo.svg";
import icon from "../../images/person.svg";
import loop from "../../images/loop.svg";
import CartButton from "../CartButton/CartButton";
import Search from "../Search/Search";

const Header: FC = () => {
  const location = useLocation();

  const [values, setValues] = useState("");
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = target.value;
    setValues(value);
  };

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
    <header
      className={`header ${location.pathname === "/" ? "header_dark" : ""}`}
    >
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
              onChange={handleChange}
              //   onBlur={setSearchClose}
              value={values}
              autoComplete="off"
            />
          </form>
          <Link to="/profile">
            <img className="" alt="icon" src={icon} />
          </Link>
        </div>
      </div>
      <CartButton />
      <Search
        isOpenSearch={isOpenSearch}
        isClose={setSearchClose}
        values={values}
      />
    </header>
  );
};

export default Header;
