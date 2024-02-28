import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import "./AuthPage.css";
import CustomInput from "../../components/CustomInput/CustomInput";
import { CustomInputTypes } from "../../types/CustomInput.types";
import { useAppDispatch, useAppSelector } from "../../services/typeHooks";
import { PASSWORD_VALIDATION_CONFIG } from "../../utils/constants";
import { changePassword } from "../../services/redux/slices/user/user";
import { CustomButton } from "../../components/CustomButton/CustomButton";
import { PopupLogin } from "../../components/Popups/PopupLogin";
import { PopupErrorLogin } from "../../components/Popups/PopupErrorLogin";
import { IChangePassword } from "../../types/Auth.types";
import { selectUser } from "../../services/redux/slices/user/user";

export const ChangePasswordPage = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const [authError, setAuthError] = useState(false);
  const [isSavedPopupOpened, setIsSavedPopupOpened] = useState<boolean>(false);
  const [isErrorPopupOpened, setIsErrorPopupOpened] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
    getValues,
  } = useForm<IChangePassword>({ mode: "onChange" });

  const data = {
    oldPassword: getValues("oldPassword"),
    newPassword: getValues("newPassword"),
  };

  console.log(data,123)

  const onSubmit: SubmitHandler<IChangePassword> = () => {
    dispatch(
      changePassword({
        data: {
          userId: user.id,
          oldPassword: getValues("oldPassword"),
          newPassword: getValues("newPassword"),
        },
        token: user.token,
      })
    )
      .unwrap()
      .then((res) => {
        setIsSavedPopupOpened(true);
      })
      .catch((err) => {
        setIsErrorPopupOpened(true);
        console.log("dispatch signInUser err:", err);
      });
  };

  useEffect(() => {
    reset();
    setAuthError(false);
  }, [reset]);

  useEffect(() => {
    setIsSavedPopupOpened(false);
  }, []);

  return (
    <section className="signup">
      <div className="signup__container">
        <h1 className="signup__title">Смена пароля</h1>
        <form
          className="signup__form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <CustomInput
            inputType={CustomInputTypes.newPassword}
            labelText="Старый пароль"
            showPasswordButton={true}
            validation={{
              ...register("oldPassword", PASSWORD_VALIDATION_CONFIG),
            }}
            error={errors?.oldPassword?.message}
          />
          <CustomInput
            inputType={CustomInputTypes.oldPassword}
            labelText="Новый пароль"
            showPasswordButton={true}
            validation={{
              ...register("newPassword", PASSWORD_VALIDATION_CONFIG),
            }}
            error={errors?.newPassword?.message}
          />
          <CustomButton
            buttonText={"Сменить пароль"}
            handleButtonClick={handleSubmit(onSubmit)}
            // disabled={!isDirty || !isValid}
            type="button"
          />
        </form>
      </div>
      <PopupLogin
        isOpened={isSavedPopupOpened}
        setIsOpened={setIsSavedPopupOpened}
      />
      <PopupErrorLogin
        isOpened={isErrorPopupOpened}
        setIsOpened={setIsErrorPopupOpened}
      />
    </section>
  );
};
