import { OrderBlock } from "../../components/OrdersBlock/OrdersBlock";
import "./OrderPage.css";

export const OrderPage = () => {
  return (
    <section className="order-page">
      <div className="order-page__container">
        <h1 className="order-page__title">Оформление заказа</h1>
        <p className="order-page__text"></p>
        <OrderBlock />
      </div>
    </section>
  );
};
