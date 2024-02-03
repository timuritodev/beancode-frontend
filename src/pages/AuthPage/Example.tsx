/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import './AuthPage.css';
import CustomInput from '../../components/CustomInput/CustomInput';
import { CustomInputTypes } from '../../types/CustomInput.types';
import { useAppDispatch } from "../../../src/services/typeHooks";
import { ISignUpData } from '../../types/Auth.types';
import {
    ADDRESS_VALIDATION_CONFIG,
    AREA_VALIDATION_CONFIG,
    CITY_VALIDATION_CONFIG,
    EMAIL_VALIDATION_CONFIG,
    NAME_VALIDATION_CONFIG,
    PASSWORD_VALIDATION_CONFIG,
    PHONE_VALIDATION_CONFIG,
    SURNAME_VALIDATION_CONFIG,
    VALIDATION_SETTINGS,
} from '../../utils/constants';
// import { checkEmail, signUpUser } from 'src/services/redux/slices/user/user';
import { signUpUser, setUser } from "../../services/redux/slices/user/user";
import { useResize } from '../../hooks/useResize';

export const Example = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [userData, setUserData] = useState<ISignUpData>({
        name: "",
        surname: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        area: "",
        password: "",
    });
    // const [authError, setAuthError] = useState(false);

    const {
        register,
        handleSubmit,
        // reset,
        watch,
        formState: { errors, isDirty, isValid },
        getValues,
    } = useForm<ISignUpData>({ mode: 'onChange' });

    const formTitle = (
        <h1 className="auth__title auth__title_type_sign-up">
            Создать учетную запись
        </h1>
    );
    const { width } = useResize();
    const formLink = (
        <p className="auth__link-text">
            {`${width > 1000 ? `У вас уже есть учетная запись?` : 'Есть учетная запись?'
                }`}
            <Link to="/sign-in" className="auth__link">
                Войти
            </Link>
        </p>
    );

    const data = {
        name: getValues('name'),
        surname: getValues('surname'),
        phone: getValues('phone'),
        email: getValues('email'),
        address: getValues('address'),
        city: getValues('city'),
        area: getValues('area'),
        password: getValues('password'),
    }


   const onSubmit: SubmitHandler<ISignUpData> = () => {
		dispatch(signUpUser(data))
			.unwrap()
			.then(() => {
				setUserData({
                    name:data.name,
                    surname: data.surname,
                    phone: data.phone,
					email: data.name,
                    address: data.address,
                    city: data.city,
                    area: data.area,
					password: data.password,
				});
				console.log(data,123123)
			})
			.catch((err) => {
				console.log(' dispatch(checkEmail(userEmail)) res', err);
				// setAuthError(true);
			});
        dispatch(setUser(data));
	};

    return (
        <main className="auth" id="sign-up-page">
            {/* <BackButton
                type={'button'}
                buttonText={`${width <= 1000 ? '' : 'Назад'}`}
                handleButtonClick={() => navigate(-1)}
            /> */}
            <div className="auth__container auth__container_type_auth">
                {formTitle}
                <p className="auth__hint">
                    Зарегистрируйтесь с помощью электронной почты
                </p>
                {width > 1000 ? formLink : null}
                <form
                    className="auth__form auth__form_type_sign-up"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                >
                    <CustomInput
                        inputType={CustomInputTypes.name}
                        labelText={'Имя'}
                        validation={{
                            ...register('name', NAME_VALIDATION_CONFIG),
                        }}
                        error={errors?.name?.message}
                    />
                    <CustomInput
                        inputType={CustomInputTypes.surname}
                        labelText={'Фамилия'}
                        validation={{
                            ...register('surname', SURNAME_VALIDATION_CONFIG),
                        }}
                        error={errors?.surname?.message}
                    />
                    <CustomInput
                        inputType={CustomInputTypes.phone}
                        labelText={'Номер телефона'}
                        validation={{
                            ...register('phone', PHONE_VALIDATION_CONFIG),
                        }}
                        error={errors?.phone?.message}
                    />
                    <CustomInput
                        inputType={CustomInputTypes.email}
                        labelText={'Электронная почта'}
                        validation={{
                            ...register('email', EMAIL_VALIDATION_CONFIG),
                        }}
                        error={errors?.email?.message}
                    />
                    <CustomInput
                        inputType={CustomInputTypes.address}
                        labelText={'Адрес'}
                        validation={{
                            ...register('address', ADDRESS_VALIDATION_CONFIG),
                        }}
                        error={errors?.address?.message}
                    />
                    <CustomInput
                        inputType={CustomInputTypes.city}
                        labelText={'Город'}
                        validation={{
                            ...register('city', CITY_VALIDATION_CONFIG),
                        }}
                        error={errors?.city?.message}
                    />
                    <CustomInput
                        inputType={CustomInputTypes.area}
                        labelText={'Район'}
                        validation={{
                            ...register('area', AREA_VALIDATION_CONFIG),
                        }}
                        error={errors?.area?.message}
                    />
                    {/* {userData.city === 'Челны' && <CustomInput
                        inputType={CustomInputTypes.area}
                        labelText={'Район'}
                        validation={{
                            ...register('area', AREA_VALIDATION_CONFIG),
                        }}
                        error={errors?.area?.message}
                    />} */}
                    <CustomInput
                        inputType={CustomInputTypes.password}
                        labelText={'Пароль'}
                        // showPasswordButton={true}
                        validation={{
                            ...register('password', PASSWORD_VALIDATION_CONFIG),
                        }}
                        error={errors?.password?.message}
                    />
                    {/* <span className="input__span input__span_type_password">
                        Минимум 8 символов (заглавные и строчные латинские буквы и
                        цифры)
                    </span> */}
                    {/* <CustomInput
                        inputType={CustomInputTypes.repeatPassword}
                        labelText={'Повторите пароль'}
                        validation={{
                            ...register('repeatPassword', {
                                validate: (value) =>
                                    value === watch('password') ||
                                    VALIDATION_SETTINGS.password.messages.noMatch,
                            }),
                        }}
                        error={errors?.repeatPassword?.message}
                    /> */}
                    {/* {authError ? (
                                <p className="auth__form-error auth__form-error_type_login">
                                    Почта уже зарегистрирована.
                                </p>
                            ) : null} */}
                    <button
                        type="submit"
                        className="signup__button"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        Зарегистрироваться
                    </button>
                </form>
            </div>
        </main>
    );
};
