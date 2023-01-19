import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/home.page";
import HeaderComponent from "./components/general/header.component";
import SignupPage from "./pages/signup.page";
import LoginPage from "./pages/login.page";

const App = () => {
  return (
    <div>
      <HeaderComponent/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
      </Routes>
    </div>
  );
};

export default App;



