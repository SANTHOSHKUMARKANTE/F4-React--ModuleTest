import React from "react";
import "./MoviesList.css";

const MoviesList = (props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item, i) => {
            return (
              <tr key={i+1000}>
                <td >{item.title}</td>
                <td >{item.genre}</td>
                <td >{item.year}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MoviesList;
