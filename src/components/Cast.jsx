import React from "react";
import "../css/cast.css"
export default function Cast({ actor }) {
  return (
    <>
      <div className="cast1">
        <img
          src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
          alt={actor.name}
        />
        <div className="cast1-1">
          <h1>{actor.name?.split("-")[0]}</h1>
          <p>{actor.character?.split("-")[0]}</p>
        </div>
      </div>
    </>
  );
}
