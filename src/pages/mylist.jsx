import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { selectMovie, fetchMovieAsync, selectMovieStatus } from "../reducers/movieReducer";
import { selectUsers, updateUsers, fetchUserAsync, selectUserstatus } from "../reducers/userReducer";
import { removeFavorite, selectMylist } from "../reducers/mylistReducer";
import { useState } from "react";


const MyList = () => {
  const { movies } = useSelector(selectMovie);
  const { users } = useSelector(selectUsers);
  const { mylist } = useSelector(selectMylist);
  const status = useSelector(selectMovieStatus)
  const userstatus = useSelector(selectUserstatus)
  const dispatch = useDispatch();
  const [showmore, setShowmore] = useState(false)

  // Filter out movies that exist in the mylist
  const filteredMovies = movies.filter(movie => mylist.some(item => item.movie_id === movie.ID));
  console.log('filter', filteredMovies);
  
  const handleRemove = (movieId, userName) => {
    const isFav = mylist.some(fav => fav.movie_id === movieId);
    if (isFav) {
      dispatch(removeFavorite({ movie_id: movieId }));
    }
  };

  const handleshowmore = () => {
    return setShowmore(!showmore);
  }

  return (
    <>
    {(users && typeof users === 'object' && 'name' in users ) ? 
    <div className="flex flex-col m-8 w-4/5">
      {status === 'loading' ? (
        <p>Loading...</p>
      ) : (
        <ul className="flex flex-col">
          {filteredMovies.map((movie) => (
            <>
            <li className="flex flex-row align-middle justify-between my-2 bg-gray-200 border rounded-md" key={movie.ID}>
              <h1 className="flex ml-2 text-4xl items-center">{movie.post_title}</h1>
              <p className="my-8 mr-4 text-lg flex items-center">
                {userstatus === 'loading' ? '' : (
                  <>
                  <button className="flex px-4 py-1 rounded-md bg-gray-100 mx-2" onClick={() => handleRemove(movie.ID, users.name)}>
                    Remove
                  </button>
                  <button className="flex px-4 py-1 rounded-md bg-gray-100 mx-2"onClick={() => handleshowmore()}>
                  {!showmore ? 'Show detail': "Hide details"}
                </button>
                </>
                )}
              </p>
            </li>
            {showmore && (
              <p className="my-2 text-xl">{movie.post_content}</p>
              )}
            </>
          ))}
        </ul>
        
      )}
    </div> : <span className="flex justify-center items-center mt-8 align-middle text-4xl">Please Logged In to see the Movie list</span>
    }
    </>
  )
}

export default MyList