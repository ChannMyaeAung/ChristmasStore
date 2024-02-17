import React from "react";

export default function SearchResults({ product, setSearchValue }) {
  return (
    <a
      href={`#${product.id}`}
      className="flex items-center justify-between p-3 rounded-lg shadow-lg bg-slate-200"
      onClick={() => setSearchValue("")}
    >
      <div className="flex items-center gap-3">
        <figure className="w-12 h-12 bg-white rounded-lg">
          <img
            src={product.img}
            alt={product.title}
            className="object-contain w-full h-full"
          />
        </figure>
        <h4 className="font-semibold">{product.title}</h4>
      </div>
      <span className="font-medium">${product.price}</span>
    </a>
  );
}
