import React from 'react';
import { NavLink } from 'react-router-dom';

import SearchBar from './SearchBar';


export default function Nav(props) {

  return (
    <div>
      
        <NavLink to={"/home"}>
            <button>Home</button>
        </NavLink>
        <NavLink to={"/about"}>
            <button>About</button>
        </NavLink>
        <NavLink to={"/favorites"}>
            <button>Favorites</button>
        </NavLink>
        <div>
             <SearchBar onSearch={props.onSearch} />
        </div>
    </div>
  )
}
