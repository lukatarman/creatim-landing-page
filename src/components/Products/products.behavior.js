import { useEffect } from "react";

//todo implement debounce to scrolling
const ProductsBehavior = (filters, setFilters, setFetchingData) => {
  useEffect(() => {
    const handleScroll = () => {
      if (isPageScrolledToBottom()) setFetchingData(true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setFetchingData]);

  const handleFilterClick = (e) => {
    const clickedFilter = e.target.textContent.toLowerCase();
    if (!filters.includes(clickedFilter)) setFilters([...filters, clickedFilter]);
  };

  const handleRemoveFiltersClick = () => {
    setFilters([]);
  };

  const isPageScrolledToBottom = () => {
    return (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    );
  };

  return [handleFilterClick, handleRemoveFiltersClick];
};

export default ProductsBehavior;
