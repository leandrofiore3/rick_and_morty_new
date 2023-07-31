import React from 'react';

export default function Card(props) {
  const { id, name, status, species, gender, origin, image, onClose } = props;

   // const handleClose = () => {
   //    // Ejecutar la función onClose cuando el usuario hace click en la X de "cerrar".
   //    if (onClose) {
   //       onClose();
   //    }
   // };
  return (
    <div>
      <button onClick={onClose}>X</button>
      <h2>{name}</h2>
      <h2>Status: {status}</h2>
      <h2>Species: {species}</h2>
      <h2>Gender: {gender}</h2>
      <h2>Origin: {origin.name}</h2>
      <img src={image} alt={name} />
    </div>
  );
}




