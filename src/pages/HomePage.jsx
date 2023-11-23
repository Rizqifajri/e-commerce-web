import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import CardProduct from "../components/CardProduct";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import "../App.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Header from "../components/Header";

const HomePage = ({category}) => {


  const products = useContext(ProductContext);
  console.log(products);

  const filter = products.filter((state) =>
    state.category.toLowerCase().includes(category.toLowerCase())
  );


 

  return (
    <>
      {/* <Header category={category} /> */}
      <Slider />
      <h1 className="title-homepage-product">Product</h1>
      <Container>
        <Row>
          {filter.map((product, i) => (
            <Col key={i}>
              <CardProduct product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
