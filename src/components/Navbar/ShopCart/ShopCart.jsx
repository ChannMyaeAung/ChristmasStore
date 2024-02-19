import { useContext, useState } from "react";
import { ShopCartContext } from "../../../ShopCartContextProvider";
import { motion } from "framer-motion";
import CartModal from "./CartModal";

export default function ShopCart() {
  const { shopBag, setShopBag } = useContext(ShopCartContext);

  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    initial: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
    },
  };
  return (
    <>
      <button className="relative" onClick={() => setIsOpen((s) => !s)}>
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
          {shopBag.length}
        </span>
      </button>
      <motion.div
        variants={variants}
        initial="initial"
        animate={isOpen ? "show" : "initial"}
        className="fixed z-50 w-3/4 h-full overflow-hidden rounded-lg shadow-lg right-4"
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <CartModal setIsOpen={setIsOpen} />
      </motion.div>
    </>
  );
}
