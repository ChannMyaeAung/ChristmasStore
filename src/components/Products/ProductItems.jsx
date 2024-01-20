import React from "react";
import { products } from "./productdata";
import Product from "./Product";

const ProductItems = ({ orderBy }) => {
  /* Sort according to filter selection */
  let sortedProducts = [...products];

  switch (orderBy) {
    case "popular":
      sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
      break;

    case "recommended":
      sortedProducts = sortedProducts.sort((a, b) => {
        if (a.status !== null && b.status === null) {
          return -1;
        } else if (a.status === null && b.status !== null) {
          return 1;
        } else {
          return 0;
        }
      });
      break;

    case "LowToHigh":
      sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
      break;

    case "HighToLow":
      sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
      break;

    case "sales":
      sortedProducts = sortedProducts.sort((a, b) => {
        if (a.originalPrice !== null && b.originalPrice === null) {
          return -1;
        } else if (a.originalPrice === null && b.originalPrice !== null) {
          return 1;
        } else {
          return 0;
        }
      });
      break;
    default:
      break;
  }

  return (
    <div
      className="grid gap-16 overflow-x-hidden overflow-y-scroll h-[600px] my-10"
      id="product-items"
    >
      {sortedProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductItems;
