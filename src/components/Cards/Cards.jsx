import React from 'react'; 
import Card from '../Card/Card.jsx'; // Importar el componente Card
import styles from './Cards.module.css'; // Importar los estilos CSS

export default function Cards({ characters, onClose }) { // Recibir "characters" y "onClose" como props
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
            onClose={() => onClose(id)} // Pasa el "id" cuando se ejecute onClose
          />
        );
      })}
    </div>
  );
}



