import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import '../App.css'
import { Link } from "react-router-dom";


function CardProduct({product}) {

  return (
    <Card className=" h-100">
      <div className="card-content">
        <Card.Img
          className="image-products"
          variant="top"
          src={product.image}
        />
        <Card.Body className="card-body">
          <Card.Title className="card-title ">{product.title}</Card.Title>

          <Card.Text></Card.Text>
          <Link to={`/product/${product.id}`}>
            <Button className="btn-card" variant="primary">
              more details..
            </Button>
          </Link>
        </Card.Body>
      </div>
    </Card>
  );
}

export default CardProduct;
