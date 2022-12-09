import NavbarCustom from "../../components/NavbarCustom/navbar.custom.view.js";
import BannerSlider from "../../components/BannerSlider/banner.slider.view.js";

const App = () => {
  return (
    <div className="pt-5">
      <NavbarCustom />
      <BannerSlider options={carouselOptions} />
      
    </div>
  );
};

export default App;
