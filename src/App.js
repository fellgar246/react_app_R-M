import './App.css';

import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"; 

import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';


//TODO: Agregar estilos a la aplicación
function App () {

  const [ characters, setCharacters ] = useState([]);
  const [ access, setAccess ] = useState(false);

  const location = useLocation();

  const username = "12345@gmail.com";
  const password = "123456"

  const URL_BASE = "https://be-a-rym.up.railway.app/api"

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
    fetch(`${URL_BASE}/character/${id}?key=${process.env.REACT_APP_API_KEY}`)
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
