import React, { useState } from "react";
import "./App.css";

function App() {
  const [status, setStatus] = useState("open");
  return (
    <div className="App">
      <h1> status : {status}</h1>
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
    </div>
  );
}

export default App;
