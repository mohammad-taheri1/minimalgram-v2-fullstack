import React from 'react';
import {Route, useNavigate} from "react-router-dom";
import authServices from "../../services/auth.services";

interface IProtectedRouteProps {
  path: string,
  element: React.FC
}

const ProtectedRoute = ({path, element: Component}: IProtectedRouteProps) => {
  const redirect = useNavigate();

  if (!authServices.getCurrentUser()) {
    redirect("/");
    return;
  }

  return (
    <Route path={path} element={<Component />}/>
  );
};

export default ProtectedRoute;