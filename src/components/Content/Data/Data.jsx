import React from "react";
import styles from "./Data.module.scss";
import {CreateButton} from "../Buttons/Buttons";
import TableItems from "./Table/Table";

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
return(
  <div className={styles.pagination}>
    <label >Items por página:</label>
    <select className={styles.select} name="select">
      <option value={5}>5</option>
      <option value={10}>10</option>
      <option value={15}>15</option>
      <option value={30}>30</option>
    </select>
  </div>
);
}

function SearchBar(){
  return(
    <div className={styles.search}>
      <label>Filtrar:</label>
      <input className={styles.inputSearch} type="text"/>
    </div>
  );
}

