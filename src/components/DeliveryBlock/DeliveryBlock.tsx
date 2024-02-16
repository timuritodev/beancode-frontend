/* eslint-disable @typescript-eslint/no-explicit-any */
import "./DeliveryBlock.css";
import {
  editUserInfo,
  getUserInfo,
  selectUser,
} from "../../services/redux/slices/user/user";
import { useAppDispatch, useAppSelector } from "../../services/typeHooks";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ISignUpData } from "../../types/Auth.types";
import CustomInput from "../../components/CustomInput/CustomInput";
import { CustomInputTypes } from "../../types/CustomInput.types";
import { CITY_VALIDATION_CONFIG } from "../../utils/constants";
import { CustomButton } from "../CustomButton/CustomButton";

export const DeliveryBlock = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const token = user.token;
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    getValues,
  } = useForm<ISignUpData>({ mode: "onChange" });

  const data = {
    name: getValues("name"),
    surname: getValues("surname"),
    phone: getValues("phone"),
    email: getValues("email"),
    address: getValues("address"),
    city: getValues("city"),
    area: getValues("area") === undefined ? "" : getValues("area"),
    password: getValues("password"),
  };

  const onSubmit: SubmitHandler<ISignUpData> = () => {
    dispatch(
      editUserInfo({
        data: {
          name: getValues("name"),
          surname: getValues("surname"),
          phone: getValues("phone"),
          email: getValues("email"),
          address: getValues("address"),
          city: getValues("city"),
          area: getValues("area") === undefined ? "" : getValues("area"),
        },
        token: token,
      })
    ).unwrap();
  };

  useEffect(() => {
    if (user.token) {
      dispatch(getUserInfo(user.token));
    }
  }, [dispatch, user]);

  const [isDeliveryPointVisible, setIsDeliveryPointVisible] = useState(true);
  const [isCourierVisible, setIsCourierVisible] = useState(false);

  const handleDeliveryButtonClick = () => {
    setIsDeliveryPointVisible(true);
    setIsCourierVisible(false);
  };

  const handleCourierButtonClick = () => {
    setIsCourierVisible(true);
    setIsDeliveryPointVisible(false);
  };

  return (
    <div className="delivery-block__container">
      <CustomInput
        inputType={CustomInputTypes.city}
        labelText={"Город"}
        validation={{
          ...register("city", CITY_VALIDATION_CONFIG),
        }}
        placeholder="Москва"
        defaultValue={user.city}
        error={errors?.city?.message}
      />
      <CustomButton
        buttonText={"Изменить данные"}
        handleButtonClick={handleSubmit(onSubmit)}
        disabled={!isDirty || !isValid}
        type="button"
      />
      <div className="delivery-block__buttons_container">
        <button
          className={`delivery-block__button ${
            isDeliveryPointVisible ? "" : "delivery-block__button_add"
          }`}
          onClick={handleCourierButtonClick}
        >
          <span
            className={`delivery-block__button__text ${
              isDeliveryPointVisible ? "" : "delivery-block__button__text_add"
            }`}
          >
            Пункты выдачи
          </span>
        </button>
        <button
          className={`delivery-block__button ${
            isCourierVisible ? "" : "delivery-block__button_add"
          }`}
          onClick={handleDeliveryButtonClick}
        >
          <span
            className={`delivery-block__button__text ${
              isCourierVisible ? "" : "delivery-block__button__text_add"
            }`}
          >
            Курьером
          </span>
        </button>
      </div>
      {isCourierVisible && <h2>СДЕК, 5POST</h2>}
      {isDeliveryPointVisible && <h2>Курьер</h2>}
    </div>
  );
};
