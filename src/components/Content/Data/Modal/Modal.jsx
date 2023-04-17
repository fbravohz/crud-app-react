import React, { useState } from 'react';
import styles from './Modal.module.scss';
import { setShowModal, setActionDataId, setActionType, setEditRow } from '/src/store/slices/dataSlice';
import { useDispatch, useSelector } from 'react-redux';
import { TableRowObjectCell } from '../Table/Table';
import { setDatabase } from '../../../../store/slices/dataSlice';
import { template } from '/src/db/db.json';

export default function DataModal() {
  const showModal = useSelector(state => state.data.showModal);
  const actionType = useSelector(state => state.data.actionType);
  const actionDataId = useSelector(state => state.data.actionDataId);
  const database = useSelector(state => state.data.database);
  const columnNames = useSelector(state => state.data.columnNames);
  const editRow = useSelector(state => state.data.editRow);
  const dispatch = useDispatch();
  let rowIndex;
  
  database.forEach((row, index) => {
    if(row.id === actionDataId)
      rowIndex = index;
  })

  const [newArr] = database.filter((element, index) => index == rowIndex);

  if(actionType === 'View'){
    const keys = Object.keys(newArr);
    return (
      <>
        {showModal && (
          <Modal actionDataId={actionDataId} actionType={actionType}>
            {keys.map((element, index) => {
              if(index === 8)
                return null;
              return (
                <div key={index}>
                  <div>{element}</div>
                  {typeof(newArr[element]) === 'object' ?
                  <div>
                  {TableRowObjectCell(newArr[element],null)}
                  </div>
                  :
                  <div className={styles.dataShow}>{newArr[element]}</div>
                  }
                </div>
            )})}
          </Modal>
        )}
      </>
    )
  }

  if(actionType === 'Edit'){
    const keys = Object.keys(newArr);
    function handleEdit(value, element){
      let parsedValue = value;
      if (typeof(newArr[element]) === 'object') {
        try {
          parsedValue = JSON.parse(value);
        } catch (e) {
          console.error("Invalid JSON string");
          return;
        }
      }
      dispatch(setEditRow({...editRow, [element]: parsedValue}))
    }
    return (
      <>
        {showModal && (
          <Modal actionDataId={actionDataId} actionType={actionType}>
            {keys.map((element, index) => {
              if(index === 8)
                return null;
              return (
                <div key={index}>
                  <div>{element}</div>
                  {typeof(newArr[element]) === 'object' ?
                  <input
                    type='text'
                    onChange={(e) => handleEdit(e.target.value, element)}
                    defaultValue={JSON.stringify(newArr[element])}
                  />
                  :
                  <input
                  type='text'
                  onChange={(e) => handleEdit(e.target.value, element)}
                  defaultValue={newArr[element]}/>
                  }
                </div>
            )})}
          </Modal>
        )}
      </>
    )
  }

  if(actionType === 'Create'){
    const keys = Object.keys(template);
    function handleEdit(value, element){
      let parsedValue = value;
      console.log(element, value);
      if (typeof(template[element]) === 'object') {
        try {
          parsedValue = JSON.parse(value);
        } catch (e) {
          console.error("Invalid JSON string");
          return;
        }
      }
      dispatch(setEditRow({...template, ...editRow, [element]: parsedValue}))
    }
    console.log(editRow);
    return (
      <>
        {showModal && (
          <Modal actionDataId={actionDataId} actionType={actionType}>
            {keys.map((element, index) => {
              if(index === 8)
                return null;
              return (
                <div key={index}>
                  <div>{element}</div>
                  {typeof(template[element]) === 'object' ?
                  <input
                    type='text'
                    onChange={(e) => handleEdit(e.target.value, element)}
                    defaultValue={JSON.stringify(template[element])}
                  />
                  :
                  <input
                  type='text'
                  onChange={(e) => handleEdit(e.target.value, element)}
                  defaultValue={template[element]}/>
                  }
                </div>
            )})}
          </Modal>
        )}
      </>
    )
  }
}

function Modal({children, actionDataId, actionType}){
  const database = useSelector(state => state.data.database);
  const editRow = useSelector(state => state.data.editRow);
  const dispatch = useDispatch();
  let editIndex = -1;
  database.forEach((row, index) => {
    if(row.id === actionDataId)
      editIndex = index;
  })
  function handleSave(){
    let localdb = [...database];
    if(editIndex === -1)
      localdb.push({...editRow})
    else
      localdb[editIndex] = {...localdb[editIndex], ...editRow}
    dispatch(setShowModal());
    dispatch(setActionDataId(null));
    dispatch(setActionType(null));
    dispatch(setDatabase(localdb));
    dispatch(setEditRow(null));
  }

  function handleClose() {
    dispatch(setShowModal());
    dispatch(setActionDataId(null));
    dispatch(setActionType(null));
    dispatch(setEditRow(null));
  }
  console.log("ActionType:",actionType);

  return(
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        {children}
        <div className={styles.btnContainer}>
          {actionType == 'View' ?
            <div></div>:
            <button className={styles.btn} onClick={handleSave}>Guardar</button>
          }
          <button className={styles.btn} onClick={handleClose}>Cancelar</button>
        </div>
      </div>
    </div>
  )
}
