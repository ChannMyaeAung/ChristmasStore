import React, { Fragment, useRef, useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "./navLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navMenuRef = useRef(null);

  function toggleNav() {
    setOpen((s) => !s);
  }

  return (
    <header className="relative flex flex-col">
      {/* Sticker Info at the top of the page */}
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

      {/* Navbar */}
      <nav className="flex items-center justify-between px-3 py-3 mt-16 mb-6">
        {/* Navbar Left: Logo & SearchBar */}
        <div id="nav__left" className="flex items-center gap-3">
          <div id="Logo" className="hidden text-2xl md:block">
            iCodeMas
          </div>

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
        </div>

        {/* Navbar Right: NavLinks */}
        <div id="nav__right" className="relative flex items-center gap-3">
          {/* Mobile Menu Toggle */}
          <motion.div
            aria-label="mobile menu toggle"
            className="z-[999] relative"
            animate={open ? "open" : "closed"}
          >
            <button
              className="block md:hidden"
              onClick={toggleNav}
              aria-label={open ? "Close Menu" : "Open Menu"}
            >
              <svg width="23" height="23" viewBox="0 0 23 23">
                <motion.path
                  strokeWidth="3"
                  stroke="black"
                  strokeLinecap="round"
                  variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" },
                  }}
                />
                <motion.path
                  strokeWidth="3"
                  stroke="black"
                  strokeLinecap="round"
                  d="M 2 9.423 L 20 9.423"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                />
                <motion.path
                  strokeWidth="3"
                  stroke="black"
                  strokeLinecap="round"
                  variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" },
                  }}
                />
              </svg>
            </button>
            {/* Nav Links Modal on mobile screens */}

            <motion.div
              ref={navMenuRef}
              animate={open ? "open" : "closed"}
              className="fixed left-0 right-0 top-auto w-11/12 max-w-xs mx-auto overflow-hidden rounded-md shadow-lg bg-sky-200 bottom-1/2 md:hidden"
              variants={{
                closed: { opacity: 0, y: -100, pointerEvents: "none" },
                open: { opacity: 1, y: 0, x: 0, pointerEvents: "auto" },
              }}
              initial="closed"
              transition={{ duration: 0.3 }}
              aria-label="Menu Links on Mobile screens"
              aria-expanded={open}
              aria-hidden={open}
            >
              <ul className="flex flex-col items-center py-12 font-bold rounded-sm gap-7 text-DarkBlue">
                {navLinks.map((link) => {
                  return (
                    <li
                      key={link.id}
                      className="flex items-center gap-3 transition-all cursor-pointer hover:text-DarkGrayishBlue focus:text-DarkGrayishBlue"
                    >
                      {link.icon ? (
                        <i className="w-6 h-6">
                          <img
                            src={link.icon}
                            alt={link.alt}
                            className="object-cover w-6 h-6"
                          />
                        </i>
                      ) : null}

                      <a href={`${link.href}`}>{link.title}</a>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </motion.div>
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
