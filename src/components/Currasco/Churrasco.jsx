import "./style.css";
import drone from "../../images/drone.mp4";
function Churrasco() {
  return (
    <div id="churrasco">
      <video width="320" height="240" controls>
        <source src={drone} type="video/mp4" />
      </video>
    </div>
  );
}
export default Churrasco;
