// ------------this is where any files this component needs are imported-----------
import './style.css'
// ------------this is the function that returns this component's UI---------------
function Nav() {
    return <div >
      <ul className="nav justify-content-end">
          <li className="nav-item">
              <a href="#dinner" className="nav-link active">Dinner</a>
          </li>
          <li className="nav-item">
              <a href="#lunch" className="nav-link active">Lunch</a>
          </li>
          <li className="nav-item">
            <a href="#Menu" className="nav-link active">Menu</a>
          </li>
      </ul>
    </div>
}

export default Nav