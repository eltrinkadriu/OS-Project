import { createContext, useContext } from "react";

export type AuthContextValues = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValues>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = AuthContext.Provider;
