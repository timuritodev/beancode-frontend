/* eslint-disable @typescript-eslint/no-explicit-any */
import "../OrderInputs/OrderInputs.css";
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

export const SessionOrderInputs = () => {
  const [isSavedPopupOpened, setIsSavedPopupOpened] = useState<boolean>(false);

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
  };

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log("Form submitted:", data);
    localStorage.setItem("orderFormData", JSON.stringify(data));
  };

  useEffect(() => {
    setIsSavedPopupOpened(false);
  }, []);

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
          error={errors?.name?.message}
        />
        <CustomInput
          inputType={CustomInputTypes.surname}
          labelText={"Фамилия"}
          validation={{
            ...register("surname", SURNAME_VALIDATION_CONFIG),
          }}
          placeholder="Ивановf"
          error={errors?.surname?.message}
        />
        <CustomInput
          inputType={CustomInputTypes.phone}
          labelText={"Номер телефона"}
          validation={{
            ...register("phone", PHONE_VALIDATION_CONFIG),
          }}
          placeholder="+7-909-90-90-35"
          error={errors?.phone?.message}
        />
        <CustomInput
          inputType={CustomInputTypes.email}
          labelText={"Электронная почта"}
          validation={{
            ...register("email", EMAIL_VALIDATION_CONFIG),
          }}
          placeholder="email@example.com"
          error={errors?.email?.message}
        />
        <CustomInput
          inputType={CustomInputTypes.address}
          labelText={"Адрес"}
          validation={{
            ...register("address", ADDRESS_VALIDATION_CONFIG),
          }}
          placeholder="ул. Пушкина, д. 9, кв. 192"
          error={errors?.address?.message}
        />
        <CustomInput
          inputType={CustomInputTypes.city}
          labelText={"Город"}
          validation={{
            ...register("city", CITY_VALIDATION_CONFIG),
          }}
          placeholder="Москва"
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
            error={errors?.area?.message}
          />
        )}
        <CustomButton
          buttonText={"Сохранить данные"}
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

// const OrderForm: React.FC = () => {
//   const [formData, setFormData] = useState<any>(() => {
//     const storedData = localStorage.getItem("orderFormData");
//     return storedData
//       ? JSON.parse(storedData)
//       : {
//           name: "",
//           surname: "",
//           phone: "",
//           email: "",
//           address: "",
//           city: "",
//           area: "",
//         };
//   });

//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isValid, isDirty },
//   } = useForm({ mode: "onChange" });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData: []) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const onSubmit: SubmitHandler<any> = (data) => {
//     // Process form data
//     console.log("Form submitted:", data);
//     // Save form data to local storage
//     localStorage.setItem("orderFormData", JSON.stringify(data));
//   };

//   return (
//     <div className="account__container">
//       <form
//         className="input__container"
//         onSubmit={handleSubmit(onSubmit)}
//         noValidate
//       >
//         <CustomInput
//           inputType={CustomInputTypes.name}
//           labelText={"Имя"}
//           validation={{
//             ...register("name", NAME_VALIDATION_CONFIG),
//           }}
//           placeholder="Иван"
//           error={errors?.name?.message}
//         />
//         <CustomInput
//           inputType={CustomInputTypes.surname}
//           labelText={"Фамилия"}
//           validation={{
//             ...register("surname", SURNAME_VALIDATION_CONFIG),
//           }}
//           placeholder="Иванов"
//           error={errors?.surname?.message}
//         />
//         <CustomInput
//           inputType={CustomInputTypes.phone}
//           labelText={"Номер телефона"}
//           validation={{
//             ...register("phone", PHONE_VALIDATION_CONFIG),
//           }}
//           placeholder="+7-909-90-90-35"
//           error={errors?.phone?.message}
//         />
//         <CustomInput
//           inputType={CustomInputTypes.email}
//           labelText={"Электронная почта"}
//           validation={{
//             ...register("email", EMAIL_VALIDATION_CONFIG),
//           }}
//           placeholder="email@example.com"
//           error={errors?.email?.message}
//         />
//         <CustomInput
//           inputType={CustomInputTypes.address}
//           labelText={"Адрес"}
//           validation={{
//             ...register("address", ADDRESS_VALIDATION_CONFIG),
//           }}
//           placeholder="ул. Пушкина, д. 9, кв. 192"
//           error={errors?.address?.message}
//         />
//         <CustomInput
//           inputType={CustomInputTypes.city}
//           labelText={"Город"}
//           validation={{
//             ...register("city", CITY_VALIDATION_CONFIG),
//           }}
//           placeholder="Москва"
//           error={errors?.city?.message}
//         />
//         <CustomButton
//           buttonText={"Изменить данные"}
//           handleButtonClick={handleSubmit(onSubmit)}
//           disabled={!isDirty || !isValid}
//           type="button"
//         />
//       </form>
//       {/* <PopupChanges
//         isOpened={isSavedPopupOpened}
//         setIsOpened={setIsSavedPopupOpened}
//       /> */}
//     </div>
//   );
// };

// export default OrderForm;
