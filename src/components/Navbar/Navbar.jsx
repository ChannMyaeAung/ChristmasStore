import React, { useState } from "react";
import Announcement from "./Announcement";
import MobileToggle from "./MobileToggle/MobileToggle";
import SearchBar from "./SearchBar/SearchBar";
import NavItems from "./NavItems";
import ShopCart from "./ShopCart/ShopCart";

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
          <div className="">
            <ShopCart />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
