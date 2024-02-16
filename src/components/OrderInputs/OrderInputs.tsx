/* eslint-disable @typescript-eslint/no-explicit-any */
import "./OrderInputs.css";
import {
  editUserInfo,
  getUserInfo,
  selectUser,
} from "../../services/redux/slices/user/user";
import { useAppDispatch, useAppSelector } from "../../services/typeHooks";
import { useEffect, useState } from "react";
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
import { PopupChanges } from "../Popups/PopupChanges";
import { CustomButton } from "../CustomButton/CustomButton";

export const OrderInputs = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const [isSavedPopupOpened, setIsSavedPopupOpened] = useState<boolean>(false);

  const token = user.token;
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
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
      .then(() => {
        setIsSavedPopupOpened(true);
      });
  };

  useEffect(() => {
    setIsSavedPopupOpened(false);
  }, []);

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
        <CustomButton
          buttonText={"Изменить данные"}
          handleButtonClick={handleSubmit(onSubmit)}
          disabled={!isDirty || !isValid}
          type="button"
        />
      </form>
      <PopupChanges
        isOpened={isSavedPopupOpened}
        setIsOpened={setIsSavedPopupOpened}
      />
    </div>
  );
};

// const dispatch = useAppDispatch();
// const user = useAppSelector(selectUser);

// const token = user.token;
// const [formData, setFormData] = useState({
//   name: user.name,
//   surname: user.surname,
//   phone: user.phone,
//   email: user.email,
//   address: user.address,
//   city: user.city,
//   area: user.area,
// });

// const handleChange = (e: any) => {
//   const { name, value } = e.target;
//   setFormData((prevData) => ({
//     ...prevData,
//     [name]: value,
//   }));
// };

// const handleSubmit = async (e: any) => {
//   e.preventDefault();
//   dispatch(editUserInfo({ data: formData, token: token }));
// };

// useEffect(() => {
//   if (user.token) {
//     dispatch(getUserInfo(user.token));
//   }
// }, [dispatch, user]);

//   return (
//     <div className="order__container">
//       <div className="order-input__container">
//         <label className="order__label">Имя</label>
//         <input
//           type="text"
//           name="name"
//           className="order__input"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder={user.name}
//           required
//         />
//       </div>
//       <div className="order-input__container">
//         <label className="order__label">Фамилия</label>
//         <input
//           type="text"
//           name="surname"
//           className="order__input"
//           value={formData.surname}
//           onChange={handleChange}
//           placeholder={user.surname}
//           required
//         />
//       </div>
//       <div className="order-input__container">
//         <label className="order__label">Телефон</label>
//         <input
//           type="text"
//           name="phone"
//           className="order__input"
//           value={formData.phone}
//           onChange={handleChange}
//           placeholder={user.phone}
//           required
//         />
//       </div>

//       <div className="order-input__container">
//         <label className="order__label">Email</label>
//         <input
//           type="email"
//           name="email"
//           className="order__input"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder={user.email}
//           required
//         />
//       </div>

//       <div className="order-input__container">
//         <label className="order__label">Адрес</label>
//         <input
//           type="text"
//           name="address"
//           className="order__input"
//           value={formData.address}
//           onChange={handleChange}
//           placeholder={user.address}
//           required
//         />
//       </div>
//       <div className="order-input__container">
//         <label className="order__label">Город</label>
//         <input
//           type="text"
//           name="city"
//           className="order__input"
//           value={formData.city}
//           onChange={handleChange}
//           placeholder={user.city}
//           required
//         />
//       </div>
//       {user.area !== "" && (
//         <>
//           <div className="order-input__container">
//             <label className="order__label">Район</label>
//             <input
//               type="text"
//               name="area"
//               className="order__input"
//               value={formData.area}
//               onChange={handleChange}
//               placeholder={user.area}
//               required
//             />
//           </div>
//         </>
//       )}
//       <button
//         type="submit"
//         className="order-input__button"
//         onClick={handleSubmit}
//       >
//         Изменить данные
//       </button>
//     </div>
//   );
// };
