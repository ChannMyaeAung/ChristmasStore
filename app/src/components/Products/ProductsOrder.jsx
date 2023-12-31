import React from "react";

const ProductsOrder = () => {
  return (
    <>
      <div
        id="order__by"
        className="flex items-center gap-3 px-3 py-1 transition-all border rounded-md cursor-pointer border-sky-200 hover:bg-sky-200"
      >
        <p className="text-sm font-medium uppercase">Order By</p>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default ProductsOrder;
