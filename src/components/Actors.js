import React from "react";
import { actors } from "../data";

function Actors() {

const actorList = actors.map((actor)=>{
  return (
    <div>
      {actor.name}
      <ul>
        {actor.movies.map((movie)=>(
          <li key = {movie}>{movie}</li>
        ))}
      </ul>
    </div>
  )
})


  return (
    <section id='actors'>
      <h1>Actors Page</h1>
      <div> {actorList}</div>
    </section>

  )
}

export default Actors;
