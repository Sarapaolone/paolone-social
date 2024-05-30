import React, { useContext, useState } from "react";
import "./style.css";
import { AppContext } from "../../context/appcontext";

function Textarea() {
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  
  const context = useContext(AppContext);
 
  function handleClick() {
    if (context?.jsonData) {
      const obj = {
       
        userID: context.jsonData.length + 1,
        title: title,
        body: content,
        id: context.jsonData.length + 1,
        views: 0,
        reactions: { likes: 0, dislike: 0 },
      };

     
      context.jsonData.push(obj);
    }
  }


  function controlCheck() {
    context?.setChecked(false);
  }

  return (
    
    <div className="sfondo">
      <textarea
        placeholder="INSERIRE IL TITOLO DEL NUOVO POST "
        id="titolo"
        onChange={(e) => setTitle(e.target.value)} 
      ></textarea>
      <textarea
        placeholder="INSERIRE IL CONTENUTO DEL NUOVO POST "
        id="contenuto"
        onChange={(e) => setContent(e.target.value)} 
      ></textarea>
      <div>
        <button
          className="pubblica"
          onClick={() => {
            handleClick(); 
            controlCheck(); 
          }}
        >
          PUBBLICA
        </button>
      </div>
    </div>
  );
}

export default Textarea;