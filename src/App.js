import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Menu from "./components/Menu/Menu";

function App() {
  const [status, setStatus] = useState("open");
  const statusFunction = () => {
    setStatus("closed");
  };
  return (
    <div className="App row justify-content-center">
      <h1> App.js status : {status}</h1>
      {/* <button
        className="btn btn-outline-primary col-4"
        onClick={() => {
          setStatus("closed");
        }}
      >
        Close Status
      </button>
      <button
        className="btn btn-outline-primary col-4"
        onClick={() => {
          setStatus("open");
        }}
      >
        Open Status
      </button> */}
      <Nav function={statusFunction} />
      <Menu />
      <Main />
    </div>
  );
}

export default App;
