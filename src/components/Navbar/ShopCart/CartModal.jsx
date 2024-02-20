import { useContext, useEffect, useState } from "react";
import CartItems from "./CartItems";
import { ShopCartContext } from "../../../ShopCartContextProvider";
import SubTotal from "./SubTotal";

/* Shop Cart Layout */

export default function CartModal({ isOpen, setIsOpen, shopBag, setShopBag }) {
  return (
    <div className={`p-4 space-y-12 bg-neutral-200 ${isOpen ? "" : "hidden"}`}>
      <div className="flex items-center justify-between text-lg ">
        <h2 className="font-semibold">Your cart</h2>
        <button
          className="transition-all hover:text-red-500"
          onClick={() => setIsOpen(false)}
        >
          &#10006;
        </button>
      </div>

      <div
        id="cart-items"
        className="flex flex-col h-48 overflow-y-scroll gap-7"
      >
        <CartItems shopBag={shopBag} />
      </div>

      <SubTotal />
    </div>
  );
}
