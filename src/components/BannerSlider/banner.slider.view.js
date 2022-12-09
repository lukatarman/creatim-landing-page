import Carousel from "react-bootstrap/Carousel";

function BannerSlider({ options }) {
  const carouselItems = options.map((item) => {
    return (
      <Carousel.Item>
        <div className="carousel-item"></div>
        <Carousel.Caption>
          <h3>{item.label}</h3>
          <p>{item.text}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });

  return <Carousel variant="dark">{carouselItems}</Carousel>;
}

export default BannerSlider;