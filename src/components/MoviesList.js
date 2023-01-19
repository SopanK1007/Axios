import React from "react";

import Movie from "./Movie";
import classes from "./MoviesList.module.css";

const MovieList = (props) => {
  // console.log("props", props)
  return (
    <ul className={classes["movies-list"]}>
      {props.movies.map((movie, index, arr) => (
        <Movie
          key={movie.id}
          arr={arr}
          movie={movie}
          id={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
          updateMovies={props.updateMovies}
          deleteMOVIE={props.deleteMOVIE}
          fetchMoviesHandler={props.fetchMoviesHandler}
        />
      ))}
    </ul>
  );
};

export default MovieList;
