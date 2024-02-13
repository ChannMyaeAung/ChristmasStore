import { motion } from "framer-motion";
import { useRef } from "react";
import NavItems from "./NavItems";

export default function MobileMenu({ open }) {
  const navMenuRef = useRef(null);

  return (
    <motion.div
      ref={navMenuRef}
      animate={open ? "open" : "closed"}
      className="fixed left-0 right-0 w-11/12 max-w-xs mx-auto overflow-hidden bg-red-500 rounded-md shadow-lg top-40 md:hidden"
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
  );
}
