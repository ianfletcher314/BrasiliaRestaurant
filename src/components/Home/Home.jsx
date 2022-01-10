// ------------this is where any files this component needs are imported-----------
import "./style.css";
import drone from "../../images/drone.mp4";
// ------------this is the function that returns this component's UI---------------
function Home() {
  return (
    <div className="video-container">
      {/* #home video element displays full screen drone footage for home page */}
      <video muted autoPlay loop id="home">
        <source src={drone} type="video/mp4" />
      </video>
      {/* restaurant logo */}
      <div className="col-12 textHolder2 logologo">
        <div className="logo"> Brasilia</div>
      </div>
    </div>
  );
}
export default Home;
