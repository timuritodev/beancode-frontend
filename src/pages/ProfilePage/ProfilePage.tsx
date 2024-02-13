import "./ProfilePage.css";
import exit_button from "../../images/exit-button.svg";
import cart from "../../images/shopping-cart.svg";
import cart_active from "../../images/shopping-cart_acitve.svg";
import person from "../../images/person.svg";
import person_active from "../../images/person_active.svg";
import { selectUser, signOut } from "../../services/redux/slices/user/user";
import { useAppDispatch, useAppSelector } from "../../services/typeHooks";
import { useState } from "react";
import { resetCart } from "../../services/redux/slices/cart/cart";
import { ProfileInputs } from "../../components/ProfileInputs/ProfileInputs";
import { orders } from "../../utils/constants";
import { OrderList } from "../../components/Order/OrderList";
import { resetOrders } from "../../services/redux/slices/order/order";
import { useResize } from "../../hooks/useResize";

export const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const { width } = useResize();

  const [isOrderVisible, setIsOrderVisible] = useState(false);
  const [isAccountVisible, setIsAccountVisible] = useState(true);

  const handleOrderButtonClick = () => {
    setIsOrderVisible(true);
    setIsAccountVisible(false);
  };

  const handleAccountButtonClick = () => {
    setIsAccountVisible(true);
    setIsOrderVisible(false);
  };

  console.log(isAccountVisible)
  return (
    <section className="profile">
      <div className="profile__container">
        <div className="profile__buttons">
          <button
            className="button__profile"
            onClick={handleAccountButtonClick}
          >
            <img className="button__profile__img" src={isAccountVisible ? person_active : person} />
            <span
              className={`button__profile__text ${
                isAccountVisible === true ? "button__profile__text_active" : ""
              }`}
            >
              Личные данные
            </span>
          </button>
          <button className="button__profile" onClick={handleOrderButtonClick}>
            <img className="button__profile__img" src={isOrderVisible ? cart_active : cart} />
            <span
              className={`button__profile__text ${
                isOrderVisible === true ? "button__profile__text_active" : ""
              }`}
            >
              Заказы
            </span>
          </button>
          {width > 767 && (
            <button
              className="button__profile"
              onClick={() => {
                dispatch(signOut());
                dispatch(resetCart());
                dispatch(resetOrders());
              }}
            >
              <img className="button__profile__img" src={exit_button} />
              <span className="button__profile__text">Выйти</span>
            </button>
          )}
        </div>
        {isAccountVisible && user.token !== "" ? (
          <ProfileInputs />
        ) : (
          user.token === "" && (
            <p className="profile__text">Нужно Зарегистрироваться</p>
          )
        )}
        {isOrderVisible && orders.length !== 0 && user.token !== "" ? (
          <OrderList data={orders} />
        ) : (
          isOrderVisible &&
          orders.length === 0 &&
          user.token !== "" && <p className="profile__text">Нет заказов</p>
        )}
        {width < 767 && (
          <button
            className="button__profile button__profile_exit"
            onClick={() => {
              dispatch(signOut());
              dispatch(resetCart());
              dispatch(resetOrders());
            }}
          >
            <img className="button__profile__img" src={exit_button} />
            <span className="button__profile__text">Выйти</span>
          </button>
        )}
      </div>
    </section>
  );
};
