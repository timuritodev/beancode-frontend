import "./InfoPaymentPage.css";
import { useAppSelector, useAppDispatch } from "../../services/typeHooks";
import { selectUser } from "../../services/redux/slices/user/user";
import { getStatusApi } from "../../services/redux/slices/orderStatus/orderStatus";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  createOrderApi,
  getOrdersApi,
} from "../../services/redux/slices/order/order";
import { sendEmailApi } from "../../services/redux/slices/mailer/mailer";

export const InfoPaymentPageSucess = () => {
  const dispatch = useAppDispatch();
  const orderRes = useAppSelector((state) => state.pay.response);
  const orders = useAppSelector((state) => state.order.info);
  const orderStatus = useAppSelector((state) => state.orderStatus.response);
  const user = useAppSelector(selectUser);

  const payApiUsername = process.env.REACT_APP_PAY_API_USERNAME;
  const payApiPassword = process.env.REACT_APP_PAY_API_PASSWORD;

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const orderId = queryParams.get("orderId");
  const userId = queryParams.get("userId");
  const email = queryParams.get("email");
  const phone = queryParams.get("phone");
  const sum = queryParams.get("sum");
  const product_quantity = queryParams.get("product_quantity");
  const products_info = queryParams.get("product_info");

  const isOrderProcessed = orderStatus.OrderNumber === orderId;

  const isOrderProcessed2 =
    orders.find((order) => order.orderNumber === orderId) !== undefined;

  const currentTimestamp = Date.now();

  // Создание объекта Date из метки времени
  const currentDate = new Date(currentTimestamp);

  // Форматирование даты в строку 'YYYY-MM-DD'
  const formattedDate = currentDate.toISOString().split("T")[0];

  // console.log(isOrderProcessed, "isOrderProcessed");
  // console.log(isOrderProcessed2, "isOrderProcessed2");
  // console.log(orderStatus.OrderNumber, "orderStatus.OrderNumber");
  // console.log(orderId, "orderId");

  useEffect(() => {
    dispatch(getOrdersApi(user.id));
    if (!isOrderProcessed) {
      dispatch(
        getStatusApi({
          userName: payApiUsername,
          password: payApiPassword,
          orderId: `${orderRes.orderId}`,
        })
      )
        .then(() => {
          if (orderStatus.OrderStatus === 2) {
            dispatch(
              createOrderApi({
                userId: user.id,
                phone: user.phone,
                email: user.email,
                address: user.address,
                city: user.city,
                sum: parseInt(sum || "0", 10),
                product_quantity: parseInt(product_quantity || "0", 10),
                products_info: products_info || "",
                orderNumber: orderId || "",
                date_order: formattedDate,
              })
            );
            dispatch(
              sendEmailApi({
                email: user.email,
                subject: "Заказ",
                text: `Номер заказа - ${orderId} \nАдрес электронной почты - ${user.email} \nФИО - ${user.name} ${user.surname} \nНомер телефона - ${user.phone} \nАдрес - ${user.address} \nГород - ${user.city} \nСумма заказа - ${sum} руб.\nКол-во товаров - ${product_quantity} \nИнформация о товарах(Название, вес) - ${products_info}`,
                greetings: `Спасибо за ваш заказ.\n${products_info}`
              })
            );
          }
        })
        .catch((error) => {
          console.error("Error in getStatusApi call:", error);
        });
    }
  }, [dispatch, orderRes.orderId, payApiPassword, payApiUsername, user.id, user.email, user.phone, user.address, user.city, orderStatus.OrderStatus, user.name, user.surname, orderId, sum, product_quantity, products_info, isOrderProcessed2, formattedDate, isOrderProcessed]);

  return (
    <section className="info-payment">
      <div className="info-payment__container">
        <h1 className="info-payment__title">Оплата прошла успешно</h1>
        <p className="info-payment__text">
          В ближайшее время с вами свяжется менеджер и уточнит детали заказа
        </p>
      </div>
    </section>
  );
};
