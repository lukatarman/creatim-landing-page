import { Container, Nav, Navbar, NavDropdown, Col, Row } from "react-bootstrap";

const NavbarCustom = () => {
  return (
    <Navbar fixed="top" bg="light" expand="lg" className="mb-5">
      <Container>
        <Navbar.Brand href="#home">Best Clothing Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              title="Mega-Menu"
              id="basic-nav-dropdown"
              className="custom-dropdown"
            >
              <Container className="custom-dropdown-container">
                <Row>
                  <Col className="my-2">
                    <label className="mx-2">Men:</label>
                    <NavDropdown.Item>Shirts</NavDropdown.Item>
                    <NavDropdown.Item>Pants</NavDropdown.Item>
                    <NavDropdown.Item>Shoes</NavDropdown.Item>
                    <NavDropdown.Item>Accessories</NavDropdown.Item>
                  </Col>
                  <span className="dropdown-divider"></span>
                  <Col className="my-2">
                    <label className="mx-2">Women:</label>
                    <NavDropdown.Item>Shirts</NavDropdown.Item>
                    <NavDropdown.Item>Pants</NavDropdown.Item>
                    <NavDropdown.Item>Shoes</NavDropdown.Item>
                    <NavDropdown.Item>Accessories</NavDropdown.Item>
                  </Col>
                  <span className="dropdown-divider"></span>
                  <Col className="my-2">
                    <label className="mx-2">Kids:</label>
                    <NavDropdown.Item>Shirts</NavDropdown.Item>
                    <NavDropdown.Item>Pants</NavDropdown.Item>
                    <NavDropdown.Item>Shoes</NavDropdown.Item>
                    <NavDropdown.Item>Accessories</NavDropdown.Item>
                  </Col>
                  <span className="dropdown-divider"></span>
                  <Col className="my-2 pb-2">
                    <NavDropdown.Item>
                      <strong>Your Account</strong>
                    </NavDropdown.Item>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                    <NavDropdown.Item>Browsing History</NavDropdown.Item>
                  </Col>
                </Row>
              </Container>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarCustom;
