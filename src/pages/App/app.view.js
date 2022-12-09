import NavbarCustom from "../../components/NavbarCustom/navbar.custom.view.js";
import BannerSlider from "../../components/BannerSlider/banner.slider.view.js";

const App = () => {
  const carouselOptions = [
    { label: "First Slide", text: "50% off until Friday" },
    { label: "Second Slide", text: "Even bigger discounts!" },
    { label: "Third Slide", text: "90% off for our Black Friday sale!" },
  ];

  return (
    <div className="pt-5">
      <NavbarCustom />
      <BannerSlider options={carouselOptions} />
      
    </div>
  );
};

export default App;
