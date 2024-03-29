import { DeliveryBlock } from "../../components/DeliveryBlock/DeliveryBlock";
import { Widget } from "../../components/DeliveryBlock/Widget";
import { OrderInputs } from "../../components/OrderInputs/OrderInputs";
import { OrderBlock } from "../../components/OrdersBlock/OrdersBlock";
import { PaymentBlock } from "../../components/PaymentBlock/PaymentBlock";
import "./OrderPage.css";

export const OrderPage = () => {
  return (
    <section className="order-page">
      <div className="order-page__container">
        <h1 className="order-page__title">Оформление заказа</h1>
        <div className="order-page__wrapper">
          <div className="order-page__sec-wrapper">
            <div>
              <h2 className="order-page__subtitle">Личные данные</h2>
              <OrderInputs />
            </div>{/*
             <div>
              <h2 className="order-page__subtitle">Способы доставки</h2>
              {/* <DeliveryBlock /> 
              <Widget />
            </div>
            <div>
              <h2 className="order-page__subtitle">Способы оплаты</h2>
              <PaymentBlock /> 
            </div> */}
          </div>
          <OrderBlock />
        </div>
      </div>
    </section>
  );
};
