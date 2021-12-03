import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Menu from "./components/Menu/Menu";

function App() {
  const [status, setStatus] = useState("open");
  return (
    <div className="App">
      <h1> App.js status : {status}</h1>
      <button
        onClick={() => {
          setStatus("closed");
        }}
      >
        Close Status
      </button>
      <button
        onClick={() => {
          setStatus("open");
        }}
      >
        Open Status
      </button>
      <Nav />
      <Menu />
      <Main />
    </div>
  );
}

export default App;
