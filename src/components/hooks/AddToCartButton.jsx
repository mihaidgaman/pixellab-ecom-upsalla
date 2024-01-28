import React, { useState } from "react";

const AddToCartButton = () => {
  const [isInCart, setIsInCart] = useState(false);

  const handleClick = () => {
    setIsInCart((prev) => !prev);
  };

  return (
    <button
      className={`bg-black text-white uppercase font-medium text-sm my-1 py-3 px-6 hover:bg-amber-600 transition-colors" ${
        isInCart ? "bg-black" : ""
      }`}
      onClick={handleClick}
    >
      {isInCart ? "Remove from Cart" : "Add to Cart"}
    </button>
  );
};

export default AddToCartButton;
