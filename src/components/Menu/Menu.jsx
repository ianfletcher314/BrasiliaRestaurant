// ------------this is where any files this component needs are imported-----------
import "./style.css";
import DinnerMenu from "../../images/DinnerMenu.jpg";
// ------------this is the function that returns this component's UI---------------
function Menu() {
  return (
    <div className="box row ">
      <img
        class="container col-12 dinnerMenu"
        src={DinnerMenu}
        alt="Dinner Menu"
      />
    </div>
  );
}

export default Menu;
