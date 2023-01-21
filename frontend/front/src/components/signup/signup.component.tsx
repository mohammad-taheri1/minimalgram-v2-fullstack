import React from 'react';
import {useForm} from "react-hook-form";
import {SignupValidationSchema, TSignupSubmitForm} from "./signup.schema";
import {yupResolver} from "@hookform/resolvers/yup";
import {Box, Button, TextField} from "@mui/material";
import {PersonAddAlt, RestartAlt} from "@mui/icons-material";
import authServices from "../../services/auth.services";
import {ISignupDto} from "../../types/auth.types";
import {toast, ToastContainer} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {AxiosError} from "axios";
import {AxiosCustomError, TSignupError} from "../../types/general.types";

const SignupComponent = () => {

  const redirect = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm<TSignupSubmitForm>({
    resolver: yupResolver(SignupValidationSchema)
  });

  const onSubmit = (data: TSignupSubmitForm) => {
    const signupData: ISignupDto = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      password: data.password
    }
    const signUpResult = authServices.signup(signupData);
    signUpResult
      .then(() => {
        toast.success("Your account created successfully. You will redirect automatically to login page");
        setTimeout(() => {
          redirect("/login")
        }, 6000)
      })
      .catch((error: AxiosCustomError<TSignupError>) => {
        toast.error(error.response.data?.message)
      })
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{my: 2}}>
          <TextField fullWidth
                     error={!!errors.name}
                     label="Your name"
                     {...register('name')}
          />
          <div className="text-red">{errors.name?.message}</div>
        </Box>

        <Box sx={{my: 2}}>
          <TextField fullWidth
                     error={!!errors.phone}
                     label="Your phone"
                     {...register('phone')}
          />
          <div className="text-red">{errors.phone?.message}</div>
        </Box>

        <Box sx={{my: 2}}>
          <TextField fullWidth
                     error={!!errors.email}
                     label="Your email"
                     {...register('email')}
          />
          <div className="text-red">{errors.email?.message}</div>
        </Box>

        <Box sx={{my: 2}}>
          <TextField fullWidth
                     type="password"
                     error={!!errors.password}
                     label="Your password"
                     {...register('password')}
          />
          <div className="text-red">{errors.password?.message}</div>
        </Box>

        <Box sx={{my: 2}}>
          <TextField fullWidth
                     type="password"
                     error={!!errors.confirmPassword}
                     label="Confirm Password"
                     {...register('confirmPassword')}
          />
          <div className="text-red">
            {errors.confirmPassword?.message}
          </div>
        </Box>

        <Box sx={{my: 2, display: "flex", gap: "14px"}}>
          <Button type="submit" variant="outlined" startIcon={<PersonAddAlt/>}>
            Register
          </Button>
          <Button type="button" variant="outlined" startIcon={<RestartAlt/>} onClick={() => reset()}>
            Reset
          </Button>
        </Box>
      </form>
      <ToastContainer/>
    </Box>
  );
};

export default SignupComponent;