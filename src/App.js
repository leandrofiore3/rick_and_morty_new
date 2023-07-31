import React from 'react';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import characters, { Rick } from './data.js';
import styles from './App.module.css'; // Importar los estilos CSS
import rickAndMortyBg from './components/rick-2.jpg'; // Importar la imagen

function App() {
  return (
    <div className={styles['app-container']}>
      <img className={styles['app-background-image']} src={rickAndMortyBg} alt="Rick and Morty Background" />
      <div className={styles['content-container']}>
        <SearchBar onSearch={(characterID) => alert(characterID)} />
        <Cards characters={characters} />
        <Card
          id={Rick.id}
          name={Rick.name}
          status={Rick.status}
          species={Rick.species}
          gender={Rick.gender}
          origin={Rick.origin.name}
          image={Rick.image}
          onClose={() => alert('Emulamos que se cierra la card')}
        />
      </div>
    </div>
  );
}

export default App;



