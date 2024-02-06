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
import { orders } from "../../utils/constants";
import { OrderList } from "../../components/Order/OrderList";
import { resetOrders } from "../../services/redux/slices/order/order";

export const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

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
              dispatch(resetOrders());
            }}
          >
            <img className="button__profile__img" src={exit_button} />
            <span className="button__profile__text">Выйти</span>
          </button>
        </div>
        {isAccountVisible && user.token !== "" ? (
          <ProfileInputs />
        ) : (
          user.token === "" && <p className="profile__text">Нужно Зарегистрироваться</p>
        )}
        {isOrderVisible && orders.length !== 0 && user.token !== "" ? (
          <OrderList data={orders} />
        ) : (
          isOrderVisible && orders.length === 0 && user.token !== "" && <p className="profile__text">Нет заказов</p>
        )}
      </div>
    </section>
  );
};
