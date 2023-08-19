import React, { useState, useEffect } from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";

function Card(props) {
  const { id, name, status, species, gender, origin, image, onClose, addFav, removeFav, favorites } = props;

  const [isFav, setIsFav] = useState(false);

  // Función para manejar la acción de agregar o eliminar de favoritos
  const handleFavorite = () => {
    if (isFav) {
      removeFav(id);
    } else {
      addFav({ id, name, status, species, gender, origin, image, isInFavorites: true, onClose });
    }
  };

  useEffect(() => {
    favorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [favorites, id]);

  return (
    <div className={styles['card-container']}>
      <button className={styles['close-button']} onClick={() => onClose(id)}>X</button>
      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <h2>Status: {status}</h2>
      <h2>Species: {species}</h2>
      <h2>Gender: {gender}</h2>
      <h2>Origin: {origin}</h2>
      <img src={image} alt={name} />
      {/* Renderizado condicional del botón de favorito */}
      {
        isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )
      }
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
    addFav: (payload) => dispatch(addFav(payload)),
    removeFav: (payload) => dispatch(removeFav(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);







