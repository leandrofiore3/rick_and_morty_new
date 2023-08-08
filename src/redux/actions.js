export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";

export const addFavAction = (character) => ({
  type: ADD_FAV,
  payload: character,
});

export const removeFavAction = (id) => ({
  type: REMOVE_FAV,
  payload: id,
});

