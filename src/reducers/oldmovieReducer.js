import { FETCH_ACTIONS, USER, MYFAV } from "../actions"

const initialState = {
  movies: [],
  users: [{
    name : '',
    myfav: [{
      movie_id : '',
      movie_post_title: ''
    }]
  }],
  loading: false,
  error: null,
}

const movieReducer = (state, action) => {

  switch (action.type) {
    case FETCH_ACTIONS.PROGRESS: {
      return {
        ...state,
        loading: true,
      }
    }

    case FETCH_ACTIONS.SUCCESS: {
      return {
        ...state,
        loading: false,
        movies: action.data,
      }
    }

    case FETCH_ACTIONS.ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    }
    case FETCH_ACTIONS.DELETE_SUCCESS: {
      const updatedMovies = state.movies.filter((movie) => movie.id !== action.postId);
      return {
        ...state,
        movies: updatedMovies,
      };
    }

    case USER.ADD: {
      return {
        ...state,
        users: [...state.users, { name: action.userName, myfav: [] }],
      };
    }
    case MYFAV.ADD: {
      const updatedUsers = state.users.map(user => {
        if (user.name === action.userName) {
          return {
            ...user,
            myfav: [...user.myfav, { movie_id: action.movieId, movie_post_title: action.movieTitle }],
          };
        }
        return user;
      });
      return {
        ...state,
        users: updatedUsers,
      };
    }
    case MYFAV.REMOVE: {
      const updatedUsers = state.users.map(user => {
        if (user.name === action.userName) {
          return {
            ...user,
            myfav: user.myfav.filter(movie => movie.movie_id !== action.movieId),
          };
        }
        return user;
      });
      return {
        ...state,
        users: updatedUsers,
      };
    }

    default: {
      return state;
    } 
  }

}

export {movieReducer, initialState};