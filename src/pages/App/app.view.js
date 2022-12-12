import NavbarCustom from "../../components/NavbarCustom/navbar.custom.view.js";
import BannerSlider from "../../components/BannerSlider/banner.slider.view.js";
import Products from "../../components/Products/products.view.js";
import AppBehavior from "./app.behavior.js";

const App = () => {
  const [productList, selectedFilters, setSelectedFilters, setIsFetchingMoreData] =
    AppBehavior();

  const carouselOptions = [
    { label: "First Slide", text: "50% off until Friday" },
    { label: "Second Slide", text: "Even bigger discounts!" },
    { label: "Third Slide", text: "90% off for our Black Friday sale!" },
  ];

  return (
    <div className="pt-5">
      <NavbarCustom />
      <BannerSlider options={carouselOptions} />
      <Products
        products={productList}
        filters={selectedFilters}
        setFilters={setSelectedFilters}
        setFetchingData={setIsFetchingMoreData}
      />
    </div>
  );
};

export default App;
