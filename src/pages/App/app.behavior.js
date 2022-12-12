import { useEffect, useState } from "react";
import {
  getItems,
  getNewItems,
  getFilteredItems,
} from "../../adapter/mock.http.client.js";

const AppBehavior = () => {
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

  return [productList, selectedFilters, setSelectedFilters, setIsFetchingMoreData];
};

export default AppBehavior;
