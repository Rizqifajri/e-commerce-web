import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(
        "https://fakestoreapiserver.reactbd.com/amazonproducts"
      );
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    fetchProduct();
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
