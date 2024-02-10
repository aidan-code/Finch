import React from "react";
import "./input.css"; // Import CSS file for styling

export const Input = ({ placeholder, value, onChange }) => {
  return (
    <div className="input-container">
      <input
        type={"text"} // Specify input type (e.g., text, email, password)
        placeholder={"'Exchange rate today'"} // Placeholder text for input field
        value={value} // Value of the input field
        onChange={onChange} // onChange event handler
        className="input-field" // CSS class for styling the input field
      />
    </div>
  );
};

export default Input;
