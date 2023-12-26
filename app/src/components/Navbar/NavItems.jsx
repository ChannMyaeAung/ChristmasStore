import React from "react";

/* Nav Links for both mobile and desktop versions */
const NavItems = ({ link }) => {
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
};

export default NavItems;
