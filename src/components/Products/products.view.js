import { useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const Products = ({ products, setFetchingData }) => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (isPageScrolledToBottom()) setFetchingData(true);
  };

  const isPageScrolledToBottom = () => {
    return (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    );
  };

  const productItems = products.map((item, index) => {
    return (
      <Col key={index} className="my-3">
        <div className="m-3">
          <Image
            img="true"
            src={item.image}
            height={180}
            width={180}
            className="d-flex flex-column align-items-center mx-auto"
          />
          <div className="d-flex flex-column align-items-center">{item.name}</div>
          <div className="d-flex flex-column align-items-center">{item.price}</div>
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
