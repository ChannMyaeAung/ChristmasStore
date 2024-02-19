import { createContext, useState } from "react";

export const ShopCartContext = createContext(null);

export default function ShopCartContextProvider({ children }) {
  const [shopBag, setShopBag] = useState([]);

  return (
    <ShopCartContext.Provider value={{ shopBag, setShopBag }}>
      {children}
    </ShopCartContext.Provider>
  );
}
