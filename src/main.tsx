import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeConfig1 } from "./config/ThemeConfig";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeConfig1>
      <App />
    </ThemeConfig1>
  </React.StrictMode>
);
