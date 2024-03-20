import { useSelector, useDispatch } from "react-redux";
import { selectMovie, fetchMovieAsync, selectMovieStatus } from "../reducers/movieReducer";
import { selectUsers, updateUsers, fetchUserAsync, selectUserstatus } from "../reducers/userReducer";
import { addFavorite, removeFavorite, selectMylist } from "../reducers/mylistReducer";
import { useEffect, useState } from "react";

import { FaHeart, FaRegHeart } from 'react-icons/fa';

const MovieList = () => {
  const { movies } = useSelector(selectMovie);
  const { users } = useSelector(selectUsers);
  const { mylist } = useSelector(selectMylist);
  const status = useSelector(selectMovieStatus)
  const userstatus = useSelector(selectUserstatus)
  const dispatch = useDispatch();
  

  useEffect(() => {
    const getWpUser = async () => {
      try {
        dispatch(fetchUserAsync());
      } catch (error) {
        console.error(error)
      }
    }
    const getmovies = async () => {
      try {
        dispatch(fetchMovieAsync());
      } catch (err) {
        console.error(err);
      }
    }
    getWpUser();
    getmovies();

  }, []);


  const handleAddRemoveFav = (movieId, userName) => {
    const isFav = mylist.some(fav => fav.movie_id === movieId);
    if (!isFav) {
      dispatch(addFavorite({ movie_id: movieId, movie_post_title: 'Movie Title', user: userName }));
    } else {
      dispatch(removeFavorite({ movie_id: movieId }));
    }
  };


  return (
    <div className="flex flex-col m-8 w-4/5">
      {status === 'loading' ? (
        <p>Loading...</p>
      ) : (
        <ul className="flex flex-col">
          {movies.map((movie) => (
            <li className="flex flex-row justify-between p-2 my-2 bg-gray-200 border rounded-md" key={movie.ID}>
              <h1 className="text-4xl">{movie.post_title}</h1>
              {/* <p className="my-2 text-xl">{movie.post_content}</p> */}
              <p className="my-8 text-lg flex items-center">
                {userstatus === 'loading' ? '' : (
                  <span onClick={() => handleAddRemoveFav(movie.ID, users.name)}>
                    {(mylist.some(fav => fav.movie_id === movie.ID)) ? (
                      <FaHeart className="text-red-500 cursor-pointer" />
                    ) : (
                      <FaRegHeart className="text-red-500 cursor-pointer" />
                    )}
                  </span>
                )}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MovieList