import React from "react";
import { useNavigate } from "react-router-dom";
import "./ApproveTransfer.css";

const ApproveTransfer = ({ user, amount }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="container">
      <div className="user-details">
        {user && (
          <>
            <h2>{user.name}</h2>
            <img src={user.imageUrl} alt={user.name} />
          </>
        )}
        <p>Amount: ${amount}</p>
      </div>
      <button className="back-button" onClick={handleBack}>
        Back
      </button>
    </div>
  );
};

export default ApproveTransfer;
