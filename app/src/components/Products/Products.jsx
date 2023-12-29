import React from "react";
import ViewSelection from "./ViewSelection";
import ProductsOrder from "./ProductsOrder";

const Products = () => {
  return (
    <section id="products" className="border-t-2 border-sky-200">
      {/* Filter Button */}
      <div
        id="filter__button"
        className="flex items-center justify-center w-1/4 py-1 mx-auto transition-all border border-t-0 cursor-pointer rounded-b-md hover:bg-sky-200 border-sky-200"
      >
        <button className="text-sm font-semibold uppercase">Filters Off</button>
      </div>

      {/* Filters */}
      <div className="flex items-center justify-between w-full">
        <ProductsOrder />
        {/* Select Views */}
        <div className="flex gap-3 border">
          <ViewSelection />
        </div>
      </div>

      {/* Products */}
    </section>
  );
};

export default Products;
