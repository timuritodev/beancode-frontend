/* eslint-disable @typescript-eslint/no-explicit-any */
import "./DeliveryBlock.css";
import {
  editUserInfo,
  getUserInfo,
  selectUser,
} from "../../services/redux/slices/user/user";
import { useAppDispatch, useAppSelector } from "../../services/typeHooks";
import { useEffect, useState } from "react";

export const DeliveryBlock = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const token = user.token;
  const [formData, setFormData] = useState({
    name: user.name,
    surname: user.surname,
    phone: user.phone,
    email: user.email,
    address: user.address,
    city: user.city,
    area: user.area,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    dispatch(editUserInfo({ data: formData, token: token }));
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
      <div className="delivery-block-input__container">
        <label className="delivery-block__label">Город</label>
        <input
          type="text"
          name="city"
          className="delivery-block__input"
          value={formData.city}
          onChange={handleChange}
          placeholder={user.city}
          required
        />
      </div>
      <button
        type="submit"
        className="delivery-block-input__button"
        onClick={handleSubmit}
      >
        Изменить данные
      </button>
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
