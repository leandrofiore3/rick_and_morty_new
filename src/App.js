import React, { useState } from 'react';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import styles from './App.module.css'; // Importar los estilos CSS
import rickAndMortyBg from './assets/rick-2.jpg'; // Importar la imagen
import axios from 'axios'; // Importar axios
import {Routes, Route} from 'react-router-dom';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Error from './components/Error/Error.jsx';

function App() {
  const [characters, setCharacters] = useState([]); // Crear estado local "characters" y su función "setCharacters" // como valor inicial un array vacío
 

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
        <Nav onRandomSearch={onRandomSearch} onSearch={onSearch} />
        <Routes>
        
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
        
      </div>
    </div>
  );
}

export default App;






