// ------------this is where any files this component needs are imported-----------
import Nav from "../Nav/Nav";
import "./style.css";
// ------------this is the function that returns this component's UI---------------
function Main(props) {
  return (
    <div className="main row justify-content-center">
      <Nav function={props.function} btnStatus={props.btnStatus} />
    </div>
  );
}
export default Main;
