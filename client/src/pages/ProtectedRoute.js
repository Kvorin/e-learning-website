import React from "react";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAppContext();

  //se verifica daca exista un user, iar daca nu se redirectioneaza utilizatorul pe pagina de landing
  if (!currentUser) {
    return <Navigate to="/landing" />;
  }
  return children;
};

export default ProtectedRoute;
