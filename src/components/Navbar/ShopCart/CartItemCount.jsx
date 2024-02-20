// CartItemCount.js
import React, { useContext, useState } from "react";
import { ShopCartContext } from "../../../ShopCartContextProvider";

export default function CartItemCount({ item }) {
  const { shopBag, setShopBag } = useContext(ShopCartContext);
  const [count, setCount] = useState(1);

  console.log(shopBag);
  function handleCountChange(newCount) {
    setCount(newCount);
    setShopBag((prevBag) =>
      prevBag.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, count: newCount } : cartItem
      )
    );
  }

  return (
    <div id="cart-item-count" className="flex items-center gap-1">
      <button
        onClick={() => handleCountChange(Math.max(1, count - 1))}
        className="w-6 h-6 text-white bg-red-500"
      >
        -
      </button>
      <input
        type="number"
        className="self-center w-10 h-6 text-center"
        value={count}
        onChange={(e) => handleCountChange(parseInt(e.target.value))}
      />
      <button
        onClick={() => handleCountChange(count + 1)}
        className="w-6 h-6 text-white bg-red-500"
      >
        +
      </button>
    </div>
  );
}
