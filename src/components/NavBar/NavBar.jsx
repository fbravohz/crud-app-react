import React from "react";
import styles from "./NavBar.module.scss"

export default function NavBar(){

  return(
    <header>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li><a href="#"> Usuarios </a></li>
          <li><a href="#"> Servicios </a></li>
          <li><a href="#"> Marketing </a></li>
          <li><a href="#"> Ventas </a></li>
          <li><a href="#"> Opciones </a></li>
        </ul>
      </nav>
    </header>
  )
}