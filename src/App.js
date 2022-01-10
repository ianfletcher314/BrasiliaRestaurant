// --------------------------this is where any files are imported---------------------------
import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Menu from "./components/Menu/Menu";
import DrinkMenu from "./components/DrinkMenu/DrinkMenu";
import ChurrascoMenu from "./components/ChurrascoMenu/ChurrascoMenu";
// ----------------------this is the function that returns this component's UI-------------------
function App() {
  const stateObject = {
    page: "home",
  };
  const [status, setStatus] = useState(stateObject);
  const statusFunction = (newState) => {
    setStatus({ page: newState });
  };
  var btnStatus = status;
  // ---------------------home state conditional rendering of components------------------
  if (status.page === "home") {
    return (
      <div className="App row justify-content-center">
        <Main function={statusFunction} btnStatus={btnStatus} />
      </div>
    );
    // ----------------------menu state conditional rendering of components-----------------
  } else if (status.page === "menu") {
    return (
      <>
        <Nav function={statusFunction} btnStatus={btnStatus} />
        <Menu />
      </>
    );
    // ----------------------drink state conditional rendering of components-----------------
  } else if (status.page === "drink") {
    return (
      <>
        <Nav function={statusFunction} btnStatus={btnStatus} />
        <DrinkMenu />
      </>
    );
    // --------------------churrasco state conditional rendering of components---------------
  } else if (status.page === "churrasco") {
    return (
      <>
        <Nav function={statusFunction} btnStatus={btnStatus} />
        <ChurrascoMenu />
      </>
    );
  }
}

export default App;
