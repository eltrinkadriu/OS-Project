import React, { useState } from "react";
import { AuthContextValues, AuthProvider } from "./AuthContext";
import { toast } from "react-toastify";

type Props = {
  children: React.ReactNode;
};

export const AuthContextProvider = ({ children }: Props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storageValue = localStorage.getItem("authenticated");

    return storageValue != null;
  });

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("authenticated", JSON.stringify(true));
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    toast.info("You have successfully logged out");

    localStorage.removeItem("authenticated");
  };

  const contextValues: AuthContextValues = {
    isAuthenticated,
    login: handleLogin,
    logout: handleLogout,
  };

  return <AuthProvider value={contextValues}>{children}</AuthProvider>;
};
