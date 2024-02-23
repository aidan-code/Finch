import React from "react";
import "./menu.css";

export const Menu = () => {
  return (
    <div className="menu">
      <div className="header">
        <div className="header-text">Quick actions</div>
        <img className="more" alt="Alps icons" src="alps-icons.svg" />
      </div>
      <div className="button-group">
        <button className="button">
          <div className="button-text">Transfer</div>
        </button>
        <button className="button">
          <div className="button-text">Pay a bill</div>
        </button>
        <button className="button">
          <div className="button-text">Security Center</div>
        </button>
      </div>

      <div className="text-field">
        <input type="text" placeholder="Enter text" className="text" />
        <button className="go-button">
          <div className="go-button-text">Go</div>
        </button>
      </div>
    </div>
  );
};
export default Menu;
