import React, { useState } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar({ onRandomSearch, onSearch }) {
  const [id, setId] = useState('');

  function handleChange(event) {
    setId(event.target.value);
  }

  function handleSearch() {
    if (id !== '' && Number(id) >= 1 && Number(id) <= 826) {
      onSearch(Number(id));
      setId('');
    } else if (id === '') {
      window.alert('¡Ingrese un ID válido!');
    } else {
      window.alert('¡ID fuera del rango (1-826)!');
    }
  }

  return (
    <div className={styles['search-bar-container']}>
      <input
        type="search"
        value={id}
        onChange={handleChange}
        placeholder="ID..."
        className={styles['input']}
      />
      <button onClick={handleSearch} className={styles['add-button']}>
        Agregar
      </button>
      <button onClick={onRandomSearch} className={styles['random-button']}>
        Random
      </button>
    </div>
  );
}






