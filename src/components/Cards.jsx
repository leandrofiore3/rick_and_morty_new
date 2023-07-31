import React from 'react';
import Card from './Card';
import styles from './Cards.module.css'; // Importar los estilos CSS

export default function Cards({ characters }) {
  const onClose = () => {
    alert('Emulamos que se cierra la card');
  };

  return (
    <div className={styles['cards-container']}>
      {characters.map(({ id, name, status, species, gender, origin, image }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            image={image}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
}

