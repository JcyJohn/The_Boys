import logo from './Images/logo.svg';
import {useState} from "react"

import './Demo.css';

function App() {

  return (
    <div className="App">

      <img className="logo" src = {logo} />

    
      <div id = "text">
        <div id = "theboys">
        <div>The Boys</div>
        <div id = "comingSoon">Coming Soon</div>
        </div>
        {/* <div  id = "comingSoon"> Coming Soon</div> */}
        <div id = "Powered">©2021</div>
      </div>
  
    </div>
  );
}

export default App;