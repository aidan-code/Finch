// Transfer.js
import React from "react";
import "./TransferHistory.css";
import TransferItem from "../Components/transfer/transferItem"; // Import the TransferItem component
import Tabs from "../Components/transfer/transfertabs";
import { useNavigate } from "react-router-dom";
import ApproveTransfer from "./ApproveTransfer";
import Sam from "../Assets/revolut.jpg";
import James from "../Assets/wise.jpg";
import Elvis from "../Assets/finch.jpg";
import Josephine from "../Assets/zelle.jpg";
import AssistantLogo from "../Components/text/assistantLogo";

const items = [
  { name: "Sam", imageUrl: Sam },
  { name: "James", imageUrl: James },
  { name: "Elvis", imageUrl: Elvis },
  { name: "Josephine", imageUrl: Josephine },
  // Add more items as needed
];

export const TransferHistory = () => {
  return (
    <div className="transfer-history">
      <AssistantLogo />
      {/* Include TransferItem component with dynamic props */}
      <TransferItem
        date="Feb 13, 2024"
        totalAmount="-$600.00"
        transferAmount="-$150.00"
        imgSrc={James}
        username="James Barden"
        description="Thanks for the ride"
        time="4:05 PM"
        transferAmount2="-$150.00"
        imgSrc2={James}
        username2="James Barden"
        description2="Thanks for the ride"
        time2="4:05 PM"
        transferAmount3="-$150.00"
        imgSrc3={James}
        username3="James Barden"
        description3="Thanks for the ride"
        time3="4:05 PM"
      />

      <TransferItem
        date="Feb 11, 2024"
        totalAmount="-$600.00"
        transferAmount="-$150.00"
        imgSrc={James}
        username="James Barden"
        description="Thanks for the ride"
        time="4:05 PM"
        transferAmount2="-$150.00"
        imgSrc2={James}
        username2="James Barden"
        description2="Thanks for the ride"
        time2="4:05 PM"
        transferAmount3="-$150.00"
        imgSrc3={James}
        username3="James Barden"
        description3="Thanks for the ride"
        time3="4:05 PM"
      />

      {/* Add more TransferItem components with different props as needed */}
    </div>
  );
};

export default TransferHistory;
