import { useContext, useEffect, useState } from "react";
import CartItems from "./CartItems";
import { ShopCartContext } from "../../../ShopCartContextProvider";

export default function CartModal({ isOpen, setIsOpen, shopBag, setShopBag }) {
  const { subTotal, setSubTotal } = useContext(ShopCartContext);

  useEffect(() => {
    function calculateSubTotal() {
      const total = shopBag.reduce((acc, item) => {
        const itemTotal = item.price * item.count;
        return acc + itemTotal;
      }, 0);
      setSubTotal(total);
    }
    calculateSubTotal();

    // Cleanup function
    return () => {
      setSubTotal(0); // Reset subtotal when component unmounts or shopBag changes
    };
  }, [shopBag]);

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

      <div className="h-48 overflow-y-scroll space-y-7">
        <CartItems shopBag={shopBag} setShopBag={setShopBag} />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between py-1 border-t border-b border-red-500">
          <span>Subtotal</span>
          <span>${subTotal.toFixed(2)}</span>
        </div>
        <button className="w-full px-4 py-2 text-sm text-center text-white transition-all bg-red-500 rounded-lg shadow-md whitespace-nowrap hover:bg-red-600">
          Proceed to checkout
        </button>
      </div>
    </div>
  );
}
