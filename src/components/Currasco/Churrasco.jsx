import "./style.css";
import drone from "../../images/drone.mp4";
function Churrasco() {
  return (
    <>
      <video muted autoPlay loop id="churrasco">
        <source src={drone} type="video/mp4" />
      </video>
    </>
  );
}
export default Churrasco;
