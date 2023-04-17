import React from "react";
import styles from './Buttons.module.scss'
import {CreateIcon, DeleteIcon, EditIcon, ViewIcon} from "../Icons/Icons";
import { setDatabase, setShowModal, setActionType, setActionDataId } from '/src/store/slices/dataSlice';
import { useDispatch, useSelector } from 'react-redux';

export function CreateButton(){
  const db = useSelector(state => state.data.database);
  const dispatch = useDispatch();
  function handleOpen() {
    dispatch(setActionType("Create"));
    dispatch(setShowModal());
  }

  return(
    <button onClick={handleOpen} className={styles.createBtn}>
      <CreateIcon/>
      <span>Crear item</span>
    </button>
  );
}

export function DeleteButton({rowId}){
  const db = useSelector(state => state.data.database);
  const dispatch = useDispatch();

  function handleDelete() {
    let deleteIndex;
    db.forEach((element, index) => {
      if(element.id == rowId)
        deleteIndex = index
    });
    const newArr = db.filter((element, index) => index !== deleteIndex);
    dispatch(setDatabase(newArr));
  }
  return(
    <span onClick={handleDelete} className={styles.actionsBtn}>
      <DeleteIcon/>
    </span>
  );
}

export function EditButton({rowId}){
  const db = useSelector(state => state.data.database);
  const dispatch = useDispatch();
  function handleOpen() {
    dispatch(setActionType("Edit"));
    dispatch(setActionDataId(rowId));
    dispatch(setShowModal());
  }
  return(
    <span onClick={handleOpen} className={styles.actionsBtn}>
      <EditIcon/>
    </span>
  );
}

export function ViewButton({rowId}){
  const db = useSelector(state => state.data.database);
  const dispatch = useDispatch();
  function handleOpen() {
    dispatch(setActionType("View"));
    dispatch(setActionDataId(rowId));
    dispatch(setShowModal());
  }
  return(
    <span onClick={handleOpen} className={styles.actionsBtn}>
      <ViewIcon/>
    </span>
  );
}

// const db = JSON.parse(sessionStorage.getItem("database"));
// console.log(db);



