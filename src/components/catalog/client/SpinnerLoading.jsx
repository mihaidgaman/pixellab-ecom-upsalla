import React from "react";
import { Roller } from "react-spinners-css";

const CSSSpinner = ({ color = "#ff4500", size = 80 }) => {
  return (
    <div className="flex items-center justify-center">
      <Roller color={color} size={size} />
    </div>
  );
};

export default CSSSpinner;
