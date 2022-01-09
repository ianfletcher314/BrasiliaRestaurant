import "./style.css";

function Nav(props) {
  console.log(props.btnStatus);
  // -------------------------------- NAV SECTION ON HOME PAGE ------------------------------------------
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
          <li className="nav-item" id="navDrinks">
            <a href="#drinks" className="nav-link active btn text-white">
              DRINKS
            </a>
          </li>
          <li className="nav-item" id="navChurrasco">
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
    // ----------------------------------- NAV SECTION ON MAIN MENU ----------------------------------------
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
          <li className="nav-item">
            <button
              onClick={() => {
                props.function("drink");
              }}
              className="nav-link active btn text-white"
            >
              DRINKS
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => {
                props.function("churrasco");
              }}
              className="nav-link active btn text-white"
            >
              CHURRASCO
            </button>
          </li>
        </ul>
      </div>
    );
    // ----------------------------------- NAV SECTION ON DRINK MENU ----------------------------------------
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
          <li className="nav-item">
            <button
              onClick={() => {
                props.function("menu");
              }}
              className="nav-link active btn text-white"
            >
              DINNER
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => {
                props.function("churrasco");
              }}
              className="nav-link active btn text-white"
            >
              CHURRASCO
            </button>
          </li>
        </ul>
      </div>
    );
    // -------------------------------- NAV SECTION ON CHURRASCO MENU ----------------------------------------
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
          <li className="nav-item">
            <button
              onClick={() => {
                props.function("menu");
              }}
              className="nav-link active btn text-white"
            >
              DINNER
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => {
                props.function("drink");
              }}
              className="nav-link active btn text-white"
            >
              DRINKS
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
