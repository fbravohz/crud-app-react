import React from "react";
import styles from './Buttons.module.scss'
import {CreateIcon, DeleteIcon, EditIcon, ViewIcon} from "../Icons/Icons";

export function CreateButton(){
  return(
    <button className={styles.createBtn}>
      <CreateIcon/>
      <span>Crear item</span>
    </button>
  );
}

export function DeleteButton(){
  return(
    <span className={styles.actionsBtn}>
      <DeleteIcon/>
    </span>
  );
}

export function EditButton(){
  return(
    <span className={styles.actionsBtn}>
      <EditIcon/>
    </span>
  );
}

export function ViewButton(){
  return(
    <span className={styles.actionsBtn}>
      <ViewIcon/>
    </span>
  );
}
