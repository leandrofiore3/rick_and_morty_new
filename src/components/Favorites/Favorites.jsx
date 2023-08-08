import React from 'react';
import Styles from './Favorites.module.css'
import { connect } from "react-redux";
import Card from '../Card/Card';
import { removeFavAction } from '../../redux/actions'; // Importa la acción de eliminar favoritos

function Favorites({ favorites, removeFav }) {
  const existingFavorites = favorites.filter(fav => fav.isInFavorites);

  return (
    <div className={Styles.container}>
      <h1>Your Favorites</h1>
      {existingFavorites.map((fav) => (
        <Card
          key={fav.id}
          id={fav.id}
          name={fav.name}
          status={fav.status}
          species={fav.species}
          gender={fav.gender}
          origin={fav.origin}
          image={fav.image}
          onClose={() => removeFav(fav.id)} // Pasar la función removeFav con el ID del personaje
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

const mapDispatchToProps = (dispatch) => {
  return {
    removeFav: (id) => dispatch(removeFavAction(id)), // Agregar la acción de eliminar favoritos
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
