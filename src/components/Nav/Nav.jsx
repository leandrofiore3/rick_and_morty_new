import React from 'react';
import styles from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar.jsx';

export default function Nav({ onRandomSearch, onSearch }) {
  return (
    <div className={styles['nav-container']}>
      <SearchBar onRandomSearch={onRandomSearch} onSearch={onSearch} />
    </div>
  );
}







