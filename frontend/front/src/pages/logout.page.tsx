import React from 'react';
import {Box} from "@mui/material";
import LogoutComponent from "../components/logout/logout.component";

const LogoutPage = () => {
  return (
    <Box sx={{
      margin: "12px auto",
      display: "flex",
      maxWidth: "1200px",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <LogoutComponent/>
    </Box>
  );
};

export default LogoutPage;