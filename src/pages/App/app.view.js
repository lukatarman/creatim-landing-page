import { useEffect, useState } from "react";
import NavbarCustom from "../../components/NavbarCustom/navbar.custom.view.js";
import BannerSlider from "../../components/BannerSlider/banner.slider.view.js";
import Products from "../../components/Products/products.view.js";
import {
  getItems,
  getNewItems,
  getFilteredItems,
} from "../../adapter/mock.http.client.js";

const App = () => {
  const [productList, setProductList] = useState([]);
  const [isFetchingMoreData, setIsFetchingMoreData] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getItems();
      setProductList(response);
    };

    const fetchFilteredData = async () => {
      const response = await getFilteredItems();
      setProductList(response);
    };

    if (selectedFilters.length) fetchFilteredData();
    if (!selectedFilters.length) fetchData();
  }, [selectedFilters]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getNewItems();
      setProductList([...productList, ...response]);
    };

    if (isFetchingMoreData) fetchData();
    setIsFetchingMoreData(false);
  }, [isFetchingMoreData]);

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
