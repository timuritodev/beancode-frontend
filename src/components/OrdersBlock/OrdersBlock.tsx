import { OrderCardList } from "../OrderCard/OrderCardList";
import "./OrdersBlock.css";
import { FC, useState } from "react";
import { useAppSelector } from "../../services/typeHooks";
import button from "../../images/promo_button.svg";
import ic_info from "../../images/ic_info.svg";

export const OrderBlock: FC = () => {
  const cartproducts = useAppSelector((state) => state.cart.cart);

  let sum = 0;

  cartproducts.forEach((product) => {
    sum += parseInt(product.price, 10);
  });

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
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
      <button type="submit" className="order-block__pay-button">
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
