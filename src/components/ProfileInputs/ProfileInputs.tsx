import "./ProfileInputs.css";
import {
  editUserInfo,
  getUserInfo,
  selectUser,
} from "../../services/redux/slices/user/user";
import { useAppDispatch, useAppSelector } from "../../services/typeHooks";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ISignUpData } from "../../types/Auth.types";
import CustomInput from "../../components/CustomInput/CustomInput";
import { CustomInputTypes } from "../../types/CustomInput.types";
import {
  ADDRESS_VALIDATION_CONFIG,
  AREA_VALIDATION_CONFIG,
  CITY_VALIDATION_CONFIG,
  EMAIL_VALIDATION_CONFIG,
  NAME_VALIDATION_CONFIG,
  PHONE_VALIDATION_CONFIG,
  SURNAME_VALIDATION_CONFIG,
} from "../../utils/constants";

export const ProfileInputs = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const token = user.token;
  const {
    register,
    handleSubmit,
    formState: { errors },
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
      )
      .unwrap()
  };

  // const onSubmit: SubmitHandler<ISignUpData> = () => {
  //   dispatch(editUserInfo({ data: data, token: token }));
  // };

  // const onSubmit: SubmitHandler<IEditProfileFields> = (
  // 	values: IEditProfileFields
  // ) => {
  // 	dispatch(
  // 		editUserInfo({
  // 			data: {
  // 				username: getValues('nickname'),
  // 				date_of_birth: getValues('dateOfBirth')
  // 					? getValues('dateOfBirth')
  // 					: user.dateOfBirth,
  // 				sex: getValues('sex') || null,
  // 			},
  // 			token: user.token,
  // 		})
  // 	)
  // 		.unwrap()
  // 		.then(() => {
  // 			setIsSavedPopupOpened(true);
  // 			reset(values);
  // 		})
  // 		.catch((err: unknown) => console.log('editUserInfo err', err));
  // };

  useEffect(() => {
    if (user.token) {
      dispatch(getUserInfo(user.token));
    }
  }, [dispatch, user]);

  return (
    <div className="account__container">
      <form
        className="input__container"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <CustomInput
          inputType={CustomInputTypes.name}
          labelText={"Имя"}
          validation={{
            ...register("name", NAME_VALIDATION_CONFIG),
          }}
          placeholder="Иван"
          defaultValue={user.name}
          error={errors?.name?.message}
        />
        <CustomInput
          inputType={CustomInputTypes.surname}
          labelText={"Фамилия"}
          validation={{
            ...register("surname", SURNAME_VALIDATION_CONFIG),
          }}
          placeholder="Иванов"
          defaultValue={user.surname}
          error={errors?.surname?.message}
        />
        <CustomInput
          inputType={CustomInputTypes.phone}
          labelText={"Номер телефона"}
          validation={{
            ...register("phone", PHONE_VALIDATION_CONFIG),
          }}
          placeholder="+7-909-90-90-35"
          defaultValue={user.phone}
          error={errors?.phone?.message}
        />
        <CustomInput
          inputType={CustomInputTypes.email}
          labelText={"Электронная почта"}
          validation={{
            ...register("email", EMAIL_VALIDATION_CONFIG),
          }}
          placeholder="email@example.com"
          defaultValue={user.email}
          error={errors?.email?.message}
        />
        <CustomInput
          inputType={CustomInputTypes.address}
          labelText={"Адрес"}
          validation={{
            ...register("address", ADDRESS_VALIDATION_CONFIG),
          }}
          placeholder="ул. Пушкина, д. 9, кв. 192"
          defaultValue={user.address}
          error={errors?.address?.message}
        />
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
        {data.city === "Челны" && (
          <CustomInput
            inputType={CustomInputTypes.area}
            labelText={"Район"}
            validation={{
              ...register("area", AREA_VALIDATION_CONFIG),
            }}
            placeholder="Новый город"
            defaultValue={user.area}
            error={errors?.area?.message}
          />
        )}
        <button
          type="submit"
          className="signup__button"
          onSubmit={handleSubmit(onSubmit)}
        >
          Изменить данные
        </button>
      </form>
    </div>
  );
};
