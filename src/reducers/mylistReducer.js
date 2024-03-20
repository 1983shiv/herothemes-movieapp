import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mylist: [],
};

export const mylistSlice = createSlice({
  name: "mylist",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.mylist = [...state.mylist, action.payload];
      localStorage.setItem("mylist", JSON.stringify(state.mylist));
    },
    removeFavorite: (state, action) => {
      state.mylist = state.mylist.filter(
        (movie) => movie.movie_id !== action.payload.movie_id
      );
      localStorage.setItem("mylist", JSON.stringify(state.mylist));
    },
  },
});


// export const mylistSlice = createSlice({
//   name: "mylist",
//   initialState,
//   reducers: {
//     addFavorite: (state, action) => {
//       return {
//         ...state,
//         mylist: [...state.mylist, action.payload],
//       };
//     },
//     removeFavorite: (state, action) => {
//       state.mylist = state.mylist.filter(
//         (movie) => movie.movie_id !== action.payload.movie_id
//       );
//     },
//   },
// });


export const selectMylist = (state) => state.mylist;


export const { addFavorite, removeFavorite } = mylistSlice.actions;
export default mylistSlice.reducer;

