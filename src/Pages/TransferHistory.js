// Transfer.js
import React from "react";
import "./Transfer.css";
import TransferItem from "../Components/transfer/transferItem"; // Import the TransferItem component
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

export const TransferHistory = () => {
  return (
    <div className="transfer-home">
      {/* Include TransferItem component with dynamic props */}
      <TransferItem
        date="Feb 13, 2024"
        totalAmount="-$600.00"
        transferAmount="-$150.00"
        imgSrc={Sam}
        username="James Barden"
        description="Thanks for the ride"
      />
      {/* Add more TransferItem components with different props as needed */}
    </div>
  );
};

export default TransferHistory;
