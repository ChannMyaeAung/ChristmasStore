import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { navLinks } from "./navLinks";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

/* Nav Links for both mobile and desktop versions */
const NavItems = ({ open }) => {
  return (
    <Fragment>
      {/* Mobile Nav Links */}
      <motion.ul
        variants={variants}
        className="flex flex-col items-center py-12 overflow-hidden font-bold text-black rounded-sm md:flex-row gap-7"
      >
        {navLinks.map((link) => (
          <motion.li
            key={link.id}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`${
              open ? "flex " : "hidden"
            } items-center gap-3 transition-all cursor-pointer md:flex`}
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
          </motion.li>
        ))}
      </motion.ul>
    </Fragment>
  );
};

export default NavItems;
