import React from "react";
import classes from "./orderCard.css";
import atmCardIcon from "../../Assets/atmCard.svg";

export const OrderCard = () => {
  return (
    <div className="order-card">
      <div className="div">
        <p className="text-wrapper">Order a metal credit card</p>
        <div className="frame">
          <div className="text-wrapper-2">Order now</div>
        </div>
        <img className="atm-card" alt="Atm card" src={atmCardIcon} />
        <p className="p">
          Earn points fast on dining, supermarkets, travel and more
        </p>
      </div>
    </div>
  );
};

export default OrderCard;
