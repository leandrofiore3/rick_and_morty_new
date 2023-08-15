import {createStore} from 'redux';
import rootReducer from './reducer';


const store = createStore (
  rootReducer, 
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  //applyMiddleware(thunkMiddleware)
)

export default store;
