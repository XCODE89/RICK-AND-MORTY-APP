import './App.css';
import Cards from './Components/Cards/Cards'
import Nav from './Components/Nav/Nav';
import { useEffect, useState } from 'react';
import {Routes, Route, useLocation, useNavigate} from "react-router-dom"
import Register from './Components/Register/Register';
import About from './Components/About/About';
import Detail from './Components/Detail/Detail';
import Form from './Components/Form/Form';
import Favorites from './Components/Favorites/Favorites';
import { deleteFavorite } from "./Redux/actions"
import { useDispatch } from "react-redux"

function App() {
const [characters, setCharacters] = useState([]);
const location = useLocation();
const navigate = useNavigate();
const [access, setAccess] = useState(false);

const username = "maph0989@gmail.com";
const password = "123456";

const login = (userData) => {
  if (userData.username === username && userData.password === password) {
    setAccess(true);
    navigate("/home")
  }
}

useEffect(() => {
  !access && navigate("/")
},[access])


const onSearch = (characterId) => {
  fetch(`http://localhost:3001/rickandmorty/onsearch/${characterId}`)
  .then((response) => response.json())
  .then((data) => {
    if (data.name) {
      if (!characters.find((char) => char.id === data.id)) {
        setCharacters([...characters, data]);
      } else {
        window.alert('Ya se ha agregado un personaje con ese ID')
      }
    } else {
        window.alert('No hay personajes con ese ID');
    }
  });
}
const dispatch = useDispatch()

const onClose = (id) => {
  setCharacters(
    characters.filter((char)=>char.id!==id)
  )
  dispatch(deleteFavorite(id))
}

const randomChar = () => {
  const id = Math.floor(Math.random()*827)
  fetch(`http://localhost:3001/rickandmorty/onsearch/${id}`)
  .then((response) => response.json())
  .then((data) => {
        setCharacters([...characters, data]);
  });
}

const clearAll = () => {
  characters.forEach(char => {
    setCharacters([])
    dispatch(deleteFavorite(char.id))
  });
}


  return (
  <div className='App' >
    {location.pathname === "/" ? <Form login={login}/> : location.pathname === "/register"?<Register/>:<Nav onSearch={onSearch} randomChar={randomChar} clearAll={clearAll}/>}
      <Routes>
        <Route path='/home' element= {<Cards onClose={onClose} characters={characters}/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/detail/:detailId' element={<Detail/>} />
        <Route path="favorites" element={<Favorites onClose={onClose} />}/>
      </Routes>
  </div>
)
}

export default App
