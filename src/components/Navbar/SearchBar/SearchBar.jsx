import React, { useState } from "react";
import SearchResultsContainer from "./SearchResultsContainer";

/* Navbar's Search Bar */
/* Responsible for searching items */
const SearchBar = () => {
  const [isSearching, setIsSearching] = useState(false);

  const [searchValue, setSearchValue] = useState("");

  function handleSearch(value) {
    setSearchValue(value);
    setIsSearching(true);
  }

  function handleClose() {
    setIsSearching(false);
    setSearchValue("");
  }

  return (
    <>
      <form className="relative flex-grow w-full">
        <input
          type="text"
          placeholder="Search"
          className="w-full py-2 pl-10 border rounded-full bg-slate-100"
          value={searchValue}
          onChange={(e) => handleSearch(e.target.value)}
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
        {isSearching && searchValue !== "" && (
          <button
            className="absolute text-red-700 top-2 right-3"
            onClick={handleClose}
          >
            x
          </button>
        )}
      </form>
      {isSearching && (
        <SearchResultsContainer
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      )}
    </>
  );
};

export default SearchBar;
