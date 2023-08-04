import React, { useEffect, useState} from 'react';
import styles from './Detail.module.css'; // Importar los estilos CSS
import axios from 'axios';
import  { useParams } from 'react-router-dom';

export default function Detail(props) {
  
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
    return setCharacter({});
  }, [id]);

  return (
    <div className={styles['card-container']}>
      {character.name && ( // Si "character.name" existe, renderiza el contenido
        <div>
          <h1>{character.name}</h1>
          <p>STATUS: {character.status}</p> 
          <p>SPECIES: {character.species}</p>
          <p>GENDER: {character.gender}</p>
          {character.origin && <p>ORIGIN: {character.origin.name}</p>}
          {character.image && <img src={character.image} alt={character.name} />}
        </div>
      )}
    </div>
  );
}