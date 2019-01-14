import React from "react";
import "./style.css";

function ChocolatesImage(props) {
  return (
    <div  onClick={() => props.removeChocolates(props.id)}  className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
  
    </div>
  );
}

export default ChocolatesImage;
