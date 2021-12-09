import "./style.css";
import drone from "../../images/drone.mp4";
function Home() {
  return (
    <>
      <video muted autoPlay loop id="home">
        <source src={drone} type="video/mp4" />
      </video>
    </>
  );
}
export default Home;
