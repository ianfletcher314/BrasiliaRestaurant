import "./style.css";
function Drinks(props) {
  return (
    <div id="drinks" className="row align-items-center">
      <div className="col-8 offset-md-2 textHolder row">
        <div className="col-md-6 drinkText">
          Our hand-crafted coctails bring a modern flare to tradional Brasilian
          standards. The Caipirinha is the National Drink of Brasil and uses a
          sugar cane brandy called Cachaça. Make it a double to get the night
          started right!
        </div>
        <div className="col-md-5 offset-md-1 drinkLink row align-items-center">
          <button
            onClick={() => {
              props.function();
            }}
            className="btn drinkBtn text-light logoSmall"
          >
            Drink Menu
          </button>
        </div>
      </div>
    </div>
  );
}
export default Drinks;
