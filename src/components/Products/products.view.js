import { Container, Row, Col, Image } from "react-bootstrap";
import FilterButton from "../FilterButton/filter.button.view.js";
import ProductsBehavior from "./products.behavior.js";

const Products = ({ products, filters, setFilters, setIsFetchingData }) => {
  const [handleFilterClick, handleRemoveFiltersClick] = ProductsBehavior(
    filters,
    setFilters,
    setIsFetchingData
  );

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
          <div className="text-align-custom mb-1">{item.name}</div>
          <div className="text-align-custom">{item.price}</div>
        </div>
      </Col>
    );
  });

  return (
    <Container>
      <h2 className="my-2">Available Products</h2>
      <div className="p-3">
        Filter by:
        <FilterButton name={"Kids"} handleClick={handleFilterClick} />
        {filters.length ? (
          <FilterButton name={"Remove Filters"} handleClick={handleRemoveFiltersClick} />
        ) : null}
      </div>
      <Row lg={4} md={2} sm={2} xs={1}>
        {productItems}
      </Row>
    </Container>
  );
};

export default Products;
