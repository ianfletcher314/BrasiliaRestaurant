import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Menu from "./components/Menu/Menu";

function App() {
  const [status, setStatus] = useState(true);
  const statusFunction = () => {
    setStatus(!status);
  };
  var btnStatus = status;
  if (status === true) {
    return (
      <div className="App row justify-content-center">
        <Main function={statusFunction} btnStatus={btnStatus} />
      </div>
    );
  } else {
    return (
      <>
        <Nav function={statusFunction} btnStatus={btnStatus} />
        <Menu />
      </>
    );
  }
}

export default App;
