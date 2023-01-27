import React, { useState } from "react";
import { UIContextValues, UIProvider } from "./UIContext";

type Props = {
  children: React.ReactNode;
};

export const UIContextProvider = ({ children }: Props) => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") == "dark"
  );

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      localStorage.setItem("theme", prev ? "light" : "dark");

      return !prev;
    });
  };

  const contextValues: UIContextValues = {
    darkMode,
    toggleDarkMode: toggleDarkMode,
  };

  return <UIProvider value={contextValues}>{children}</UIProvider>;
};
