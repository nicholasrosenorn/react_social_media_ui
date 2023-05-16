import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./styles.css";

import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { AuthContextProvider } from "./context/authContext";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <DarkModeContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </DarkModeContextProvider>
  </StrictMode>
);