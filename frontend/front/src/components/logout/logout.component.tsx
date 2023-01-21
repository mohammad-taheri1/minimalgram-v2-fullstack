import React from 'react';
import {Button, Stack, Typography} from "@mui/material";
import {Logout} from "@mui/icons-material";
import authServices from "../../services/auth.services";

const LogoutComponent = () => {

  const handleLogout = () => {
    authServices.logout();
    window.location.href = "/";
  }

  return (
    <Stack alignItems="center">
      <Typography variant={"h4"}>
        Are you sure you want to Logout?
      </Typography>
      <br/>
      <Button variant={"contained"} color={"error"} endIcon={<Logout/>} sx={{width: "220px"}} onClick={handleLogout}>
        Yes, Log out
      </Button>
    </Stack>
  );
};

export default LogoutComponent;