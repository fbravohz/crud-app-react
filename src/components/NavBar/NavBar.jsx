import React from "react";
import styles from "./NavBar.module.scss"

export default function NavBar(){

  return(
    <header>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li><a href="#"> Home </a></li>
          <li><a href="#"> About </a></li>
          <li><a href="#"> Contact </a></li>
          <li><a href="#"> Terms of use </a></li>
          <li><a href="#"> Join Us </a></li>
        </ul>
      </nav>
    </header>
  )
}