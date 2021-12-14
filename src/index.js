import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ContextWrap from "./context";
ReactDOM.render(
  <ContextWrap>
    <App />
  </ContextWrap>,
  document.getElementById("root")
);
