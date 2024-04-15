import css from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice.js";
import { useDispatch, useSelector } from "react-redux";

const SearchBox = () => {
  const dispatch = useDispatch();

  const selectFilterName = useSelector(selectNameFilter);
  const onSearch = (evt) => {
    const action = changeFilter(evt.target.value);
    dispatch(action);
  };

  return (
    <div className={css.searchBox}>
      <p>Find contacts by name</p>
      <input
        className={css.searchField}
        type="text"
        value={selectFilterName}
        onChange={onSearch}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBox;
