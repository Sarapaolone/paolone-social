
import React, { useContext } from "react";
import "./style.css";
import { AppContext } from "../../context/appcontext";

function Carta() {
  
  const context = useContext(AppContext);
  const jsonData = context?.jsonData;

  return (
    
    <div className="Carta">
      {}
      {jsonData && jsonData.map((item) => (
          <div className="carta">
            <div className="titolo">{item.title}</div>
            <div className="body">{item.body}</div>
            <div className="like">
              <div className="likes"> {item.reactions.likes}</div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Carta;