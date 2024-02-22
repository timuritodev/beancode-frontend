import "./InfoPaymentPage.css";

export const InfoPaymentPageSucess = () => {
  return (
    <section className="info-payment">
      <div className="info-payment__container">
        <h1 className="info-payment__title">Оплата прошла успешно</h1>
        <p className="info-payment__text">
          В течение часа с вами свяжется менеджер и уточнит детали заказа
        </p>
      </div>
    </section>
  );
};
