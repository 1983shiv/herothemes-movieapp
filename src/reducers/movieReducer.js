import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {fetchMovie} from "./movieAPI"

const initialState = {
  movies: [],
  loading: false,
  error: null,
  status: ''
};


export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
      updateMovies: (state, action) => {
        state.movies = action.payload;
      }
    },
    extraReducers: (builder) => {
        builder.
          addCase(fetchMovieAsync.pending, (state) => {
            state.status ='loading';
          })
          .addCase(fetchMovieAsync.fulfilled, (state, action) => {
            state.status = 'complete';
            state.movies = action.payload;
          });
      }
  });
  

  export const fetchMovieAsync = createAsyncThunk(
    'movie/fetchMovie',
    async () => {
      const response = await fetchMovie();
      return response;
    }
  );



  export const selectMovie = state => state.movies;
  export const selectMovieStatus = state => state.status;
  
  export const { updateMovies } = movieSlice.actions;
  export default movieSlice.reducer;