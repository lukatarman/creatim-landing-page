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
              <Container>
                <Row>
                  <Col className="mb-3">
                    <label>Men:</label>
                    <NavDropdown.Item>Shirts</NavDropdown.Item>
                    <NavDropdown.Item>Pants</NavDropdown.Item>
                    <NavDropdown.Item>Shoes</NavDropdown.Item>
                    <NavDropdown.Item>Accessories</NavDropdown.Item>
                  </Col>
                  <Col className="mb-3">
                    <label>Women:</label>
                    <NavDropdown.Item>Shirts</NavDropdown.Item>
                    <NavDropdown.Item>Pants</NavDropdown.Item>
                    <NavDropdown.Item>Shoes</NavDropdown.Item>
                    <NavDropdown.Item>Accessories</NavDropdown.Item>
                  </Col>
                  <Col className="mb-3">
                    <label>Kids:</label>
                    <NavDropdown.Item>Shirts</NavDropdown.Item>
                    <NavDropdown.Item>Pants</NavDropdown.Item>
                    <NavDropdown.Item>Shoes</NavDropdown.Item>
                    <NavDropdown.Item>Accessories</NavDropdown.Item>
                  </Col>
                  <Col className="mb-3">
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
