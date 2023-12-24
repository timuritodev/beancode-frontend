/* eslint-disable @typescript-eslint/no-explicit-any */
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
    <form onSubmit={handleSubmit}>
      <label>
        Имя:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Фамилия:
        <input
          type="text"
          name="surname"
          value={formData.surname}
          onChange={handleChange}
          required
        />
      </label>

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
      </label>

      <button type="submit" onClick={handleSubmit}>
        Зарегистрироваться
      </button>
    </form>
  );
};
export default SignUpPage;
