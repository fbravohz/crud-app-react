import React from "react";
import styles from './CreateButton.module.scss'

export default function CreateButtton(){
  return(
    <button className={styles.btn}><span>Crear item</span></button>
  );
}