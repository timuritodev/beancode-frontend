/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useAppDispatch } from "../../../src/services/typeHooks";
import {
  signInUser,
  setUser,
  getUserInfo,
} from "../../services/redux/slices/user/user";
import "./AuthPage.css";
import { Link } from "react-router-dom";

const SignInPage = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    email: "",
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
    // dispatch(signInUser(formData));
    // dispatch(setUser(formData));
    dispatch(signInUser(formData))
      .unwrap()
      .then((res) => {
        console.log(res, 111);
        dispatch(setUser({ email: formData.email, token: res }));
        console.log(res)
        return res;
      })
      .then((res) => dispatch(getUserInfo(res)))
      .catch((err) => {
        console.log("dispatch signInUser err:", err);
      });
  };

  return (
    <section className="signup">
      <div className="signup__container">
        <h1 className="signup__title">Вход в личный кабинет</h1>
        <form className="signup__form" onSubmit={handleSubmit}>
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
          <Link to="/" className="signin__link">
            Напомнить пароль
          </Link>

          <button
            type="submit"
            className="signup__button"
            onClick={handleSubmit}
          >
            Войти
          </button>
          <Link to="/sign-up" className="signin__link signin__link_add">
            Зарегистрироваться
          </Link>
        </form>
      </div>
    </section>
  );
};

export default SignInPage;
