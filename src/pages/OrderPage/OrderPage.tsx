import { OrderInputs } from "../../components/OrderInputs/OrderInputs";
import { OrderBlock } from "../../components/OrdersBlock/OrdersBlock";
import "./OrderPage.css";

export const OrderPage = () => {
  return (
    <section className="order-page">
      <div className="order-page__container">
        <h1 className="order-page__title">Оформление заказа</h1>
        <div className="order-page__wrapper">
          <div className="order-page__sec-wrapper">
            <h2 className="order-page__subtitle">Личные данные</h2>
            <OrderInputs />
          </div>
          <OrderBlock />
        </div>
      </div>
    </section>
  );
};
