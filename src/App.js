import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Menu from "./components/Menu/Menu";
import DrinkMenu from "./components/DrinkMenu/DrinkMenu";
import ChurrascoMenu from "./components/ChurrascoMenu/ChurrascoMenu";

function App() {
  const stateObject = {
    status: "home",
  };
  const [status, setStatus] = useState(stateObject);
  const statusFunction = (newState) => {
    setStatus(newState);
  };
  var btnStatus = status;
  if (status === "home") {
    return (
      <div className="App row justify-content-center">
        <Main function={statusFunction} btnStatus={btnStatus} />
      </div>
    );
  } else if (status === "menu") {
    return (
      <>
        <Nav function={statusFunction} btnStatus={btnStatus} />
        <Menu />
      </>
    );
  } else if (status === "drink") {
    return (
      <>
        <Nav function={statusFunction} btnStatus={btnStatus} />
        <DrinkMenu />
      </>
    );
  } else if (status === "churrasco") {
    return (
      <>
        <Nav function={statusFunction} btnStatus={btnStatus} />
        <ChurrascoMenu />
      </>
    );
  }
}

export default App;
