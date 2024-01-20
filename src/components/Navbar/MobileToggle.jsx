import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import NavItems from "./NavItems";

/* Responsible for toggling nav menu on small screens */
const MobileToggle = () => {
  const [open, setOpen] = useState(false);

  const navMenuRef = useRef(null);

  function toggleNav() {
    setOpen((s) => !s);
  }
  return (
    <motion.div
      aria-label="mobile menu toggle"
      className="relative z-50 block md:hidden"
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
        className="fixed left-0 right-0 w-11/12 max-w-xs mx-auto overflow-hidden bg-green-500 rounded-md shadow-lg top-40 md:hidden"
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
        <NavItems open={open} />
      </motion.div>
    </motion.div>
  );
};

export default MobileToggle;
