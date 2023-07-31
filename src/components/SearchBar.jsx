import React from 'react';
import styles from './SearchBar.module.css'; // Importar los estilos CSS

export default function SearchBar({ onSearch }) {
  return (
    <div className={styles['search-bar-container']}>
      <input type="search" placeholder='id...'/>
      <button onClick={() => { onSearch() }}>Agregar</button>
    </div>
  );
}

