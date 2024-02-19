import React from "react";
import "./Transfer.css";
import Tabs from "../Components/transfer/transfertabs";
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
  return (
    <div className="transfer-home">
      <div className="transfer">
        <div className="div">
          <div>
            <Tabs items={items} />
          </div>
          <div className="text-wrapper">$</div>
          <p className="element">
            <span className="span">50.</span>
            <span className="text-wrapper-2">00</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
