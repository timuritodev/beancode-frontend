export interface ISignInData {
  email: string;
  password: string;
}

export interface ISignUpData {
  name: string;
  surname: string;
  phone: string;
  email: string;
  address: string;
  password: string;
}

export interface IUser {
  id: number;
  name: string;
  surname: string;
  phone: string;
  email: string;
  address: string;
  password: string;
  city: string;
  area: string;
  token: string;
}

export interface IEditProfileData {
  name: string | undefined;
  surname: string | undefined;
  phone: string | undefined;
  email: string | undefined;
  address: string | undefined;
}
