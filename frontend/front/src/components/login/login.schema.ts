import * as Yup from 'yup';

export type TLoginSubmitForm = {
  email: string,
  password: string,
};

export const LoginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required').email('Email is invalid'),
  password: Yup.string()
    .required('password is required')
    .min(5, 'Password should be between 5 character and 50 character')
    .max(50, 'Password should be between 5 character and 50 character'),
});

