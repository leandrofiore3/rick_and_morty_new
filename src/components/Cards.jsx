import React from 'react';
import Card from './Card';
import styles from './Cards.module.css'; // Importar los estilos CSS
import characters from '../data'; // Importar el array de personajes

export default function Cards() {
  const onClose = () => {
    alert('Emulamos que se cierra la card');
  };

  return (
    <div className={styles['cards-container']}>
      {characters.map(({ id, name, status, species, gender, origin, image }) => {
        // Verificar si "origin" existe antes de acceder a "origin.name"
        const originName = origin ? origin.name : 'Unknown';

        return (
          <Card
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={originName}
            image={image}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
}


