import React from "react";
import "./style.css";
import logo from './logo/chocolate-factory-logo.png';

function Title(props) {
  return (
    <div className="header-container">
    <div>
    <img src={logo} alt="Very sweet looking logo with the words Chocolate Box Factory in brown - the color of most chocolates and pink"/>
</div>
    </div>
  );
}

export default Title;
