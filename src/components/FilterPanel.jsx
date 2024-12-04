const FilterPanel = ({ onFilter }) => (
  <select onChange={(e) => onFilter(e.target.value)}>
    <option value="all">All Tasks</option>
    <option value="completed">Completed</option>
    <option value="pending">Pending</option>
    <option value="overdue">Overdue</option>
  </select>
);

export default FilterPanel;
