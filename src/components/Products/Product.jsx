import React, { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ShopCartContext } from "../../ShopCartContextProvider";

/* Responsible for rendering every single products */

const Product = ({ product }) => {
  const { shopBag, setShopBag } = useContext(ShopCartContext);

  function addToCart() {
    const isItemInCart = shopBag.some((item) => item.id === product.id);

    if (isItemInCart) {
      toast.error("Item is already in cart");
      return;
    }

    toast.success("Item successfully added to the cart");
    setShopBag((prev) => [
      ...prev,
      {
        id: product.id,
        img: product.img,
        title: product.title,
        price: product.price,
        count: 1,
      },
    ]);
  }

  return (
    <div
      id={product.id}
      className="flex flex-col items-center w-full gap-6 mx-auto mb-3 md:items-start md:flex-row md:w-3/4"
    >
      <figure className="relative flex-shrink-0 w-3/4 p-6 aspect-video md:w-48 md:h-48 rounded-xl bg-slate-100">
        <img
          src={product.img}
          alt={product.title}
          className="object-contain w-16 h-full mx-auto"
        />
        {/* Dynamically render product status */}
        {product.status !== null && (
          <figcaption
            className={`absolute top-0 left-0 text-white px-2.5 rounded-tl-lg text-sm lg:text-base font-semibold uppercase ${
              product.status === "new" ? "bg-cyan-600" : "bg-secondaryRed"
            }`}
          >
            {product.status}
          </figcaption>
        )}
      </figure>
      <div className="flex flex-col items-center w-full h-full gap-4 overflow-hidden text-center md:text-start md:items-start md:gap-2">
        <h3 className="text-xl font-semibold">{product.title}</h3>
        <span className="flex items-center gap-3 text-lg font-bold">
          {/* Display the discount price if any */}$
          {Number(product.price).toFixed(2)}
          {product.originalPrice && (
            <span className="font-semibold text-gray-400 line-through">
              ${product.originalPrice}
            </span>
          )}
        </span>
        <p
          style={{ display: "-webkit-box" }}
          className="overflow-hidden text-base text-gray-500 line-clamp-5 text-ellipsis"
        >
          {product.desc}
        </p>
        <button
          className="flex items-center px-2 py-2.5 gap-4 text-white w-fit rounded-md bg-cyan-600 transition-all hover:bg-cyan-900"
          onClick={addToCart}
        >
          <span className="text-sm">Add to cart</span>
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
        </button>
        <Toaster toastOptions={{}} />
      </div>
    </div>
  );
};

export default Product;
