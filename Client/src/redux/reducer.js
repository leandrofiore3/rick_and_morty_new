import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";


const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return { ...state, myFavorites: action.payload, allCharacters: action.payload };
      case REMOVE_FAV:
        return { ...state, myFavorites: action.payload };
      case FILTER:
        const filteredCharacters = action.payload === "all"
          ? state.allCharacters // Si se selecciona "All Characters", no aplicamos filtro
          : state.allCharacters.filter((character) => character.gender === action.payload);
        return {
          ...state,
          myFavorites: filteredCharacters,
        };
    case ORDER:
      const orderedCharacters = [...state.allCharacters];
      if (action.payload === "A") {
        orderedCharacters.sort((a, b) => a.id - b.id);
      } else if (action.payload === "D") {
        orderedCharacters.sort((a, b) => b.id - a.id);
      }
      return {
        ...state,
        myFavorites: orderedCharacters,
      };
    default:
      return state;
  }
};

export default rootReducer;

