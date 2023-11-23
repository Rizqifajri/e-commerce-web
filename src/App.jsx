import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../src/pages/HomePage";
import ProductDetails from "../src/pages/ProductDetails";
import PaymentMethod from "./pages/PaymentMethod"
import Product from "./context/ProductContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [testCategory, setTesCategory] = useState("");

  function category(q) {
    setTesCategory(q);
  }

  return (
    <>
      <Router>
        <Header category={category} />
        <Routes>
          <Route path="/" element={<HomePage category={testCategory} />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/payment" element={<PaymentMethod/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
