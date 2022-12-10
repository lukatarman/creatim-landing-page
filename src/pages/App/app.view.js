import { useEffect, useState } from "react";
import NavbarCustom from "../../components/NavbarCustom/navbar.custom.view.js";
import BannerSlider from "../../components/BannerSlider/banner.slider.view.js";
import Products from "../../components/Products/products.view.js";
import { getItems } from "../../adapter/mock.http.client.js";

const App = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getItems();
      setProductList(response);
    };

    fetchData();
  }, []);

  const carouselOptions = [
    { label: "First Slide", text: "50% off until Friday" },
    { label: "Second Slide", text: "Even bigger discounts!" },
    { label: "Third Slide", text: "90% off for our Black Friday sale!" },
  ];

  getItems();

  return (
    <div className="pt-5">
      <NavbarCustom />
      <BannerSlider options={carouselOptions} />
      <Products products={productList} />
    </div>
  );
};

export default App;
