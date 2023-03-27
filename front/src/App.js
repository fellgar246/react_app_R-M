import './App.css';

import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"; 

import Cards from './pages/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './pages/About/About';
import Detail from './pages/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './pages/Favorites/Favorites';


function App () {

  const [ characters, setCharacters ] = useState([]);
  const [ access, setAccess ] = useState(false);

  const location = useLocation();

  const username = "12345@gmail.com";
  const password = "123456"

  // const URL_BASE = "https://be-a-rym.up.railway.app/api"

  const navigate = useNavigate();

  function login(userData) {
    if (userData.password === password && userData.username === username) {
        setAccess(true);
        navigate('/home');
    }
  }

  useEffect(() => {
   !access && navigate('/');
  }, [access]);

  function onSearch(id) {
    fetch(`http://localhost:3001/rickandmorty/onsearch/${id}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
            //* Verificar si el personaje ya existe
            let exist = characters.find( (char) => char.id === data.id )
            if(exist){
              alert("ese personaje ya existe");
            } else {
              setCharacters((oldChars) => [...oldChars, data]);
            }
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
  }

  const onClose = (id) => { 
    setCharacters((data) => {
      return data.filter( (char) => char.id !== id)
    })
  }

  //TODO: CREAR BOTON LOGOUT
  return (
    <div className='App' style={{ padding: '25px' }}>
      { location.pathname !== "/" && <Nav  onSearch={onSearch}/> }      
      <Routes>
        <Route exact path='/' element={ <Form login={login} /> }  />
        <Route path="/home" element={ 
          <Cards
          characters={characters}
          onClose={onClose}
          /> }
        />
        <Route path="/about" element={ <About /> } />
        <Route path="/detail/:detailId" element={ <Detail /> } />
        <Route path='/favorites' element={ <Favorites /> } />
      </Routes>
    </div>
  )
}

export default App
