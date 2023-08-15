import React from 'react';
import styles from './NotFound.module.css'; // Importar los estilos CSS


export default function NotFound() {
  
  return (
    <div className={styles['card-container']}>
    <h2>Error 404</h2>
      <p>La página que estás buscando no existe.</p>
    </div>
  );
}