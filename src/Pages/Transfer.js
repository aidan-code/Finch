import React, { useState } from "react";
import "./Transfer.css";
import Tabs from "../Components/transfer/transfertabs";
import { useNavigate } from "react-router-dom";
import ApproveTransfer from "./ApproveTransfer";
import Sam from "../Assets/revolut.jpg";
import James from "../Assets/wise.jpg";
import Elvis from "../Assets/finch.jpg";
import Josephine from "../Assets/zelle.jpg";

const items = [
  { name: "Sam", imageUrl: Sam },
  { name: "James", imageUrl: James },
  { name: "Elvis", imageUrl: Elvis },
  { name: "Josephine", imageUrl: Josephine },
  // Add more items as needed
];

export const Transfer = () => {
  const navigate = useNavigate();
  const [selectedUser, setSelectedUser] = useState(null);
  const [amount, setAmount] = useState("");

  const handleSend = () => {
    console.log("Selected User:", selectedUser); // Log selectedUser
    if (!selectedUser) {
      alert("Please select a user.");
    } else {
      const parsedAmount = parseFloat(amount);
      if (isNaN(parsedAmount) || parsedAmount <= 0) {
        alert("Please enter a valid amount.");
      } else {
        console.log("Sending:", selectedUser, parsedAmount); // Log selectedUser and parsedAmount
        // Navigate to the ApproveTransfer component with user and amount
        navigate(`/approve-transfer/${selectedUser.name}/${parsedAmount}`);
      }
    }
  };

  return (
    <div className="transfer-home">
      <div className="transfer">
        <div className="div">
          <div>
            <Tabs items={items} onSelect={(user) => setSelectedUser(user)} />
          </div>
          <div className="text-wrapper">$</div>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="element input"
            placeholder="Enter amount"
            style={{ color: "black" }}
          />
          <button className="send-button" onClick={handleSend}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
