import React from 'react';
import {Box} from "@mui/material";
import LoginComponent from "../components/login/login.component";
import loginImg from "../assets/images/login.png";

const LoginPage = () => {
  return (
    <Box sx={{
      margin: "12px auto",
      display: "flex",
      maxWidth: "1200px",
      flexDirection: {xs: "column-reverse", md: "row"},
    }}>
      <Box sx={{p: 2, flex: 1, width: "100%"}}>
        <LoginComponent/>
      </Box>
      <Box sx={{flex: 2}}>
        <img src={loginImg} alt="signup image" style={{maxWidth: '100%', width: "800px"}}/>
      </Box>
    </Box>


  );
};

export default LoginPage;