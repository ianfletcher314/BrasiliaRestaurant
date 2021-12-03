// ------------this is where any files this component needs are imported-----------
import React,{useState} from 'react'
import './style.css'
// ------------this is the function that returns this component's UI---------------
function Menu() {
    const [displayMenu,setDisplayMenu] = useState(false)
    if (displayMenu){
      return <div className="menu">
    <h1>menu div</h1>
    <button onClick={()=>{setDisplayMenu(false)}}>hide menu</button>
    </div>;
    }
    else {
      return <div>
         <button onClick={()=>{setDisplayMenu(true)}}>show menu</button>
      </div>
    }
    
  }

export default Menu