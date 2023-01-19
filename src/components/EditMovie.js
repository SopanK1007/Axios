import { useState } from "react";

const EditMovie = (props) => {
//   console.log("props", props);
  const [updatedTitle, setTitle] = useState(props.movie.title);
  const [updatedOpeningText, setOpeneingText] = useState(
    props.movie.openingText
  );
  const [updatedReleaseDate, setReleaseDate] = useState(
    props.movie.releaseDate
  );

  const handleClick = (event) => {
    event.preventDefault();
    const updatedMovie = {
      id: props.id,
      title: updatedTitle,
      openingText: updatedOpeningText,
      releaseDate: updatedReleaseDate,
    };
    // console.log("updatedMovie",updatedMovie)
    props.updateMovies(props.id, updatedMovie);
  };

  return (
    <form>
      <div>
        <label>Title:-</label>
        <input
          type={"text"}
          value={updatedTitle}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Opening Text:-</label>
        <textarea
          value={updatedOpeningText}
          onChange={(e) => {
            setOpeneingText(e.target.value);
          }}
        ></textarea>
      </div>
      <div>
        <label>Release Date:-</label>
        <input
          value={updatedReleaseDate}
          onChange={(e) => {
            setReleaseDate(e.target.value);
          }}
        />
      </div>
      <button style={{ backgroundColor: "red" }} onClick={handleClick}>Update</button>
    </form>
  );
};

export default EditMovie;
