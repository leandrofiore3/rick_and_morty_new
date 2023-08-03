import React from 'react';
import styles from './Card.module.css'; // Importar los estilos CSS

export default function Card(props) {
  const { id, name, status, species, gender, origin, image, onClose } = props;

  return (
    <div className={styles['card-container']}>
      <button className={styles['close-button']} onClick={()=>onClose(id)}>X</button>
      <h2>{name}</h2>
      <h2>Status: {status}</h2>
      <h2>Species: {species}</h2>
      <h2>Gender: {gender}</h2>
      <h2>Origin: {origin}</h2>
      <img src={image} alt={name} />
    </div>
  );
}







