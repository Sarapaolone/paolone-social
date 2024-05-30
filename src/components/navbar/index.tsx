import React, { useContext } from "react";
import "./style.css";
import { AppContext } from '../../context/appcontext'

function Navbar() {
  const context = useContext(AppContext);


  function controlCheck() {
   
    if (context?.checked === false) {
      context.setChecked(true);
    } else {
      context?.setChecked(false);
    }
  }

  return (
    
    <div
      className="fascia"
      
    >
      <h1 className="nome">SARA'S SOCIAL NETWORK </h1>{}
      <div className="aa">
        <button                     
          className="bottone"
          onClick={controlCheck}  
      >
            NUOVO POST
        </button>    {}
      </div>
    </div>
  );
}


export default Navbar;
