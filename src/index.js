import React from "react";
import ReactDOM from "react-dom/client";
import "./css/normalize.css";
import "./css/index.css";
import App from "./App";
import AppProvider from "./context/appContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
