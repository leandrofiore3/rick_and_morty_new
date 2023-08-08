import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import styles from './App.module.css'; 
import rickAndMortyBg from './assets/rick-2.jpg'; 
import axios from 'axios'; 
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites.jsx';

const email = 'leandro@gmail.com';
const password = '123asd';

function App() {
  const [characters, setCharacters] = useState([]); // Crear estado local "characters" y su función "setCharacters" // como valor inicial un array vacío
  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [validRoute, setValidRoute] = useState(true);
  
  const login = (userData) => {
    if(userData.email === email && userData.password === password){// Verificar que el email y la contraseña sean correctos 
       setAccess(true); // Actualizar el estado de acceso
       navigate('/home'); // Redireccionar a la ruta /home
    }
    else{
      window.alert('Email o contraseña incorrectos');
    }
  };

  useEffect(() => {
    const validRoutes = ['/home', '/about', '/detail/:id', '/favorites'];
    if (!validRoutes.includes(location.pathname)) {// Si la ruta no es válida, redireccionar a /not_found
      setValidRoute(false);
    }
    else{
    !access && navigate('/');// Si no hay acceso, redireccionar a /
    }
  }, [access, navigate, location.pathname]);

  const onSearch = (id) => {
    // Verificar que el ID sea válido (entre 1 y 826)
    const parsedId = Number(id);
    if (isNaN(parsedId) || parsedId < 1 || parsedId > 826) {
      window.alert('Ingrese un número válido entre 1 y 826');
      return;
    }
    // Verificar si el personaje ya existe en el estado
    if (characters.some((character) => character.id === parsedId)) {
      window.alert('¡Este personaje ya está en pantalla!');
      return;
    }

    axios(`https://rickandmortyapi.com/api/character/${parsedId}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('¡No hay personajes con este ID!');
        }
      });
  };

  const onClose = (id) => {
    const charactersFiltered = characters.filter(// Filtrar el array de personajes
      (character) => character.id !== Number(id)// Si el ID del personaje es distinto al ID recibido, se mantiene en el array
    );
    setCharacters(charactersFiltered);// Actualizar el estado con el array filtrado
  };

  function getRandomCharacterId() {
    return Math.floor(Math.random() * 826) + 1; // Número aleatorio entre 1 y 826 (total de personajes en la API)
  }

  const onRandomSearch = () => {
    const randomId = getRandomCharacterId();
    onSearch(randomId);
  };

  return (
    <div className={styles['app-container']}>
      <img
        className={styles['app-background-image']}
        src={rickAndMortyBg}
        alt="Rick and Morty Background"
      />
      <div className={styles['content-container']}>
        {location.pathname !== '/' && location.pathname !== '/not_found' && <Nav onRandomSearch={onRandomSearch} onSearch={onSearch} setAccess={setAccess} />}
        <Routes>
          <Route path="/" element={<Form login={login} />} />
          <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorites" element={<Favorites  />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/not_found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not_found" />} />
        </Routes>
      </div>
    </div>
  );
}
  
export default App;






