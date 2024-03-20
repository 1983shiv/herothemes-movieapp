
import { useReducer, useEffect, useState } from "react";
import { inventoryReducer, initialState } from "../reducers/inventoryReducer";
import { FETCH_ACTIONS } from "../actions";

import axios from "axios";
import HeaderPage from "./header";

const OldInventoryList = () => {

  const [state, dispatch] = useReducer(inventoryReducer, initialState);
  const [editMode, setEditMode] = useState(null); // Track edit mode for a post
  const [deletedPosts, setDeletedPosts] = useState([]); // Track deleted posts

  const { movies, loading, error} = state;
  
  useEffect(() => {
    dispatch({type: FETCH_ACTIONS.PROGRESS});
    const getItems = async () => {
      try{
        let response = await axios.get("http://localhost/gpes/wp-json/herothemes/v1/movies");
        if (response.status === 200) {
          console.log(response.data)
          dispatch({type: FETCH_ACTIONS.SUCCESS, data: response.data});
        }
      } catch(err){
        console.error(err);
        dispatch({type: FETCH_ACTIONS.ERROR, error: err.message})
      }
    }
    getItems();

  }, []);

  const handleEdit = (postId) => {
    setEditMode(postId);
  };

  const handleDelete = async (postId, dispatch) => {
    try {
      await axios.delete(`http://localhost/gpes/wp-json/herothemes/v1/movies/${postId}`);
      dispatch({ type: FETCH_ACTIONS.DELETE_SUCCESS, postId });
    } catch (err) {
      console.error(err);
    }
  };

  const isDeleted = (postId) => {
    return deletedPosts.includes(postId);
  };


  return (
    <div className="flex flex-col m-8 w-4/5">
      <HeaderPage />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul className="flex flex-col">
          {movies.map((movie) => (
            !isDeleted(movie.ID) && (
              <li className="flex flex-col p-2 my-2 bg-gray-200 border rounded-md" key={movie.ID}>
                <h1 className="text-4xl">{movie.post_title}</h1>
                <p className="my-2 text-xl">{movie.post_content}</p>
                {editMode === movie.id ? (
                  <div>
                    <input type="text" defaultValue={movie.post_title} />
                    <button onClick={() => setEditMode(null)}>Cancel</button>
                    <button>Save</button>
                  </div>
                ) : (
                  <p className="my-8 text-lg">
                    <button onClick={() => handleEdit(movie.ID)} className="px-8 bg-slate-100 mr-4">Edit</button>
                    <button onClick={() => handleDelete(movie.ID)} className="px-8 bg-slate-100">Delete</button>
                  </p>
                )}
              </li>
            )
          ))}
        </ul>
      )}
    </div>
  );
}

export default OldInventoryList