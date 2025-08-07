function Filter({ onCategoryChange }) {
  return (
    <select onChange={(e) => onCategoryChange(e.target.value)}>
      <option value="All">All</option>
      <option value="Produce">Produce</option>
      <option value="Dairy">Dairy</option>
      <option value="Dessert">Dessert</option>
    </select>
  );
}

export default Filter;
