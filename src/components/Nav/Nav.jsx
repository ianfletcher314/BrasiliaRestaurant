// ------------this is where any files this component needs are imported-----------
import React, { useState } from "react";
import "./style.css";
// ------------this is the function that returns this component's UI---------------

function Nav() {
  const [navStatus, setNavStatus] = useState(true);
  if (navStatus) {
    return (
      <div>
        <ul className="nav justify-content-end bg-dark">
          <li className="nav-item">
            <a href="#dinner" className="nav-link active btn">
              Dinner
            </a>
          </li>
          <li className="nav-item">
            <a href="#lunch" className="nav-link active btn">
              Lunch
            </a>
          </li>
          <li className="nav-item">
            <button
              onClick={() => {
                setNavStatus(false);
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
                setNavStatus(true);
              }}
              className="nav-link active btn"
            >
              Show Menu
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
