const FilterButton = ({ name, handleClick }) => {
  return (
    <button className="button-filter" onClick={handleClick}>
      {name}
    </button>
  );
};

export default FilterButton;
