import React from "react";
import Add from "/src/assets/actions/add.svg"
import Delete from "/src/assets/actions/delete.svg"
import Edit from "/src/assets/actions/edit.svg"
import View from "/src/assets/actions/view.svg"
import Tag from "/src/assets/tag.svg"
import Phone from "/src/assets/phone.svg"
import Email from "/src/assets/email.svg"
import styles from "./Icons.module.scss"

export function CreateIcon(){

  return(
    <span className={styles.createIcon}>
      {<img src={Add}/>}
    </span>
  )
}

export function DeleteIcon(){

  return(
    <button className={styles.deleteIcon}>
      {<img src={Delete}/>}
      <span className={styles.fontIcon}>Eliminar</span>
    </button>
  )
}

export function EditIcon(){

  return(
    <button className={styles.editIcon}>
      {<img src={Edit}/>}
      <span className={styles.fontIcon}>Editar</span>
    </button>
  )
}

export function ViewIcon(){

  return(
    <button className={styles.viewIcon}>
      {<img src={View}/>}
      <span className={styles.fontIcon}>Ver</span>
    </button>
  )
}

export function TagIcon({text}){

  return(
    <span className={styles.tagIcon}>
      {<img src={Tag}/>}
      <span className={styles.fontIcon}>{text}</span>
    </span>
  )
}

export function PhoneIcon({text}){

  return(
    <span className={styles.contactIcon}>
      {<img src={Phone}/>}
      <span className={styles.fontIcon}>{text}</span>
    </span>
  )
}

export function EmailIcon({text}){

  return(
    <span className={styles.contactIcon}>
      {<img src={Email}/>}
      <span className={styles.fontIcon}>{text}</span>
    </span>
  )
}