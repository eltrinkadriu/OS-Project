import React from "react";
import ReactDOM from "react-dom";

import { QueryClient, QueryClientProvider } from "react-query";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./styles/index.css";
import { AuthContextProvider } from "@context/AuthContext/AuthContextProvider";
import { ModalContextProvider } from "@context/ModalContext/ModalContextProvider";

import App from "./App";
import { UIContextProvider } from "@context/UIContext/UIContextProvider";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UIContextProvider>
        <AuthContextProvider>
          <ModalContextProvider>
            <App />
            <ToastContainer />
          </ModalContextProvider>
        </AuthContextProvider>
      </UIContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
