export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export const addFavAction = (character) => ({
  type: ADD_FAV,
  payload: character,
});

export const removeFavAction = (id) => ({
  type: REMOVE_FAV,
  payload: id,
});

export const filterCards = (gender) => ({
  type: FILTER,
  payload: gender,
});

export const orderCards = (orden) => ({
  type: ORDER,
  payload: orden,
});

