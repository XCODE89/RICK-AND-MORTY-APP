import { useState } from "react";
import style from "./SearchBar.module.css"

export default function SearchBar(props) {

   const [character, setCharacter] = useState("")

   const handleChange = (event) => {
      setCharacter(event.target.value)
   }


   return (
      <div className={style.searchCont}>
         <input className={style.input} placeholder="Insert ID" type='search' value={character} onChange={handleChange}/>
         <button className={style.button} onClick={() => props.onSearch(character)}>Add</button>
      </div>
   );
}

