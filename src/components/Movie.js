import React, { useState } from "react";
import EditMovie from "./EditMovie";

import classes from "./Movie.module.css";

const Movie = (props) => {
  // console.log("props", props)
  const [edit, setEdit] = useState(false);
  const handleClick = () => {
    setEdit(true);
  };

  const handleDelete = () => {
    props.deleteMOVIE(props.id);
    props.fetchMoviesHandler();
  };
  return (
    <li className={classes.movie}>
      {edit && (
        <EditMovie
          arr={props.arr}
          id={props.id}
          movie={props.movie}
          updateMovies={props.updateMovies}
          fetchMoviesHandler={props.fetchMoviesHandler}
        />
      )}
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button style={{ backgroundColor: "red" }} onClick={handleClick}>
        Edit
      </button>
      <button style={{ backgroundColor: "red" }} onClick={handleDelete}>
        DELETE
      </button>
    </li>
  );
};

export default Movie;
