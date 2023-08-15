import React, { useEffect, useState } from 'react';
import styles from './Detail.module.css';
import axios from 'axios';
import { useParams, Navigate } from 'react-router-dom';

export default function Detail() {
  const [character, setCharacter] = useState({});
  const { id } = useParams();
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          setNotFound(true);
        }
      })
      .catch((error) => {
        setNotFound(true);
      });
  }, [id]);

  if (notFound) {
    return <Navigate to="/not_found" />;
  }

  return (
    <div className={styles['card-container']}>
      {character.name ? (
        <div>
          <h1>{character.name}</h1>
          <p>STATUS: {character.status}</p>
          <p>SPECIES: {character.species}</p>
          <p>GENDER: {character.gender}</p>
          {character.origin && <p>ORIGIN: {character.origin.name}</p>}
          {character.image && <img src={character.image} alt={character.name} />}
        </div>
      ) : (
        <h3>LOADING...</h3>
      )}
    </div>
  );
}

