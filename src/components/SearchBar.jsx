import { useState } from "react";
import styles from "./SearchBar.module.css"

export default function SearchBar(props) {
   //* No se le pasa aún un parametro al props.onSearch()
   const [ character, setCharacter] = useState("")

   const handleInput = (event) => {
      setCharacter(event.target.value)
   }  

   return (
      <div>
         <input 
            type='text' 
            placeholder="type id" 
            onChange={(event)=>handleInput(event) }
            value={character}
            className={styles.searchbar__input}
         />
         <button 
            onClick={()=>props.onSearch(character)}
            className={styles.searchbar__button}
         >
            Agregar
         </button> 
      </div>
   );
}
