import "./style.css";
import menuDrinks from "../../images/ChurrascoMenu.jpg";

function ChurrascoMenu() {
  return (
    <div className="box row ">
      <img
        class="col-8 offset-2  churrascoMenuHolder"
        src={menuDrinks}
        alt="Dinner Menu"
      />
    </div>
  );
}
export default ChurrascoMenu;
