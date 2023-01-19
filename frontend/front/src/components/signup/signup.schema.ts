import * as Yup from 'yup';

export type TSignupSubmitForm = {
  name: string,
  phone: string,
  email: string,
  password: string,
  confirmPassword: string
};

export const SignupValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required('name is required'),
  phone: Yup.string()
    .required('phone is required')
    .matches(/^[+]\d{7,15}$/, 'phone number should start with + and must be between 7 to 15 charachters'),
  email: Yup.string()
    .required('Email is required').email('Email is invalid'),
  password: Yup.string()
    .required('password is required')
    .min(5, 'Password should be between 5 character and 50 character')
    .max(50, 'Password should be between 5 character and 50 character'),
  confirmPassword: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password'), null], 'Confirm Password does not match')
});

