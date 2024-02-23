import React from "react";
import "./menu.css";

export const Menu = () => {
  return (
    <div className="menu">
      <div className="header">Quick actions</div>
      <img className="more" alt="Alps icons" src="alps-icons.svg" />
      <div className="button-group">
        <button className="button">Transfer</button>
        <button className="button">Pay a bill</button>
        <button className="button">Security Center</button>
      </div>

      <div className="text-field">
        <input type="text" placeholder="Enter text" />
        <button className="go-button">Submit</button>
      </div>
    </div>
  );
};
export default Menu;
