import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../src/pages/HomePage";
import ProductDetails from "../src/pages/ProductDetails";
import Product from "./components/ProductContext";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </>
  );
}

export default App;
