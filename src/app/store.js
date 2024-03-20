import { configureStore } from '@reduxjs/toolkit';
import movieReducer from "../reducers/movieReducer";
import userReducer from "../reducers/userReducer";
import mylistReducer from '../reducers/mylistReducer';


// Middleware to save Redux state to local storage
const saveStateMiddleware = store => next => action => {
  const result = next(action);
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
  return result;
};

// Load initial state from local storage
const initialState = JSON.parse(localStorage.getItem('reduxState')) || {};

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    users: userReducer,
    mylist: mylistReducer
  },
  // Load initial state from local storage
  preloadedState: initialState, 
  // Apply saveStateMiddleware
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(saveStateMiddleware), 
  
});


// export const store = configureStore({
//   reducer: {
//     movies: movieReducer,
//     users: userReducer,
//     mylist: mylistReducer
//   },
// });
