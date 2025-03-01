import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./shared/assets/font/css/clash-grotesk.css";
import "./shared/assets/font/css/satoshi.css";
import { AppProvider } from "@/shared/context/AppContext.tsx";
import { BrowserRouter } from "react-router-dom";
import QueryProvider from "./shared/providers/QueryProvider.tsx";
import { SignupProvider } from "./shared/context/SignupContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryProvider>
      <AppProvider>
        <SignupProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SignupProvider>
      </AppProvider>
    </QueryProvider>
  </React.StrictMode>,
);
