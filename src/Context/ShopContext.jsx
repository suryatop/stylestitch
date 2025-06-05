import React, { createContext } from "react";
import all_product from "../Component/Assets/all_product"; // Ensure this path is correct

export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => { // Destructure props to access children directly
  const contextValue = { all_product };

  return (
    <ShopContext.Provider value={contextValue}>
      {children} {/* Use destructured children */}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;