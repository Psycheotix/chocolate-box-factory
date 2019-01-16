import React from "react";
import "./style.css";

function ChocolatesImage(props) {
  return (
    <div className="ChocolatesTable">
      <div  onClick={() => props.clickedChocolates(props.id)}  >
        <div >
          <img alt={props.name} src={props.image} />
        </div>
  
      </div>
    </div>
    
  );
}

export default ChocolatesImage;
