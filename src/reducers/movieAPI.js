import axios from "axios";

export const fetchMovie = async () => {
    try{
      let response = await axios.get("http://localhost/gpes/wp-json/herothemes/v1/movies");
      if (response.status === 200) {
        return response.data;
      }
    } catch(err){
      console.error(err);
    }
  }