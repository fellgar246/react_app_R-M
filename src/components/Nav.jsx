import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from "./Nav.module.css";

import SearchBar from './SearchBar';


export default function Nav(props) {

  return (
    <div className={ styles.nav__container } >
        <div className={ styles.button__container }>
          <NavLink to={"/home"}>
              <button className={styles.button}>Home</button>
          </NavLink>
          <NavLink to={"/about"}>
              <button className={styles.button}>About</button>
          </NavLink>
          <NavLink to={"/favorites"}>
              <button className={styles.button}>Favorites</button>
          </NavLink>
        </div>
        <div className={styles.searchbar}>
          <SearchBar onSearch={props.onSearch} />
        </div>

    </div>
  )
}
