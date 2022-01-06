// ------------this is where any files this component needs are imported-----------
import React, { useState } from "react";
import "./style.css";

// ------------this is the function that returns this component's UI---------------

function Nav(props) {
  // const [navStatus, setNavStatus] = useState(true);
  console.log(props.btnStatus);
  if (props.btnStatus.page === "home") {
    return (
      <div>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <button
              onClick={() => {
                props.function("menu");
              }}
              className="nav-link active btn text-white"
            >
              MENU
            </button>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link active btn text-white ">
              LOCATION
            </a>
          </li>
          <li className="nav-item">
            <a href="#drinks" className="nav-link active btn text-white">
              DRINKS
            </a>
          </li>
          <li className="nav-item">
            <a href="#churrasco" className="nav-link active btn text-white">
              CHURRASCO
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.grubhub.com/restaurant/brasilia-3212-s-grand-blvd-st-louis/2332692"
              className="nav-link active btn text-white"
            >
              ORDER NOW
            </a>
          </li>
        </ul>
      </div>
    );
  } else if (props.btnStatus.page === "menu") {
    return (
      <div>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <button
              onClick={() => {
                props.function("home");
              }}
              className="nav-link active btn text-white"
            >
              HOME
            </button>
          </li>
        </ul>
      </div>
    );
  } else if (props.btnStatus.page === "drink") {
    return (
      <div>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <button
              onClick={() => {
                props.function("home");
              }}
              className="nav-link active btn text-white"
            >
              HOME
            </button>
          </li>
        </ul>
      </div>
    );
  } else if (props.btnStatus.page === "churrasco") {
    return (
      <div>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <button
              onClick={() => {
                props.function("home");
              }}
              className="nav-link active btn text-white"
            >
              HOME
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
