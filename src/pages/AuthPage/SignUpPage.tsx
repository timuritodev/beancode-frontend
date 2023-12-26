/* eslint-disable @typescript-eslint/no-explicit-any */
import "./AuthPage.css";
import { useState } from "react";
import { useAppDispatch } from "../../../src/services/typeHooks";
import { signUpUser, setUser } from "../../services/redux/slices/user/user";

const SignUpPage = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    address: "",
    password: "",
    token: "",
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
    dispatch(signUpUser(formData));
    dispatch(setUser(formData));
  };
  return (
    <section className="signup">
      <div className="signup__container">
        <h1 className="signup__title">Регистрация</h1>
        <form className="signup__form" onSubmit={handleSubmit}>
          <label className="signup__label">Имя</label>
          <input
            type="text"
            name="name"
            className="signup__input"
            value={formData.name}
            onChange={handleChange}
            placeholder="Иван"
            required
          />

          <label className="signup__label">Фамилия</label>
          <input
            type="text"
            name="surname"
            className="signup__input"
            value={formData.surname}
            onChange={handleChange}
            placeholder="Иванов"
            required
          />
          {/*
          <label>
            Телефон:
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Адрес:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Пароль:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label> */}

          <button
            type="submit"
            className="signup__button"
            onClick={handleSubmit}
          >
            Зарегистрироваться
          </button>
        </form>
      </div>
    </section>
  );
};
export default SignUpPage;
