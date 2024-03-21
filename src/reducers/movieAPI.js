import axios from "axios";
const API_URL = import.meta.env.VITE_MOVIE_API_URL

export const fetchMovie = async () => {
    try{
      let response = await axios.get(API_URL);
      if (response.status === 200) {
        return response.data;
      }
    } catch(err){
      console.error(err);
    }
  }