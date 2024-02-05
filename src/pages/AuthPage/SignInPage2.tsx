/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import "./AuthPage.css";
import CustomInput from "../../components/CustomInput/CustomInput";
import { CustomInputTypes } from "../../types/CustomInput.types";
import { useAppDispatch } from "../../services/typeHooks";
import { ISignInData } from "../../types/Auth.types";
import {
  EMAIL_VALIDATION_CONFIG,
  PASSWORD_VALIDATION_CONFIG,
} from "../../utils/constants";
import {
  signInUser,
  setUser,
  getUserInfo,
} from "../../services/redux/slices/user/user";

const SignInPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [authError, setAuthError] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
    getValues,
  } = useForm<ISignInData>({ mode: "onChange" });

  const onSubmit: SubmitHandler<ISignInData> = () => {
    const formValues = getValues();

    dispatch(signInUser(formValues as ISignInData))
      .unwrap()
      .then((res) => {
        dispatch(setUser({ email: formValues.email, token: res }));
        return res;
      })
      .then((res) => dispatch(getUserInfo(res)))
      .catch((err) => {
        console.log("dispatch signInUser err:", err);
      });
  };

  useEffect(() => {
    reset();
    setAuthError(false);
  }, []);

  return (
    <section className="signup">
      <div className="signup__container">
        <h1 className="signup__title">Вход в личный кабинет</h1>
        <form
          className="signup__form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <CustomInput
            inputType={CustomInputTypes.email}
            labelText="Электронная почта"
            validation={{
              ...register("email", EMAIL_VALIDATION_CONFIG),
            }}
            error={errors?.email?.message}
            // maxLength={VALIDATION_SETTINGS.email.maxLength}
          />
          <CustomInput
            inputType={CustomInputTypes.password}
            labelText="Пароль"
            showPasswordButton={true}
            validation={{ ...register("password", PASSWORD_VALIDATION_CONFIG) }}
            error={errors?.password?.message}
          />
          <Link
            to="/recover-password"
            className="auth__link auth__recover-link"
          >
            Забыли пароль?
          </Link>
          {/* TODO recover button */}
          {authError ? (
            <p className="auth__form-error auth__form-error_type_login">
              Неверный логин или пароль.
            </p>
          ) : null}
          <button
            type="submit"
            className="signup__button"
            onSubmit={handleSubmit(onSubmit)}
          >
            Зарегистрироваться
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignInPage;
