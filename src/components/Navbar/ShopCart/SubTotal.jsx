import { useContext, useEffect } from "react";
import { ShopCartContext } from "../../../ShopCartContextProvider";

export default function SubTotal() {
  const { shopBag, subTotal, setSubTotal } = useContext(ShopCartContext);

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
    <div>
      <div className="flex items-center justify-between py-1 border-t border-b border-red-500">
        <span>Subtotal</span>
        <span>${subTotal.toFixed(2)}</span>
      </div>
      <button className="w-full px-4 py-2 text-sm text-center text-white transition-all bg-red-500 rounded-lg shadow-md whitespace-nowrap hover:bg-red-600">
        Proceed to checkout
      </button>
    </div>
  );
}
