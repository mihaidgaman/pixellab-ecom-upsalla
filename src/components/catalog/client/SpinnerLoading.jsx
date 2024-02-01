import React from "react";
import { Roller } from "react-spinners-css";

const CSSSpinner = ({ color = "#ff4500", size = 80 }) => {
  return (
    <div className="centered-container">
      <div className="spinner-container">
        <Roller color={color} size={size} />
      </div>
    </div>
  );
};

export default CSSSpinner;
