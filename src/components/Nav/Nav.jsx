import React from 'react';
import styles from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar.jsx';
import { NavLink} from 'react-router-dom';

export default function Nav({ onRandomSearch, onSearch }) {
  return (
    <div className={styles['nav-container']}>
      
      <div className={styles.options}>
          <li>
            <NavLink to="/home" activeClassName={styles.active} className={styles.link}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName={styles.active} className={styles.link}>
              ABOUT
            </NavLink>
          </li>
        </div>
        <SearchBar onRandomSearch={onRandomSearch} onSearch={onSearch} />
    </div>
  );
}







