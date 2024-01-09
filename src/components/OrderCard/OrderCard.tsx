import "./OrderCard.css";
import { ICart } from "../../types/Cart.types";
import img from "../../images/product.jpg";
import { FC } from "react";

interface OrderCardProps {
  data: ICart;
  count: number;
}

export const OrderCard: FC<OrderCardProps> = ({ data, count }) => {
  return (
    <div className="order-card">
      <img className="order-card__img" src={img} />
      <p className="order-card__title">{data.title}</p>
      <p className="order-card__number">x{count}</p>
      <p className="order-card__price">{data.price} ₽</p>
    </div>
  );
};
