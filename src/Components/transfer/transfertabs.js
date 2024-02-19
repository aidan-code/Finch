// import React, { useState } from "react";
// import "./transfertabs.css";

// const Tabs = ({ items }) => {
//   const [selectedTabIndex, setSelectedTabIndex] = useState(0);
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleTabClick = (index) => {
//     setSelectedTabIndex(index);
//   };

//   const filteredItems = items.filter((item) =>
//     item.name.toLowerCase().includes(searchTerm.toLowerCase()),
//   );

//   return (
//     <div className="tabs-container">
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search..."
//           className="search-input"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>
//       <div className="tabs">
//         {filteredItems.map((item, index) => (
//           <div
//             key={index}
//             className={`tab ${index === selectedTabIndex ? "selected" : ""}`}
//             onClick={() => handleTabClick(index)}
//           >
//             <img src={item.imageUrl} alt={item.name} className="tab-image" />
//             <p className="tab-name">{item.name}</p>
//             {index === selectedTabIndex && <div className="selected-line" />}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Tabs;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./transfertabs.css";

const Tab = ({ items }) => {
  const navigate = useNavigate();
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [amount, setAmount] = useState("");

  const handleTabClick = (index) => {
    setSelectedTabIndex(index);
  };

  const handleSendClick = () => {
    const selectedUser = items[selectedTabIndex];
    navigate(`/user-details/${selectedUser.name}/${amount}`);
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        {items.map((item, index) => (
          <div
            key={index}
            className={`tab ${index === selectedTabIndex ? "selected" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            <img src={item.imageUrl} alt={item.name} className="tab-image" />
            <p className="tab-name">{item.name}</p>
            {index === selectedTabIndex && <div className="selected-line" />}
          </div>
        ))}
      </div>
      <div className="send-container">
        <input
          type="number"
          className="amount-input"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="send-button" onClick={handleSendClick}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Tab;
