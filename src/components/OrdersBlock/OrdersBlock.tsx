/* eslint-disable @typescript-eslint/no-unused-vars */
import { OrderCardList } from "../OrderCard/OrderCardList";
import "./OrdersBlock.css";
import { FC, useState } from "react";
import button from "../../images/promo_button.svg";
import ic_info from "../../images/ic_info.svg";
import { useAppSelector, useAppDispatch } from "../../services/typeHooks";
import { createOrderApi } from "../../services/redux/slices/order/order";
import { selectUser } from "../../services/redux/slices/user/user";

export const OrderBlock: FC = () => {
  const dispatch = useAppDispatch();
  const cartproducts = useAppSelector((state) => state.cart.cart);
  const user = useAppSelector(selectUser);

  let sum = 0;

  cartproducts.forEach((product) => {
    sum += parseInt(product.price, 10);
  });

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const userId = user.id;
  const phone = user.phone;
  const email = user.email;
  const address = user.address;
  const city = user.city;
  const product_quantity = cartproducts.length;
  const products_info = cartproducts
    .map((item) => `${item.id} ${item.title} ${item.weight}`)
    .join(", ");

  const handleClickPayButton = () => {
    dispatch(
      createOrderApi({
        userId,
        phone,
        email,
        address,
        city,
        sum,
        product_quantity,
        products_info,
      })
    );
    // console.log(product_ids, 111);
    // console.log(queryString, 333);

    console.log(123);
  };

  return (
    <div className="order-block">
      <h3 className="order-block__title">Ваш заказ</h3>
      <OrderCardList data={cartproducts} />
      <div className="order-block__details">
        <p className="order-block__text">
          {cartproducts.length} товара на сумму
        </p>
        <p className="order-block__text">{sum} ₽</p>
      </div>
      {/* <div className="order-block__details">
        <p className="order-block__text">Курьером...</p>
        <p className="order-block__text">{sum} ₽</p>
      </div> */}
      <div className="order-block__details">
        <p className="order-block__total">Итого</p>
        <p className="order-block__total"> ₽</p>
      </div>
      <div className="order-block__input_container">
        <input
          className="order-block__input"
          id="promo"
          name="promo"
          type="text"
          placeholder="Добавьте промокод"
          // onChange={handleChange}
          // onBlur={setSearchClose}
          // value={values}
          autoComplete="off"
        />
        <button className="order-block__button">
          <img
            className="subscribe__button_img"
            alt="subscribe__button_img"
            src={button}
          />
        </button>
      </div>
      <button
        type="submit"
        className="order-block__pay-button"
        onClick={handleClickPayButton}
      >
        Оплатить заказ
      </button>
      <p className="order-block__disclaimer">
        Нажимая на кнопку, я соглашаюсь на обработку моих персональных данных и
        ознакомлен(а) с условиями обработки персональных данных и регистрацией в
        программе лояльности.
      </p>
      <label className="checkbox__order-block">
        <input
          type="checkbox"
          className="order__checkbox-button"
          id="female"
          value={1}
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span className="order__checkbox-pseudo-item"></span>
        <span className="span__checkbox">
          Получать новости и спецпредложения
        </span>
        <img className="checkbox__img" src={ic_info} />
      </label>
      {/* <div className="checkbox__order-block__container">
        <label className="checkbox__order-block">
          <input
            className="order__checkbox-button"
            type="checkbox"
            id="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span className="span__checkbox">
            Получать новости и спецпредложения
          </span>
          <img className="checkbox__img" src={ic_info} />
        </label>
      </div> */}
    </div>
  );
};
