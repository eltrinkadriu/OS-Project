import { createContext, useContext } from "react";

export type UIContextValues = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const UIContext = createContext<UIContextValues>({
  darkMode: false,
  toggleDarkMode: () => {},
});

export const useUIContext = () => useContext(UIContext);

export const UIProvider = UIContext.Provider;
