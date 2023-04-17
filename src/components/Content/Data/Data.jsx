import React from "react";
import styles from "./Data.module.scss";
import {CreateButton} from "../Buttons/Buttons";
import TableItems from "./Table/Table";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, setPagination } from "../../../store/slices/dataSlice";

export default function Data(){

  return(
    <div className={styles.container}>
      <SelectRows/>
      <SearchBar/>
      <CreateButton/>
      <TableItems/>
    </div>
  )
}

function SelectRows(){
  const dispatch = useDispatch();
  const [selected, setSelected] = React.useState(30);
  function handleChange(value){
    setSelected(value)
    dispatch(setPagination(value));
  }

  return(
  <div className={styles.pagination}>
    <label >Items por página:</label>
    <select value={selected} onChange={(e) => handleChange(e.target.value)} className={styles.select} name="select">
      <option value={5}>5</option>
      <option value={10}>10</option>
      <option value={15}>15</option>
      <option value={30}>30</option>
    </select>
  </div>
);
}

function SearchBar(){
  const database = useSelector(state => state.data.database);
  const dispatch = useDispatch();

  function handleChange(value, database){
    if(value === '')
      dispatch(setFilter(null))
    else{
      const modified = searchJSON(database, value);
      dispatch(setFilter(modified));
    }
  }

  function searchJSON(jsonData, searchString) {
    return jsonData.filter((obj) => {
      return Object.values(obj).some((val) => {
        if (Array.isArray(val)) {
          return val.some((item) => {
            return item.includes(searchString) || similarity(searchString, item) >= 0.8;
          });
        }
        return val.toString().includes(searchString) || similarity(searchString, val.toString()) >= 0.8;
      });
    }).map((obj) => obj);
  }

  function similarity(s1, s2) {
    const matches = s1.match(new RegExp(s2, 'gi')) || [];
    return matches.length / Math.max(s1.length, s2.length);
  }

  return(
    <div className={styles.search}>
      <label>Filtrar:</label>
      <input
        className={styles.inputSearch}
        type="text"
        onChange={(e) => handleChange(e.target.value, database)}/>
    </div>
  );
}

