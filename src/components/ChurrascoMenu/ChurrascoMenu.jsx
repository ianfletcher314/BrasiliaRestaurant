// ------------this is where any files this component needs are imported-----------
import "./style.css";
import menuDrinks from "../../images/ChurrascoMenu.jpg";
// ------------this is the function that returns this component's UI---------------
function ChurrascoMenu() {
  return (
    <div className="box row">
      <img
        class="col-8 offset-2 churrascoMenuHolder"
        src={menuDrinks}
        alt="Dinner Menu"
      />
    </div>
  );
}
export default ChurrascoMenu;
