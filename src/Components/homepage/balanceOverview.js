import React from "react";
import classes from "./balanceOverview.css";
import BalanceOverviewIcon from "../../Assets/caretup.svg";
import BalanceOverviewBG from "../../Assets/background.svg";

export const BalanceOverview = () => {
  return (
    <div className="balance-overview">
      <img className="background" alt="Background" src={BalanceOverviewBG} />
      <div className="div">
        <div className="div-2">
          <div className="div-3">
            <div className="text-wrapper">Savings</div>
            <div className="ellipse" />
            <div className="text-wrapper">5567</div>
          </div>
          <div className="div-4">
            <div className="dollars">$15,400</div>
            <div className="cents">86</div>
          </div>
        </div>
        <div className="account-dropdown">
          <div className="text-wrapper-2">Accounts</div>
          <img
            className="caretup-icon"
            alt="Caretup icon"
            src={BalanceOverviewIcon}
          />
        </div>
      </div>
    </div>
  );
};
export default BalanceOverview;
