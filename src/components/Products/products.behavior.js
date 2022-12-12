import { useEffect } from "react";

const ProductsBehavior = (filters, setFilters, setFetchingData) => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (isPageScrolledToBottom()) setFetchingData(true);
  };

  const handleFilterClick = (e) => {
    const clickedFilter = e.target.textContent.toLowerCase();
    setFilters([...filters, clickedFilter]);
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
