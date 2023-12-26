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

          <label className="signup__label">Телефон</label>
          <input
            type="text"
            name="phone"
            className="signup__input"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+7-999-000-11-22"
            required
          />
          <label className="signup__label">Email</label>
          <input
            type="email"
            name="email"
            className="signup__input"
            value={formData.email}
            onChange={handleChange}
            placeholder="adress@gmail.com"
            required
          />
          <label className="signup__label">Адрес</label>
          <input
            type="text"
            name="address"
            className="signup__input"
            value={formData.address}
            onChange={handleChange}
            placeholder="ул. Пушкина, д. 9, подъезд 3, кв. 21"
            required
          />
          <label className="signup__label">Пароль</label>
          <input
            type="password"
            name="password"
            className="signup__input"
            value={formData.password}
            onChange={handleChange}
            placeholder="не менее 6 символов"
            required
          />
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
