import React from "react";
import { directors } from "../data";

function Directors() {
  const directorList = directors.map((director) => {
    return (
      <div>
        {director.name}
        <ul>
          {director.movies.map((movie) => (
            <li key={movie}>{movie}</li>
          ))}
        </ul>
      </div>
    );
  });

  return (
    <section id="diretors">
      <h1>Directors Page</h1>
      <div> {directorList} </div>
    </section>
  );
}

export default Directors;
