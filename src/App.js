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
      <Nav function={statusFunction} />
      <Menu />
      <Main />
    </div>
  );
}

export default App;
