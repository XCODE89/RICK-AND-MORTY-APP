import './App.css';
import Cards from './Components/Cards/Cards'
import Nav from './Components/Nav/Nav';
import { useState } from 'react';
import {Routes, Route, useLocation} from "react-router-dom"
import About from './Components/About/About';
import Detail from './Components/Detail/Detail';
import Form from './Components/Form/Form';

function App() {
const[characters, setCharacters] = useState([])
const location = useLocation();
console.log(location)

const onSearch = (characterId) => {
  fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
  .then((response) => response.json())
  .then((data) => {
     if (data.name) {
        setCharacters([...characters, data]);
     } else {
        window.alert('No hay personajes con ese ID');
     }
  });
}

const onClose = (id) => {
  setCharacters(
    characters.filter((char)=>char.id!==id)
  ) 
}


  return (
  <div className='App' style={{ padding: '25px' }}>
    <Nav onSearch={onSearch} />
      <Routes>

        <Route path='/home' element= {<Cards onClose={onClose} characters={characters}/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/detail/:detailId' element={<Detail/>} />
      </Routes>
  </div>
)
}

export default App
