import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Menu from "./components/Menu";

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Menu />
    <Main />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
