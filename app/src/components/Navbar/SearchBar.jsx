import React from "react";

/* Navbar's Search Bar */
/* Responsible for searching items */
const SearchBar = () => {
  return (
    <form className="relative">
      <input
        type="text"
        placeholder="Search"
        className="py-2 pl-10 border rounded-full bg-slate-100"
      />
      <i className="absolute top-2 left-1.5">
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
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </i>
    </form>
  );
};

export default SearchBar;
