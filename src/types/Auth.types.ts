// export interface IRecoverPasswordFields {
// 	email: string;
// }

// export interface ISignInFields extends IRecoverPasswordFields {
// 	password: string;
// }

// export interface ISignUpFields extends ISignInFields {
// 	repeatPassword: string;
// }

// export interface IResetPasswordFields {
// 	password: string;
// 	repeatPassword: string;
// }

// export interface IEditProfileFields {
// 	// email: string;
// 	// password: string;
// 	nickname: string;
// 	dateOfBirth: string;
// 	sex: 0 | 1;
// }

export interface ISignInData {
  email: string;
  password: string;
}

export interface ISignUpData extends ISignInData {
  fav_genres: number[];
}

// export interface IAvatar {
// 	avatar: number;
// }

export interface IUser {
  id: number;
  name: string;
  surname: string;
  phone: string;
  email: string;
  address: string;
  password: string;
  token?: string;
}

// export interface IResetPasswordData {
// 	token: string;
// 	new_password: string;
// }

// export interface IEditProfileData {
// 	username: string | undefined;
// 	date_of_birth: string | undefined;
// 	sex: number | null;
// 	// avatar: number;
// }
