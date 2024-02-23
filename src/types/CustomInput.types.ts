/* eslint-disable @typescript-eslint/no-explicit-any */
export enum CustomInputTypes {
	name = 'name',
    surname = 'surname',
    phone = 'tel',
    email = 'email',
    address = 'address',
    city = 'city',
    area = 'area',
    password =  'password',
	repeatPassword = 'repeatPassword',
	enteredEmail = 'enteredEmail',
	text = 'text',
	date = 'date',
}

export enum CustomInputColors {
	black = 'black',
	white = 'white',
	grey = 'grey',
}

export interface ICustomInput {
	inputType: CustomInputTypes;
	readOnly?: boolean;
	value?: string;
	labelText?: string;
	showPasswordButton?: boolean;
	color?: CustomInputColors;
	validation?: any;
	rules?: any;
	error?: string;
	onChange?: any;
	max?: string;
	placeholder? : string;
	defaultValue?: string;
}
