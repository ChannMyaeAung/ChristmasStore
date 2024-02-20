// CartItems.js
import React, { Fragment } from "react";
import CartItemCount from "./CartItemCount";

export default function CartItems({ shopBag, setShopBag }) {
  function findCurrentItem(itemId) {
    const curr = shopBag.find((bag) => bag.id === itemId);
    return curr.count;
  }

  return (
    <Fragment>
      {shopBag.length === 0 ? (
        <span>Your cart is empty.</span>
      ) : (
        shopBag.map((item) => (
          <Fragment key={item.id}>
            <div
              id="cart-item"
              className="flex items-start justify-between w-full gap-4"
            >
              <figure className="w-12 h-12 rounded-lg bg-neutral-50">
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-contain w-full h-full "
                />
              </figure>
              <p className="text-sm ">
                <span className="text-ellipsis line-clamp-1">{item.title}</span>
                <span
                  id="cart-item-price"
                  className="block font-bold text-gray-600"
                >
                  $
                  {Number(
                    item.price.toFixed(2) * findCurrentItem(item.id)
                  ).toFixed(2)}
                </span>
              </p>
              <button onClick={() => removeItem(item.id)}>&#10006;</button>
            </div>
            <CartItemCount item={item} />
          </Fragment>
        ))
      )}
    </Fragment>
  );
}
