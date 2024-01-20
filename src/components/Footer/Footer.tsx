/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState } from "react";
import "./Footer.css";
import button from "../../images/paper-airplane.svg";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import { useAppDispatch } from "../../services/typeHooks";
import { subcribeApi } from "../../services/redux/slices/subscription/subscription";

const Footer: FC = () => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");

  const handleChange = (e: any) => {
    setEmail(e.target.value);
  };

  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubribeButtonClick = () => {
    if (isValidEmail(email)) {
      dispatch(subcribeApi(email));
    } else {
      console.error("Некорректный email");
    }
  };

  return (
    <footer
      className={`footer ${location.pathname === "/" ? "footer_dark" : ""}`}
    >
      <div className="footer__container">
        <div className="footer__blocks">
          <div className="subsribe__block">
            <h2 className="subscribe__title">Подпишитесь на нас,</h2>
            <p className="subscribe__text">
              Чтобы узнавать о новинках и скидках
            </p>
            <input
              className="subscribe__input"
              id="email"
              name="email"
              type="text"
              placeholder="example@gmail.com"
              onChange={handleChange}
              autoComplete="off"
            />
            <button className="subscribe__button">
              <img
                className="subscribe__button_img"
                alt="subscribe__button_img"
                src={button}
                onClick={handleSubribeButtonClick}
              />
            </button>
          </div>
          <div className="faq__block">
            <h2 className="faq__title">FAQ</h2>
            <Link to="/delivery-page" className="faq__link">
              О доставке
            </Link>
            <Link to="/payment-page" className="faq__link">
              Об оплате
            </Link>
            <Link to="/bonus-page" className="faq__link">
              Бонусная программа
            </Link>
          </div>
          <div className="contacts__block">
            <h2 className="contacts__title">Контакты</h2>
            <p className="contacts__text">По общим вопросам:</p>
            <p className="contacts__number">+7911 910-33-29</p>
            <p className="contacts__text">Интернет-магазин</p>
            <p className="contacts__number">+921 912-00-95</p>
          </div>
        </div>
        <div className="logo__block">
          <img className="footer__logo" src={logo} />
          <h2 className="footer__email">mugermanrb@beancode.ru</h2>
        </div>
        <div className="copyright__block">
          <p className="copyright__text">© 2023. BEANCODE Все права защищены</p>
          <p className="copyright__text">Дизайн - Гюзель Саберова</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
