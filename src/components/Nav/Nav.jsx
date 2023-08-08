import React from 'react';
import styles from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar.jsx';
import { NavLink, useNavigate} from 'react-router-dom';

export default function Nav({ onRandomSearch, onSearch, setAccess }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    setAccess(false);
    navigate('/');
  };

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
          <li>
            <NavLink onClick={handleLogout} activeClassName={styles.active} className={styles.link}>
              LOG OUT
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites" activeClassName={styles.active} className={styles.link}>
              FAVORITES
            </NavLink>
          </li>
        </div>
        <SearchBar onRandomSearch={onRandomSearch} onSearch={onSearch} />
    </div>
  );
}







