// ------------this is where any files this component needs are imported-----------
import Nav from "../Nav/Nav";
import Contact from "../Contact/Contact";
import Churrasco from "../Currasco/Churrasco";
import Home from "../Home/Home";
import Drinks from "../Drinks/Drinks";
import "./style.css";
// ------------this is the function that returns this component's UI---------------
function Main(props) {
  return (
    <>
      <div className="main row justify-content-center">
        <Nav function={props.function} btnStatus={props.btnStatus} />
      </div>
      <Home />
      <Contact />
      <Drinks />
      <Churrasco />
    </>
  );
}
export default Main;
