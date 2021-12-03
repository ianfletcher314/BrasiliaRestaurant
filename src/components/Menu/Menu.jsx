// ------------this is where any files this component needs are imported-----------
import React,{useState} from 'react'
import './style.css'
// ------------this is the function that returns this component's UI---------------
function Menu() {
    const [displayMenu,setDisplayMenu] = useState(true)
    return <div className="menu">
    <h1>menu div</h1>
    </div>;
  }

export default Menu