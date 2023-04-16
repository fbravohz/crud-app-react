import React from "react";
import styles from "./Table.module.scss";
import CreateButtton from "../../Buttons/CreateButton";
import SortUp from "/src/assets/sort-up.svg";
import SortDown from "/src/assets/sort-down.svg";
import Add from "/src/assets/actions/add.svg";
import Delete from "/src/assets/actions/delete.svg";
import Edit from "/src/assets/actions/edit.svg";
import View from "/src/assets/actions/view.svg";
import Tag from "/src/assets/tag.svg";
import db from "/src/db/db.json";

export default function Table(){
  return(
    <div className={styles.container}>
      <SelectRows/>
      <SearchBar/>
      <CreateButtton/>
      <TableItems/>
    </div>
  )
}

function SelectRows(){
return(
  <div className={styles.pagination}>
    <label >Items por página:</label>
    <select className={styles.select} name="select">
      <option value={10}>10</option>
      <option value={30}>30</option>
      <option value={50}>50</option>
      <option value={100}>100</option>
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

function TableItems(){
  const columns = Object.keys(db.data[0]);
  return(
  <table className={styles.table}>
    <thead>
      <tr>
        {columns.map((column, index) => (
          <TableRowHeader key={index} columnName={column}/>
        ))}
      </tr>
    </thead>
    <tbody>
      {db.data.map((row, index) => (
        <TableRow rowData={row} key={index}/>
      ))}
    </tbody>
  </table>
  );
}

function TableRowHeader({ columnName }){

  const sorter = {
    none: null,
    ascending: SortUp,
    descending: SortDown
  }

  const sortOptions = Object.keys(sorter);
  const [sortBy, setSortBy ] = React.useState(sortOptions[1])

  function handleClick(){
    sortBy === sortOptions[0] ?
    setSortBy(sortOptions[1]) :
    sortBy === sortOptions[1] ?
    setSortBy(sortOptions[2]) :
    sortBy === sortOptions[2] ?
    setSortBy(sortOptions[0]) :
    null
  }

  return(
  <th>
    <div
      className={styles.thContainer}
      onClick={handleClick}
    >
      <span>{columnName}</span>
      <div>
        <img src={sorter[sortBy]}/>
      </div>
    </div>
  </th>
  );
}

function TableRow({ rowData }){

  return(
    <tr>
      {Object.keys(rowData).map((column, index) => (
        typeof(rowData[column]) === 'object' ?
        <td key={index}>{TableRowObjectCell(rowData[column])}</td>:
        <td key={index}>{rowData[column]}</td>
      ))}
    </tr>
  );
}

function TableRowObjectCell(object){

  const assignedIcon = {
    "Ver": View,
    "Editar": Edit,
    "Borrar": Delete,
  }

  if(Array.isArray(object)){
    return object.map((value, index) => (
      <span key={index}>{<img src={assignedIcon[value] ? assignedIcon[value] : Tag}/>}</span>
    ))
  }

  return(
  <>
    
  </>);
}