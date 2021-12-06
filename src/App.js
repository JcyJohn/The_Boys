import logo from './Images/logo.svg';
import { useState } from 'react';

import './Demo.css';

function App() {

 
    const [checked, setChecked] = useState(false)
    const handleClick = () => setChecked(!checked)
    
  return (
    <div className={checked?"lightApp":"App"}>

      <img className={checked?"lightLogo":"displaynone"} alt =" logo" src = {logo} />
      <img className={checked?"displaynone":"logo"} alt =" logo" src = {logo} />

      <input onClick={handleClick} checked={checked} type="checkbox" className="togglebtn" />
   

      <div id = "text">
        <div id = "theboys">
        <div>The Boys</div>
        </div>
        <div  id = "lightComingSoon" className={checked?"":"displaynone"}> Coming Soon</div>
        <div  id = "comingSoon" className={checked?"displaynone":""}> Coming Soon</div>
        <div id = "Powered">©2021</div>
      </div>
  
    </div>
  );
}

export default App;
