import React from "react";

const ProductsOrder = ({ onOrderChange }) => {
  const handleChange = (e) => {
    const selectedValue = e.target.value;
    onOrderChange(selectedValue);
  };

  return (
    <>
      <div id="order__by" className="">
        <div className="">
          <select
            name="productsOrder"
            id="productsOrder"
            className="w-full px-1.5 py-2 text-sm border rounded-md outline-none cursor-pointer"
            onChange={handleChange}
          >
            <option value="">ORDER BY</option>
            <option value="popular" className="">
              POPULAR
            </option>
            <option value="recommended" className="">
              RECOMMENDED
            </option>
            <option value="LowToHigh" className="w-full">
              PRICE LOW TO HIGH
            </option>
            <option value="HighToLow" className="">
              PRICE HIGH TO LOW
            </option>
            <option value="sales" className="">
              SALES
            </option>
          </select>
        </div>
      </div>
    </>
  );
};

export default ProductsOrder;
