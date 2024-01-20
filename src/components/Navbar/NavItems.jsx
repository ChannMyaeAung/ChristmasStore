import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { navLinks } from "./navLinks";

const variants = {
  open: {
    transition: {
      opacity: 1,
      staggerChildren: 0.25,
    },
  },
  closed: {
    transition: {
      opacity: 0,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
};

/* Nav Links for both mobile and desktop versions */
const NavItems = ({ open }) => {
  return (
    <>
      {/* Mobile Nav Links */}
      <motion.ul
        variants={variants}
        className="flex flex-col items-center py-12 overflow-hidden font-medium text-black rounded-sm md:flex-row gap-7"
      >
        {navLinks.map((link, index) => (
          <motion.li
            key={link.id}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              delay: 0.25 * index,
              ease: "easeIn",
              duration: 0.5,
            }}
            viewport={{ amount: 0 }}
            className={`${
              open ? "flex " : "hidden"
            } items-center text-white gap-3 transition-all cursor-pointer translate-y-0 md:flex`}
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
    </>
  );
};

export default NavItems;
