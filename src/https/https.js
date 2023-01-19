import axios from "axios";

const BACKEDN_URL = "https://react--axios-default-rtdb.firebaseio.com";

export const getMovieList = async () => {
  try {
    const response = await axios.get(BACKEDN_URL + "/movies.json");
    return response;
  } catch (error) {}
};

export const postMovies = async (movieData) => {
  try {
    const response = await axios.post(BACKEDN_URL + "/movies.json", movieData);
    console.log("reponse of post request: ", response.data.name);
  } catch (error) {}
};

export const updateMovie1 = (id, updatedMovieData) => {
  axios.put(BACKEDN_URL + `/movies/${id}.json`, updatedMovieData);
};

export const updateMovie2 = async (id, updatedMovieData) => {
  const response = await axios.put(
    BACKEDN_URL + `/movies/${id}.json`,
    updatedMovieData
  );
};

export const deleteMovie = (id) => {
  axios.delete(BACKEDN_URL + `/movies/${id}.json`);
};
