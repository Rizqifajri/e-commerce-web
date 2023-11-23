import { NavLink } from "react-router-dom";
import "../styles/payment.css";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function PaymentMethod() {
  const { cart, removeFromCart } = useContext(CartContext);
  const [stockMap, setStockMap] = useState({}); // State untuk menyimpan jumlah stok setiap item

  const addStock = (itemId) => {
    setStockMap((prevStockMap) => ({
      ...prevStockMap,
      [itemId]: (prevStockMap[itemId] || 0) + 1,
    }));
  };

  const removeStock = (itemId) => {
    setStockMap((prevStockMap) => ({
      ...prevStockMap,
      [itemId]:
        (prevStockMap[itemId] || 0) > 0 ? (prevStockMap[itemId] || 0) - 1 : 0,
    }));
  };

  const removeItem = (params) => {
    removeFromCart(params);
  };

  return (
    <>
      <div className="card mt-5">
        <div className="row">
          <div className="col-md-8 cart">
            <div className="title">
              <div className="row">
                <div className="col">
                  <h4>
                    <b>Shopping Cart</b>
                  </h4>
                </div>
                <div className="col align-self-center text-right text-muted">
                  {cart.items.length} items
                </div>
              </div>
            </div>
            {cart.items.map((product, index) => (
              <div className="row border-top border-bottom" key={index}>
                <div className="row main align-items-center">
                  <div className="col-2">
                    <img className="img-fluid" src={product.image} />
                  </div>
                  <div className="col">
                    <div className="row text-muted">{product.category}</div>
                    <div className="row">{product.title}</div>
                  </div>
                  <div className="col">
                    <a href="#" onClick={() => removeStock(product.id)}>
                      -
                    </a>
                    <a href="#" className="border">
                      {stockMap[product.id] || 0}
                    </a>
                    <a href="#" onClick={() => addStock(product.id)}>
                      +
                    </a>
                  </div>
                  <div className="col">
                    $ {product.price * stockMap[product.id] || 0}
                    <span className="close" onClick={() => removeItem(product)}>
                      ✕
                    </span>
                  </div>
                </div>
              </div>
            ))}

            <div className="back-to-shop">
              <NavLink to="/">←</NavLink>
              <span className="text-muted">Back to shop</span>
            </div>
          </div>
          <div className="col-md-4 summary">{/* ... */}</div>
        </div>
      </div>
    </>
  );
}
