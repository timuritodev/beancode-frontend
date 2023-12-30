/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import "./ProfilePage.css";
import exit_button from "../../images/exit-button.svg";
import cart from "../../images/shopping-cart.svg";
// import cart_active from "../../images/shopping-cart_acitve.svg";
import person from "../../images/person.svg";
// import person_active from "../../images/person_active.svg";
import {
  getUserInfo,
  selectUser,
  signOut,
} from "../../services/redux/slices/user/user";
import { useAppDispatch, useAppSelector } from "../../services/typeHooks";
import { useEffect, useState } from "react";
import { getProductsApi } from "../../services/redux/slices/product/product";
import { resetCart } from "../../services/redux/slices/cart/cart";

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const [isOrderVisible, setIsOrderVisible] = useState(false);
  const [isAccountVisible, setIsAccountVisible] = useState(true);

  const handleOrderButtonClick = () => {
    setIsOrderVisible(!isOrderVisible);
  };

  const handleAccountButtonClick = () => {
    setIsAccountVisible(!isAccountVisible);
  };

  dispatch(getProductsApi());
  useEffect(() => {
    if (user.token) {
    //   console.log(user.token, 444);
      dispatch(getUserInfo(user.token));
      // .unwrap()
      // .then(() => {
      //     if (user.nickname) {
      //         setValue('nickname', user.nickname);
      //     }
      //     if (user.dateOfBirth) {
      //         setValue('dateOfBirth', user.dateOfBirth);
      //     }
      // })
      // .catch((err: unknown) => console.log('getUserInfo err', err));
    }
  }, [dispatch, user]);

//   console.log(user);
//   console.log(user.token);
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
        {isAccountVisible && (
          <div className="account__container">
            <div className="input__container">
              <label className="profile__label">Имя</label>
              <input
                type="text"
                name="name"
                className="profile__input"
                value={user.name}
                //   onChange={handleChange}
                required
              />
            </div>
            <div className="input__container">
              <label className="profile__label">Фамилия</label>
              <input
                type="text"
                name="surname"
                className="profile__input"
                value={user.surname}
                //   onChange={handleChange}
                placeholder="Иванов"
                required
              />
            </div>
            <div className="input__container">
              <label className="profile__label">Телефон</label>
              <input
                type="text"
                name="phone"
                className="profile__input"
                value={user.phone}
                //   onChange={handleChange}
                placeholder="+7-999-000-11-22"
                required
              />
            </div>

            <div className="input__container">
              <label className="profile__label">Email</label>
              <input
                type="email"
                name="email"
                className="profile__input"
                value={user.email}
                //   onChange={handleChange}
                placeholder="adress@gmail.com"
                required
              />
            </div>

            <div className="input__container">
              <label className="profile__label">Адрес</label>
              <input
                type="text"
                name="address"
                className="profile__input"
                value={user.address}
                //   onChange={handleChange}
                placeholder="ул. Пушкина, д. 9, подъезд 3, кв. 21"
                required
              />
            </div>
          </div>
        )}
        {isOrderVisible && <h2>Нет заказов</h2>}
      </div>
    </section>
  );
};

export default ProfilePage;

{
  /* {user.token ? (
  <IntroBlock />
) : (
  <div>
    <IntroBlock />
    <TextBlock />
    <InfoBlock />
    <RoastBlock />
    <PackageBlock />
    <ReadyBlock />
    <TreatmentBlock />
  </div>
)} */
}
