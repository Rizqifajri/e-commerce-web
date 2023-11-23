import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createContext, useContext } from "react";
import "../App.css";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const products = useContext(ProductContext);
  const product = products.find((product) => product.id === parseInt(id));
  const { addToCart } = useContext(CartContext);

  // fungsi handle tambah product pada keranjang
  const handleAddToCart = () => {
    addToCart(product);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container">
        <div className="card-details">
          <div className="container-fliud">
            <div className="wrapper row">
              <div className="preview col-md-6">
                <div className="preview-pic tab-content">
                  <div className="tab-pane active" id="pic-1">
                    <img className="img-product-details" src={product.image} />
                  </div>
                  <div className="tab-pane" id="pic-2">
                    <img src="http://placekitten.com/400/252" />
                  </div>
                  <div className="tab-pane" id="pic-3">
                    <img src="http://placekitten.com/400/252" />
                  </div>
                  <div className="tab-pane" id="pic-4">
                    <img src="http://placekitten.com/400/252" />
                  </div>
                  <div className="tab-pane" id="pic-5">
                    <img src="http://placekitten.com/400/252" />
                  </div>
                </div>
              </div>
              <div className="details col-md-6">
                <h3 className="product-title">{product.title}</h3>
                <div className="rating">
                  <div className="stars">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                  <span className="review-no"> </span>
                </div>
                <p className="product-description">{product.description}</p>
                <h4 className="price">
                  current price: <span>{product.price}</span>
                </h4>
                <p className="vote">
                  <strong>91%</strong> of buyers enjoyed this product!{" "}
                  <strong>(87 votes)</strong>
                </p>
                <h5 className="sizes">
                  sizes:
                  <span className="size" data-toggle="tooltip" title="small">
                    s
                  </span>
                  <span className="size" data-toggle="tooltip" title="medium">
                    m
                  </span>
                  <span className="size" data-toggle="tooltip" title="large">
                    l
                  </span>
                  <span
                    className="size"
                    data-toggle="tooltip"
                    title="xtra large">
                    xl
                  </span>
                </h5>

                <div className="action">
                  <button
                    onClick={handleAddToCart}
                    className="cart-button add-to-cart btn btn-default"
                    type="button">
                    Add to cart
                  </button>
                  <button className="like btn btn-default" type="button">
                    <span className="fa fa-heart"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
