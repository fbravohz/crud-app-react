import React from "react";
import styles from "./Table.module.scss";
import { DeleteButton, EditButton, ViewButton } from "/src/components/Content/Buttons/Buttons";
import { TagIcon, PhoneIcon, EmailIcon } from "/src/components/Content/Icons/Icons";
import SortUp from "/src/assets/sort-up.svg";
import SortDown from "/src/assets/sort-down.svg";
import { setDatabase } from "../../../../store/slices/dataSlice";
import { useDispatch, useSelector } from "react-redux";

export default function TableItems(){
  const database = useSelector(state => state.data.database);
  const filter = useSelector(state => state.data.filter);
  function getIfModDatabase(){
    if(filter !== null && filter?.length > 0)
      return filter;
    else
      return database;
  }

  const columns = Object.keys(database[0]);

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
      {getIfModDatabase().map((row, index) => (
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
        <td key={index}>{TableRowObjectCell(rowData[column], rowData.id)}</td>:
        <td key={index}>{rowData[column]}</td>
      ))}
    </tr>
  );
}

function TableRowObjectCell(object, rowDataId){
  const assignedIcon = {
    "Ver": <ViewButton rowId={rowDataId}/>,
    "Editar": <EditButton rowId={rowDataId}/>,
    "Borrar": <DeleteButton rowId={rowDataId}/>,
  }
  if(Array.isArray(object)){
    return object.map((value, index) => (
      <span
        style={{display: 'flex'}}
        key={index}
      >
        {assignedIcon[value] ? assignedIcon[value] :
        <TagIcon text={value}/>}
      </span>
    ))
  }
  else{
    return Object.keys(object).map((value, index) => (
      <span
        style={{display: 'flex'}}
      key={index}
      >
        {index === 0 ?
          <PhoneIcon text={object[value]}/> :
          <EmailIcon text={object[value]}/>}
      </span>
    ))
  }
}