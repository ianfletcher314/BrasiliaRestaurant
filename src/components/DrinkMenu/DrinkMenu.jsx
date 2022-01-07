import "./style.css";
import menuDrinks from "../../images/DrinkMenu.jpg";
function DrinkMenu() {
  return (
    <div className="box row ">
      <img
        class="col-8 offset-2  menuHolder"
        src={menuDrinks}
        alt="Dinner Menu"
      />
    </div>
  );
}
export default DrinkMenu;
