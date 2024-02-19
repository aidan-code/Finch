import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./ApproveTransfer.css";

const ApproveTransfer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, amount } = location.state || {}; // Access user and amount from location state

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="container">
      <div className="user-details">
        <div className="image-container">
          <img src={user && user.imageUrl} alt={user && user.name} />
        </div>
        {user && (
          <>
            <h2>{user.name}</h2>
            <p>Amount: ${amount}</p>
          </>
        )}
      </div>
      <button className="back-button" onClick={handleBack}>
        Back
      </button>
    </div>
  );
};

export default ApproveTransfer;
