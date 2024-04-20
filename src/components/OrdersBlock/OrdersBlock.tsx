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
import {
  deleteAllApi,
  deleteAllSessionApi,
  resetCart,
} from "../../services/redux/slices/cart/cart";
import { createOrderBackupApi } from "../../services/redux/slices/order/order";
import CustomInput from "../CustomInput/CustomInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { IPromo } from "../../types/Promo.types";
import { promoApi } from "../../services/redux/slices/promo/promo";
import { CustomInputTypes } from "../../types/CustomInput.types";
import { PROMO_VALIDATION_CONFIG } from "../../utils/constants";
import { PopupPromo } from "../Popups/PopupPromo";
import { PopupErrorPromo } from "../Popups/PopupErrorPromo";
import { CustomButton } from "../CustomButton/CustomButton";
import { deliverApi } from "../../services/redux/slices/delivery/delivery";

interface UserData {
  userId: number;
  name: string;
  surname: string;
  phone: string;
  email: string;
  address: string;
  city: string;
}

interface OrderBlockProps {
  dataSaved: boolean;
}

export const OrderBlock: FC<OrderBlockProps> = ({ dataSaved }) => {
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

  const trimPromoCode = (promoCode: string) => promoCode.trim();

  const onSubmit: SubmitHandler<IPromo> = () => {
    const trimmedPromoCode = trimPromoCode(getValues("promo"));
    dispatch(promoApi({ promo: trimmedPromoCode, userId: user.id }))
      .unwrap()
      .then((response) => {
        const discountValue = parseFloat(response.discount);
        setDiscount(discountValue);
        setIsPromoPopupOpened(true);
      })
      .catch((error) => {
        setIsErrorPopupOpened(true);
        console.error("Error applying promo code:", error);
      });
  };

  let discountedSum = sum;

  if (discount > 0) {
    discountedSum = sum * (1 - discount / 100);
  }

  useEffect(() => {
    const discountFromStorage = localStorage.getItem("discount");
    if (discountFromStorage) {
      setDiscount(parseFloat(discountFromStorage));
    }
  }, []);

  // Обновление localStorage при изменении значения скидки
  useEffect(() => {
    localStorage.setItem("discount", discount.toString());
  }, [discount]);

  const products_info = cartproducts
    .map((item) => `${item.id} ${item.title} ${item.weight}`)
    .join(", ");

  const currentTimestamp = Date.now();
  const currentDate = new Date(currentTimestamp);
  const formattedDate = currentDate.toISOString().split("T")[0];

  let userData: UserData;

  const handleClickPayButton = async () => {
    const storedData = localStorage.getItem("orderFormData");

    // console.log(storedData, "storedData");
    if (user.token) {
      userData = {
        userId: user.id,
        name: user.name,
        surname: user.surname,
        phone: user.phone,
        email: user.email,
        address: user.address,
        city: user.city,
      };
    } else if (storedData) {
      userData = JSON.parse(storedData);
    }

    try {
      await dispatch(
        payApi({
          userName: payApiUsername,
          password: payApiPassword,
          orderNumber: `${randomOrderNumber}`,
          amount: `${discountedSum * 100}`,
          returnUrl: `https://beancode.ru/payment-sucess?orderId=${randomOrderNumber}&userId=${userData.userId}&email=${userData.email}&phone=${userData.phone}&sum=${discountedSum}&product_info=${products_info}&product_quantity=${cartproducts.length}`,
          // returnUrl: `http://localhost:5173/payment-sucess?orderId=${randomOrderNumber}&userId=${userData.userId}&email=${userData.email}&phone=${userData.phone}&sum=${discountedSum}&product_info=${products_info}&product_quantity=${cartproducts.length}`,
          failUrl: "https://beancode.ru/payment-fail",
          description: `Номер заказа - ${randomOrderNumber}, Информация о заказе(id, название, вес) - ${products_info}, Кол-во товаров - ${cartproducts.length}, Город - ${userData.city}, Адрес - ${userData.address}, Email - ${userData.email}, Телефон - ${userData.phone}, ФИО - ${userData.name} ${userData.surname}`,
          clientId: `${userData.userId}`,
          email: userData.email,
          phone: userData.phone,
        })
      );
      // await dispatch(
      //   deliverApi({
      //     type: 1,
      //     tariff_code: 1,
      //     recipient: {
      //       name: userData.name,
      //       email: userData.email,
      //       phones: {
      //         number: userData.phone,
      //       },
      //     },
      //     packages: {
      //       number: string;
      //       weight: number;
      //       length?: number;
      //       width?: number;
      //       height?: number;
      //       comment?: string;
      //       items: {
      //         name: products_info,
      //     },
      //   }),
      // );
      await dispatch(
        createOrderBackupApi({
          userId: userData.userId,
          phone: userData.phone,
          email: userData.email,
          address: userData.address,
          city: userData.city,
          sum: sum,
          product_quantity: cartproducts.length,
          products_info: products_info,
          orderNumber: `${randomOrderNumber}`,
          date_order: formattedDate,
        })
      );
      localStorage.removeItem("discount");
      // localStorage.removeItem("orderFormData");
      if (user.token) {
        await dispatch(deleteAllApi(user.id));
      } else {
        await dispatch(deleteAllSessionApi());
      }
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
  }, [redirecting, formUrl, dispatch, user.id]);

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
      {discount !== 0 ? (
        <p className="order-block__sale">С учетом скидки {discount} %</p>
      ) : (
        ""
      )}
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
          labelText={"Поле для ввода промокода"}
          validation={{
            ...register("promo", PROMO_VALIDATION_CONFIG),
          }}
          // placeholder="email@example.com"
          error={errors?.promo?.message}
        />
        <button className="order-block__button">
          <img
            className="subscribe__button_img"
            alt="subscribe button image"
            src={button}
            onClick={handleSubmit(onSubmit)}
          />
        </button>
      </form>
      <CustomButton
        buttonText={"Оплатить заказ"}
        handleButtonClick={handleClickPayButton}
        disabled={!dataSaved}
        type="submit"
        className="order-block__pay-button"
      />
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
        <img className="checkbox__img" src={ic_info} alt="checkbox" />
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
