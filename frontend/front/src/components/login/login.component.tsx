import React from 'react';
import {useForm} from "react-hook-form";
import {LoginValidationSchema, TLoginSubmitForm} from "./login.schema";
import {yupResolver} from "@hookform/resolvers/yup";
import {Box, Button, TextField} from "@mui/material";
import {Login, RestartAlt} from "@mui/icons-material";
import authServices from "../../services/auth.services";
import {ILoginDto} from "../../types/auth.types";
import {toast, ToastContainer} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {AxiosResponse} from "axios";
import {AxiosCustomError, TLoginError} from "../../types/general.types";

const LoginComponent = () => {

  const redirect = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm<TLoginSubmitForm>({
    resolver: yupResolver(LoginValidationSchema)
  });

  const onSubmit = (data: TLoginSubmitForm) => {
    const loginData: ILoginDto = {
      email: data.email,
      password: data.password
    }
    const loginResult = authServices.login(loginData);
    loginResult
      .then((response: AxiosResponse<string>) => {
        const {data: jwt} = response;
        authServices.saveJwtToLocalStorage(jwt);
        // redirect("/")
        window.location.href= '/';
      })
      .catch((error: AxiosCustomError<TLoginError>) => {
        toast.error(error.response.data?.message)
      })
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
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

        <Box sx={{my: 2, display: "flex", gap: "14px"}}>
          <Button type="submit" variant="outlined" startIcon={<Login/>}>
            Login
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

export default LoginComponent;