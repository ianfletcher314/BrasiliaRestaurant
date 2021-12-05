// ------------this is where any files this component needs are imported-----------
import React,{useState} from 'react'
import './style.css'
// ------------this is the function that returns this component's UI---------------
function Menu() {
    const [displayMenu,setDisplayMenu] = useState(false)
    if (displayMenu){
      return <div className="menu row justify-content-center">
    <h1>menu div</h1>
    <button onClick={()=>{setDisplayMenu(false)}}>hide menu</button>
    </div>;
    }
    else {
      return <div className="row justify-content-center" >
         <button className="col-3" onClick={()=>{setDisplayMenu(true)}}>show menu</button>
      </div>
    }
    
  }

export default Menu