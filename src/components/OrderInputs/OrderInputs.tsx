/* eslint-disable @typescript-eslint/no-explicit-any */
import "./OrderInputs.css";
import {
  editUserInfo,
  getUserInfo,
  selectUser,
} from "../../services/redux/slices/user/user";
import { useAppDispatch, useAppSelector } from "../../services/typeHooks";
import { useEffect, useState } from "react";

export const OrderInputs = () => {
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

  return (
    <div className="order__container">
      <div className="order-input__container">
        <label className="order__label">Имя</label>
        <input
          type="text"
          name="name"
          className="order__input"
          value={formData.name}
          onChange={handleChange}
          placeholder={user.name}
          required
        />
      </div>
      <div className="order-input__container">
        <label className="order__label">Фамилия</label>
        <input
          type="text"
          name="surname"
          className="order__input"
          value={formData.surname}
          onChange={handleChange}
          placeholder={user.surname}
          required
        />
      </div>
      <div className="order-input__container">
        <label className="order__label">Телефон</label>
        <input
          type="text"
          name="phone"
          className="order__input"
          value={formData.phone}
          onChange={handleChange}
          placeholder={user.phone}
          required
        />
      </div>

      <div className="order-input__container">
        <label className="order__label">Email</label>
        <input
          type="email"
          name="email"
          className="order__input"
          value={formData.email}
          onChange={handleChange}
          placeholder={user.email}
          required
        />
      </div>

      <div className="order-input__container">
        <label className="order__label">Адрес</label>
        <input
          type="text"
          name="address"
          className="order__input"
          value={formData.address}
          onChange={handleChange}
          placeholder={user.address}
          required
        />
      </div>
      <div className="order-input__container">
        <label className="order__label">Город</label>
        <input
          type="text"
          name="city"
          className="order__input"
          value={formData.city}
          onChange={handleChange}
          placeholder={user.city}
          required
        />
      </div>
      {user.area !== "" && (
        <>
          <div className="order-input__container">
            <label className="order__label">Район</label>
            <input
              type="text"
              name="area"
              className="order__input"
              value={formData.area}
              onChange={handleChange}
              placeholder={user.area}
              required
            />
          </div>
        </>
      )}
      <button
        type="submit"
        className="order-input__button"
        onClick={handleSubmit}
      >
        Изменить данные
      </button>
    </div>
  );
};
