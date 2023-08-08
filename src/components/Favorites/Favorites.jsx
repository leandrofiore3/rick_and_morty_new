import React from 'react';
import Styles from './Favorites.module.css'
import { connect } from "react-redux";
import Card from '../Card/Card';

function Favorites({ favorites }) {
  return (
    <div className={Styles.container}>
      <h1>Your Favorites</h1>
      
        {favorites.map((fav) => (
          <Card
            key={fav.id}
            id={fav.id}
            name={fav.name}
            status={fav.status}
            species={fav.species}
            gender={fav.gender}
            origin={fav.origin}
            image={fav.image}
            
          />
        ))}
      
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    favorites: state.myFavorites,
  };
};

export default connect(mapStateToProps)(Favorites);