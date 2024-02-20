import { createContext, useState } from "react";

export const ShopCartContext = createContext(null);

export default function ShopCartContextProvider({ children }) {
  const [shopBag, setShopBag] = useState([]);

  const [subTotal, setSubTotal] = useState(0);

  return (
    <ShopCartContext.Provider
      value={{ shopBag, setShopBag, subTotal, setSubTotal }}
    >
      {children}
    </ShopCartContext.Provider>
  );
}
