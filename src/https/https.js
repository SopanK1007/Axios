import axios from "axios";

const BACKEDN_URL = "https://react--axios-default-rtdb.firebaseio.com";

export const getMovieList = async () => {
  //   const response = await axios.get("https://swapi.dev/api/films");
  //   const response = await axios.get(
  //     "https://react-app-feeed-default-rtdb.firebaseio.com/movies.json"
  //   );

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
  //TODO: Log the response and check what you are getting.
};

export const deleteMovie = (id) => {
  axios.delete(BACKEDN_URL + `/movies/${id}.json`);
};
