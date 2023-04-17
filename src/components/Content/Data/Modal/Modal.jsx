import React, { useState } from 'react';
import styles from './Modal.module.scss';
import { setShowModal, setActionDataId, setActionType } from '/src/store/slices/dataSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function DataModal() {
  const showModal = useSelector(state => state.data.showModal);
  const actionType = useSelector(state => state.data.actionType);
  const actionDataId = useSelector(state => state.data.actionDataId);
  const database = useSelector(state => state.data.database);
  const dispatch = useDispatch();
  let rowIndex;
  database.forEach((row, index) => {
    if(row.id === actionDataId)
      rowIndex = index;
  })

  const [newArr] = database.filter((element, index) => index == rowIndex);

  if(actionType === 'View'){
    return (
      <>
        {showModal && (
          <Modal>
          {/*ERRORES GENERADOS APARTIR DE AQUI */}
          {Object.keys(newArr) ?
            Object.keys(newArr).map((element, index) => {
              <div>
                <span style={{color: "black"}}>{element}</span>
              </div>
            }):
            <p>no</p>
          }
          </Modal>
        )}
      </>
    )
  }

  if(actionType === 'Edit'){
    return (
      <>
        {showModal && (
          <Modal>
            <p>Edit</p>
          </Modal>
        )}
      </>
    )
  }

  if(actionType === 'Create'){
    return (
      <>
        {showModal && (
          <Modal>
            <p>Create</p>
          </Modal>
        )}
      </>
    )
  }
}

function Modal(props){

  const dispatch = useDispatch();

  function handleClose() {
    dispatch(setShowModal());
    dispatch(setActionDataId(null));
    dispatch(setActionType(null));
  }

  return(
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        {props.children}
        <div className={styles.btnContainer}>
          <button className={styles.btn} onClick={handleClose}>Guardar</button>
          <button className={styles.btn} onClick={handleClose}>Cancelar</button>
        </div>
      </div>
    </div>
  )
}