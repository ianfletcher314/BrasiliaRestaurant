import "./style.css";
import drone from "../../images/drone.mp4";
function Home() {
  return (
    <div className="video-container">
      <video muted autoPlay loop id="home">
        <source src={drone} type="video/mp4" />
      </video>
      <div className="col-12 textHolder2 logologo">
        <div className="logo"> Brasilia</div>
      </div>
    </div>
  );
}
export default Home;
