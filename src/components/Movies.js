import React from "react";
import { movies } from "../data";

function Movies() {
  
const movieList = movies.map((movie)=>{
  return  (
    <div>
    {movie.title}
    <ul>
    {movie.genres.map((genre)=>(
      <li key={genre}>{genre}</li>
  ))}
    </ul>
    </div>
  )
})

  return (
    <section id="movies">
      <h1>Movies Page</h1>
     <div>{movieList}</div>

    </section>
  )
}

export default Movies;
