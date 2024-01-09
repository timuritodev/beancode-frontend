import { OrderCardList } from "../OrderCard/OrderCardList";
import "./OrdersBlock.css";
import { FC } from "react";
import { useAppSelector } from "../../services/typeHooks";

export const OrderBlock: FC = () => {
  const cartproducts = useAppSelector((state) => state.cart.cart);

  let sum = 0;

  cartproducts.forEach((product) => {
    sum += parseInt(product.price, 10);
  });

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
    </div>
  );
};
