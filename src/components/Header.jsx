import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";



function Header({category}) {
  // naviaget category
    const navigate = useNavigate();

  function handleCategory(e){
    navigate("/")
    console.log(e)
    category(e)
  }

  const categories =['electronics',`men's clothing`,`women's clothing`]


  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar fixed-top">
      <Container>
        <Navbar.Brand href="/">E-shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Category Product" id="basic-nav-dropdown">
              {/* mapping kategori  */}
              {categories.map((val) => (
                <NavDropdown.Item onClick={() => handleCategory(val)}>
                 {val}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
