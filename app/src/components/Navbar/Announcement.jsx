import React from "react";

/* Announcement at the top of the page */
const Announcement = () => {
  return (
    <div id="sticker__info" className="fixed top-0 w-full mb-10 bg-rose-200">
      <div className="flex items-center w-3/4 py-2 mx-auto justify-evenly">
        <p>Use code "XMAS" for a 20% discount at checkout</p>
      </div>
      <button className="absolute top-0 bottom-0 transition-all hover:text-red-600 right-6">
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
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default Announcement;
