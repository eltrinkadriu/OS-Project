import { createContext, useContext } from "react";

export type ModalContextValues = {
  id: string | null;
  isOpen: boolean;
  openModal: (id: string) => void;
  closeModal: (id: string) => void;
};

const ModalContext = createContext<ModalContextValues>({
  id: null,
  isOpen: false,
  openModal: (id: string) => {},
  closeModal: (id: string) => {},
});

export const useModalContext = () => useContext(ModalContext);

export const ModalProvider = ModalContext.Provider;
