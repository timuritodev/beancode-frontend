import "./ProfilePage.css";
import exit_button from "../../images/exit-button.svg";
import cart from "../../images/shopping-cart.svg";
// import cart_active from "../../images/shopping-cart_acitve.svg";
import person from "../../images/person.svg";
// import person_active from "../../images/person_active.svg";
import { selectUser, signOut } from "../../services/redux/slices/user/user";
import { useAppDispatch, useAppSelector } from "../../services/typeHooks";
import { useState } from "react";
import { resetCart } from "../../services/redux/slices/cart/cart";
import { ProfileInputs } from "../../components/ProfileInputs/ProfileInputs";

export const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const [isOrderVisible, setIsOrderVisible] = useState(false);
  const [isAccountVisible, setIsAccountVisible] = useState(true);

  const handleOrderButtonClick = () => {
    setIsOrderVisible(!isOrderVisible);
    // setIsAccountVisible(!isAccountVisible);
  };

  const handleAccountButtonClick = () => {
    setIsAccountVisible(!isAccountVisible);
    // setIsOrderVisible(!isOrderVisible);
  };

  return (
    <section className="profile">
      <div className="profile__container">
        <div className="profile__buttons">
          <button
            className="button__profile"
            onClick={handleAccountButtonClick}
          >
            <img className="button__profile__img" src={person} />
            <span className="button__profile__text">Личные данные</span>
          </button>
          <button className="button__profile" onClick={handleOrderButtonClick}>
            <img className="button__profile__img" src={cart} />
            <span className="button__profile__text">Заказы</span>
          </button>
          <button
            className="button__profile"
            onClick={() => {
              dispatch(signOut());
              dispatch(resetCart());
            }}
          >
            <img className="button__profile__img" src={exit_button} />
            <span className="button__profile__text">Выйти</span>
          </button>
        </div>
        {isAccountVisible && user.token !== "" ? (
          <ProfileInputs />
        ) : (
          <h2>Нужно Зарегистрироваться</h2>
        )}
        {isOrderVisible && <h2>Нет заказов</h2>}
      </div>
    </section>
  );
};
