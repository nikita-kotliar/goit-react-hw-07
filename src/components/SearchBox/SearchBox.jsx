

import css from "./SearchBox.module.css";
import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice"; 

export default function SearchBox() {
  const dispatch = useDispatch(); 
  const nameFieldId = useId();

  const filterValue = useSelector((state) => state.filters.name);

  const handleChange = (newValue) => {
    dispatch(changeFilter(newValue)); 
  };

  return (
    <div className={css.search_box}>
      <label
        className={css.search_text}
        htmlFor={nameFieldId}
        aria-labelledby="searchLabel"
      >
        Find contacts by name
      </label>
      <input
        className={css.search_input}
        type="text"
        name="name"
        id={nameFieldId}
        value={filterValue}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}
