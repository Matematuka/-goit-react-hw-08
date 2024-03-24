import css from "./SearchBox.module.css";

const SearchBox = ({ value, onSearch }) => {
  return (
    <div className={css.searchBox}>
      <p>Find contacts by name</p>
      <input className={css.searchField}
        type="text"
        value={value}
        onChange={onSearch}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBox;
