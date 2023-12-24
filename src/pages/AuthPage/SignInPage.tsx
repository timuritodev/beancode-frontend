/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useAppDispatch } from "../../../src/services/typeHooks";
import { signInUser, setUser } from "../../services/redux/slices/user/user";

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
    dispatch(signInUser(formData));
    dispatch(setUser(formData));
  };

  return (
    <form onSubmit={handleSubmit}>
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
        Пароль:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">Войти</button>
    </form>
  );
};

export default SignInPage;
