import React from "react";
import ReactDOM from "react-dom/client";
import RouteSwitch from "./components/RouteSwitch";
import { GlobalStyle } from "./components/styled/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <RouteSwitch />
  </React.StrictMode>
);
