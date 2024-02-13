import React, { useState } from "react";
import Announcement from "./Announcement";
import MobileToggle from "./MobileToggle";
import SearchBar from "./SearchBar/SearchBar";
import NavItems from "./NavItems";
import SearchResultsContainer from "./SearchBar/SearchResultsContainer";

/* Main Navbar Component */
const Navbar = () => {
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  return (
    <header className="relative flex flex-col">
      {/* Sticker Info at the top of the page */}
      <Announcement
        showAnnouncement={showAnnouncement}
        setShowAnnouncement={setShowAnnouncement}
      />

      {/* Navbar */}
      <nav
        className={`flex items-center justify-between py-1 gap-3 ${
          showAnnouncement ? "mt-16" : "mt-0"
        }`} // when the announcement is hidden, remove the margin to move the navbar to the top of the page.
      >
        {/* Navbar Left: Logo & SearchBar */}
        <div id="nav__left" className="flex items-center flex-1 gap-3">
          <div id="Logo" className="hidden text-2xl sm:block">
            iCodeMas
          </div>

          <SearchBar />
        </div>

        {/* Navbar Right: NavLinks */}
        <div id="nav__right" className="relative flex items-center gap-3">
          {/* Mobile Menu Toggle */}
          <MobileToggle />
          {/* Desktop Links */}
          <div>
            <NavItems />
          </div>
          {/* Shopping Bag/Cart */}
          <div>
            <button className="relative">
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
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <span className="absolute px-2 text-[10px] py-1 text-white bg-red-600 rounded-full -top-2">
                2
              </span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
