const addFav = 'ADD_FAV';
const removeFav = 'REMOVE_FAV';

export const addFavAction = (character) => ({
  type: addFav,
  payload: character,
});

export const removeFavAction = (id) => ({
  type: removeFav,
  payload: id,
});

