import {useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {IJwt} from "./types/auth.types";
import HeaderComponent from "./components/general/header.component";
import authService from "./services/auth.services";
import HomePage from "./pages/home.page";
import SignupPage from "./pages/signup.page";
import LoginPage from "./pages/login.page";
import LogoutPage from "./pages/logout.page";

const App = () => {
  const [userToken, setUserToken] = useState<IJwt | undefined>()

  useEffect(() => {
    const user = authService.getCurrentUser();
    setUserToken(user);
  }, [])

  return (
    <div>
      <HeaderComponent user={userToken}/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/logout" element={<LogoutPage/>}/>
      </Routes>
    </div>
  );
};

export default App;



