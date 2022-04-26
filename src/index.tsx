import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("app-root")
);
