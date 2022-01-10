// ------------this is where any files this component needs are imported-----------
import "./style.css";
import menuDrinks from "../../images/DrinkMenu.jpg";
// ------------this is the function that returns this component's UI---------------
function DrinkMenu() {
  return (
    <div className="box row">
      <img
        class="col-8 offset-2 drinkMenuHolder"
        src={menuDrinks}
        alt="Dinner Menu"
      />
    </div>
  );
}
export default DrinkMenu;
