import React, { useEffect, useState } from 'react';
import styles from './Detail.module.css'; 
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Detail() {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert('No hay personajes con ese ID');
      }
    });
    return () => setCharacter({}); // Esta función se ejecutará cuando el componente se desmonte
  }, [id]);

  return (
    <div className={styles['card-container']}>
      {character.name ? ( // Usamos el operador ternario de forma correcta
        <div>
          <h1>{character.name}</h1>
          <p>STATUS: {character.status}</p>
          <p>SPECIES: {character.species}</p>
          <p>GENDER: {character.gender}</p>
          {character.origin && <p>ORIGIN: {character.origin.name}</p>}
          {character.image && <img src={character.image} alt={character.name} />}
        </div>
      ) : (
        <h3>LOADING...</h3> // Mostramos "LOADING..." mientras se carga el personaje
      )}
    </div>
  );
}
