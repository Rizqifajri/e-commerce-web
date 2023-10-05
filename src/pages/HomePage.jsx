import React from "react";
import Slider from "../components/Slider";
import CardProduct from "../components/CardProduct";
import { useContext } from "react";
import { ProductContext } from "../components/ProductContext";
import '../App.css'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const HomePage = () => {
  const products = useContext(ProductContext);
  console.log(products);

  return (
    <>
      <Slider />
      
      <Container>
        <Row >
          {products.map((product, i) => (
            <Col  key={i}><CardProduct  product={product} /></Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
