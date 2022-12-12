import { useEffect } from "react";

const ProductsBehavior = (filters, setFilters, setFetchingData) => {
  useEffect(() => {
    const handleScroll = () => {
      console.log("scrolled");
      if (isPageScrolledToBottom()) setFetchingData(true);
    };

    window.addEventListener("scroll", debounce(handleScroll));

    return () => {
      window.removeEventListener("scroll", debounce(handleScroll));
    };
  }, [setFetchingData]);

  const debounce = (func) => {
    let timeoutId;

    return () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func();
      }, 200);
    };
  };

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
