const FilterButton = ({ name, handleClick }) => {
  return (
    <button className="button-filter m-1" onClick={handleClick}>
      {name}
    </button>
  );
};

export default FilterButton;
