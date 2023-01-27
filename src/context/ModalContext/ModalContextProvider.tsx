import React, { useState } from "react";
import { ModalContextValues, ModalProvider } from "./ModalContext";
type Props = {
  children: React.ReactNode;
};

export const ModalContextProvider = ({ children }: Props) => {
  const [id, setId] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (modalId: string) => {
    setId(modalId);
    setIsOpen(true);
  };

  const handleClose = () => {
    setId(null);
    setIsOpen(false);
  };

  const contextValues: ModalContextValues = {
    id,
    isOpen,
    openModal: handleOpen,
    closeModal: handleClose,
  };

  return <ModalProvider value={contextValues}>{children}</ModalProvider>;
};
