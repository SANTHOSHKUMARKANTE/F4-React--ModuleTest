import React from "react";
import "./GenreFilter.css";
import Button from "../Button/Button";

const GenreFilter = (props) => {
  const handleGenreClick = (genre) => {
    console.log(`Filtering by ${genre}`);
  };

  return (
    <div>
      <div className="btns">
        <h1>Filter By Genre</h1>
        {props.genre_data.map((item, i) => {
          return <Button key={i} genre={item} onClick={handleGenreClick} />;
        })}
      </div>
    </div>
  );
};

export default GenreFilter;
