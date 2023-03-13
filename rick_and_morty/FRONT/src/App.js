import './App.css';
import Cards from './Components/Cards/Cards'
import Nav from './Components/Nav/Nav';
import { useEffect, useState } from 'react';
import {Routes, Route, useLocation, useNavigate} from "react-router-dom"
import About from './Components/About/About';
import Detail from './Components/Detail/Detail';
import Form from './Components/Form/Form';

function App() {
const [characters, setCharacters] = useState([]);
const location = useLocation();
const navigate = useNavigate();
const [access, setAccess] = useState(false);

const username = "maph0989@gmail.com";
const password = "12345678";

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
    {location.pathname === "/" ? <Form login={login}/> : <Nav onSearch={onSearch} />}
      <Routes>
        <Route path='/home' element= {<Cards onClose={onClose} characters={characters}/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/detail/:detailId' element={<Detail/>} />
      </Routes>
  </div>
)
}

export default App
