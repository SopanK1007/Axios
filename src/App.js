import React, { useState, useEffect } from "react";
import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";
import {
  deleteMovie,
  getMovieList,
  postMovies,
  updateMovie1,
} from "./https/https";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Called from use Effect");
    fetchMoviesHandler();
  }, []);

  const fetchMoviesHandler = async (url) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await getMovieList();
      // console.log("response is: ", response);

      const transformedMovies = [];
      for (const key in response.data) {
        const movie = {
          id: key,
          title: response.data[key].title,
          openingText: response.data[key].openingText,
          releaseDate: response.data[key].releaseDate,
        };
        transformedMovies.push(movie);
      }
      console.log("transformedMovies", transformedMovies);

      setMovies(transformedMovies);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("Error is: ", error);
      setError(error.message);
    }
  };

  const addMovieHandler = (movie) => {
    // console.log(movie);
    postMovies(movie);
    fetchMoviesHandler();
  };

  const updateMovies = (id, updatedMovie) => {
    // console.log("id", id);
    // console.log("updatedMovie", updatedMovie);
    updateMovie1(id, updatedMovie);
  };

  const deleteMOVIE = (id) => {
    deleteMovie(id);
  };

  let content = <p>Found no movies</p>;

  if (movies.length > 0) {
    content = (
      <MoviesList
        movies={movies}
        updateMovies={updateMovies}
        deleteMOVIE={deleteMOVIE}
        fetchMoviesHandler={fetchMoviesHandler}
      />
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...!</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie
          onAddMovie={addMovieHandler}
          fetchMoviesHandler={fetchMoviesHandler}
        />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
};

export default App;
