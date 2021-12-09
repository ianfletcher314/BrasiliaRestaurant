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
            <button
              onClick={() => {
                props.function();
              }}
              className="nav-link active btn text-dark"
            >
              MENU
            </button>
          </li>
          <li className="nav-item">
            <a href="#drinks" className="nav-link active btn text-dark">
              DRINKS
            </a>
          </li>
          <li className="nav-item">
            <a href="#churrasco" className="nav-link active btn text-dark">
              CHURRASCO
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link active btn text-dark ">
              ABOUT
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.grubhub.com/restaurant/brasilia-3212-s-grand-blvd-st-louis/2332692"
              className="nav-link active btn text-dark"
            >
              ORDER NOW
            </a>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <ul className="nav justify-content-end">
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
