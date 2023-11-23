import React, { useEffect } from "react";
import { createContext, useReducer, useContext } from "react";

export const CartContext = createContext();

// fungsi reducer untuk mengelola keranjang
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

// komponen cartContext
export const CartProvider = ({ children }) => {
  // Memuat data dari localStorage saat inisialisasi
  const storedCart = JSON.parse(localStorage.getItem("cartProduct")) || {
    items: [],
  };
  const [cart, dispatch] = useReducer(cartReducer, storedCart);

  // fungsi menambahkan item ke keranjang
  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  // fungsi menghapus item dari keranjang
  const removeFromCart = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  useEffect(() => {
    localStorage.setItem("cartProduct", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
