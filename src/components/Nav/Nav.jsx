// ------------this is where any files this component needs are imported-----------
import React, { useState } from "react";
import "./style.css";
// ------------this is the function that returns this component's UI---------------

function Nav(props) {
  // const [navStatus, setNavStatus] = useState(true);
  console.log(props.btnStatus);
  if (props.btnStatus) {
    return (
      <div>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a href="#dinner" className="nav-link active btn">
              Dinner
            </a>
          </li>
          <li className="nav-item">
            <button
              onClick={() => {
                props.function();
              }}
              className="nav-link active btn"
            >
              status
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => {
                props.function();
              }}
              className="nav-link active btn"
            >
              Show Menu
            </button>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <ul className="nav justify-content-end bg-dark">
          <li className="nav-item">
            <button
              onClick={() => {
                props.function();
              }}
              className="nav-link active btn"
            >
              Hide Menu
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
