import React from "react";
import { products } from "./productdata";
import Product from "./Product";

const ProductItems = () => {
  return (
    <div
      className="grid gap-16 overflow-x-hidden overflow-y-scroll h-[600px] my-10"
      id="product-items"
    >
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductItems;
