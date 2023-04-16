import React from "react";
import styles from './Header.module.scss'

export default function Header(){
  return(
    <div className={styles.header}>
      <span className={styles.text}>Información de item</span>
    </div>
  )
}