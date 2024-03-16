/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { OrderCardList } from "../OrderCard/OrderCardList";
import "./OrdersBlock.css";
import { FC, useEffect, useState } from "react";
import button from "../../images/promo_button.svg";
import ic_info from "../../images/ic_info.svg";
import { useAppSelector, useAppDispatch } from "../../services/typeHooks";
// import { createOrderApi } from "../../services/redux/slices/order/order";
import { selectUser } from "../../services/redux/slices/user/user";
// import { sendEmailApi } from "../../services/redux/slices/mailer/mailer";
import { payApi } from "../../services/redux/slices/pay/pay";
import { deleteAllApi, resetCart } from "../../services/redux/slices/cart/cart";
import { createOrderBackupApi } from "../../services/redux/slices/order/order";
import CustomInput from "../CustomInput/CustomInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { IPromo } from "../../types/Promo.types";
import { promoApi } from "../../services/redux/slices/promo/promo";
import { CustomInputTypes } from "../../types/CustomInput.types";
import { PROMO_VALIDATION_CONFIG } from "../../utils/constants";
import { PopupPromo } from "../Popups/PopupPromo";
import { PopupErrorPromo } from "../Popups/PopupErrorPromo";

export const OrderBlock: FC = () => {
  const dispatch = useAppDispatch();
  const cartproducts = useAppSelector((state) => state.cart.cart);
  const user = useAppSelector(selectUser);
  const formUrl = useAppSelector((state) => state.pay.response.formUrl);

  const randomOrderNumber = Math.floor(Math.random() * 900000) + 100000;

  const [redirecting, setRedirecting] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const payApiUsername = process.env.REACT_APP_PAY_API_USERNAME;
  const payApiPassword = process.env.REACT_APP_PAY_API_PASSWORD;
  const payApiPasswordWa = process.env.REACT_APP_PAY_API_PASSWORD_ST;

  const [isPromoPopupOpened, setIsPromoPopupOpened] = useState<boolean>(false);
  const [isErrorPopupOpened, setIsErrorPopupOpened] = useState<boolean>(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  let sum = 0;

  cartproducts.forEach((product) => {
    sum += parseInt(product.price, 10);
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<IPromo>({ mode: "onChange" });

  const [discount, setDiscount] = useState(0);

  // Внутри функции onSubmit после успешного применения промокода
  const onSubmit: SubmitHandler<IPromo> = () => {
    dispatch(promoApi({ promo: getValues("promo"), userId: user.id }))
      .unwrap()
      .then((response) => {
        // Если промокод успешно применен, обновите скидку
        const discountValue = parseFloat(response.discount);
        console.log(discountValue, 123123);
        setDiscount(discountValue);
        setIsPromoPopupOpened(true);
        // sum = sum * discountValue;
      })
      .catch((error) => {
        // Обработайте ошибку при применении промокода
        setIsErrorPopupOpened(true);
        console.error("Error applying promo code:", error);
      });
  };

  let discountedSum = sum; // Инициализируем сумму с учетом скидки как обычную сумму заказа

  // Если применен промокод, рассчитываем сумму с учетом скидки
  if (discount > 0) {
    discountedSum = sum * (1 - discount / 100);
  }

  const products_info = cartproducts
    .map((item) => `${item.id} ${item.title} ${item.weight}`)
    .join(", ");

  const currentTimestamp = Date.now();
  const currentDate = new Date(currentTimestamp);
  const formattedDate = currentDate.toISOString().split("T")[0];

  const handleClickPayButton = async () => {
    try {
      await dispatch(
        payApi({
          userName: payApiUsername,
          password: payApiPassword,
          orderNumber: `${randomOrderNumber}`,
          amount: `${discountedSum * 100}`,
          returnUrl: `https://beancode.ru/payment-sucess?orderId=${randomOrderNumber}&userId=${user.id}&email=${user.email}&phone=${user.phone}&sum=${discountedSum}&product_info=${products_info}&product_quantity=${cartproducts.length}`,
          // returnUrl: `http://localhost:5173/payment-sucess?orderId=${randomOrderNumber}&userId=${user.id}&email=${user.email}&phone=${user.phone}&sum=${sum}&product_info=${products_info}&product_quantity=${cartproducts.length}`,
          failUrl: "https://beancode.ru/payment-fail",
          description: `Номер заказа - ${randomOrderNumber}, Информация о заказе(id, название, вес) - ${products_info}, Кол-во товаров - ${cartproducts.length}, Город - ${user.city}, Адрес - ${user.address}, Email - ${user.email}, Телефон - ${user.phone}, ФИО - ${user.name} ${user.surname}`,
          clientId: `${user.id}`,
          email: user.email,
          phone: user.phone,
        })
      );
      await dispatch(
        createOrderBackupApi({
          userId: user.id,
          phone: user.phone,
          email: user.email,
          address: user.address,
          city: user.city,
          sum: sum,
          product_quantity: cartproducts.length,
          products_info: products_info,
          orderNumber: `${randomOrderNumber}`,
          date_order: formattedDate,
        })
      );
      dispatch(deleteAllApi(user.id));
      dispatch(resetCart());
      setRedirecting(true);
    } catch (error) {
      console.error("Error in payApi call:", error);
      return;
    }
  };

  useEffect(() => {
    if (redirecting && formUrl) {
      window.location.href = formUrl;
      setRedirecting(false);
    }
  }, [redirecting, formUrl]);

  // const onSubmit: SubmitHandler<IPromo> = () => {
  //   dispatch(promoApi({ promo: getValues("promo"), userId: user.id })).unwrap();
  // };

  return (
    <div className="order-block">
      <h3 className="order-block__title">Ваш заказ</h3>
      <OrderCardList data={cartproducts} />
      <div className="order-block__details">
        <p className="order-block__text">
          {cartproducts.length} товара на сумму
          {/* Todo товар или товара */}
        </p>
        <p className="order-block__text">{discountedSum} ₽</p>
      </div>
      {/* <div className="order-block__details">
        <p className="order-block__text">Курьером...</p>
        <p className="order-block__text">{sum} ₽</p>
      </div> */}
      <div className="order-block__details">
        {/* <p className="order-block__total">Итого</p>
        <p className="order-block__total"> ₽</p> */}
        {/* TODO добавить сюда цену за доставку */}
      </div>
      <form
        className="order-block__input_container"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <CustomInput
          inputType={CustomInputTypes.promo}
          // labelText={"Электронная почта"}
          validation={{
            ...register("promo", PROMO_VALIDATION_CONFIG),
          }}
          // placeholder="email@example.com"
          error={errors?.promo?.message}
        />
        <button className="order-block__button">
          <img
            className="subscribe__button_img"
            alt="subscribe__button_img"
            src={button}
            onClick={handleSubmit(onSubmit)}
          />
        </button>
      </form>
      {/* <div className="order-block__input_container">
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
      </div> */}
      {/* TODO добавить промокоды */}
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
      <PopupPromo
        isOpened={isPromoPopupOpened}
        setIsOpened={setIsPromoPopupOpened}
        discount={discount}
      />
      <PopupErrorPromo
        isOpened={isErrorPopupOpened}
        setIsOpened={setIsErrorPopupOpened}
      />
    </div>
  );
};
