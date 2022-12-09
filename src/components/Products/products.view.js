import { Container, Row, Col, Image } from "react-bootstrap";
import image from "../../assets/img/shoes.jpg";

const Products = ({ data = [1, 2, 3, 4, 5, 6, 7, 8] }) => {
  const productItems = data.map((item) => {
    return (
      <Col>
        <div className="m-5">
          <Image
            img
            src={image}
            height={180}
            width={180}
            className="d-flex flex-column align-items-center mx-auto"
          />
          <div className="d-flex flex-column align-items-center">
            Tommy Hilfiger Shoes
          </div>
          <div className="d-flex flex-column align-items-center">20,99 EUR</div>
        </div>
      </Col>
    );
  });

  return (
    <Container>
      <h2 className="my-5">Available Products</h2>
      <Row lg={4} md={2} sm={2} xs={1}>
        {productItems}
      </Row>
    </Container>
  );
};

export default Products;
