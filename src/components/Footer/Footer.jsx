import React from "react";
import "./footer.css";
import { footerAbout, footerClient, footerProducts } from "./data";
import christmasTree from "../../assets/Footer/trees_bg.png";
const Footer = () => {
  return (
    <div
      id="footer__container"
      className="container px-4 py-8 mx-auto text-slate-200"
    >
      {/* Footer Top and Mid section container */}
      <div className="items-center justify-between w-full lg:flex">
        {/* Footer Top Section */}
        <div
          id="footer__top"
          className="flex flex-col gap-3 md:mx-auto md:w-1/2 md:justify-center md:text-center md:items-center lg:m-0 lg:gap-6 lg:justify-between lg:items-start lg:text-start"
        >
          <h1 className="text-2xl font-semibold xl:text-4xl lg:text-3xl ">
            iCodeMas
          </h1>
          <div className="text-sm text-gray-300 xl:text-2xl lg:text-xl md:text-balance md:text-base md:mx-auto">
            <p>
              At iCodeMas, we believe in spreading joy, creating memories, and
              making every moment magical.
            </p>
            <p>
              Embrace the spirit of iCodeMas and make your holidays merry and
              bright!
            </p>
          </div>
        </div>

        {/* Footer Middle Section */}
        <div
          id="footer__middle"
          className="grid gap-3 mt-6 md:mt-10 md:place-items-center lg:gap-6 lg:mt-0 md:grid-cols-3"
        >
          <div id="products">
            <h2 className="text-xl font-semibold xl:text-2xl">Products</h2>
            <ul className="footer__ul">
              {footerProducts.map((product) => (
                <li
                  data-footer-nav
                  key={product.id}
                  className="text-sm md:text-base xl:text-lg"
                >
                  <a href={`#${product.href}`}>{product.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div id="client" className="self-start">
            <h2 className="text-xl font-semibold xl:text-2xl">Client</h2>
            <ul className="footer__ul">
              {footerClient.map((item) => (
                <li
                  data-footer-nav
                  key={item.id}
                  className="text-sm md:text-base xl:text-lg"
                >
                  <a href={`#${item.href}`}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div id="about" className="self-start">
            <h2 className="text-xl font-semibold xl:text-2xl">About</h2>
            <ul className="footer__ul">
              {footerAbout.map((link) => (
                <li
                  data-footer-nav
                  key={link.id}
                  className="text-sm md:text-base xl:text-lg"
                >
                  <a href={`#${link.href}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Footer Bottom Section */}
      <div
        id="footer__bottom"
        className="flex items-center w-full gap-3 mt-10 mb-6 md:justify-center lg:justify-start"
      >
        <p className="text-sm text-gray-300 lg:text-xl xl:text-2xl md:text-base">
          @{new Date().getFullYear()} iCodeThis. All Rights Reserved.
        </p>
        {/* absolute to the whole container */}
        <figure className="absolute bottom-0 right-0 w-32">
          <img
            src={christmasTree}
            alt="christmas tree"
            className="object-cover w-full h-full"
          />
        </figure>
      </div>
    </div>
  );
};

export default Footer;
