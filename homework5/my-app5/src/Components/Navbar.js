import React from 'react'
import {NavLink} from 'react-router-dom'
import About from "../Pages/About";
import styles from './navbar.module.css'
import AnotherCountries from '../Pages/AnotherCountries'

const Navbar = () => {
  return (
    <div className={styles.mainDiv}>
       <h1> Georgian Universities </h1>
      <div className={styles.container}>
       <NavLink className={styles.navButton} to='/'>Home</NavLink>
       <NavLink className={styles.navButton} to='/About'>About</NavLink>
       <NavLink className={styles.navButton} to='/AnotherCountries'>AnotherCountries</NavLink>
       </div>
        </div>
  )
}

export default Navbar