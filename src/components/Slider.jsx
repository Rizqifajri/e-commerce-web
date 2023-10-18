import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";


export default function Slider() {
  return (
    <Carousel className="carousel" >
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="https://www.tutorialrepublic.com/snippets/designs/product-list-carousel-for-ecommerce-website.png"
          alt="Image One"
        />
        <Carousel.Caption>
          <h3>Label for first slide</h3>
          <p>Sample Text for Image One</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="https://don16obqbay2c.cloudfront.net/wp-content/uploads/How-to-sell-online-without-a-website-@2x-8-1627027984.png"
          alt="Image Two"
        />
        <Carousel.Caption>
          <h3>Label for second slide</h3>
          <p>Sample Text for Image Two</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
