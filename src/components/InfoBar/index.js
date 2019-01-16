import React from "react";
import "./style.css";

function InfoBar(props) {
  return (
  <div className="infoBar">
    <div className="receipt-play">
      <p>
       How to play
      </p>
    </div>
  <div className="receipt-score"> Score {props.score}</div></div>
  );
}

export default InfoBar;
