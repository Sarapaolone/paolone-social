import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Carta from "./components/body";
import { Tpost } from "./types.ts/commontypes";
import { AppContext } from "./context/appcontext";
import Textarea from "./components/textarea";

function App() {
  const [jsonData, setJsonData] = useState<Tpost[]>(); 
  const [checked, setChecked] = useState(false); 
  
  const PropTypes = { jsonData, setJsonData, checked, setChecked };

  useEffect(
    () => {
      
      fetch("https://dummyjson.com/posts")
        .then((response) => response.json())
        .then((json) => setJsonData(json.posts)) 
        .catch((error) =>
          console.error("Errore durante il fetch dei dati:", error)
        ); 
    },
    [
     
    ]
  );

  return (
  
    <AppContext.Provider value={PropTypes}>
      <div style={{ flex: 1 }}>
        <Navbar />
        {!checked && <Carta />}{" "}
        {}
        {checked && <Textarea />} {}
      </div>
    </AppContext.Provider>
  );
}

export default App;