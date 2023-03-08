import { useState } from "react";

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
         />
         <button onClick={()=>props.onSearch(character)}>Agregar</button> 
      </div>
   );
}
