// ----------this is where any files/components this component needs are imported----------------------
import Nav from "../Nav/Nav";
import Contact from "../Contact/Contact";
import Churrasco from "../Churrasco/Churrasco";
import Home from "../Home/Home";
import Drinks from "../Drinks/Drinks";
import "./style.css";
// ----------this is the function that returns the components for App.js to import----------
function Main(props) {
  return (
    <>
      <div className="main row justify-content-center">
        <Nav function={props.function} btnStatus={props.btnStatus} />
      </div>
      <Home />
      <div className="break"></div>
      <Contact />
      <div className="break"></div>
      <Drinks function={props.function} btnStatus={props.btnStatus} />
      <div className="break"></div>
      <Churrasco function={props.function} btnStatus={props.btnStatus} />
    </>
  );
}
export default Main;
