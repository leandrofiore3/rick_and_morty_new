import React from 'react';
import Styles from './Favorites.module.css'
import { connect, useDispatch } from "react-redux";
import Card from '../Card/Card';
import { removeFavAction, orderCards, filterCards } from '../../redux/actions'; // Importa la acción de eliminar favoritos
import { useState } from 'react';

function Favorites({ favorites, removeFav }) {
  const existingFavorites = favorites.filter(fav => fav.isInFavorites);

  const [aux, setAux] = useState(false);

  
  const dispatch = useDispatch();

  const handleOrder = (e) => {
    setAux(!aux);
    dispatch(orderCards(e.target.value));
  };
  const handleFilter = (e) => {
    const value = e.target.value;
    if(value === 'all') {
      dispatch(filterCards('all'));
      return;
    }
    dispatch(filterCards(e.target.value));
  };


  return (
    <div className={Styles.container}>
      <div>
      <h1>Your Favorites</h1>
      </div>
      <div className={Styles.filter}>
      <select name="order" id="" onChange={handleOrder}>
        <option value="A">Ascending</option>
        <option value="D">Descending</option>
      </select>
      <select name="gender" id="" onChange={handleFilter}>
        <option value="all">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      </div>
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
