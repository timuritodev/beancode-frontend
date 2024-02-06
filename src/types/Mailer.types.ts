export interface IData {
    from: string;
    subject: string;
	text: string;
}

export interface IEmailState {
	status: 'idle' | 'success' | 'loading' | 'failed';
	error: string | undefined;
    email: string;
}