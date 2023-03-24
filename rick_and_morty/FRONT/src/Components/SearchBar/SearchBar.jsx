import { useState } from "react";
import style from "./SearchBar.module.css"

export default function SearchBar(props) {
   const [character, setCharacter] = useState("")

   const handleChange = (event) => {
      setCharacter(event.target.value)
   }

   const handleKeyDown = (event) => {
      if (event.key === "Enter") {
         props.onSearch(character);
         setCharacter("")
      }
   }


   return (
      <div className={style.searchCont}>
         <button className={style.button} onClick={() => props.randomChar()}>Random</button>
         <button className={style.button} onClick={() => props.clearAll()}>Clear</button>
         <input className={style.input} placeholder="Insert ID" type='search' value={character} onChange={handleChange} onKeyDown={handleKeyDown}/>
         <button className={style.button} onClick={() => {props.onSearch(character);setCharacter("")}}>Add</button>
      </div>
   );
}

