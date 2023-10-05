import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import '../App.css'


function CardProduct({product}) {

  return (
    <Card className="h-100 ">
      <Card.Img className='image-products'variant="top" src={product.image} />
      <Card.Body className="card-body">
        <Card.Title className="card-title">{product.title}</Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardProduct;
