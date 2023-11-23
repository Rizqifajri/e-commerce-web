import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProductProvider from "./context/ProductContext.jsx";


import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductProvider>
    <CartProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CartProvider>
  </ProductProvider>
);
