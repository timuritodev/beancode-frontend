/* eslint-disable @typescript-eslint/no-unused-vars */
import { useAppSelector } from "../../services/typeHooks";
import { FC } from "react";
import "./PopupCart.css";
import { ProductCardList } from "../ProductCard/ProductCardList";

interface PopupCartProps {
  isPopupOpen: boolean;
  switchPopupTrailer: () => void;
}

export const PopupCart: FC<PopupCartProps> = ({
  isPopupOpen,
  switchPopupTrailer,
}) => {
  const cartproducts = useAppSelector((state) => state.cart.cart);

  let sum = 2;

  cartproducts.forEach((product) => {
    sum += parseInt(product.price, 10);
  });

  return (
    <div className={`popup-cart ${isPopupOpen ? "popup-cart_opened" : ""}`}>
      <div className="popup-cart__content">
        <h1 className="popup-cart__title">Ваша корзина</h1>
        <p className="popup-cart__text">
          В вашей корзине {cartproducts.length} товаров
        </p>
        <ProductCardList data={cartproducts} />
        <div className="popup-cart__info__container">
          <button className="popup-cart__button-delete" type="button">
            Удалить все
          </button>
          <p className="popup-cart__text__sum">Всего: {sum} ₽</p>
        </div>
        <div className="popup-cart__button__container">
          <button
            className="popup-cart__button-continue"
            type="button"
            onClick={switchPopupTrailer}
          >
            Продолжить покупки
          </button>
          <button className="popup-cart__button-order" type="button">
            Оформить заказ
          </button>
        </div>
      </div>
      <button
        className="popup-cart__close"
        type="button"
        onClick={switchPopupTrailer}
      />
    </div>
  );
};
