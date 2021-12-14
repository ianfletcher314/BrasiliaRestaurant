import "./style.css";
function Drinks() {
  return (
    <div id="drinks" className="row align-items-center">
      <div className="col-8 offset-md-2 textHolder row">
        <div className="col-6 drinkText">
          Our hand-crafted coctails bring a modern flare to tradional Brasilian
          standards. The Caipirinha is the National Drink of Brasil and uses a
          sugar cane brandy called Cachaça. Make it a double to get the night
          started right!
        </div>
        <div className="col-6 drinkBtn btn">Drink Menu</div>
      </div>
    </div>
  );
}
export default Drinks;
