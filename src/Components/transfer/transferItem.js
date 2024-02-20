// TransferItem.js
import React from "react";
import "./transferItem.css"; // Create a CSS file for styling if needed

const TransferItem = ({
  date,
  totalAmount,
  transferAmount,
  imgSrc,
  username,
  description,
}) => {
  return (
    <div className="transfer-item">
      <div className="date-wrapper">{date}</div>
      <div className="total-amount-wrapper">{totalAmount}</div>
      <div className="transfers">
        <div className="transfer">
          <div className="transfer-amount">{transferAmount}</div>
          <div className="transfer-details">
            <img className="img" alt="Transfer" src={imgSrc} />
            <div className="user-details">
              <div className="username-wrapper">{username}</div>
              <div className="description-wrapper">{description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferItem;
